import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router';
import Admin_nav from './Admin_nav';
import './Admin.css';
import MaterialTable from 'material-table';

const AdminPanel = () => {
    const history=useHistory();
    const [users,setusers]=useState([]);
    useEffect(async() => {
        try{
            const res=await fetch("/registered_data",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                    }
            });
            const data=await res.json();
         
            setusers(data);
            if(res.status!=200){
                history.push("/admin");
            }

        }catch(e){
            console.log(e);
        }

    }, [])
    const data=users
        
    console.log(data);
    const columns=[
        { title: "Id", render: rowData => rowData.tableData.id + 1 },
        {title:'Name',field:'name'},
        {title:'Email',field:'email'},
        {title:'Phone no',field:'phone'},
        {title:'Date of Birth',field:'dob'},
        {title:'Gender',field:'gender'},
        {title:'Address',field:'add'},
        {title:'Assocaition with college',field:'association'},
        {title:'Department',field:'dept'},
        {title:'Year of Passing',field:'passingYear'},
        {title:'Organisation',field:'organisation'},
        {title:'Designation',field:'designation'},
        {title:'Area of expert',field:'areaofexpert'}
      
        

    ]
var temp=0;
const all=[10,50,users.length];

    return (
        <>
            <Admin_nav/>
            <div className="panel_body">
                <div className="container-fluid table-bg">
        
                <MaterialTable
                rowsPerPageOptions={all}
                    options={{
                        exportButton: true,
                        filtering: true

                      }}
                title="Alumni Registration"
                    data={users}
                    columns={columns}
                />
                </div>
            </div>
        </>
    )
}

export default AdminPanel
