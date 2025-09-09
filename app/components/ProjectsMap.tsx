"use client";
import { useEffect, useState } from 'react';

// Define the project locations
const projectLocations = [
  { name: 'The Meadows', coordinates: [25.0620, 55.2080] as [number, number], projects: 15 },
  { name: 'The Springs', coordinates: [25.0680, 55.2100] as [number, number], projects: 12 },
  { name: 'Damac Hills', coordinates: [25.0350, 55.2200] as [number, number], projects: 8 },
  { name: 'Arabian Ranches', coordinates: [25.0550, 55.2650] as [number, number], projects: 18 },
  { name: 'Dubai Hills', coordinates: [25.1080, 55.2450] as [number, number], projects: 22 },
  { name: 'JVT', coordinates: [25.0420, 55.1580] as [number, number], projects: 14 },
  { name: 'The Lakes', coordinates: [25.0650, 55.2150] as [number, number], projects: 10 },
  { name: 'Palm Jumeirah', coordinates: [25.1124, 55.1390] as [number, number], projects: 7 },
  { name: 'Mudon', coordinates: [25.0180, 55.2550] as [number, number], projects: 9 },
  { name: 'Mira', coordinates: [25.0200, 55.2400] as [number, number], projects: 6 },
  { name: 'Victory Heights', coordinates: [25.0380, 55.1750] as [number, number], projects: 11 },
  { name: 'Jumeirah Park', coordinates: [25.0580, 55.1820] as [number, number], projects: 13 },
];

const ProjectsMap = () => {
  const [mounted, setMounted] = useState(false);
  const [mapComponents, setMapComponents] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    
    const loadMapComponents = async () => {
      try {
        const [leaflet, reactLeaflet] = await Promise.all([
          import('leaflet'),
          import('react-leaflet')
        ]);
        
        // Fix default marker icons
        const L = leaflet;
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
        
        setMapComponents({
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
        });
      } catch (error) {
        console.error('Failed to load map components:', error);
      }
    };

    if (mounted) {
      loadMapComponents();
    }
  }, [mounted]);

  if (!mounted || !mapComponents) {
    return (
      <div className="map-loading">
        <div className="loading-spinner">Loading Interactive Map...</div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = mapComponents;
  const dubaiCenter: [number, number] = [25.0657, 55.2090];

  return (
    <div className="projects-map-container">
      <div className="map-header">
        <h2>Our Project Locations Across Dubai</h2>
        <p>Discover the communities where RanasTech has delivered exceptional interior design and maintenance services</p>
      </div>
      
      <div className="map-wrapper">
        <MapContainer
          center={dubaiCenter}
          zoom={11}
          style={{ height: '500px', width: '100%' }}
          className="leaflet-map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {projectLocations.map((location, index) => (
            <Marker key={index} position={location.coordinates}>
              <Popup>
                <div className="map-popup">
                  <h3>{location.name}</h3>
                  <p><strong>{location.projects} completed projects</strong></p>
                  <p>Interior design • Maintenance • Fit-out services</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="map-stats">
        <div className="stat-item">
          <span className="stat-number">{projectLocations.length}</span>
          <span className="stat-label">Communities Served</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{projectLocations.reduce((sum, loc) => sum + loc.projects, 0)}+</span>
          <span className="stat-label">Total Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Years Experience</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMap;