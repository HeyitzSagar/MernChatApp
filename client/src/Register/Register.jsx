import { useState } from "react";
import "./Register.css";
const Register = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const HandleSubmit = () => {
    const specialCharactersRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
    if (UserName.length < 1) {
      alert("Username cannot be null");
    } else if (Password.length < 6) {
      alert("Password should be between 6 to 12 letter");
    } else if (!specialCharactersRegex.test(Password)) {
      alert("Password should contains special characters");
    }
  };
  return (
    <div className="bg h-screen flex items-center justify-center">
      <form className="w-80 mx-auto  bg-white p-5 ">
        <input
          onChange={(e) => {    
            setUserName(e.target.value);
          }}
          type="text"
          placeholder="UserName"
          className="text-center bg-black text-white block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          placeholder="Password"
          className="text-center bg-black text-white block w-full rounded-sm p-2 mb-2 border"
        />
        <button
          onClick={HandleSubmit}
          className="text-center bg-blue-500 text-white block w-full rounded-sm p-2 "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
