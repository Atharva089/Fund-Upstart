// // pages/SignupPage.js
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const SignupPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSignup = async () => {
//     // Signup logic
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Sign Up</h1>
//       <div style={styles.inputContainer}>
//         <label style={styles.label} htmlFor="username">
//           Username
//         </label>
//         <input
//           style={styles.input}
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div style={styles.inputContainer}>
//         <label style={styles.label} htmlFor="email">
//           Email
//         </label>
//         <input
//           style={styles.input}
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div style={styles.inputContainer}>
//         <label style={styles.label} htmlFor="password">
//           Password
//         </label>
//         <input
//           style={styles.input}
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button style={styles.button} onClick={handleSignup}>
//         Sign Up
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "0 auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   heading: {
//     fontSize: "24px",
//     marginBottom: "20px",
//   },
//   inputContainer: {
//     marginBottom: "10px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//   },
//   input: {
//     width: "100%",
//     padding: "8px",
//     fontSize: "16px",
//     borderRadius: "3px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "3px",
//     cursor: "pointer",
//   },
// };

// export default SignupPage;

import Signup from "@/components/signup";
import { useRouter } from "next/navigation";

const signup = () => {
  return <Signup />;
};

export default signup;
