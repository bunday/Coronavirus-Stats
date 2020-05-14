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
              ["ng-ri", 33], // River
              ["ng-so", 112], // Sokoto
              ["ng-yo", 20], // Yobe
              ["ng-ke", 31], // Kebbi
              ["ng-ad", 21], // Adamawa
              ["ng-ak", 17], // Akwa Ibom
              ["ng-ab", 2], // Abia
              ["ng-im", 3], // Imo
              ["ng-by", 6], // Bayelsa
              ["ng-be", 4], // Benue
              ["ng-cr", 0], // Cross River
              ["ng-ta", 17], // Taraba
              ["ng-kw", 53], // Kwara
              ["ng-ni", 10], // Niger
              ["ng-on", 18], // Ondo
              ["ng-ek", 15], // Ekiti
              ["ng-os", 42], // Osun
              ["ng-oy", 73], // Oyo
              ["ng-an", 2], // Anambra
              ["ng-go", 119], // Gombe
              ["ng-de", 22], // Delta
              ["ng-ed", 89], // Edo
              ["ng-en", 12], // Enugu
              ["ng-eb", 2], // Ebonyi
              ["ng-kd", 116], // Kaduna
              ["ng-ko", 0], // Kogi
              ["ng-pl", 20], // Plateau
              ["ng-na", 28], // Nasarawa
              ["ng-ji", 141], // Jigawa
              ["ng-la", 2041], // Lagos
              ["ng-fc", 370], // Abuja
              ["ng-kn", 707], // Kano
              ["ng-za", 73], // Zamfara
              ["ng-ba", 206], // Bauchi
              ["ng-kt", 224], // Katsina
              ["ng-bo", 188], // Borno
              ["ng-og", 127], // Ogun
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
