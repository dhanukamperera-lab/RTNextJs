"use client";

// All available services from RanasTech
const allServices = [
  "AC Services",
  "Maintenance", 
  "MEP Services",
  "House Fit-Out",
  "Painting",
  "Gypsum Installation",
  "Carpentry",
  "Tiling & Flooring",
  "Handyman Services",
  "Cleaning Services",
  "Outdoor Maintenance"
];

// Function to get random services for each location
const getRandomServices = (locationIndex: number) => {
  // Use location index as seed for consistent randomization
  const seed = locationIndex + 1;
  const shuffled = [...allServices].sort(() => 0.5 - Math.sin(seed * 1000));
  // Return 2-3 random services
  const count = 2 + (seed % 2); // Will give either 2 or 3 services
  return shuffled.slice(0, count);
};

// Define the project locations with enhanced data
const projectLocations = [
  { name: "The Meadows", area: "Emirates Living", type: "Villa Community" },
  { name: "The Springs", area: "Emirates Living", type: "Villa Community" },
  { name: "Damac Hills", area: "Southern Dubai", type: "Golf Community" },
  {
    name: "Arabian Ranches",
    area: "Sheikh Mohammed Bin Zayed Road",
    type: "Gated Community",
  },
  { name: "Dubai Hills", area: "Al Khail Road", type: "Mixed Development" },
  { name: "JVT", area: "Sheikh Zayed Road", type: "Modern Community" },
  { name: "The Lakes", area: "Emirates  Living", type: "Lakeside Villas" },
  { name: "Palm Jumeirah", area: "Coastal Dubai", type: "Luxury Island" },
  { name: "Mudon", area: "Al Khail Road", type: "Family Community" },
  { name: "Mira", area: "Reem Community", type: "Affordable Housing" },
  { name: "Victory Heights", area: "Sports City", type: "Golf Community" },
  { name: "Jumeirah Park", area: "Al Khail Road", type: "Family Community" },
];

const ProjectLocations = () => {
  const communities = projectLocations.length;

  return (
    <div className="projects-locations-container">
      <div className="locations-header">
        <h2>Our Project Locations Across Dubai</h2>
        <p>
          Discover the communities where RanasTech has delivered exceptional
          interior design and maintenance services
        </p>
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
            </div>
            <div className="location-services">
              {getRandomServices(index).map((service, serviceIndex) => (
                <span key={serviceIndex}>{service}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="locations-stats">
        <div className="stat-item">
          <span className="stat-number">{communities}+</span>
          <span className="stat-label">Communities Served</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">25+</span>
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
