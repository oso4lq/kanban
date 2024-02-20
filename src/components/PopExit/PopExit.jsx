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
                                >Yes</PopExitYes>

                                <PopExitNo id="exitNo">
                                    <Link to={AppRoutes.HOME}>No, stay</Link>
                                </PopExitNo>

                            </PopExitFormGroup>
                        </div>
                    </PopExitBlock>
                </PopExitContainer>
            </PopExitDiv>
        </>
    )
}
export default PopExit;