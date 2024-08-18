import React from "react";
import { IoIosWarning } from "react-icons/io";

interface ErrorMessage {
  error: string;
}

const Error: React.FC<ErrorMessage> = ({ error }) => {
  return (
    <div>
      <div className="container h-screen-80 flex flex-col items-center justify-center">
        <IoIosWarning className="text-red-500 text-7xl" />
        <p className="text-2xl">{error}</p>
      </div>
    </div>
  );
};

export default Error;
