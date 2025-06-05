import React from "react";

interface ErrorProps {
  error: string;
}

const Error = ({ props }: { props: ErrorProps }) => {
  return (
    <div className="w-full h-full justify-center items-center">
      <h1 className="font-bold text-orange-500">Uh oh...</h1>
      <span>Error {props.error} has occured.</span>
    </div>
  );
};

export default Error;
