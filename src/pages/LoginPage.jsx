import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import Button from "../components/Common/Common.styled"
import { LogInRegisterDIV, LogInRegisterBox } from "../components/Common/Common.styled"
import { useState } from "react";

function LoginPage() {

    const [isAuth, setIsAuth] = useState('false');
    const toggleIsAuth = () => {
        //setIsAuth('true');
        setIsAuth((prev) => !prev)
    }

    return (
        <LogInRegisterDIV>
            <LogInRegisterBox>
                <p>Log In</p>
                <input type="email" name="" id="" placeholder="e-mail" />
                <input type="password" value="" placeholder="password" />
                <Button onClick={toggleIsAuth}>Enter</Button>
                
                <p>No account?</p>
                <Link to={AppRoutes.REGISTER}>Register</Link>
            </LogInRegisterBox>
        </LogInRegisterDIV>
    )
}

export default LoginPage