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
              ["ng-ri", 13], // River
              ["ng-kt", 40], // Katsina
              ["ng-so", 35], // Sokoto
              ["ng-za", 4], // Zamfara
              ["ng-yo", 2], // Yobe
              ["ng-ke", 2], // Kebbi
              ["ng-ad", 2], // Adamawa
              ["ng-bo", 66], // Borno
              ["ng-ak", 16], // Akwa Ibom
              ["ng-ab", 2], // Abia
              ["ng-im", 1], // Imo
              ["ng-by", 5], // Bayelsa
              ["ng-be", 1], // Benue
              ["ng-cr", 0], // Cross River
              ["ng-ta", 8], // Taraba
              ["ng-kw", 11], // Kwara
              ["ng-la", 976], // Lagos
              ["ng-ni", 2], // Niger
              ["ng-fc", 178], // Abuja
              ["ng-og", 56], // Ogun
              ["ng-on", 9], // Ondo
              ["ng-ek", 8], // Ekiti
              ["ng-os", 34], // Osun
              ["ng-oy", 23], // Oyo
              ["ng-an", 1], // Anambra
              ["ng-ba", 38], // Bauchi
              ["ng-go", 76], // Gombe
              ["ng-de", 9], // Delta
              ["ng-ed", 44], // Edo
              ["ng-en", 3], // Enugu
              ["ng-eb", 2], // Ebonyi
              ["ng-kd", 35], // Kaduna
              ["ng-ko", 0], // Kogi
              ["ng-pl", 1], // Plateau
              ["ng-na", 3], // Nasarawa
              ["ng-ji", 7], // Jigawa
              ["ng-kn", 219], // Kano
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
