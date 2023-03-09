import React, { Component } from 'react'
import './temp.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Mobilecalc extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            ans: ''
        }
    }
    chInp = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    ans = (e) => {
        this.setState({
            input: e.target.value,
            input: eval(this.state.input)
        })
    }
    clear = () => {
        this.setState({
            input: ''
        })
    }
    render() {
        return (
            <center id='body'>
            <div className='calculator'>
                <div className='display'>
                    <input type="text" className='output' value={this.state.input} onChange={this.chInp} />
                </div>
                <div className="input">
                    
                    <button >CE</button>
                    <button>x!</button>
                    <button value={this.state.input + '('} onClick={this.chInp}>(</button>
                    <button value={this.state.input + ')'} onClick={this.chInp}>)</button>
                    <button value={this.state.input + '%'} onClick={this.chInp}>%</button>
                    <button onClick={this.clear}>AC</button>
                    

                    <button >sin</button>
                    <button >π</button>
                    <button value={this.state.input + 7} onClick={this.chInp}>7</button>
                    <button value={this.state.input + 8} onClick={this.chInp}>8</button>
                    <button value={this.state.input + 9} onClick={this.chInp}>9</button>
                    <button value={this.state.input + '/'} onClick={this.chInp}>÷</button>

                    <button >cos</button>
                    <button >log</button>
                    <button value={this.state.input + 4} onClick={this.chInp}>4</button>
                    <button value={this.state.input + 5} onClick={this.chInp}>5</button>
                    <button value={this.state.input + 6} onClick={this.chInp}>6</button>
                    <button value={this.state.input + '*'} onClick={this.chInp}>×</button>

                    <button >tan</button>
                    <button >√</button>
                    <button value={this.state.input + 1} onClick={this.chInp}>1</button>
                    <button value={this.state.input + 2} onClick={this.chInp}>2</button>
                    <button value={this.state.input + 3} onClick={this.chInp}>3</button>
                    <button value={this.state.input + '-'} onClick={this.chInp}>-</button>

                    <button >e</button>
                    <button >x
                        {/* <span style="position: relative; bottom: .4em; right: .1em;">y</span> */}
                    </button>
                    <button value={this.state.input + 0} onClick={this.chInp}>0</button>
                    <button value={this.state.input + '.'} onClick={this.chInp}>.</button>
                    <button id="eval" onClick={this.ans}>=</button>
                    {/* onclick="screen.value=eval(screen.value)" */}
                    <button value={this.state.input + '+'} onClick={this.chInp}>+</button>
                </div>

                {/* <div class='row'>
                    <button class='btn' value={this.state.input+1} onClick={this.chInp}>1</button>
                    <button class='btn' value={this.state.input+2} onClick={this.chInp}>2</button>
                    <button class='btn' value={this.state.input+3} onClick={this.chInp}>3</button>
                    <button class='btn' value={this.state.input+'*'} onClick={this.chInp}>*</button>
                    <button class='btn' value={this.state.input+'+'} onClick={this.chInp}>+</button>
                </div>
                <div class='row'>
                    <button class='btn' value={this.state.input+4} onClick={this.chInp}>4</button>
                    <button class='btn' value={this.state.input+5} onClick={this.chInp}>5</button>
                    <button class='btn' value={this.state.input+6} onClick={this.chInp}>6</button>
                    <button class='btn' value={this.state.input+'-'} onClick={this.chInp}>-</button>
                    <button class='btn' onClick={this.clear}>C</button>
                </div>
                <div class='row'>
                    <button class='btn' value={this.state.input+7} onClick={this.chInp}>7</button>
                    <button class='btn' value={this.state.input+8} onClick={this.chInp}>8</button>
                    <button class='btn' value={this.state.input+9} onClick={this.chInp}>9</button>
                    <button class='btn' value={this.state.input+'/'} onClick={this.chInp}>/</button>
                    <button class='btn'  onClick={this.ans}>=</button>
                </div> */}

            </div>
            </center>
        )
    }
}
