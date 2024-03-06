import React from "react";
import data from "./data.js";


function App() {

  const [increment,SetIncrement]=React.useState(0);
  const [score,setScore]=React.useState(0);
  const [clicked,setclicked]=React.useState(false);
  const [renderContent,setRendercontent]=React.useState(true);
  const [start,setStart]=React.useState(true)

  function Inc(){
    SetIncrement(prew=>prew+1);
    setclicked(false);
  }

  function checkAnswer(item){
     setclicked(true);
     
     if(item.isCorrect){
      setScore(prev=>prev+1)
      if(item.id===1||item.id===2||item.id===3||item.id===4){
        item.style="lightgreen";
      }
   
     }
     else{
      if(item.id===1||item.id===2||item.id===3||item.id===4){
        item.style="red";
      }
     }
  }
  
  function displayContent(){
    setRendercontent(false);
  }

  return (
    <div className="container">
      {start && <div className="StartContent">
        <button className="startButton" onClick={()=>setStart(false)}>Start quiz</button>
        </div>
      }

      {renderContent && start===false ? (<div className="questions">
        <h1 className="question">{data[increment].question}</h1>
        <div className="choices">
          {data[increment].answerOptions.map((answer)=>{
            if(answer.isCorrect && clicked){
              return(
                <button style={{background:"lightgreen"}} onClick={()=>{checkAnswer(answer)}} disabled={clicked}>{answer.ans}</button>
                )
            }
              return(
            <button style={{background:answer.style}} onClick={()=>{checkAnswer(answer)}} disabled={clicked}>{answer.ans}</button>
            )
          })}
      
        </div>

      </div>
      ):(<div className="finishcontent" style={{display:start===false?"flex":"none"}}>
        <h1>Your score is {score} out of {data.length}</h1>
        </div>)}
    <div className="nextGetresButton">
      {renderContent && clicked && increment<data.length-1 && <button onClick={Inc}>Next</button>}
      {renderContent && clicked && increment===data.length-1 && <button onClick={displayContent}>Show result</button>}
    </div>
  
      
    </div>

  );
}

export default App;
