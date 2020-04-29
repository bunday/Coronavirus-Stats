import React, { useState, useEffect } from "react";
import Stat from "./Stat";

function GlobalStat() {
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState({});
  // useEffect(() => {
  //     fetch('https://api.covid19api.com/summary')
  //     .then(res => res.json())
  //     .then(response => {
  //         console.log(response);
  //         setSummary(response)
  //         setLoading(false)
  //     }).catch(err => console.log(err))
  // }, [])
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  return (
    <div className="text-white">
      <div className="py-8">
        <div className="flex justify-center">
          <p className="text-4xl"> Global Statistics</p>
        </div>
        <div className="flex justify-around">
          <Stat title="Total Confirmed" count={numberWithCommas(3000)} />
          <Stat title="Total Deaths" count={numberWithCommas(3000)} />
          <Stat title="Total Recovered" count={numberWithCommas(3000)} />
        </div>
      </div>
      <div className="py-8">
      <div className="flex justify-center">
        <p className="text-4xl"> Nigeria's Statistics</p>
      </div>
      <div className="flex justify-around">
        <Stat title="Total Confirmed" count={numberWithCommas(3000)} />
        <Stat title="Total Deaths" count={numberWithCommas(3000)} />
        <Stat title="Total Recovered" count={numberWithCommas(3000)} />
      </div>
      </div>
    </div>
  );
}

export default GlobalStat;
