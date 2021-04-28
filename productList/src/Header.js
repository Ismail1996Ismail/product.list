import Logo from "./Logo";
import Menu from "./Menu";
import Checkout from "./Checkout";
function Header(props){

    return(
        <div className="header">
            <Logo />
            <Menu />
            <Checkout state={props.state} setState={props.setState}/>
            <div>
                <a href="#" className="logout">выход</a>
            </div>
        </div>
    )
};
export default Header;