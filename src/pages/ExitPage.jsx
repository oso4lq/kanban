import Button from "../components/Button/Button.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

function ExitPage() {
    return <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
            <div className="pop-exit__block">
                <div className="pop-exit__ttl">
                    <h2>Log out?</h2>
                </div>
                <form className="pop-exit__form" id="formExit" action="#">
                    <div className="pop-exit__form-group">

                        <Link to={AppRoutes.LOGIN}>
                            <Button className="pop-exit__exit-yes" id="exitYes">
                                Yes
                            </Button>
                        </Link>

                        <Link to={AppRoutes.HOME}>
                            <Button $transparent className="pop-exit__exit-no" id="exitNo">
                                No, stay
                            </Button>
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    </div>

}
export default ExitPage;