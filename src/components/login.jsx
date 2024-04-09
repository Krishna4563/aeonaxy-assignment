import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleRoute = () => {
    // if (
    //   (fullName.trim() &&
    //     email.trim() &&
    //     password &&
    //     confirmPassword &&
    //     agreeTerms) !== "" &&
    //   password === confirmPassword &&
    //   agreeTerms
    // ) {
    //   setTimeout(() => {
    //     navigate("/form");
    //     window.scrollTo(0, 0);
    //   }, 800);
    // }
    navigate("/form");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (!fullName.trim()) {
      return;
    }
    if (!email.trim()) {
      return;
    }
    if (!password.trim()) {
      return;
    }
    if (!confirmPassword.trim()) {
      return;
    }
    if (!agreeTerms) {
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      return alert("Password must be same");
    }

    handleRoute();
  };

  const handleChange = (event, setValue) => {
    setValue(event.target.value);
  };

  const showError = (field) => {
    return submitted && !field.trim();
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <h1 className="font-medium font-serif text-black text-3xl text-center mb-6">
        Get started with Teachable
      </h1>

      <p className="justify-center items-center text-center text-gray-600 text-sm w-[80%] md:w-full mb-6">
        Join more than 100,000 creators who've sold over{" "}
        <span className=" font-bold">$1 billion</span> in courses and coaching.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between gap-5 w-[80%] md:w-[65%] lg:w-[35%] h-[38vh]"
      >
        <div className="flex flex-col">
          <h2 className=" font-medium text-gray-500">Full Name</h2>
          <input
            type="text"
            value={fullName}
            onChange={(e) => handleChange(e, setFullName)}
            className={` px-2 border ${
              showError(fullName) ? "border-red-500" : "border-gray-400"
            } rounded h-10`}
          />
          {showError(fullName) && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        <div className="flex flex-col">
          <h2 className=" font-medium text-gray-500">Email Address</h2>
          <input
            type="text"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
            className={`px-2 border ${
              showError(email) ? "border-red-500" : "border-gray-400"
            } rounded h-10`}
          />
          {showError(email) && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        <div className="flex flex-col">
          <h2 className=" font-medium text-gray-500">Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => handleChange(e, setPassword)}
            className={`px-2 border ${
              showError(password) ? "border-red-500" : "border-gray-400"
            } rounded h-10`}
          />
          {showError(password) && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        <div className="flex flex-col">
          <h2 className=" font-medium text-gray-500">Confirm Password</h2>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => handleChange(e, setConfirmPassword)}
            className={`px-2 border ${
              showError(confirmPassword) ? "border-red-500" : "border-gray-400"
            } rounded h-10`}
          />
          {showError(confirmPassword) && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        <div className="flex justify-flex gap-2 items-center w-[100%] md:w-[100%]">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className=""
          />
          <p className=" text-gray-500 text-xs">
            I agree to the{" "}
            <span className=" text-black underline">Terms of Use</span> and{" "}
            <span className=" text-black underline">Privacy Policy</span>{" "}
          </p>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="px-4 py-2 bg-black text-white w-[60%] md:w-[80%] text-md rounded"
            type="submit"
            onClick={handleRoute}
          >
            Create Account
          </button>
        </div>

        <div className="flex justify-center items-center">
          <p>
            Already have an account?{" "}
            <span className=" text-black underline">Log In</span>
          </p>
        </div>
      </form>
    </div>
  );
};
