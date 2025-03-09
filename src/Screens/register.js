import React, { useState } from "react";

export default function Register() {
  const [userType, setUserType] = useState(""); // "patient" or "doctor"

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4", // Soft background color
    },
    heading: {
      color: "#333",
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    buttonContainer: {
      display: "flex",
      gap: "20px",
      marginBottom: "20px",
    },
    selectButton: {
      padding: "12px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "0.3s",
      minWidth: "200px",
      textAlign: "center",
    },
    formContainer: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "500px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      display: "block",
    },
    label: {
      fontWeight: "bold",
      marginTop: "10px",
      display: "block",
    },
    button: {
      padding: "10px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s",
      width: "100%",
      marginTop: "15px",
    },
    buttonHover: {
      backgroundColor: "#218838",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      display: "block",
      textAlign: "center",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>

      {/* Ask user type first */}
      {!userType && (
        <div style={styles.buttonContainer}>
          <button style={styles.selectButton} onClick={() => setUserType("patient")}>
            Register as Patient
          </button>
          <button style={styles.selectButton} onClick={() => setUserType("doctor")}>
            Register as Doctor
          </button>
        </div>
      )}

      {/* Patient Registration Form */}
      {userType === "patient" && (
        <div style={styles.formContainer}>
          <h3>Patient Registration</h3>
          <label style={styles.label}>Full Name</label>
          <input type="text" placeholder="Enter full name" required style={styles.input} />
          
          <label style={styles.label}>Age</label>
          <input type="number" placeholder="Enter age" required style={styles.input} />
          
          <label style={styles.label}>Address</label>
          <input type="text" placeholder="Enter address" required style={styles.input} />
          
          <label style={styles.label}>Phone</label>
          <input type="text" placeholder="Enter phone number" required style={styles.input} />
          
          <label style={styles.label}>Gender</label>
          <select style={styles.input}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          
          <label style={styles.label}>Email</label>
          <input type="email" placeholder="Enter email" required style={styles.input} />
          
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Register
          </button>
        </div>
      )}

      {/* Doctor Registration Form */}
      {userType === "doctor" && (
        <div style={styles.formContainer}>
          <h3>Doctor Registration</h3>
          <label style={styles.label}>Full Name</label>
          <input type="text" placeholder="Enter full name" required style={styles.input} />
          
          <label style={styles.label}>Age</label>
          <input type="number" placeholder="Enter age" required style={styles.input} />
          
          <label style={styles.label}>Education</label>
          <input type="text" placeholder="Enter highest qualification" required style={styles.input} />
          
          <label style={styles.label}>Specialization</label>
          <input type="text" placeholder="Enter specialization" required style={styles.input} />
          
          <label style={styles.label}>Clinic Name</label>
          <input type="text" placeholder="Enter clinic name" required style={styles.input} />
          
          <label style={styles.label}>Clinic Address</label>
          <input type="text" placeholder="Enter clinic address" required style={styles.input} />
          
          <label style={styles.label}>Experience (years)</label>
          <input type="number" placeholder="Enter years of experience" required style={styles.input} />
          
          <label style={styles.label}>Contact Number</label>
          <input type="text" placeholder="Enter contact number" required style={styles.input} />
          
          <label style={styles.label}>Gender</label>
          <select style={styles.input}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          
          <label style={styles.label}>Email</label>
          <input type="email" placeholder="Enter email" required style={styles.input} />
          
          <label style={styles.label}>Upload Degree Proof</label>
          <input type="file" required style={styles.input} />
          
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Register
          </button>
        </div>
      )}

      {/* Back to Login */}
      <a href="/login" style={styles.link}>Already have an account? Login</a>
    </div>
  );
}
