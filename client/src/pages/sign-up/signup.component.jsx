import React from "react";
import StartButton from "../../components/start-button/startButton.component";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <i class="far fa-check-circle"></i>
        <span>STEP 1 OF 4</span>
        <h1 className="text-3xl font-bold">
          Watch now with your public library card or university login
        </h1>
      </div>
      <div className="flex justify-center items-center py-10">
        <div className="flex flex-col justify-center items-center px-10">
          <h1 className="text-4xl font-bold">
            Do you have a public library card?
          </h1>
          <div>
            <i class="fas fa-check"></i>
            <span>If so, help us find your public library</span>
          </div>
          <div>
            <i class="fas fa-check"></i>
            <span>
              Then, we'll ask you for your public library card number and
              PIN/password
            </span>
          </div>
          <Link to="/signup/find/library" className="w-1/2 my-10">
            <StartButton>Find Your Library</StartButton>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center px-10">
          <h1 className="text-4xl font-bold">
            Do you have a public library card?
          </h1>
          <div>
            <i class="fas fa-check"></i>
            <span>If so, help us find your public library</span>
          </div>
          <div>
            <i class="fas fa-check"></i>
            <span>
              Then, we'll ask you for your public library card number and
              PIN/password
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
