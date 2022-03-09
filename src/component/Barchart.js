import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import {getData} from '../api/api'

function Barchart() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getData().then(results=>{
            let tmpData = {
                labels: [],
                datasets: [],
            };

            const labels = ['characters','planets','species','starships'];
            const color = ['#6369D1','#60E1E0','#D8D2E1','#B88E8D'];

            labels.forEach((element,idx)=>{
                let curdata = [];
                results.forEach((elementTwo)=>{
                    curdata.push(elementTwo[element].length);
                    if(tmpData.labels.length < results.length){
                        tmpData.labels.push(elementTwo.title);
                    };
                });
                tmpData.datasets.push({
                    label: element,
                    backgroundColor: color[idx],
                    data: curdata,
                    pointStyle:'rect',
                    barPercentage: 0.5,
                });
            });
            setData(tmpData);
        });
    }, []);

    const options = {
        responsive: true,
        scales: {
            yAxes: {
            stacked: true,
            ticks:{beginAtZero:true}
            },
            xAxes: {
            stacked: true
            }
        },
        plugins:{
            legend:{
                position:'bottom',
                labels :{
                    usePointStyle: true,
                }
            }
        }
    }

  return (
    <div>
        {data.length !== 0 ? <Bar options={options} data={data} /> : 'Loading...'}
    </div>
  )
}

export default Barchart