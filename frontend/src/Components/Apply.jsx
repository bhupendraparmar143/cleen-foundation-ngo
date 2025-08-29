
import "../styles/Apply.css"
import backgroundImg from "../assets/Teacher.png";
import axios from "axios";

import API_URL from "../assets/API_URL"
import { useState } from "react";

const Apply = () => {
  const [applyData, setApplyData] = useState({
    fullName: "",
    qualification: "",
    number: "",
    experience: "",
    parentsName: "",
    address: "",
    email: "",
    adharNumber: "",
  });
  const [applyFiles, setApplyFiles] = useState({
    adharFile: null,
    qualificationFile: null,
    resume: null,
    photo: null
  });
  const applyInputHandle = (event) => {
   setApplyData({...applyData, [event.target.name]: event.target.value})
  }
  const applyFileInputHandle = (event) => {
   setApplyFiles({...applyFiles, [event.target.name]: event.target.files[0]})
  }

  async function handleSubmit(event){
    event.preventDefault();
// console.log(applyData)
    // const res = await axios.get(`${API_URL}/api/apply`)

    const formDataToSend = new FormData();
    
    formDataToSend.append("fullName", applyData.fullName);
    formDataToSend.append("qualification", applyData.qualification);
    formDataToSend.append("number", applyData.number);
    formDataToSend.append("experience", applyData.experience);
    formDataToSend.append("parentsName", applyData.parentsName);
    formDataToSend.append("address", applyData.address);
    formDataToSend.append("email", applyData.email);
    formDataToSend.append("adharNumber", applyData.adharNumber);
    formDataToSend.append("adharFile", applyFiles.adharFile);
    formDataToSend.append("qualificationFile", applyFiles.qualificationFile);
    formDataToSend.append("resume", applyFiles.resume);
    formDataToSend.append("photo", applyFiles.photo);

    formDataToSend.forEach((value, key)=>{

      console.log(key ,value)
    })
    alert("Form submitted successfully!");
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Overlay div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.44)", // lighter overlay
          zIndex: 1,
        }}
      />
     <div className="teacher-form-container">
        <h2>Apply as a Teacher</h2>
        <form className="teacher-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input onChange={applyInputHandle} name="fullName" type="text" placeholder="Full Name" />
            <input type="text" onChange={applyInputHandle} name="qualification" placeholder="Qualification" />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Mobile Number" onChange={applyInputHandle} name="number" />
            <input type="text" placeholder="Teaching Experience" onChange={applyInputHandle} name="experience" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Father's/Mother's Name" onChange={applyInputHandle} name="parentsName" />
            <input type="text" placeholder="Preferred Block/Village" onChange={applyInputHandle} name="address" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email ID" onChange={applyInputHandle} name="email" />
            <input type="text" placeholder="Aadhar Number" onChange={applyInputHandle} name="adharNumber" />
          </div>
          <div className="form-group file-group">
            <label>Upload Aadhar</label>
            <input type="file" onChange={applyFileInputHandle} name="adharFile"/>
            <label>Upload Qualification Document</label>
            <input type="file" onChange={applyFileInputHandle} name="qualificationFile" />
          </div>
          <div className="form-group file-group">
            <label>Upload Resume</label>
            <input type="file" onChange={applyFileInputHandle} name="resume" />
            <label>Passport Size Photo</label>
            <input type="file" onChange={applyFileInputHandle} name="photo" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Apply
