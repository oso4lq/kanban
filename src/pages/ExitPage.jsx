import Button from "../components/Button/Button.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";
//import { PopExitBox, PopExitContainer, PopExitBlock } from "./PopExit.styled";

/*
<button className="pop-exit__exit-yes _hover01" id="exitYes">
    <a href="modal/signin.html">Yes</a>{" "}
</button>
<button className="pop-exit__exit-no _hover03" id="exitNo">
    <a href="main.html">No, stay</a>{" "}
</button>
*/

function ExitPage() {
    return <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
            <div className="pop-exit__block">
                <div className="pop-exit__ttl">
                    <h2>Log out?</h2>
                </div>
                <form className="pop-exit__form" id="formExit" action="#">
                    <div className="pop-exit__form-group">

                        <Button className="pop-exit__exit-yes" id="exitYes">
                            <Link to={AppRoutes.LOGIN}>YeS</Link>
                            {/* <a href="modal/signin.html">Yes</a>{" "} */}
                        </Button>

                        <Button $transparent className="pop-exit__exit-no" id="exitNo">
                            <Link to={AppRoutes.HOME}>No, staY</Link>
                            {/* <a href="main.html">No, stay</a>{" "} */}
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    </div>

}
export default ExitPage;