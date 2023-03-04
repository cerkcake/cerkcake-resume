import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const element2 = (
//   <div>
//     <h1>Hello</h1>
//     <h2>World!</h2>
//   </div>
// );

// const fullName = "Dominic Torretto";
// const element3 = <div>{fullName}</div>;

// const element4 = <div> {1 + 1} </div>;
// // ใส่ปีกกาให้ "1.1" ถ้าถ้าไม่ใส่มันมองเป็น String

// const user5 = { firstName: "Dominic", lastName: "Torretto" };
// const element5 = (
//   <div>{"firstname : " + user5.firstName + " lastname : " + user5.lastName}</div>
// );

// const displayName = (user6) => {  return user6.firstName + ' ' + user6.lastName}
// const user6 = {  firstName: 'Dominic',  lastName: 'Torretto'}
// const element6 = <div>{ displayName(user6) }</div>

// const oddOrEven = (number) => (number % 2 === 0 ? 'even':'odd');
// const element7 = <div>{ oddOrEven(89) }</div>

// root.render(element7);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
