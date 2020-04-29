import React, { useState, useEffect } from "react";
import Stat from "./Stat";

function GlobalStat() {
  const [summary, setSummary] = useState({});
  const [nigeria, setNigeria] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      fetch('https://api.covid19api.com/summary')
      .then(res => res.json())
      .then(response => {
          console.log(response);
          fetchNigeria(response.Countries);
          setSummary(response)
          setLoading(false)
      }).catch(err => console.log(err))
  }, [])
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function fetchNigeria(data) {
      const nig = data.find(elem => elem.CountryCode === 'NG');
      setNigeria(nig);
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
              <Stat title="Total Confirmed" count={numberWithCommas(summary.Global.TotalConfirmed)} />
              <Stat title="Total Deaths" count={numberWithCommas(summary.Global.TotalDeaths)} />
              <Stat title="Total Recovered" count={numberWithCommas(summary.Global.TotalRecovered)} />
            </div>
          </div>
          <div className="py-8">
            <div className="flex justify-center py-2">
              <p className="text-2xl"> Nigeria's Statistics</p>
            </div>
            <div className="flex sm:flex-row sm:justify-between flex-col">
              <Stat title="Total Confirmed" count={numberWithCommas(nigeria.TotalConfirmed)} />
              <Stat title="Total Deaths" count={numberWithCommas(nigeria.TotalDeaths)} />
              <Stat title="Total Recovered" count={numberWithCommas(nigeria.TotalRecovered)} />
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
