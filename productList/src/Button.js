function Button(props){

    return(
        <div className="card-button">
            <button disabled = {props.card.bought} className="btn"  onClick={()=>{props.clicTrue(props.card.id)}}>
                {props.card.bought ? "Добавлено в корзину" : "Добавить в корзину" }
            </button>
        </div>
    )
};
export default Button;