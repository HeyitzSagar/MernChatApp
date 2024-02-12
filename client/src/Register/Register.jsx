import { useState } from "react";
import "./Register.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const HandleSubmit = (e) => {
    e.preventDefault();
    const specialCharactersRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
    if (UserName.length < 1) {
      setError(false);
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
    } else if (!specialCharactersRegex.test(Password)) {
      setError(true);
      if (Password.length < 4) {
        toast("Ache se daal, Bhul mat jana !!", {
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
      }
    } else if (Password.length && specialCharactersRegex.test(Password)) {
      setError(false);
    }
  };
  return (
    <div>
      <div className="bg h-screen flex items-center justify-center">
        <form className="w-80 mx-auto h-60  bg-card p-5 ">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="UserName"
            className="text-center input  block w-full rounded-sm p-2 mb-2 border"
          />
          {UserName ? (
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              placeholder="Password"
              className="text-center input  block w-full rounded-sm p-2 mb-2 border"
            />
          ) : (
            ""
          )}
          {UserName && Password ? (
            <button
              onClick={HandleSubmit}
              className="text-center bg-blue-500  block w-full rounded-sm p-2 "
            >
              Register
            </button>
          ) : (
            " "
          )}
          {error ? (
            <h1 className="text-red text-center m-2 p-2">
              Password should contains special characters
            </h1>
          ) : (
            ""
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
