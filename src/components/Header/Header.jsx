import { useState } from "react";
import Button from "../Button/Button.styled";

/*
<button className="header__btn-main-new _hover01" id="btnMainNew" onClick={addCard}>
    Create new task
</button>

<button type="button" className="_hover03">
    <a href="#popExit">Log out</a>
</button>
*/

function Header({addCard, toggleTheme}) {
    const [isOpened, setIsOpened] = useState(false);
    function togglePopUp() {
        setIsOpened((prev) => !prev)
    }
    return <header className="header">
        <div className="container">
            <div className="header__block">
                <div className="header__logo _show _light">
                    <a href="" target="_self">
                        <img src="public/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="header__logo _dark">
                    <a href="" target="_self">
                        <img src="public/logo_dark.png" alt="logo" />
                    </a>
                </div>
                <nav className="header__nav">

                    <Button id="btnMainNew" onClick={addCard}>
                        Create new task
                    </Button>
                    
                    <a href="#user-set-target" className="header__user _hover02" onClick={togglePopUp}>
                        Authorised Osetr
                    </a>
                    {isOpened && <div
                        className="header__pop-user-set pop-user-set"
                    //id="user-set-target"
                    >
                        {/* <a href="">x</a> */}
                        <p className="pop-user-set__name">Authorised Osetr</p>
                        <p className="pop-user-set__mail">authorised.osetr@gmail.com</p>
                        <div className="pop-user-set__theme">
                            <p>Dark theme</p>
                            <input type="checkbox" className="checkbox" name="checkbox" onClick={toggleTheme}/>
                        </div>
                        
                        <Button $transparent>
                            <a href="#popExit">Log out</a>
                        </Button>
                        
                    </div>}

                </nav>
            </div>
        </div>
    </header>
}
export default Header;