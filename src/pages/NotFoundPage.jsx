import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import { LogInRegisterDIV, ModalBlock } from "../components/Common/Common.styled"
import { GlobalStyle } from "../Global/Global.styled";

function NotFoundPage() {

    return (
        <>
            <GlobalStyle />
            <LogInRegisterDIV>
                <ModalBlock>
                    <h2>This page doesn&apos;t exist.</h2>
                    <ModalBlock>
                        <Link to={AppRoutes.LOGIN}>Return to Log in page</Link>
                    </ModalBlock>
                </ModalBlock>
            </LogInRegisterDIV>
        </>
    )
}

export default NotFoundPage