import { useRef, useState } from "react";

const UncontrolledRegistrationForms = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const genderRef = useRef();
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const gender = genderRef.current.value;
        const emailRegex = /gmail/;
        const passwordRegex = /[0-9]/;

        if ((emailRegex.test(email) && passwordRegex.test(password)) && (password === confirmPassword)) {
            const userForm = {
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                gender: gender
            };
            console.log(userForm, 'Valid Credentials');
            localStorage.setItem('userForm', JSON.stringify(userForm));
        } else {
            setError("Invalid Credentials");
            const userForm = {
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                gender: gender
            };
            console.log(userForm, 'Invalid Credentials');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '300px' }}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
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
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                        ref={passwordRef}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPwd" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPwd"
                        placeholder="Enter password"
                        name="confirmPswd"
                        ref={confirmPasswordRef}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender:</label>
                    <select className="form-control" id="gender" ref={genderRef}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                {error && <span style={{ color: "red" }}>{error}</span>}
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit</button>
            </form>
        </div>
    );
};

export default UncontrolledRegistrationForms;
