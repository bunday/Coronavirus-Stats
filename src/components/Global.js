import React, { useState, useEffect } from "react";
import Stat from "./Stat";

function GlobalStat() {
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);
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
  function renderPage() {
    if (loading) {
      return (
        <div className="text-white text-center">
          <p>Please wait while we fetch the latest data...</p>
        </div>
      );
    } else {
      return (
        <div className="text-white">
          <div className="py-8">
            <div className="flex justify-center py-2">
              <p className="text-2xl"> Global Statistics</p>
            </div>
            <div className="flex sm:flex-row sm:justify-between flex-col">
              <Stat title="Total Confirmed" count={numberWithCommas(3000)} />
              <Stat title="Total Deaths" count={numberWithCommas(3000)} />
              <Stat title="Total Recovered" count={numberWithCommas(3000)} />
            </div>
          </div>
          <div className="py-8">
            <div className="flex justify-center py-2">
              <p className="text-2xl"> Nigeria's Statistics</p>
            </div>
            <div className="flex sm:flex-row sm:justify-between flex-col">
              <Stat title="Total Confirmed" count={numberWithCommas(3000)} />
              <Stat title="Total Deaths" count={numberWithCommas(3000)} />
              <Stat title="Total Recovered" count={numberWithCommas(3000)} />
            </div>
          </div>
        </div>
      );
    }
  }
  return (
      renderPage()
  )
}

export default GlobalStat;
