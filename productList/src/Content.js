import Card from "./Card"
function Content(props){

    return(
        <div className="content">
            {props.state.map((item)=>{
                return <Card card = {item} state = {props.state} clicTrue = {props.clicTrue}/>
            })}
            
        </div>
    );
};
export default Content;