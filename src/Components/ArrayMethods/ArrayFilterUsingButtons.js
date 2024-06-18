import { Component } from "react";
import "./ArrayStyle.css"

class FilterMethodUsingButton extends Component{
    state={
        employees : [
            {
                name: "Vamshi",
                role: "Full Stack Developer",
                salary: 200000
            },
            {
                name: "Krishna",
                role: "React Developer",
                salary: 150000
            },
            {
                name: "Sai",
                role: "Front End Developer",
                salary: 100000
            },
            {
                name: "Venkat",
                role: "Back End Developer",
                salary: 150000
            }
        ],
        filteredEmployees : []
    }
    filterByRole = (role) => {
        if(role === "All"){
            this.setState({
                filteredEmployees : this.state.employees
            },()=>{})
        }else{
            const filterEmployeebyRole = this.state.employees.filter(eachEmployee=>eachEmployee.role===role)
            this.setState({ 
                filteredEmployees : filterEmployeebyRole
            },()=>{})
        }
    }
    render(){
        return(
            <>
            <button onClick={()=>this.filterByRole("Full Stack Developer")}>Full Stack Developer</button>
            <button onClick={()=>this.filterByRole("React Developer")}>React Developer</button>
            <button onClick={()=>this.filterByRole("Front End Developer")}>Front End Developer</button>
            <button onClick={()=>this.filterByRole("Back End Developer")}>Back End Developer</button>
            <button onClick={()=>this.filterByRole("All")}>All</button>
            {
                        <table>
                        <tr>
                            <th>{"Name"}</th>
                            <th>{"Role"}</th>
                            <th>{"Salary"}</th>
                        </tr>
                        {
                            this.state.filteredEmployees.map(eachEmployee => (
                            <>
                                <tr>
                                    <td>{eachEmployee.name}</td>
                                    <td>{eachEmployee.role}</td>
                                    <td>{eachEmployee.salary}</td>
                                </tr>
                            </>
                            )
                            )
                        }
                    </table>
            }
            </>
        )
    }
}
export default FilterMethodUsingButton;