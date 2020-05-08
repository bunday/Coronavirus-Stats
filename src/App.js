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
              ["ng-ri", 21], // River
              ["ng-so", 92], // Sokoto
              ["ng-yo", 14], // Yobe
              ["ng-ke", 18], // Kebbi
              ["ng-ad", 15], // Adamawa
              ["ng-ak", 17], // Akwa Ibom
              ["ng-ab", 2], // Abia
              ["ng-im", 3], // Imo
              ["ng-by", 5], // Bayelsa
              ["ng-be", 2], // Benue
              ["ng-cr", 0], // Cross River
              ["ng-ta", 15], // Taraba
              ["ng-kw", 24], // Kwara
              ["ng-ni", 6], // Niger
              ["ng-on", 15], // Ondo
              ["ng-ek", 12], // Ekiti
              ["ng-os", 38], // Osun
              ["ng-oy", 59], // Oyo
              ["ng-an", 1], // Anambra
              ["ng-go", 110], // Gombe
              ["ng-de", 17], // Delta
              ["ng-ed", 67], // Edo
              ["ng-en", 10], // Enugu
              ["ng-eb", 7], // Ebonyi
              ["ng-kd", 95], // Kaduna
              ["ng-ko", 0], // Kogi
              ["ng-pl", 15], // Plateau
              ["ng-na", 26], // Nasarawa
              ["ng-ji", 83], // Jigawa
              ["ng-la", 1667], // Lagos
              ["ng-fc", 336], // Abuja
              ["ng-kn", 547], // Kano
              ["ng-za", 65], // Zamfara
              ["ng-ba", 117], // Bauchi
              ["ng-kt", 139], // Katsina
              ["ng-bo", 141], // Borno
              ["ng-og", 113], // Ogun
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
      <div className="h-screen sm:px-32 px-4 text-white">
        <div>
          <p className="text-4xl">Coronavirus Tracker</p>
        </div>
        <GlobalStat />
        <div className="flex justify-center lg:px-48">
          <div className="w-full">
            <HighchartsReact
              constructorType={"mapChart"}
              highcharts={Highcharts}
              options={mapOptions}
            />
          </div>
        </div>
        <div className="bottom-0 text-white text-center flex justify-center">
          <p>Developed by <a href="https://zadatolayinka.dev/" className="text-teal-200" target="_blank" rel="noopener noreferrer"> Bundayy. </a> <a href="#" onClick={start}> Stay Indoor, Corona is Outdoor. 🗣</a> </p>
          
        </div>
      </div>
    );
  }
}

export default App;
