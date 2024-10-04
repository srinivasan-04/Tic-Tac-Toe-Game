import React, { useState } from 'react'
import './tic/tic.css'
import Circle from './tic/img/circle.png'
import Cross from './tic/img/cross.png'
import { useRef } from 'react'

let Data=['','','','','','','','',''];

function Tic() {

  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  let titleRef= useRef(null);
  let box1 =useRef(null);
  let box2 =useRef(null);
  let box3 =useRef(null);
  let box4 =useRef(null);
  let box5 =useRef(null);
  let box6 =useRef(null);
  let box7 =useRef(null);
  let box8 =useRef(null);
  let box9 =useRef(null);

  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

  function toggle(e,num){
    if(lock){
      return 0;
    }
    if(count%2 === 0){
     e.target.innerHTML=`<img src='${Circle}'>`
     Data[num]="X";
     setCount(count+1);
    }
    else{
      e.target.innerHTML=`<img src='${Cross}'>`
      Data[num]='O';
      setCount(count-1);
     }
     checkwin();
    };

    function checkwin(){
      if(Data[0]===Data[1] && Data[1]===Data[2] && Data[2]!==''){
        won(Data[2]);
      }
      else if(Data[3]===Data[4]&&Data[4]===Data[5] &&Data[5]!==''){
        won(Data[5]);
      }
      else if(Data[6]===Data[7]&&Data[7]===Data[8] &&Data[8]!==''){
        won(Data[8]);
      }
      else if(Data[0]===Data[3]&&Data[3]===Data[6] &&Data[6]!==''){
        won(Data[6]);
      }
      else if(Data[1]===Data[4]&&Data[4]===Data[7] &&Data[7]!==''){
        won(Data[7]);
      }
      else if(Data[2]===Data[5]&&Data[5]===Data[8] &&Data[8]!==''){
        won(Data[8]);
      }
      else if(Data[0]===Data[4]&&Data[4]===Data[8] &&Data[8]!==''){
        won(Data[8]);
      }
      else if(Data[2]===Data[4]&&Data[4]===Data[6] &&Data[6]!==''){
        won(Data[6]);
      }

    };
    function won(a){
      setLock(true);
      if(a === "X"){
        titleRef.current.innerHTML=`Congratulations :<img src=${Circle}> wins`
      }
      else{
        titleRef.current.innerHTML=`Congratulations: <img src=${Cross}> wins`
      }
    };

    function reset(){
      setLock(false);
      Data=['','','','','','','','',''];
      titleRef.current.innerHTML=`Tic-Tac-Toe  <span>Game</span>`;
      box_array.map((e) =>{
        e.current.innerHTML="";
      })
    }
  return (
    <div className='game'>
      <div className='title'>
        <h1 ref={titleRef}>Tic-Tac-Toe  <span>Game</span></h1>
      </div>
      <div className='outer'>
        <div className='row'>
            <div className='boxes' ref={box1} onClick={ (e)=>{toggle(e,0)}} ></div>
            <div className='boxes' ref={box2} onClick={ (e)=>{toggle(e,1)}}></div>
            <div className='boxes' ref={box3} onClick={ (e)=>{toggle(e,2)}}></div>
        </div>
        <div className='row'>
            <div className='boxes' ref={box4} onClick={ (e)=>{toggle(e,3)}}></div>
            <div className='boxes' ref={box5} onClick={ (e)=>{toggle(e,4)}}></div>
            <div className='boxes' ref={box6} onClick={ (e)=>{toggle(e,5)}}></div>
        </div>
        <div className='row'>
            <div className='boxes' ref={box7} onClick={ (e)=>{toggle(e,6)}}></div>
            <div className='boxes' ref={box8} onClick={ (e)=>{toggle(e,7)}}></div>
            <div className='boxes' ref={box9} onClick={ (e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button className='button' onClick={reset}>Reset</button>
    </div>
  );
}

export default Tic;
