import {useState} from 'react';

function Checkout(props){
    // const stateFilter = props.state.filter((item)=>{
    //    if(item.bought){
    //        return item
    //    }
    //    return false
    // });
    // const [newState, setNewState] = useState(stateFilter);


    return(
        <div className="checkout">
            <a href="#">
                <img src="https://intocode.ru/d/react-project-1/build/static/media/shopping-cart-solid.8bf1af37.svg" alt="checkout" />
                <span className="counter">{props.state.filter(item => item.bought).length}</span>
            </a>
        </div>
    )
};
export default Checkout;