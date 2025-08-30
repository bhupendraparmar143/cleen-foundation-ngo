import '../styles/Employee.css'

import HeaderImage from '../../public/assets/HeaderImage.png';

const employees = [
  {
    id: 101,
    name: "John Doe",
    designation: "Teacher",
    department: "Education",
    location: "New York"
  },
  {
    id: 102,
    name: "Jane Smith",
    designation: "Multi-Tasking Staff",
    department: "Support",
    location: "Los Angeles"
  },
  {
    id: 103,
    name: "Emily Johnson",
    designation: "Volunteer",
    department: "Community Service",
    location: "Chicago"
  }
];

const Employee = () => {
  return (
    <div className="directory-wrapper">
      <div className="header">
  <h1>Employee Directory</h1>
  <div className="search-area">
    <input type="text" placeholder="Search employees..." className="search-bar" />
    <button className="search-btn">Search</button>
  </div>
</div>

      <div className="cards-container">
        {employees.map(emp => (
          <div className="emp-card" key={emp.id}>
            <div className="emp-info">
              <h2>{emp.name}</h2>
              <p><strong>ID:</strong> {emp.id}</p>
              <p><strong>Designation:</strong> {emp.designation}</p>
              <p><strong>Department:</strong> {emp.department}</p>
              <p><strong>Location:</strong> {emp.location}</p>
            </div>
            <button className="details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;