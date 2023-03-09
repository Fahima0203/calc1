import React, { Component } from 'react'
import './home.css'

export default class Mobilecalc extends Component {
    constructor() {
        super()
        this.state = { input: '',
                        ans:'' }
    }
    chInp = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    ans=(e)=>{
        this.setState({
            input: e.target.value,
            input: eval(this.state.input)
        })
    }
    clear=()=>{
        this.setState({
            input:''
        })
    }
    render() {
        return (
            <div id='body'>
                <div>
                <div className='display'>
                <input type="text" value={this.state.input} onChange={this.chInp} />
                </div>

                <div className="row">
                    <button id="ce">CE</button>
                    <button>x!</button>
                    <button className="btn" value={this.state.input+'('} onClick={this.chInp}>(</button>
                    <button className="btn" value={this.state.input+')'} onClick={this.chInp}>)</button>
                    <button className="btn" value={this.state.input+'%'} onClick={this.chInp}>%</button>
                    <button id="ac"  onClick={this.clear}>AC</button>
                </div>

                <div className="row">
                    <button >sin</button>
                    <button >π</button>
                    <button className="btn" value={this.state.input+7} onClick={this.chInp}>7</button>
                    <button className="btn" value={this.state.input+8} onClick={this.chInp}>8</button>
                    <button className="btn" value={this.state.input+9} onClick={this.chInp}>9</button>
                    <button className="btn" value={this.state.input+'/'} onClick={this.chInp}>÷</button>
                </div>

                <div className="row">
                    <button >cos</button>
                    <button >log</button>
                    <button className="btn" value={this.state.input+4} onClick={this.chInp}>4</button>
                    <button className="btn" value={this.state.input+5} onClick={this.chInp}>5</button>
                    <button className="btn" value={this.state.input+6} onClick={this.chInp}>6</button>
                    <button className="btn" value={this.state.input+'*'} onClick={this.chInp}>×</button>
                </div>

                <div className="row">
                    <button >tan</button>
                    <button >√</button>
                    <button className="btn" value={this.state.input+1} onClick={this.chInp}>1</button>
                    <button className="btn" value={this.state.input+2} onClick={this.chInp}>2</button>
                    <button className="btn" value={this.state.input+3} onClick={this.chInp}>3</button>
                    <button className="btn" value={this.state.input+'-'} onClick={this.chInp}>-</button>
                </div>

                <div className="row">
                    <button >e</button>
                    <button >x 
                        {/* <span style="position: relative; bottom: .4em; right: .1em;">y</span> */}
                     </button>
                    <button className="btn"  value={this.state.input+0} onClick={this.chInp}>0</button>
                    <button className="btn"  value={this.state.input+'.'} onClick={this.chInp}>.</button>
                    <button id="eval" onClick={this.ans}>=</button>
                    {/* onclick="screen.value=eval(screen.value)" */}
                    <button className="btn"  value={this.state.input+'+'} onClick={this.chInp}>+</button>
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
            </div>
        )
    }
}
