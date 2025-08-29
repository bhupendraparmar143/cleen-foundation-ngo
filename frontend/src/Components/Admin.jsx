import { NavLink, Outlet } from "react-router-dom";

import '../styles/Admin.css';

export const Employees = () => {
  return (
    <div className="employee-container">
      <h3>New Applications* (Showing 2 of 10)</h3>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Teacher</td>
              <td><button className="btn-view">View</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>Multi-Tasking Staff</td>
              <td><button className="btn-view">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="btn-primary">View All Applications</button>

      <h3 style={{ marginTop: "3rem" }}>Current Employees</h3>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>EmpId</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>John Doe</td>
              <td>Teacher</td>
              <td>Education</td>
              <td>New York</td>
              <td><button className="btn-view-details">View Details</button></td>
            </tr>
            <tr>
              <td>102</td>
              <td>Jane Smith</td>
              <td>Multi-Tasking Staff</td>
              <td>Support</td>
              <td>Los Angeles</td>
              <td><button className="btn-view-details">View Details</button></td>
            </tr>
            <tr>
              <td>103</td>
              <td>Emily Johnson</td>
              <td>Volunteer</td>
              <td>Community Service</td>
              <td>Chicago</td>
              <td><button className="btn-view-details">View Details</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="btn-primary">View All Employees</button>
    </div>
  );
};

export const Reports = () => {
  return (
    <div className="reports-container">
      <h1 className="coming-soon-heading">Reports Coming Soon</h1>
      <p className="coming-soon-text">We're working hard to bring you comprehensive reports!</p>
    </div>
  );
};

export const Blogs = () => {
  return (
    <div className="blogs-container">
      <button className="btn-add-new">Add New Blog Post</button>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Published on</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Clean Foundation's Impact</td>
              <td>John Doe</td>
              <td>10th September 2024</td>
              <td><button className="btn-edit">Edit</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Community Clean-Up Day</td>
              <td>Jane Smith</td>
              <td>1st January 2025</td>
              <td><button className="btn-edit">Edit</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Volunteer Stories</td>
              <td>Emily Johnson</td>
              <td>3rd March 2025</td>
              <td><button className="btn-edit">Edit</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Fundraising Success</td>
              <td>Michael Brown</td>
              <td>19 August 2099</td>
              <td><button className="btn-edit">Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Notify = () => {
  return (
    <div className="notify-container">
      <h3 className="form-heading">Send New Notification</h3>
      <form action="">
        <label htmlFor="title">Title*</label>
        <input type="text" id="title" name="title" required placeholder="Enter notification title" />

        <label htmlFor="desc">Description*</label>
        <textarea id="desc" name="desc" rows="4" required placeholder="Enter notification description"></textarea>

        <label htmlFor="attach-img">Upload Image (Optional)</label>
        <input type="file" id="attach-img" name="attach-img" />

        <button type="submit" className="btn-publish">Publish Notification</button>
      </form>
    </div>
  );
};

const Admin = () => {
  return (
    <div className="admin-layout">
      <h1>Admin Dashboard</h1>
      <nav>
        <NavLink to="employees">Employees</NavLink>
        <NavLink to="reports">Reports</NavLink>
        <NavLink to="blogs">Blogs</NavLink>
        <NavLink to="notify">Notify</NavLink>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;