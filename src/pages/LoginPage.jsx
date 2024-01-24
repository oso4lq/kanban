import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import Button from "../components/Common/Common.styled"
import { LogInRegisterDIV, LogInRegisterBox, Modal, ModalBlock, ModalForm, ModalFormGroup, ModalInput } from "../components/Common/Common.styled"
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
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <h2>Sign In</h2>
                        </div>
                        <ModalForm id="formLogIn" action="#">
                            <ModalInput className="modal__input" type="email" name="login" id="formlogin" placeholder="Your e-mail" />
                            <ModalInput className="modal__input" type="password" name="password" id="formpassword" placeholder="Password" />
                            <Button to={AppRoutes.HOME} id="btnEnter" onClick={toggleIsAuth}>Enter</Button>
                            {/* <button className="modal__btn-enter _hover01" id="btnEnter"><a href="../main.html">Enter</a></button> */}
                            <ModalFormGroup>
                                <p>No account?</p>
                                <Link to={AppRoutes.REGISTER}>Sign up here</Link>
                            </ModalFormGroup>
                        </ModalForm>
                    </ModalBlock>
                </Modal>
            </LogInRegisterBox>
        </LogInRegisterDIV>
    )
}

export default LoginPage