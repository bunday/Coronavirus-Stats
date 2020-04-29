import React from "react";

function Stat({ title, count }) {
  return (
    <div className="flex flex-col items-center py-2 sm:py-0">
      <p className="text-lg">{title}</p>
      <p className="text-3xl"> {count} </p>
    </div>
  );
}

export default Stat;
