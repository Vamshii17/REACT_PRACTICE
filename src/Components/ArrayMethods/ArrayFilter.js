import React from "react";

const FilterMethod = () => {
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
            {filteredEmployees.map(eachEmployee => (
                <>
                    <h2>{eachEmployee.name}</h2>
                    <h3>{eachEmployee.salary}</h3>
                </>
            ))}
        </>
    );
};

export default FilterMethod;
