import React from 'react';
import './app.style.css';

class App extends React.Component{
state={
    count:0,
    currentDateTime: Date().toLocaleString()
}
incrementC = () =>{
this.setState({count: this.state.count + 10});
    };

dicrementC = () =>{
    if(this.state.count > 0 ){
    this.setState({count: this.state.count - 10});
    }
    };
startWatch = () =>{
if(this.state.count > 0 && !this.intervalID){
    this.intervalID = setInterval(()=>{
        this.setState({count: this.state.count -1},()=>{
            if(this.state.count === 0){
              alert("Time over")
              clearInterval(this.intervalID)
              this.intervalID = null
            }
        })
    },1000)
}
}
stopWatch = () =>{
    if(this.intervalID){
        clearInterval(this.intervalID)
        this.intervalID = null
    }
}   
restartWatch = () =>{
    this.setState({count:0})
    clearInterval(this.intervalID)
    this.intervalID=null
}
    render(){
        return(
            <div>
                <div className="watch">
                <h1 className="head">Stop Watch</h1>
                <div>
                    <button className='btn'onClick={this.incrementC}>
                        10+
                        </button>
                    <span className='text'>{this.state.count}</span>
                    <button className='btn' onClick={this.dicrementC}>
                        10-
                        </button>
                </div>
                <div>
                <button className='btn' onClick={this.startWatch}>Start</button>
                <button className='btn'onClick={this.stopWatch}>Stop</button>
                <button className='btn'onClick={this.restartWatch}>Reset</button>
                </div>
                </div>
                <div className='timeShow'>
                    <h3>{this.state.currentDateTime}</h3>
                </div>
            </div>
        );
    }
}
export default App;