import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const DatapointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...DatapointValue);
    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint) => (
                    <ChartBar
                     key = {dataPoint.label}
                     value = {dataPoint.value}
                     maxvalue = {totalMaximum}
                     label = {dataPoint.label}
                    >
                    </ChartBar>
                ))}
        </div>
    )
}

export default Chart;