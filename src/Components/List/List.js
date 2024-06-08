const ListComponent = (prop) => {
    const {list} = prop
    return(
        <div>
            <ol>
                {
                    list.map((eachPlayer)=>{
                        return <>
                        <li>{eachPlayer}</li>
                        </>
                    })
                }
            </ol>
        </div>
    )
}

export default ListComponent;