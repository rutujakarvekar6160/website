import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signup", {
                email,
                password
            });

            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                navigate("/", { state: { id: email } });
                alert("Thank Yous So Much for SignUp  ... !")
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }
    };

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Signup</button>
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/login">Login Page</Link>
        </div>
    );
}

export default Signup;
