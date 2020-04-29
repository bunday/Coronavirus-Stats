import React from "react";

function Stat({ title, count }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl">{title}</p>
      <p className="text-3xl"> {count} </p>
    </div>
  );
}

export default Stat;
