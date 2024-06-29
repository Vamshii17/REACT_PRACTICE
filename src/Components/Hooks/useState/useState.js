import { useState } from "react";
import CounterApp from "./counterApp";

const UseStateComponent=()=>{
    const[name, setName]=useState("Vamshi")
    const[employee, setEmployee]=useState({
        name: "Sandeep",
        salary: 100000,
        role: "React Developer"
    })
    const[isEmployed, setIsEmployed]=useState(false)

    const changeName=()=>{
        setName("VamshiKrishna")
    }
    const changeEmployeeDetails=()=>{
        setEmployee({...employee, role: "Python Developer"})
    }
    const changeEmployeeStatus=()=>{
        setIsEmployed(!isEmployed)
    }

    return(
        <>
        <h3>Profile Details</h3>
        <h4>User Name: {name}</h4>
        <button onClick={changeName}>Change Name</button>
        <h4>{isEmployed ? "Yes, he is a employee" : "No, he is not a employee"}</h4>
        <button onClick={changeEmployeeStatus}>Change Employee Status</button>
        {isEmployed && <CounterApp />}
        <div>
            <h3>Employee Details</h3>
            <h4>{employee.name}</h4>
            <h4>{employee.salary}</h4>
            <h4>{employee.role}</h4>
            <button onClick={changeEmployeeDetails}>Change Employee Details</button>
        </div>
        </>
    )
}
export default UseStateComponent;