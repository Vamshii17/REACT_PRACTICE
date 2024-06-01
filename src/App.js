function Hello(){
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
      employees.map((eachEmployees)=>{
        return(
              <div>
                <h3>{eachEmployees.name}</h3>
                <h3>{eachEmployees.salary}</h3>
              </div>
            )
      })
    }
    </>
  )
}

export default Hello;