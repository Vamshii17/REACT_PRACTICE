import React from "react";

const FilterMethodinTable = () => {
    const employees = [
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
    ];

    const filteredEmployees = employees.filter(eachEmployee => eachEmployee.salary > 100000);

    return (
        <>
        <table>
            <tr>
                <th>{"Name"}</th>
                <th>{"Salary"}</th>
            </tr>
            {
                filteredEmployees.map(eachEmployee => (
                <>
                    <tr>
                        <td>{eachEmployee.name}</td>
                        <td>{eachEmployee.salary}</td>
                    </tr>
                </>
                )
                )
            }
        </table>
        </>
    );
};

export default FilterMethodinTable;
