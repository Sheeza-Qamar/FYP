import React from "react";

export default function Login() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "url('https://images.newscientist.com/wp-content/uploads/2017/07/12180000/ai_main.jpg') no-repeat center center/cover",
    },
    loginCard: {
      background: "rgba(4, 1, 8, 0.9)", // Semi-transparent background
      padding: "20px",
      width: "350px",
      textAlign: "center",
      borderRadius: "8px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",

    },
    input: {
      width: "90%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      width: "25%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s",
      display: "block",
      marginLeft: "230px"
      
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <h2 style={{ color: "white" }}>Login</h2>
        <input type="text" placeholder="User Name" required style={styles.input} />
        <input type="password" placeholder="Password" required style={styles.input} />
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
        <p style={{color: "white"}}>
          Don't have an account? <a href="/register" style={styles.link}>Register</a>
        </p>
      </div>
    </div>
  );
}
