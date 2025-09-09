"use client";

// Define the project locations with enhanced data
const projectLocations = [
  { name: 'The Meadows', projects: 15, area: 'Emirates Living', type: 'Villa Community' },
  { name: 'The Springs', projects: 12, area: 'Emirates Living', type: 'Villa Community' },
  { name: 'Damac Hills', projects: 8, area: 'Southern Dubai', type: 'Golf Community' },
  { name: 'Arabian Ranches', projects: 18, area: 'Sheikh Mohammed Bin Zayed Road', type: 'Gated Community' },
  { name: 'Dubai Hills', projects: 22, area: 'Al Khail Road', type: 'Mixed Development' },
  { name: 'JVT', projects: 14, area: 'Sheikh Zayed Road', type: 'Modern Community' },
  { name: 'The Lakes', projects: 10, area: 'Emirates Living', type: 'Lakeside Villas' },
  { name: 'Palm Jumeirah', projects: 7, area: 'Coastal Dubai', type: 'Luxury Island' },
  { name: 'Mudon', projects: 9, area: 'Al Khail Road', type: 'Family Community' },
  { name: 'Mira', projects: 6, area: 'Reem Community', type: 'Affordable Housing' },
  { name: 'Victory Heights', projects: 11, area: 'Sports City', type: 'Golf Community' },
  { name: 'Jumeirah Park', projects: 13, area: 'Al Khail Road', type: 'Family Community' },
];

const ProjectLocations = () => {
  const totalProjects = projectLocations.reduce((sum, loc) => sum + loc.projects, 0);
  const communities = projectLocations.length;

  return (
    <div className="projects-locations-container">
      <div className="locations-header">
        <h2>Our Project Locations Across Dubai</h2>
        <p>Discover the communities where RanasTech has delivered exceptional interior design and maintenance services</p>
      </div>
      
      <div className="locations-grid">
        {projectLocations.map((location, index) => (
          <div key={index} className="location-card">
            <div className="location-header">
              <h3>{location.name}</h3>
              <span className="location-area">{location.area}</span>
            </div>
            <div className="location-details">
              <div className="location-type">{location.type}</div>
              <div className="projects-count">
                <span className="count-number">{location.projects}</span>
                <span className="count-label">completed projects</span>
              </div>
            </div>
            <div className="location-services">
              <span>Interior Design</span>
              <span>Maintenance</span>
              <span>Fit-out</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="locations-stats">
        <div className="stat-item">
          <span className="stat-number">{communities}</span>
          <span className="stat-label">Communities Served</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{totalProjects}+</span>
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

export default ProjectLocations;