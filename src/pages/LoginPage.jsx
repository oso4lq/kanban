import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import { ErrorText, LoginRegisterTitle, ModalBtnEnter, ModalBtnErr } from "../components/Common/Common.styled"
import { LogInRegisterDIV, LogInRegisterBox, Modal, ModalBlock, ModalForm, ModalFormGroup, ModalInput } from "../components/Common/Common.styled"
import { useState } from "react";
import { login } from "../api";
import { useUser } from "../hooks/useUser";

import { GlobalStyle } from "../Global/Global.styled";

function LoginPage() {

    const { loginUser } = useUser();

    const loginForm = {
        login: '',
        password: '',
    };
    const [loginData, setLoginData] = useState(loginForm);

    const [hasError, setHasError] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (loginData.login === "" || loginData.password === "") {
                setHasError(true);
                throw new Error('Please fill in all the inputs.');
            }
            await login(loginData).then((data) => {
                console.log(data.user);
                loginUser(data.user)
            });
        } catch (error) {
            setHasError(error.message);
            console.error(error);
            setTimeout(() => {
                setHasError(false);
            }, 3000);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    return (
        <>
            <GlobalStyle />
            <LogInRegisterDIV>
                <LogInRegisterBox>
                    <Modal>
                        <ModalBlock>
                            <LoginRegisterTitle>
                                <h2>Sign In</h2>
                            </LoginRegisterTitle>
                            <ModalForm id="formLogIn" action="#">

                                <ModalInput className="modal__input" type="text" id="formlogin" placeholder="Login"
                                    value={loginData.login}
                                    onChange={handleInputChange}
                                    name="login"
                                    label="Login"
                                />
                                <ModalInput className="modal__input" type="password" id="formpassword" placeholder="Password"
                                    value={loginData.password}
                                    onChange={handleInputChange}
                                    name="password"
                                    label="Password"
                                />

                                {hasError ? (
                                    <>
                                        <ErrorText>{hasError}</ErrorText>
                                        <ModalBtnErr
                                            disabled
                                            id="btnEnter"
                                            onClick={handleLogin}
                                        >
                                            Enter
                                        </ModalBtnErr>
                                    </>
                                ) : (
                                    <ModalBtnEnter
                                        id="btnEnter"
                                        onClick={handleLogin}
                                    >
                                        Enter
                                    </ModalBtnEnter>
                                )}

                                <ModalFormGroup>
                                    <p>abirvalg</p>
                                    <p>No account?</p>
                                    <Link to={AppRoutes.REGISTER}>Sign up here</Link>
                                </ModalFormGroup>
                            </ModalForm>
                        </ModalBlock>
                    </Modal>
                </LogInRegisterBox>
            </LogInRegisterDIV>
        </>
    )
}

export default LoginPage