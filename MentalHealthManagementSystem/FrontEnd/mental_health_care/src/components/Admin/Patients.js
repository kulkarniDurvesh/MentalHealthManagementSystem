import React,{useState} from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios'

createTheme('solarized', {
    text: {
        primary: 'white',
        secondary: '#d2b48c',
    },
    background: {
        default: '#1a1a1a',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#555555',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
}, 'dark');


const columns = [
    {
        name: 'Patient Name',
        selector: row => row.patientName
    },
    {
        name: 'Appointment Date',
        selector: row => row.appointmentDate
    },
    {
        name: 'mobile no',
        selector: row => row.mobileNo
    },
    {
        name: 'Payment Id',
        selector: row => row.paymentId
    },
    {
        name: 'Doctors Name',
        selector: row => row.doctorsName
    }
]

function Patients(props) {

    const baseURL = "http://localhost:9090/admin/"

  return (
    <div className="container">
            <DataTable
                theme="solarized"
                pagination
                highlightOnHover
                pointerOnHover
                columns={columns}
                data={props.data}
            />
        </div>
  )
}

export default Patients