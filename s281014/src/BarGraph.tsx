import React, {useContext} from 'react';
// @ts-ignore
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
// @ts-ignore
import { Bar } from 'react-chartjs-2';
// @ts-ignore
import faker from 'faker';
import {StateContext} from "./App";
import {useNavigate} from "react-router-dom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};


export function BarGraph() {
    const {state,dispatch} = useContext(StateContext)
    const Navigate = useNavigate()

    const labels: string[]=[]
    // @ts-ignore
    for (let i=0; i<state.markersSel?.length; i++) {
        // @ts-ignore
        if (!labels.includes(state.markersSel[i].category)) {
            // @ts-ignore
            labels.push(state.markersSel[i].category)
        }
    }

    const data = {
        labels,
        datasets: [
            {
                label: '% Tasso criminalità',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    if (labels.length!==0) {
        return (
            <Bar options={options} data={data}/>
        )
    } else {
        Navigate("/")
        alert("Selezionare un punto sulla mappa")
        return null
    }
}
