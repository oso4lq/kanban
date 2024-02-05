import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import Button from "../components/Common/Common.styled"
import { LogInRegisterDIV, LogInRegisterBox, Modal, ModalBlock, ModalForm, ModalFormGroup, ModalInput } from "../components/Common/Common.styled"
import { useState } from "react";
import { login } from "../api";
import { useUser } from "../hooks/useUser";

function LoginPage() {

    const {loginUser} = useUser();

    const loginForm = {
        login: '',
        password: '',
    };
    const [loginData, setLoginData] = useState(loginForm);

    const handleLogin = async (e) => {
        e.preventDefault()
        await login(loginData).then((data) => {
            //console.log(data);
            console.log(data.user);
            loginUser(data.user)
        })
            .catch((error) => {
                alert(error);
                console.warn(error)
            })
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };


    return (
        <LogInRegisterDIV>
            <LogInRegisterBox>
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <h2>Sign In</h2>
                        </div>
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

                            <Button id="btnEnter" onClick={handleLogin}>Enter</Button>

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
    )
}

export default LoginPage