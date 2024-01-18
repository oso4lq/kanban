import { Link } from "react-router-dom";
import { AppRoutes } from '../lib/appRoutes';
import Button from "../components/Common/Common.styled";
import { LogInRegisterDIV, LogInRegisterBox, Modal, ModalBlock, ModalForm, ModalFormGroup, ModalInput } from "../components/Common/Common.styled";

function RegisterPage() {
    return (
        <LogInRegisterDIV>
            <LogInRegisterBox>
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <h2>Sign Up</h2>
                        </div>
                        <ModalForm id="formLogIn" action="#">
                            <ModalInput className="modal__input" type="text" name="username" id="formusername" placeholder="Username" />
                            <ModalInput className="modal__input" type="email" name="login" id="formlogin" placeholder="Your e-mail" />
                            <ModalInput className="modal__input" type="password" name="password" id="formpassword" placeholder="Password" />
                            <Button to={AppRoutes.HOME} id="btnEnter">Enter</Button>
                            {/* <button className="modal__btn-enter _hover01" id="btnEnter"><a href="../main.html">Enter</a></button> */}
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