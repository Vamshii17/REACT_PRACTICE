import { useState } from "react";

const ControlledForms = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState({
        usernameError: null,
        passwordError: null,
        genderError: null,
    });

    const usernameHandler = (event) => {
        const userEnteredUsername = event.target.value;
        setUsername(userEnteredUsername);
        console.log("userEnteredUsername:", userEnteredUsername);
        const usernameRegex = /^[a-zA-Z]+$/;
        const testCasePassed = usernameRegex.test(userEnteredUsername);
        if (testCasePassed) {
            setFormErrors({ ...formErrors, usernameError: null });
        } else {
            setFormErrors({ ...formErrors, usernameError: "Invalid Username" });
        }
    };

    const passwordHandler = (event) => {
        const userEnteredPassword = event.target.value;
        setPassword(userEnteredPassword);
        console.log("userEnteredPassword:", userEnteredPassword);
        const testCasePassed = userEnteredPassword.length <= 10;
        if (testCasePassed) {
            setFormErrors({ ...formErrors, passwordError: null });
        } else {
            setFormErrors({ ...formErrors, passwordError: "Password must be 10 characters or less" });
        }
    };

    const genderHandler = (event) => {
        const userEnteredGender = event.target.value;
        setGender(userEnteredGender);
        console.log("userEnteredGender:", userEnteredGender);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        clientPostServer();
    };

    const clientPostServer = () => {
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            }),
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.message) {
                    setLoginSuccess(false);
                } else {
                    setLoginSuccess(true);
                }
                console.log(response, "API Response");
            });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
            <form onSubmit={handleSubmit} style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
                <div className="mb-3 mt-3">
                    <label htmlFor="username" className="form-label">
                        UserName:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        name="name"
                        value={username}
                        onChange={usernameHandler}
                    />
                    {formErrors.usernameError && <span style={{ color: "red" }}>{formErrors.usernameError}</span>}
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
                        value={password}
                        onChange={passwordHandler}
                    />
                    {formErrors.passwordError && <span style={{ color: "red" }}>{formErrors.passwordError}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="gender" className="form-label">
                        Gender:
                    </label>
                    <select value={gender} onChange={genderHandler} className="form-control" id="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                {!formErrors.usernameError && !formErrors.passwordError && (
                    <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                        Submit
                    </button>
                )}
                {loginSuccess && <h2 style={{ color: "green", textAlign: "center", marginTop: "20px" }}>Welcome {username}!</h2>}
            </form>
        </div>
    );
};

export default ControlledForms;
