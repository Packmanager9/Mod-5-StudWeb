import React, { Component } from 'react'
import ForceGraph from 'force-graph';
import ForceGraph3D from '3d-force-graph';

export class Mainpage extends Component {

  componentDidMount(){
    console.log('MOUNTED!', this.props)
    let arraystud = []
    let students = this.props.studs
    console.log(students, "dwkjbckejbncdkad")
    let nodular = this.props.nodular

    console.log(nodular, "xxxxx")

    for(let g = 0; g<900; g++){
    arraystud.push([(Math.floor(Math.random()*10)), (Math.floor(Math.random()*10)),(Math.floor(Math.random()*10)), (Math.floor(Math.random()*10)),(Math.floor(Math.random()*10)), (Math.floor(Math.random()*10)),(Math.floor(Math.random()*10)), (Math.floor(Math.random()*10)),(Math.floor(Math.random()*10)), (Math.floor(Math.random()*10)), (Math.floor(Math.random()*10)), (Math.floor(Math.random()*10)), (Math.floor(Math.random()*10))])
    }

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

// src="https://unpkg.com/force-graph@1.22.2/dist/force-graph.min.js"


  // Random tree
  //if(this.props.studs.length <= this.props.nodular.length){


    setTimeout(function(){ 

        console.log("1")
    }, 1000);
    setTimeout(function(){ 

        console.log("10")
}, 10000);
setTimeout(function(){ 

    console.log("100")
}, 100000);
// setTimeout(function(){ 

//     console.log("half")
// }, 500000);

    setTimeout(function(){ 
        




        const NODES = students.length
        const GROUPS = 12;
        const gData = {
          nodes: [...Array(NODES).keys()].map(i => ({
            id: i,
            group: Math.ceil(Math.random() * GROUPS)
          })),
          links: [...Array(NODES).keys()]
            .filter(id => id)
            .map(id => ({
              source: (students[nodular[id].student_id_1-1].id-1),// id, //(this.props.nodular[this.props.nodular[id].student_id_1-1]),
              target: (students[nodular[id].student_id_2-1].id-1)
            }))
        }
      
      //   let bang = [...gData.links]
      
      
      //   for(let y = 0; y<this.props.nodular.length; y++){
      //       console.log(this.props.nodular[y])
      
      //     bang.push({source: this.props.nodular[y].student_id_1, target: this.props.nodular[y].student_id_2})
      
      //   }
      
      //   gData.links += bang
      
      console.log(gData)
      
        const Graph = ForceGraph3D()
          (document.getElementById('3d-graph'))
            .nodeAutoColorBy('group')
           .linkAutoColorBy(d => gData.nodes[d.source].group)
            .linkOpacity(0.5)//.linkDirectionalParticles(300)
            .graphData(gData);
          // Random tree
      
      
      
      
      
      
      
      
      
      
      
      
          // console.log(arraystud)
          // const N = arraystud.length;
          // const gData = {
          //   nodes: [...Array(N).keys()].map(i => ({ id: i })),
          //   links: [...Array(N).keys()]
          //     .filter(id => id)
          //     .map(id => ({
          //       source: id,
          //       target: mostsimilar(arraystud, arraystud[id%Math.round(arraystud.length/4)])
          //     }))
          // };
      
          let thisdiv = document.getElementById('3d-graph')
      
          // const Graph = ForceGraph()
          //   (thisdiv)
          //     .linkDirectionalParticles(0)
          //     .graphData(gData);
      
              thisdiv.width = 400
              thisdiv.height = 400
      
    
      //}




    }, 1000);
  }
    render() {
        return (
            <div style={{"height" : "400px", "width" : "400px"}}  id="3d-graph"></div>
        )
    }
}

export default Mainpage
