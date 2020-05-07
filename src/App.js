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
              ["ng-ri", 17], // River
              ["ng-so", 88], // Sokoto
              ["ng-yo", 14], // Yobe
              ["ng-ke", 18], // Kebbi
              ["ng-ad", 15], // Adamawa
              ["ng-bo", 124], // Borno
              ["ng-ak", 17], // Akwa Ibom
              ["ng-ab", 2], // Abia
              ["ng-im", 2], // Imo
              ["ng-by", 5], // Bayelsa
              ["ng-be", 2], // Benue
              ["ng-cr", 0], // Cross River
              ["ng-ta", 15], // Taraba
              ["ng-kw", 24], // Kwara
              ["ng-la", 1491], // Lagos
              ["ng-ni", 6], // Niger
              ["ng-fc", 316], // Abuja
              ["ng-og", 100], // Ogun
              ["ng-on", 13], // Ondo
              ["ng-ek", 12], // Ekiti
              ["ng-os", 37], // Osun
              ["ng-oy", 55], // Oyo
              ["ng-an", 1], // Anambra
              ["ng-go", 109], // Gombe
              ["ng-de", 17], // Delta
              ["ng-ed", 65], // Edo
              ["ng-en", 9], // Enugu
              ["ng-eb", 5], // Ebonyi
              ["ng-kd", 92], // Kaduna
              ["ng-ko", 0], // Kogi
              ["ng-pl", 5], // Plateau
              ["ng-na", 12], // Nasarawa
              ["ng-ji", 83], // Jigawa
              ["ng-kn", 482], // Kano
              ["ng-za", 65], // Zamfara
              ["ng-ba", 102], // Bauchi
              ["ng-kt", 108], // Katsina
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
