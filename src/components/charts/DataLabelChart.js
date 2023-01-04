import React, { Component } from "react";
import Chart from "react-apexcharts";

class DataLabelChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 280,
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: "TOTAL",
              },
            },
          },
        },
        labels: ["TEAM A", "TEAM B", "TEAM C", "TEAM D"],
      },
      series: [67, 84, 97, 61],
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
              type="radialBar"
              width="100%"
              height="800"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DataLabelChart;
