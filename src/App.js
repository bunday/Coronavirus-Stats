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
              ["ng-ri", 89], // River
              ["ng-so", 116], // Sokoto
              ["ng-yo", 47], // Yobe
              ["ng-ke", 32], // Kebbi
              ["ng-ad", 27], // Adamawa
              ["ng-ak", 21], // Akwa Ibom
              ["ng-ab", 7], // Abia
              ["ng-im", 7], // Imo
              ["ng-by", 8], // Bayelsa
              ["ng-be", 5], // Benue
              ["ng-cr", 0], // Cross River
              ["ng-ta", 18], // Taraba
              ["ng-kw", 73], // Kwara
              ["ng-ni", 23], // Niger
              ["ng-on", 23], // Ondo
              ["ng-ek", 20], // Ekiti
              ["ng-os", 42], // Osun
              ["ng-oy", 199], // Oyo
              ["ng-an", 6], // Anambra
              ["ng-go", 145], // Gombe
              ["ng-de", 31], // Delta
              ["ng-ed", 144], // Edo
              ["ng-en", 16], // Enugu
              ["ng-eb", 22], // Ebonyi
              ["ng-kd", 179], // Kaduna
              ["ng-ko", 0], // Kogi
              ["ng-pl", 71], // Plateau
              ["ng-na", 38], // Nasarawa
              ["ng-ji", 241], // Jigawa
              ["ng-la", 3224], // Lagos
              ["ng-fc", 447], // Abuja
              ["ng-kn", 883], // Kano
              ["ng-za", 76], // Zamfara
              ["ng-ba", 230], // Bauchi
              ["ng-kt", 308], // Katsina
              ["ng-bo", 247], // Borno
              ["ng-og", 196], // Ogun
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
