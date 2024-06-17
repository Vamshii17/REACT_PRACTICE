
const MapMethod=()=>{
    const employees=[{
        name:"Vamshi",
        role:"Full Stack Developer",
        salary:200000
      },{
        name:"Krishna",
        role:"React Developer",
        salary:150000
      },{
        name:"Sai",
        role:"Front End Developer",
        salary:100000
      },{
        name:"Venkat",
        role:"Back End Developer",
        salary:150000
      }]
    return(
        <>
        {
            employees.map(eachEmployee=>{
                return(
                    <>
                    <h2>{eachEmployee.name}</h2>
                    <h3>{eachEmployee.role}</h3>
                    <h4>{eachEmployee.salary}</h4>
                    </>
                )
            })
        }
        </>
    )
}
export default MapMethod;