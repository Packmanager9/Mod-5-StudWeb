import React, { Component } from 'react'
import Question from './Question'

let array = ["How well do you tolerate distracting sounds?", "How well do you tolerate obnoxious behavior?", "Rate your personal level of extroversion", "How well do you tolerate a messy living space?", "How much do you value courtesy", "1 for early-bird, 10 for night-owl","1: you prefer small groups, 10: large"]
let qs = 0
let gooo = 0
let newguy = {}
export class Survey extends Component {

    state = {
        q1: -1,
        q2: -1,
        q3: -1,
        q4: -1,
        q5: -1,
        q6: -1,
        q7: -1
    }

    submitSurvey = (holder) => {
     //   e.preventDefault()

    let boogaloo =  this.state

     if(boogaloo.q1 == -1){
        this.setState({q1: holder})
     }else if(boogaloo.q2 == -1){
        this.setState({q2: holder})
     }else if(boogaloo.q3 == -1){
        this.setState({q3: holder})
     }else if(boogaloo.q4 == -1){
        this.setState({q4: holder})
     }else if(boogaloo.q5 == -1){
        this.setState({q5: holder})
     }else if(boogaloo.q6 == -1){
        this.setState({q6: holder})
     }else if(boogaloo.q7 == -1){
        this.setState({q7: holder})
     }


    }

    componentDidMount(){

        gooo = document.getElementById("PleaseGod")

        gooo.onclick = this.submitSurveyFinal





    function mostsimilar(arr, sept){
        let sim = 0
        let indexer = arr.indexOf(sept)
  
  
        for(let g = 0; g<arr.length; g++){
  
          if(g!==arr.indexOf(sept)){
  
            if(compare(sept, arr[g]) >= sim){
              sim = compare(sept, arr[g]) 
              if(Math.random() > .5){
  
                indexer = g
  
              }
            }
          }
        }
  
        return indexer
  
      }
  
      function compare(item, check){
  
        let count = 0
  
        for(let g = 0; g<item.length; g++){
          if(item[g] == check[g]){
  
            count++
          }
  
        }
        return count
      }


         console.log("boom")




      }



       submitSurveyFinal = (e) => {
        e.preventDefault()

      //great big ball o guts
       // including match generation and patch requests
       let passit = true
       let str = ""

       let fooo = Object.values(this.state)

       for(let g = 0; g< fooo.length; g++){

          if(fooo[g] == -1){

              passit = false

          }
          str = str + fooo[g]  + ","

       }


       if(passit == true){

          fetch(`http://localhost:3000/students`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: JSON.stringify({
                  student: {
                    name: getRandomLightColor(),
                    answers: str
                  }
                })
            })

           console.log("we are in")
       }
  
      }

// function handler(e){
//         e.preventDefault()

//         // get the parent node I am currently in
//         // iterate through question children
//         // push intparsed id into newguy as answers
//         // construct string on other end
//         // rerender graph
//       let first  = document.getElementById("test-to-cole")

//         console.log(first)


//         newguy = []




//    ///     this.props.stats(this.props.nodular.length, this.props.nodular.length, mostsimilar(this.props.nodular, newguy))

//     }



    // }

    

    render() {
        return (
            <div  key={getRandomLightColor()}  id="test-to-cole">
                
                <button className="Question" onClick={this.submitSurveyFinal} type="submit" id="PleaseGod">Submit </button>
                <br></br>
                 {array.map((x) => {
                qs+=1
                return(
                  <>
                <Question fixme={this.submitSurvey} answers={this.state} labeler={Math.random()} id={`z${qs}`} key={getRandomLightColor()} qs={"z"+qs} q={x}></Question>
                </>
                 )
            })}     
            </div>
        )
    }
}

export default Survey



function getRandomLightColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }