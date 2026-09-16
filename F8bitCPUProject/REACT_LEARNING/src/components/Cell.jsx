import './Cell.css';
function Cell({color,size}){
    return (
        <div className={"board-cell "+ color} style={{height:`${size}px` , width:`${size}px`}}>
            {color}
        </div>
    )
}
export default Cell