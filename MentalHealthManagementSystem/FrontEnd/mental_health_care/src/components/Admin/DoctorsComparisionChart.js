import React,{useEffect,useState} from 'react'
import { Chart } from 'react-google-charts';
import axios from 'axios';


const options = {
    title: "Available Doctors",
    backgroundColor:'#313e4f',
    color:'white',
    titleTextStyle: { color: '#FFF' },
    legendTextStyle: { color: '#FFF' }
};

function DoctorsComparisionChart({dataD}) {

    const data = [
        ["Task", "Hours per Day"],
        ["MD", parseInt(dataD.md)],
        ["pyschiatrist", parseInt(dataD.pyschiatrist)],
        ["counsellor", parseInt(dataD.counsellor)],
        ["therapist", parseInt(dataD.therapist)]
    ];

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"500px"}
            />
        </div>
    )
}

export default DoctorsComparisionChart