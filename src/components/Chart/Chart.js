import "./Chart.css";
import ChartBar from "./ChartBar.js";
const Chart = (props) => {
  const maxValuesArray = props.dataPoints.map((element) => element.value);
  const maximumValue = Math.max(...maxValuesArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
        />
      ))}
    </div>
  );
};
export default Chart;
