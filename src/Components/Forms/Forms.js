const FormComponent = () => {
    return(
        <>
        <form>
            <label>
                <input type="text" name="Name" placeholder="First Name"></input>
                <br></br>
                <input type="text" name="Email" placeholder="Email"></input>
                <br></br>
                <input type="text" name="Number" placeholder="Mobile Number"></input>
            </label>
        </form>
        </>
    )
}

export default FormComponent;