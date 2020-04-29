import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapData from "./Data.js";
import GlobalStat from "./components/Global.js";

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
    let audio = new Audio("/coronaoutdoor.m4a")

  const start = () => {
    audio.play()
  }
    return (
      <div className="h-screen px-32">
        <GlobalStat />
        <div className="flex justify-center">
          <div className="w-1/2">
            <HighchartsReact
              constructorType={"mapChart"}
              highcharts={Highcharts}
              options={mapOptions}
            />
          </div>
        </div>
        <div className="bottom-0 text-white flex justify-center">
          <p>Developed by <a href="https://zadatolayinka.dev/" className="text-teal-200" target="_blank" rel="noopener noreferrer"> Bundayy. </a> <a href="#" onClick={start}> Stay Indoor, Corona is Outdoor. 🗣</a> </p>
          
        </div>
      </div>
    );
  }
}

export default App;
