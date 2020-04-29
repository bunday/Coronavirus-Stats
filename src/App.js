import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapData from "./Data.js";
import Stat from "./components/Stat.js";

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapOptions: {
        title: {
          text: "",
        },
        colorAxis: {
          min: 0,
          stops: [
            [0, "#fff4f4"],
            [0.67, "#ff6666"],
            [1, "#e50000"],
          ],
        },
        tooltip: {
          valueSuffix: " case(s)",
        },
        series: [
          {
            mapData: mapData,
            dataLabels: {
              formatter: function () {
                return this.point.properties["woe-label"].split(",")[0];
              },
            },
            name: "Nigeria",
            data: [
              ["ng-ri", 7], // River
              ["ng-kt", 30], // Katsina
              ["ng-so", 19], // Sokoto
              ["ng-za", 4], // Zamfara
              ["ng-yo", 1], // Yobe
              ["ng-ke", 1], // Kebbi
              ["ng-ad", 1], // Adamawa
              ["ng-bo", 53], // Borno
              ["ng-ak", 12], // Akwa Ibom
              ["ng-ab", 2], // Abia
              ["ng-im", 1], // Imo
              ["ng-by", 1], // Bayelsa
              ["ng-be", 1], // Benue
              ["ng-cr", 0], // Cross River
              ["ng-ta", 8], // Taraba
              ["ng-kw", 11], // Kwara
              ["ng-la", 844], // Lagos
              ["ng-ni", 2], // Niger
              ["ng-fc", 158], // Abuja
              ["ng-og", 50], // Ogun
              ["ng-on", 8], // Ondo
              ["ng-ek", 8], // Ekiti
              ["ng-os", 34], // Osun
              ["ng-oy", 21], // Oyo
              ["ng-an", 1], // Anambra
              ["ng-ba", 29], // Bauchi
              ["ng-go", 46], // Gombe
              ["ng-de", 7], // Delta
              ["ng-ed", 30], // Edo
              ["ng-en", 3], // Enugu
              ["ng-eb", 1], // Ebonyi
              ["ng-kd", 15], // Kaduna
              ["ng-ko", 0], // Kogi
              ["ng-pl", 1], // Plateau
              ["ng-na", 1], // Nasarawa
              ["ng-ji", 7], // Jigawa
              ["ng-kn", 115], // Kano
            ],
          },
        ],
      },
    };
  }
  render() {
    const { mapOptions } = this.state;
    return (
      <div className="bg-gray-800 h-screen">
        <div className="text-white flex justify-around">
          <Stat title="Total This" count="3000"/>
          <div className="flex flex-col items-center">
            <p className="text-xl">Total Deaths Globally</p>
            <p className="text-3xl"> 500000 </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl">Total Recoveries Globally</p>
            <p className="text-3xl"> 500000 </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl">Fatality Rate</p>
            <p className="text-3xl"> 10% </p>
          </div>
        </div>
        <HighchartsReact
          constructorType={"mapChart"}
          highcharts={Highcharts}
          options={mapOptions}
        />
      </div>
    );
  }
}

export default App;
