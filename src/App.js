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
              ["ng-ri", 14], // River
              ["ng-kt", 48], // Katsina
              ["ng-so", 65], // Sokoto
              ["ng-za", 12], // Zamfara
              ["ng-yo", 14], // Yobe
              ["ng-ke", 12], // Kebbi
              ["ng-ad", 6], // Adamawa
              ["ng-bo", 82], // Borno
              ["ng-ak", 16], // Akwa Ibom
              ["ng-ab", 2], // Abia
              ["ng-im", 2], // Imo
              ["ng-by", 5], // Bayelsa
              ["ng-be", 1], // Benue
              ["ng-cr", 0], // Cross River
              ["ng-ta", 8], // Taraba
              ["ng-kw", 16], // Kwara
              ["ng-la", 1107], // Lagos
              ["ng-ni", 3], // Niger
              ["ng-fc", 278], // Abuja
              ["ng-og", 80], // Ogun
              ["ng-on", 13], // Ondo
              ["ng-ek", 11], // Ekiti
              ["ng-os", 36], // Osun
              ["ng-oy", 34], // Oyo
              ["ng-an", 1], // Anambra
              ["ng-ba", 71], // Bauchi
              ["ng-go", 96], // Gombe
              ["ng-de", 17], // Delta
              ["ng-ed", 52], // Edo
              ["ng-en", 8], // Enugu
              ["ng-eb", 5], // Ebonyi
              ["ng-kd", 81], // Kaduna
              ["ng-ko", 0], // Kogi
              ["ng-pl", 3], // Plateau
              ["ng-na", 12], // Nasarawa
              ["ng-ji", 7], // Jigawa
              ["ng-kn", 342], // Kano
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
