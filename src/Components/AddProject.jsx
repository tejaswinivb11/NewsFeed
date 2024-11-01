import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddProject.css';
import { useNavigate, useParams } from 'react-router-dom';

const AddProject = () => {
  const navigate = useNavigate();
  const { districtName, departmentName } = useParams(); // Get district and department from URL

  // State to store form data
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    agencyName: '',
    agencyDetails: '',
    projectLicense: null,
    projectDocument: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('prjName', formData.projectName);
    data.append('prjDescription', formData.projectDescription);
    data.append('prjAgency', formData.agencyName);
    data.append('prjAgencyDetails', formData.agencyDetails);
    data.append('prjLicense', formData.projectLicense);
    data.append('prjDocument', formData.projectDocument);
    data.append('district', districtName); // Add district to FormData
    data.append('department', departmentName); // Add department to FormData

    try {
      await axios.post('http://localhost:8000/api/ongoing-projects/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate(/${districtName}/${departmentName}/projects); // Redirect to the project list page after successful submission
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className="add-project-container">
      <h1 className="main-heading">Government of Karnataka</h1>
      <h2 className="sub-heading">District Dashboard</h2>
      <h3 className="project-title">Add Project</h3>

      <button className="back-button" onClick={() => navigate(/${districtName}/${departmentName}/projects)}>
        Back to Projects
      </button>

      <form className="add-project-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="projectName">Enter Project Name:</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              placeholder="Project Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescription">Enter Project Description:</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              placeholder="Project Description"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="agencyName">Enter Agency Name:</label>
            <input
              type="text"
              id="agencyName"
              name="agencyName"
              value={formData.agencyName}
              onChange={handleInputChange}
              placeholder="Agency Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="agencyDetails">Enter Agency Details:</label>
            <input
              type="text"
              id="agencyDetails"
              name="agencyDetails"
              value={formData.agencyDetails}
              onChange={handleInputChange}
              placeholder="Agency Details"
              required
            />
          </div>
        </div>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="district">District:</label>
            <input
              type="text"
              id="district"
              name="district"
              value={districtName} // Use district from URL
              readOnly // Make it non-editable
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={departmentName} // Use department from URL
              readOnly // Make it non-editable
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectLicense">Attach the License:</label>
            <input type="file" id="projectLicense" name="projectLicense" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="projectDocument">Attach the Project Document:</label>
            <input type="file" id="projectDocument" name="projectDocument" onChange={handleFileChange} />
          </div>
        </div>
        <div className="form-group submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;