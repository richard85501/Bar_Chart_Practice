import React, { useEffect } from 'react'
import { Bar,CategoryScale,charts } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

function Barchart(props) {

    const {barData} = props

    // for(const key in barData.title){
    //     labels.push(barData.title[key])
    // }
    console.log('bar',barData)

    const state = {
        labels: [barData.title[0],barData.title[1],barData.title[2],barData.title[3],barData.title[4],barData.title[5]],
        datasets: [
            {
            label: Object.keys(barData)[1],
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            data: barData.characters
            },
            {
            label: Object.keys(barData)[2],
            backgroundColor: 'red',
            borderColor: 'rgba(0,0,0,1)',
            data: barData.planets
            },
            {
            label: Object.keys(barData)[3],
            backgroundColor: 'green',
            borderColor: 'rgba(0,0,0,1)',
            data: barData.species
            },
            {
            label:Object.keys(barData)[4],
            backgroundColor: 'blue',
            borderColor: 'rgba(0,0,0,1)',
            data: barData.starships
            },
        ]
    }

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
            position:'bottom'
            }
        }
    }

  return (
    <Bar options={options} data={state} />
  )
}

export default Barchart