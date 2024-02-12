import { useState } from "react";
import "./Register.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const HandleSubmit = () => {
    const specialCharactersRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
    if (UserName.length < 1) {
      alert("Username cannot be null");

      toast("Username can not be null", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (Password.length < 6) {
      toast("Password Should be greater than six letter", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (!specialCharactersRegex.test(Password)) {
      alert("Password should contains special characters");
    }
  };
  return (
    <div>
      <div className="bg h-screen flex items-center justify-center">
        <form className="w-80 mx-auto  bg-white p-5 ">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="UserName"
            className="text-center input  block w-full rounded-sm p-2 mb-2 border"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="Password"
            className="text-center input  block w-full rounded-sm p-2 mb-2 border"
          />
          {UserName && Password.length > 6 ? (
            <button
              onClick={HandleSubmit}
              className="text-center bg-blue-500  block w-full rounded-sm p-2 "
            >
              Register
            </button>
          ) : (
            " "
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
