import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";

// Delcare and export Nutshell
export const Nutshell = () => (
  <>
    <Route
      render={() => {
        // If local storage contains a key of "nutshell_user",
        // display NavBar and ApplicationViews
        if (localStorage.getItem("nutshell_user")) {
          return (
          <>
            <NavBar />
            <ApplicationViews />
          </>
          )
        } else {
          // If local storage does not contain the "nutshell_user" key,
          //  Redirect to /login path
          return <Redirect to="/login" />
        }
      }}
    />

    <Route path="/login">
      {/* Render the Login function on envocation of /login */}
      <Login />
    </Route>
    <Route path="/register">
      {/* Render the Register function on envocation of /register */}
      <Register />
    </Route>  
    
  </>
);


// class Nutshell extends Component {
//   render() {
//     if (localStorage.getItem("nutshell_user")){
//     return (
//       <React.Fragment>
//         <NavBar />
//         <ApplicationViews />
//       </React.Fragment>
//     );
//     } else {
//       return <Redirect to="/login" />
//     }
//   }
// }

// export default Nutshell;
