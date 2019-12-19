import React, { Component } from 'react'

export class Question extends Component {

    state = {
        answer: -1
    }

    componentDidMount(){



        //passable original ingredient safely isolated nutrient 
      //  let ranking = 10

       // let y = document.getElementById(this.props.qs)
     //   console.log(y)
       // let arrq  = []
    //    for(let p = 0; p<ranking; p++){

    //      //   let x = document.createElement(`INPUT`);
    //     //    x.id = `${p}`
    //     //    x.setAttribute("type", "checkbox");

    //         // x.addEventListener('click', e => {

                


    //         //     for(let m = 0; m<arrq.length; m++){
    //         //         if(m !== arrq.indexOf(x))
    //         //         arrq[m].checked = false
    //         //     }

    //         //     console.log(arrq)


    //         // })

    //         // arrq.push(x)

    //         // y.appendChild(x);
    //    }
    }
    updateAnswer = (event) => {
        event.persist()
        console.log(event.target.valueAsNumber)
        this.setState({
            answer: event.target.valueAsNumber
        })
       let label = document.getElementById(`${this.props.labeler}`+"l")
       label.innerText = " " + event.target.valueAsNumber+""

    }
    trustme = (e) => {
        e.preventDefault()

        this.props.fixme(this.state.answer)

        console.log("hello")
    }
 
    
    render() {
        return (
            <div className="Question" id={this.props.qs}>
                <p>{this.props.q}</p> 
                <button onClick={this.trustme} id={this.props.labeler+"b"}>Make Permenent</button>
                  <input onChange={this.updateAnswer} step="1"type="range" min="1" max="10"  class="slider-squarex" id={this.props.labeler}></input>    
                <label  id={this.props.labeler+"l"} for={this.props.labeler}></label>
            </div>
        )
    }
}

export default Question


function getRandomLightColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }