import logo from "./logo.svg";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

/*
const customToast = ({closeToast}) => {
  return (
    <div>
      Something Went Wrong !<button onClick={closeToast}>Close</button>
    </div>
  );
};
*/

toast.configure();
function App() {
  const notify = () => {
    /*
    toast("Basic Notification!", { position: toast.POSITION.TOP_LEFT });
    toast("Basic Notification!", { position: toast.POSITION.TOP_RIGHT });
    toast("Basic Notification!", { position: toast.POSITION.TOP_CENTER });
    toast("Basic Notification!", { position: toast.POSITION.BOTTOM_LEFT });
    toast("Basic Notification!", { position: toast.POSITION.BOTTOM_RIGHT });
    */
    toast("Basic Notification!", { position: toast.POSITION.BOTTOM_RIGHT });
    toast.success("Login Successfull", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000,
    });
    toast.info("Information", {
      position: toast.POSITION.TOP_LEFT,
    });
    toast.error("Wrong Credentials", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
    });
    toast.warn("Warning", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="App">
      <button onClick={notify}>Notify !</button>
    </div>
  );
}

export default App;
