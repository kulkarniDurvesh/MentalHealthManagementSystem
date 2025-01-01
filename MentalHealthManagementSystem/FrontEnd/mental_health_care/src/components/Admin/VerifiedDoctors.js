import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';


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

function VerifiedDoctors(props) {

  const columns = [
    {
      name: 'Name',
      selector: row => row.doctorName
    },
    {
      name: 'email',
      selector: row => row.email
    },
    {
      name: 'gender',
      selector: row => row.gender
    },
    {
      name: 'mobile no',
      selector: row => row.mobileNo
    },
    {
      name: 'specialization',
      selector: row => row.specialization
    },
    {
      name: 'userName',
      selector: row => row.userName
    },
    {
      name: 'verified',
      selector: row => row.verified.toString()
    }
  ]

  return (
    <>
      <div className="container">
        <DataTable
          theme="solarized"
          columns={columns}
          data={props.data}
          pagination
          expandableRows
     
        />
      </div>
    </>
  )
}

export default VerifiedDoctors