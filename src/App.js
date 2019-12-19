import React, { Component } from 'react'
import ForceGraph from 'force-graph';
import ForceGraph3D from '3d-force-graph';
import './App.css';
import Mainpage from './Mainpage'
import Survey from './Survey';

export class App extends Component {

  constructor(){
    super()
    this.state = {
      matches: [],
      studs: [],

    }

  }



  destroyStatusQuo = (pairing_id, beejos, degeissdt) => {

    fetch(`http://localhost:3000/pairings/${pairing_id}`, {
      method: "PATCH", 
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({
        student_id_1: beejos,
        student_id_2: degeissdt
      })
  })
  .then(resp => resp.json())
  .then(json => console.log(json))



  }



  componentDidMount(){

    let bart = []
    let cart = []
    fetch("http://localhost:3000/pairings")
    .then(resp => resp.json()
    .then(json => {
        console.log('fetched locations!')
        console.log(json)
        this.setState({matches: json})
        bart = json
        console.log(this.state)
        console.log("chicka",bart)
    }))

    fetch("http://localhost:3000/students")
    .then(resp => resp.json()
    .then(json => {
        cart = json
        console.log("bhicka",cart)

        this.setState({studs: cart})

    // for(let q = 0; q<cart.length; q++){

    //   let sims = 0
    //   let answ = cart[q].answers.split(",")

    //   for(let w = 0; w<cart.length; w++){

    //     let ansr = cart[w].answers.split(",")

    //     if(q !== w){
    //       for(let o = 0; o<answ.length-1; o++){

    //         sims += Math.abs(parseInt(answ[o], 10) - parseInt(ansr[o], 10))

    //         // console.log(answ, ansr, "what")
    //       }

    //       // console.log(sims, "sims")

    //    if(sims < 70){
    //       fetch(`http://localhost:3000/pairings`, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           Accept: "application/json"
    //         },
    //         body: JSON.stringify({
    //           pairing: {
    //             student_id_1: w+1,
    //             student_id_2: q+1
    //           }
    //         })
    //     }).then(
    //       fetch("http://localhost:3000/pairings")
    //       .then(resp => resp.json()
    //       .then(json => {
    //           console.log('fetched locations!')
    //           console.log(json)
    //           this.setState({matches: json})
    //           bart = json
    //           console.log(this.state)
    //           console.log("chicka",bart)
    //       }))

    //     )




    //    console.log("we are in")

    //    }
    //     }



    //   }
    // }
    
    }))

    console.log("hitme")

  }

  render() {
    return (
   
      <div key={getRandomLightColor()} >
        <Survey stat={this.destroyStatusQuo}   nodular={this.state.matches} key={getRandomLightColor()}></Survey>
      <Mainpage stat={this.destroyStatusQuo} nodular={this.state.matches} studs={this.state.studs}></Mainpage>
      </div>



    )
  }
}

export default App


// Ranking questions from 0, none, to 10, constant 
// A or B style questions


// 1: how well do you tolerate distracting sounds while focusing
// 2: Rate your tolerance for obnoxious behavior
// 3: Rate your introversion to extroversion 0-10
// 4: Do you have allergies A,B
// 5: Chemistry or Painting
// 6: Foreign language of Computer programming
// 7: Winter or Summer
// 8: Rain or Sun
// 9: Bugs or birds?
// 10: Kessler Syndrome or China Syndrome?
// 11: rank your personal tolerance for a messy living space
// 12: Sad music or Upbeat music?
// 13: Are you 

// 21: Sentence nobody ever said before
// 22: Personal tags, comma seperated. 


function getRandomLightColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}