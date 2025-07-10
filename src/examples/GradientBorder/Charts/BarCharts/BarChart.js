import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function BarChart({ barChartData, barChartOptions }) {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData(barChartData);
    setChartOptions(barChartOptions);
  }, [barChartData, barChartOptions]);

  if (
    !chartData ||
    chartData.length === 0 ||
    !chartData[0].data ||
    chartData[0].data.length === 0
  ) {
    return <div>Loading chart...</div>;
  }

  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type="bar"
      width="100%"
      height="100%"
    />
  );
}

export default BarChart;
