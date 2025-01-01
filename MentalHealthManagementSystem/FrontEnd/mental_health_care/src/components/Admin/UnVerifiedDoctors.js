import React, { useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios'
import swal from 'sweetalert';



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





function UnVerifiedDoctors(props) {

    const baseURL = "http://localhost:9090/admin/"

    const [doc, setDoc] = useState('');
    const [row, setRow] = useState('');

    const documentsHandler = async () => {

        axios.get(baseURL + "document/" + row.userName, {

            responseType: 'blob',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        }).then((response) => {
            
            const link = document.createElement('a');
            const url = URL.createObjectURL(response.data);
            console.log(url);
            link.href = url;
            link.download = 'documents.pdf';
            link.click();


        }).catch((error) => {
            console.log(error);
            swal("Documents Not Uploaded Yet");
        })
    }


    


    const columns = [
        {
            name: 'documents ',
            cell: () => <button onClick={documentsHandler} >docs</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
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
        },
        {
            name: 'verify ',
            cell: () => <button onClick={handleVerify}>Verify</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: 'Delete',
            cell: () =><button onClick={handleDelete}>Delete</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true
        }
    ]


    const handleChange = (state) => {
        console.log(state.selectedRows[0])
        setRow(state.selectedRows[0])
    }

    const handleDelete = ()=>{
        console.log(row)
        const body = new FormData();
        body.append('userName', row.userName)

        axios.post(baseURL+"delete",body,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response)=>{
            console.log(response.data)
            swal(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleVerify = () => {

        const body = new FormData();
        console.log(row.userName)
        body.append('userName', row.userName)

        axios.post(baseURL + "verify", body, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response)
                swal("Verified Successfully")
            })
            .catch((error) => {
                console.log(error);
                swal("Something went wrong")
            })
    }
    return (
        <div className="container">
            <DataTable
                theme="solarized"
                pagination
                highlightOnHover
                pointerOnHover
                columns={columns}
                data={props.data}
                selectableRows
                expandableRows
                onSelectedRowsChange={handleChange}
            />
        </div>
    )
}

export default UnVerifiedDoctors