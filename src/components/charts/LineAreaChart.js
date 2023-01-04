import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineAreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series 1",
          data: [45, 52, 38, 45, 19, 23, 2, 38, 45, 19, 23, 2],
        },
        {
          name: "Series 2",
          data: [45, 22, 38, 25, 9, 2, 20, 25, 9, 2, 20],
        },
      ],
      options: {
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        xaxis: {
          categories: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
          ],
        },
        chart: {
          height: 280,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
      }
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height="800"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineAreaChart;

