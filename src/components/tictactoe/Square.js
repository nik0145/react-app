import React from 'react';
function Square(props){
return (
<button className="square" onClick={props.onClick}>
{props.value}
</button>
);
}


// class Count extends React.Component{ 
// constructor(){
// super();
// this.state = {
// count:0,
// step:1
// }
// this.handleClick2 = this.handleClick2.bind(this);
// }
// handleClick2(){
// this.setState({
// count:this.state.count+1/* this.state.step*/
// })
// }
// render(){
// const count = this.state.count;
// return (
// <div>
// <button onClick={()=>{this.handleClick2()}}>Add 1</button>
// <p>{count}</p>
// </div>
// )
// }
// }
export default Square;

