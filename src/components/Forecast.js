import React from "react";
import { Card, Image } from "react-bootstrap";
import Chart from "react-apexcharts";
import './Topbutton.module.css'

const Forecast = (props) => {

    // Prepare the data for the chart
    const chartOptions = {
        chart: {
            type: 'line',
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        xaxis: {
            categories: props.data.map(d => d.title),
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return `${value.toFixed(0)}°`;
                }
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return `${value.toFixed(0)}°`;
                }
            }
        },
        markers: {
            size: 2,
        },
    };

    const chartSeries = [{
        name: "Temperature",
        data: props.data.map(d => d.temp)
    }];

    return (
        <div>
            <div className="d-flex align-items-center justify-content-start mt-3">
                <p className="fs-6">{props.title}</p>
            </div>
            <hr/>
           
            <div className="d-flex align-content-center justify-content-between">
                {props.data.map((d,index)=>(
                    <div key={index} className="d-flex flex-column align-items-center justify-content-center">
                        <p className='fw-bold' style={{fontSize:'smaller'}}>{d.title}</p>
                        <Image
                            width={60}
                            src={d.icon}
                            className="my-1"
                        />
                        <p className='fw-bold fst-italic' style={{fontSize:'small'}}>{`${d.temp.toFixed()}°`}</p>
                    </div>
                ))}
            </div>

            <Card className="mt-4" style={{backgroundColor:'whitesmoke'}}>
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="line"
                    height={200}
                />
            </Card>
        </div>
    );
};

export default Forecast;
