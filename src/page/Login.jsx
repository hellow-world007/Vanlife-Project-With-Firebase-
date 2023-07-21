import React from "react"
import { useLocation,useNavigate } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [ loginFormData, setLoginFormData ] = React.useState({ email: "", password: "" })
    const [ status, setStatus ] = React.useState('idle')
    const [ error, setError ] = React.useState(null)

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/host";

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(from, {replace: true} )
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // const message = location.state?.message;

    return (
        <div className="login-container">
            
            {/* { message && <h3> {message} </h3> }
            <h1>Sign in to your account</h1>
            { error?.message && <h1>error.message</h1> } */}

            {
                location.state?.message &&
                    <h3 className="login-error">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            {
                error?.message &&
                    <h3 className="login-error">{error.message}</h3>
            }

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === 'submitting'}>
                   {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )

}