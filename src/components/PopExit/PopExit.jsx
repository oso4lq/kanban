// import Button from "../Button/Button.styled";
import { GlobalStyle } from "../../Global/Global.styled.js";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import { PopExitBlock, PopExitContainer, PopExitDiv, PopExitFormGroup, PopExitNo, PopExitTtl, PopExitYes } from "./PopExit.styled.js";

function PopExit() {
    const { logoutUser } = useUser()
    return (
        <>
            <GlobalStyle />
            <PopExitDiv id="popExit">
                <PopExitContainer>
                    <PopExitBlock>
                        <PopExitTtl>
                            <h2>Log out?</h2>
                        </PopExitTtl>
                        <div id="formExit" action="#">
                            <PopExitFormGroup>

                                <PopExitYes id="exitYes"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        logoutUser();
                                    }}
                                >
                                    Yes
                                </PopExitYes>
                                <PopExitNo id="exitNo">
                                    <Link to={AppRoutes.HOME}>No, stay</Link>
                                </PopExitNo>

                                {/* <Link to={AppRoutes.LOGIN}>
                                    <Button className="pop-exit__exit-yes" id="exitYes">
                                        Yes
                                    </Button>
                                </Link>

                                <Link to={AppRoutes.HOME}>
                                    <Button $transparent className="pop-exit__exit-no" id="exitNo">
                                        No, stay
                                    </Button>
                                </Link> */}

                            </PopExitFormGroup>
                        </div>
                    </PopExitBlock>
                </PopExitContainer>
            </PopExitDiv>
        </>
    )
}
export default PopExit;