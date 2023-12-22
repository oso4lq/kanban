function Header() {
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
                    <button className="header__btn-main-new _hover01" id="btnMainNew">
                        <a href="#popNewCard">Create new task</a>
                    </button>
                    <a href="#user-set-target" className="header__user _hover02">
                        Authorised Osetr
                    </a>
                    <div
                        className="header__pop-user-set pop-user-set"
                        id="user-set-target"
                    >
                        {/* <a href="">x</a> */}
                        <p className="pop-user-set__name">Authorised Osetr</p>
                        <p className="pop-user-set__mail">authorised.osetr@gmail.com</p>
                        <div className="pop-user-set__theme">
                            <p>Dark theme</p>
                            <input type="checkbox" className="checkbox" name="checkbox" />
                        </div>
                        <button type="button" className="_hover03">
                            <a href="#popExit">Exit</a>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    </header>
}
export default Header;