import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import { LogInRegisterDIV, LogInRegisterBox } from "../components/Common/Common.styled"

function NotFoundPage() {

    return (
        <LogInRegisterDIV>
            <LogInRegisterBox>
                <p>This page doesn&apos;t exist.</p>
                <Link to={AppRoutes.LOGIN}>Return to Log in page</Link>
            </LogInRegisterBox>
        </LogInRegisterDIV>
    )
}

export default NotFoundPage