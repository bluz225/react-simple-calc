import React, {Component} from "react"

export default class Calculator extends Component {
    state = {
        num1: "",
        num2: "",
        sum: ""            
    }

    handleClear = () =>{
        this.setState({
            num1: "",
            num2: "",
            sum: ""
        })
    }

    setNum = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleCalculate = (e) =>{
        e.preventDefault()
        let sumValue = Number(this.state.num1) + Number(this.state.num2)
        this.setState(()=>{
            return {sum: sumValue}
        })

    }
    
    render() {

        return (
            <>
            <div className="caclulator">
                <h1>Add with React!</h1>

                <form onSubmit={this.handleCalculate}>
                    <input type="number" 
                        name="num1"
                        value={this.state.num1}
                        onChange={this.setNum}
                    />
                    <span>+</span>
                    <input type="number" 
                        name="num2"
                        value={this.state.num2}
                        onChange={this.setNum}
                    />
                    <button>=</button>
                    <h3>{this.state.sum}</h3>
                </form>
            </div>
            </>
        )
    }
}