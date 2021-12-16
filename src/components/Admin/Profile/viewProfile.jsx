import React,{useEffect, useState} from "react";
import SideBar from "../Navbar/sidebar";
import { Link } from 'react-router-dom';
import axios from "axios";


const ViewPro = () => {

    const [admin, setAdmin] = useState([]);
    const [bank, setBank] = useState([]);

    useEffect(()=>{
        axios.get( 'http://127.0.0.1:8000/api/admin/viewprofile').then(response=>{
            if(response.data.status === 200){
                setAdmin(response.data.admin);
                setBank(response.data.bank);
            }
        });
    
    }, []);

    return(
    <div>
        <link href="/assets/admin/css/profile.css" rel="stylesheet" type="text/css" />
        
    <SideBar/>
    <div id="profile">
        <br/>
        <table className="table table-striped table-hover table-bordered border-dark" >
        <tbody>
        <tr>
            <th style={{textAlign: 'center', backgroundColor: '#373b8b', color: 'white'}} colSpan="3"> Shakib's Information </th>
        </tr>
        <tr>
            <th>First Name</th>
            <td>{bank.firstname}</td>
            <td rowSpan="5" style={{textAlign: 'center'}}>
                <img src={bank.userprofilepicture}
                style={{width: '180px', height:'180px'}} alt="" /></td>
        </tr>

        <tr>
            <th>Last Name</th>
            <td>{bank.lastname}</td>
        </tr>

        <tr>
            <th> Gender </th>
            <td>{bank.gender}</td>
        </tr>

        <tr>
            <th> Date Of Birth </th>
            <td>{bank.dateofbirth}</td>
        </tr>

        <tr>
            <th> Phone </th>
            <td>{bank.phone}</td>
        </tr>

        <tr>
            <th> Email </th>
            <td colSpan="2">{bank.email}</td>
        </tr>

        <tr>
            <th> Nid No </th>
            <td colSpan="2">{bank.nid}</td>
        </tr>

        <tr>
            <th>Admin Name</th>
            <td colSpan="2">{admin.adminname}</td>
        </tr>

        <tr>
            <th>Password</th>
            <td colSpan="2">{admin.password}</td>
        </tr>

        <tr>
            <th>Salary</th>
            <td colSpan="2">{admin.adminsalary}</td>
        </tr>
        </tbody>
        </table>


        <Link to={"/admin/editprofile/"+bank.id+"/"+admin.id} style={{textTransform: 'uppercase', textAlign: 'center', marginRight: '01px', float: 'right'}}> <input className="btn1" type="submit" name="Edit" value="edit"/> </Link>
        <br/>
        <br/>
    </div>
</div>

    );
}

export default ViewPro;