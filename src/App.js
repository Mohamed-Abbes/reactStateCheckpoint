import './App.css';
import React, { Component } from 'react'
import image from './photo.jpg'

export class App extends Component {
  state={
    fullName:"Mohamed Abbes",
    bio:"I'm a human being.",
    imgSrc:image,
    profession:"Web developer",
    isShow:true,
    mountVar:new Date()
  };

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };
  didMount=()=>{
    const intervalTime = setInterval(()=>{
      this.setState({mountVar:new Date()})
      console.log("component mounted")
    },1000) 

  }
  render() {
    return (
      <div style={{ backgroundColor: "crimson" }}>
        <button  onClick={this.toggleShow} type="button">Show / Hide</button>
        {this.state.isShow ? (
          <div style={{ textAlign: "center"}}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold",border:"1px solid ivory",fontFamily:'sans-serif' }}><span style={{fontFamily:'serif', fontWeight:'lighter'}}>FullName: </span>{this.state.fullName} </h1>
            <img src={this.state.imgSrc} alt="" style={{ width: "200px", height: "200px", borderRadius: "50%" }}/>
            <p style={{ margin: "10px 0" , fontWeight: "bold"}}><span style={{fontFamily:'serif', fontWeight:'lighter'}}>Bio: </span>{this.state.bio}</p>
            <p style={{ margin: "10px 0" , fontWeight: "bold"}}><span style={{fontFamily:'serif', fontWeight:'lighter'}}>Profession: </span>{this.state.profession}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App
