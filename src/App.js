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
              ["ng-kt", 97], // Katsina
              ["ng-so", 84], // Sokoto
              ["ng-za", 46], // Zamfara
              ["ng-yo", 14], // Yobe
              ["ng-ke", 18], // Kebbi
              ["ng-ad", 15], // Adamawa
              ["ng-bo", 116], // Borno
              ["ng-ak", 16], // Akwa Ibom
              ["ng-ab", 2], // Abia
              ["ng-im", 2], // Imo
              ["ng-by", 5], // Bayelsa
              ["ng-be", 2], // Benue
              ["ng-cr", 0], // Cross River
              ["ng-ta", 15], // Taraba
              ["ng-kw", 16], // Kwara
              ["ng-la", 1308], // Lagos
              ["ng-ni", 4], // Niger
              ["ng-fc", 316], // Abuja
              ["ng-og", 95], // Ogun
              ["ng-on", 13], // Ondo
              ["ng-ek", 12], // Ekiti
              ["ng-os", 37], // Osun
              ["ng-oy", 52], // Oyo
              ["ng-an", 1], // Anambra
              ["ng-ba", 83], // Bauchi
              ["ng-go", 103], // Gombe
              ["ng-de", 17], // Delta
              ["ng-ed", 65], // Edo
              ["ng-en", 8], // Enugu
              ["ng-eb", 5], // Ebonyi
              ["ng-kd", 85], // Kaduna
              ["ng-ko", 0], // Kogi
              ["ng-pl", 4], // Plateau
              ["ng-na", 12], // Nasarawa
              ["ng-ji", 39], // Jigawa
              ["ng-kn", 427], // Kano
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
