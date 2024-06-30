import { useRef, useState } from "react";


const UncontrolledForms=()=>{
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const handleSubmit=(event)=>{
        event.preventDefault()
        const email = emailRef.current.value
        const password = Number(passwordRef.current.value)
        const emailRegex=/gmail/
        const passwordRegex=/[0-9]{4}/
        if(emailRegex.test(email) && passwordRegex.test(password)){
            const userForm = {
                email : email,
                password : password
            }
            console.log(userForm, 'vaild Credentials')
            localStorage.setItem('userForm', JSON.stringify(userForm));
        }else{
            setError("Invaild Credentials")
            const userForm = {
                email : email,
                password : password
            }
            console.log(userForm, 'Invaild Credentials')

        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                Email:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    ref={emailRef}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                Password:
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                    ref={passwordRef}
                />
            </div>
            {error && <span style={{color: "red"}}>Invaild Credentials</span>}
            <div className="form-check mb-3">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" />{" "}
                Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
        </form>
        </>
    )
}
export default UncontrolledForms;