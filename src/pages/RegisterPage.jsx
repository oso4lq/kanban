import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import Button from "../components/Common/Common.styled"
import { LogInRegisterDIV, LogInRegisterBox } from "../components/Common/Common.styled"

function RegisterPage() {
    return (
        <LogInRegisterDIV>
            <LogInRegisterBox>
                <p>Registration Form</p>
                <input type="text" placeholder="username" />
                <input type="email" name="" id="" placeholder="e-mail" />
                <input type="password" value="" placeholder="password" />
                <Button>Register</Button>
                <p>Already have an account?</p>
                <Link to={AppRoutes.LOGIN}>Log in</Link>
            </LogInRegisterBox>
        </LogInRegisterDIV>
    )
}

export default RegisterPage