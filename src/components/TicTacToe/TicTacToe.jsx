import React, { useRef, useState } from 'react'
import './TicTacToe.css'

let data = ["", "", "", "", "", "", "", "", ""];

export default function TicTacToe() {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    
    const winRef = useRef();
    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();
    const box4 = useRef();
    const box5 = useRef();
    const box6 = useRef();
    const box7 = useRef();
    const box8 = useRef();
    const box9 = useRef();

    let boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e, num) => {
        if (lock) return 0;

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src="https://clipart-library.com/image_gallery/306263.png" alt="" />`;
            data[num] = 'x';
            setCount(count + 1);
        }
        else {
            e.target.innerHTML = `<img src="https://www.pngkit.com/png/full/507-5078753_d-tic-tac-toe-circle.png" alt="" />`;
            data[num] = 'o';
            setCount(count + 1);
        }
        checkWin();
    }
    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] != '') {
            win(data[2])
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] != '') {
            win(data[5])
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] != '') {
            win(data[8])
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] != '') {
            win(data[6])
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] != '') {
            win(data[7])
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] != '') {
            win(data[8])
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] != '') {
            win(data[8])
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] != '') {
            win(data[6])
        }
    }
    const win = (winner) => {
        setLock(true);
        if (winner === 'x') {
            winRef.current.innerHTML = `Winner is <img src="https://clipart-library.com/image_gallery/306263.png" alt="" />`
        }
        else {
            winRef.current.innerHTML = `Winner is <img src="https://www.pngkit.com/png/full/507-5078753_d-tic-tac-toe-circle.png" alt="" />`
        }

    }

    const handleReset = () => {
        setLock(false);
        data=["","","","","","","","",""];
        winRef.current.innerHTML = ""

        boxes.map((box)=>(
            box.current.innerHTML=""
        ))
        console.log("hello")
    }

    const handleClick = (e)=>{
        toggle(e,0);
    }
    return (
        <div className='container'>
            <h1 className='title'>Welcome to Tic Tac Toe</h1>
            <span className='winner' ref={winRef}></span>
            <div className="board">
                <div className="row1">
                    <div className="box" ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="box" ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="box" ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="box" ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="box" ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="box" ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row3">
                    <div className="box" ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="box" ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="box" ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className='reset' onClick={handleReset}>Reset</button>
        </div>
    )
}
