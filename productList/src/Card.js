import Button from "./Button"
function Card(props){
    return(
        <div className="card">
                <div className="card-image">
                    <img src={props.card.image} alt="" />
                </div>
                <div className="card-info">
                    <div className="card-name">
                        {props.card.name}
                    </div>
                    <div className="card-rating">
                        {props.card.rating}
                    </div>
                    <div className="card-price">
                        {props.card.price}₽
                    </div>
                </div>
                <Button state={props.state} clicTrue={props.clicTrue} card = {props.card} /> 
        </div>  
    )

};
export default Card