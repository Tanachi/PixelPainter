import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
var colorArray = [
  ["White","White","White","White","White"],
  ["White","White","White","White","White"],
  ["White","White","White","White","White"],
  ["White","White","White","White","White"],
  ["White","White","White","White","White"]
];
class Pixel extends React.Component{
  constructor(props){
    super(props);
    this.getDiv = (e)=> {
      this.setColor = this.props.action.bind(this, e);
      this.setColor();
    }
  }
  render() {
    return (
    <div className="pixel" onClick={this.getDiv}>
    </div>
    );
  }
}
class PixelRow extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="pixelRow">
        <Pixel action = {this.props.action} />
        <Pixel action = {this.props.action} />
        <Pixel action = {this.props.action} />
        <Pixel action = {this.props.action} />
        <Pixel action = {this.props.action} />
      </div>
    );
  }
}

class Color extends React.Component{
  constructor(props){
    super(props);
    this.toggleColor = this.props.action.bind(this, this.props.color);
  }
  render() {
    return (
    <div className="color" onClick={this.toggleColor} style={{backgroundColor:this.props.color}}>
    </div>
    );
  }
}
class Pallete extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="pallete">
        <Color action={this.props.action} color="Blue" />
        <Color action={this.props.action} color="Red" />
        <Color action={this.props.action} color="Green" />
        <Color action={this.props.action} color="Yellow" />
        <Color action={this.props.action} color="Purple" />
        <Color action={this.props.action} color="Black" />
        <PixelButtons action={this.props.action} />
      </div>
    );
  }
}

class PixelButtons extends React.Component{
  constructor(props){
    super(props);
    this.setErase = this.props.action.bind(this, "White");
    this.setClear = this.props.action.bind(this, "none");
  }
  render(){
    return(
      <div className="pixelButtons">
        <button onClick = {this.setErase}>Erase</button>
        <button onClick = {this.setClear}>Clear</button>
      </div>
    );
  }
}

class Canvas extends React.Component {
  constructor(){
    super();
    this.chosenColor = "White";
    this.setColor = (color) =>{
      this.chosenColor = color;
    }
    this.getColor = (e) =>{
      e.target.style.backgroundColor = this.chosenColor;
    }
  }
  render() {
    return (
      <div className="Canvas">
        <div className="pixelCanvas" >
          <PixelRow action={this.getColor}/>
          <PixelRow action={this.getColor}/>
          <PixelRow action={this.getColor}/>
          <PixelRow action={this.getColor}/>
          <PixelRow action={this.getColor}/>
        </div>
        <Pallete action={this.setColor} />
      </div>
    );
  }
}

ReactDom.render(
  <Canvas />,
  document.getElementById('app')
);
