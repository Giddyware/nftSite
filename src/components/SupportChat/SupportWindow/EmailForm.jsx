// import { useState } from "react";
// import { styles } from "../styles";
// import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";
// import { CircularProgress } from "@mui/material";
// import Avatar from "../Avatar";
// import axios from "axios";

// const EmailForm = (props) => {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");

//   function getOrCreateUser(callback) {
//     axios
//       .put(
//         "https://api.chatengine.io/users/",
//         { username: email, email: email, secret: email },
//         { headers: { "Private-Key": "715d933f-8d47-4010-9b68-7b1577e6d916" } }
//       )
//       .then((r) => callback(r.data))
//       .catch((e) => console.log("Get or create user error", e));
//   }

//   function getOrCreateChat(callback) {
//     axios
//       .put(
//         "https://api.chatengine.io/chats/",
//         { usernames: ["Test123", email], is_direct_chat: true },
//         {
//           headers: {
//             "Project-ID": "ecfa0435-edb4-43e9-9106-b5ebc93a94b0",
//             "User-Name": email,
//             "User-Secret": email,
//           },
//         }
//       )
//       .then((r) => callback(r.data))
//       .catch((e) => console.log("Get or create chat error", e));
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     console.log("Sending Email", email);

//     getOrCreateUser((user) => {
//       props.setUser && props.setUser(user);
//       getOrCreateChat((chat) => {
//         console.log("success", chat);
//         setLoading(false);
//         props.setChat && props.setChat(chat);
//       });
//     });

//   };
//   return (
//     <div
//       style={{
//         ...styles.emailFormWindow,
//         ...{
//           height: props.visible ? "100%" : "0px",
//           opacity: props.visible ? "1" : "0",
//         },
//       }}
//     >
//       <div style={{ height: "0px" }}>
//         <div style={styles.stripe} />
//       </div>

//       <div
//         className="transition-5"
//         style={{
//           ...styles.loadingDiv,
//           ...{
//             zIndex: loading ? "10" : "-1",
//             opacity: loading ? "0.33" : "0",
//           },
//         }}
//       />
//       <CircularProgress
//         className="w-24 transition-5 "
//         style={{
//           ...styles.loadingIcon,
//           ...{
//             zIndex: loading ? "10" : "-1",
//             opacity: loading ? "1" : "0",
//             fontSize: "92px",
//             top: "calc(50% - 41px)",
//             left: "calc(50% - 41px)",
//           },
//         }}
//       />

//       <div
//         style={{
//           position: "absolute",
//           height: "100%",
//           width: "100%",
//           textAlign: "center",
//         }}
//       >
//         <Avatar
//           style={{
//             position: "relative",
//             left: "calc(50% - 44px)",
//             top: "10%",
//           }}
//         />

//         <div style={styles.topText}>
//           Welcome to our <br /> support 👋
//         </div>

//         <form
//           onSubmit={(e) => handleSubmit(e)}
//           style={{ position: "relative", width: "100%", top: "16.75%" }}
//         >
//           <input
//             placeholder="Your Email"
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.emailInput}
//           />
//         </form>

//         <div style={styles.bottomText}>
//           Enter your email <br /> to get started.
//         </div>
//       </div>
//     </div>
//   );
// };
// export default EmailForm;
