import { useState } from "react";

const ControlledRegistrationForms = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");
    const [formErrors, setFormErrors] = useState({
        usernameError: null,
        passwordError: null,
        confirmPasswordError: null,
        genderError: null,
    });

    const usernameHandler = (event) => {
        const userEnteredUsername = event.target.value;
        setUsername(userEnteredUsername);
        console.log("userEnteredUsername:", userEnteredUsername);
        const usernameRegex = /[a-z]/;
        const usernameTestCasePassed = usernameRegex.test(userEnteredUsername);
        if (usernameTestCasePassed) {
            setFormErrors({ ...formErrors, usernameError: null });
        } else {
            setFormErrors({ ...formErrors, usernameError: "Invalid Username" });
        }
    };

    const passwordHandler = (event) => {
        const userEnteredPassword = event.target.value;
        setPassword(userEnteredPassword);
        console.log("userEnteredPassword:", userEnteredPassword);
        const passwordTestCasePassed = userEnteredPassword.length <= 10;
        if (passwordTestCasePassed) {
            setFormErrors({ ...formErrors, passwordError: null });
        } else {
            setFormErrors({ ...formErrors, passwordError: "Password must be 10 characters or less" });
        }
    };

    const confirmPasswordHandler = (event) => {
        const userEnteredConfirmPassword = event.target.value;
        setConfirmPassword(userEnteredConfirmPassword);
        console.log("userEnteredConfirmPassword:", userEnteredConfirmPassword);
        const confirmPasswordTestCasePassed = userEnteredConfirmPassword === password;
        if (confirmPasswordTestCasePassed) {
            setFormErrors({ ...formErrors, confirmPasswordError: null });
        } else {
            setFormErrors({ ...formErrors, confirmPasswordError: "Passwords do not match" });
        }
    };

    const genderHandler = (event) => {
        const userEnteredGender = event.target.value;
        setGender(userEnteredGender);
        console.log("userEnteredGender:", userEnteredGender);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const usernameTestCasePassed = /[a-z]/.test(username);
        const passwordTestCasePassed = password.length <= 10;
        const confirmPasswordTestCasePassed = confirmPassword === password;

        if (usernameTestCasePassed && passwordTestCasePassed && confirmPasswordTestCasePassed) {
            const userForm = {
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                gender: gender,
            };
            console.log(userForm, "Valid Credentials");
            localStorage.setItem('userForm', JSON.stringify(userForm));
        } else {
            const userForm = {
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                gender: gender,
            };
            console.log(userForm, "Invalid Credentials");
        }
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
                <div className="mb-3">
                    <label htmlFor="confirmPwd" className="form-label">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPwd"
                        placeholder="Enter password again"
                        name="confirmPswd"
                        value={confirmPassword}
                        onChange={confirmPasswordHandler}
                    />
                    {formErrors.confirmPasswordError && <span style={{ color: "red" }}>{formErrors.confirmPasswordError}</span>}
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
                {!formErrors.usernameError && !formErrors.passwordError && !formErrors.confirmPasswordError && (
                    <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
};

export default ControlledRegistrationForms;
