import { Link } from "react-router-dom";
import { AppRoutes } from '../lib/appRoutes';
import Button from "../components/Common/Common.styled";
import { LogInRegisterDIV, LogInRegisterBox, Modal, ModalBlock, ModalForm, ModalFormGroup, ModalInput } from "../components/Common/Common.styled";
import { register } from "../api";
import { useState } from "react";
import { useUser } from "../hooks/useUser";

function RegisterPage() {

    const { loginUser } = useUser();

    const registerForm = {
        name: '',
        login: '',
        password: '',
    };
    const [registerData, setRegisterData] = useState(registerForm);

    const handleRegister = async (e) => {
        e.preventDefault()
        await register(registerData).then((data) => {
            console.log(data);
            console.log(data.user);
            loginUser(data.user)
        })
            .catch((error) => {
                alert(error);
                console.warn(error);
            })
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setRegisterData({
            ...registerData,
            [name]: value,
        });
    };

    return (
        <LogInRegisterDIV>
            <LogInRegisterBox>
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <h2>Sign Up</h2>
                        </div>
                        <ModalForm id="formLogIn" action="#">

                            <ModalInput className="modal__input" type="text" id="formusername" placeholder="Username"
                                value={registerData.name}
                                onChange={handleInputChange}
                                name="name"
                                label="Username"
                            />
                            <ModalInput className="modal__input" type="text" id="formlogin" placeholder="Login"
                                value={registerData.login}
                                onChange={handleInputChange}
                                name="login"
                                label="Login"
                            />
                            <ModalInput className="modal__input" type="password" id="formpassword" placeholder="Password"
                                value={registerData.password}
                                onChange={handleInputChange}
                                name="password"
                                label="Password"
                            />

                            <Button id="btnEnter" onClick={handleRegister}>Enter</Button>

                            <ModalFormGroup>
                                <p>Already have an account?</p>
                                <Link to={AppRoutes.LOGIN}>Sign in here</Link>
                            </ModalFormGroup>
                        </ModalForm>
                    </ModalBlock>
                </Modal>
            </LogInRegisterBox>
        </LogInRegisterDIV>
    )
}

export default RegisterPage