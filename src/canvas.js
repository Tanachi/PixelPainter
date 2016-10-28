import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

class Pixel extends React.Component{
  constructor(props){
    super(props);
    this.getDiv = (e)=> {
      this.setColor = this.props.action.bind(this, e);
      console.log(this.props.rowId + "," + this.props.colId);
      this.setColor();
    }
  }
  render() {
    return (
    <div  className="pixel"
          style={{backgroundColor:this.props.color}}
          onClick={this.getDiv}
    >
    </div>
    );
  }
}
class PixelRow extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const pixelRow = this.props.row.map((element,index,array) =>{
      return <Pixel rowId = {this.props.rowId}
                    color = {element}
                    colId={index}
                    action={this.props.action}
                    key={index}/
              >
    });
    return (
      <div className="pixelRow">
       {pixelRow}
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
    <div  className="color"
          onClick={this.toggleColor}
          style={{backgroundColor:this.props.color}}
    >
    </div>
    );
  }
}
class Pallete extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var palletMap = Object.keys(this.props.colors).map((element, index) =>{
      if(element !== "selected"){
        return <Color key={index}
                      action={this.props.action}
                      color={this.props.colors[element]}/
                >
      }
    });
    return(
      <div className="pallete">
        {palletMap}
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
  constructor(props){
    super(props);
    this.chosenColor = "White";
    this.setColor = (color) =>{
      this.chosenColor = color;
    }
    this.getColor = (e) =>{
      e.target.style.backgroundColor = this.chosenColor;
    }
  }
  render() {
    var colorMap = this.props.color.map((element,index,array) =>{
      return(<PixelRow rowId={index}
                       row={element}
                       key={index}
                       action={this.getColor}/
              >);
    });
    return (
      <div className="Canvas">
        <div className="pixelCanvas" >
          {colorMap}
        </div>
        <Pallete colors={this.props.pallet} action={this.setColor} />
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(Canvas);