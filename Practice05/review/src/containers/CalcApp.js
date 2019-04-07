import React from 'react';
import "../style.css";
import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  	constructor(props) {
		super(props);
		this.digits = 0;
		this.condition = "";
    	this.state = {
      		// TODO
			num: 0,
			tempNum: 0,
		};
		this.resetState = this.resetState.bind(this);
		this.pressButton = this.pressButton.bind(this);
		this.pressPlus = this.pressPlus.bind(this);
		this.pressMinus = this.pressMinus.bind(this);
		this.pressMultiply = this.pressMultiply.bind(this);
		this.pressDivide = this.pressDivide.bind(this);
		this.pressEqual = this.pressEqual.bind(this);
  	}

  	resetState() {
		// TODO
		this.setState({num: 0});	
		this.digits = 0;	
		this.condition = "";
 	}

  	showNotImplemented() {
    	console.warn('This function is not implemented yet.');
	}
	  
	pressButton(i) {
		if (this.condition === "plus"){
			this.setState({num: 0});
			this.digits = 0;
			this.condition = "tempPlus";
		}
		else if (this.condition === "minus"){
			this.setState({num: 0});
			this.digits = 0;
			this.condition = "tempMinus";
		}
		else if (this.condition === "multiply"){
			this.setState({num: 0});
			this.digits = 0;
			this.condition = "tempMultiply";
		}
		else if (this.condition === "divide"){
			this.setState({num: 0});
			this.digits = 0;
			this.condition = "tempDivide";
		}
		if (this.digits <= 6){
			if (this.digits === 0){
				this.setState({num: i});
				this.digits = this.digits + 1;
			}
			else{
				this.setState({num: this.state.num * 10 + i});
				this.digits = this.digits + 1;
			}
		}
	}

	pressPlus() {
		this.handle();
		this.condition = "plus";
		console.log("kk");
	}
	pressMinus() {
		this.handle();
		this.condition = "minus";
	}
	pressMultiply() {
		this.handle();
		this.condition = "multiply";
	}
	pressDivide() {
		this.handle();
		this.condition = "divide";
	}
	pressEqual() {
		this.handle();
		this.condition = "";
		this.digits = 0;
	}
	handle() {
		if (this.condition === "")
			this.setState({temp: this.state.num});
		else if (this.condition === "tempPlus"){
			this.setState({num: this.state.num + this.state.temp});
			this.setState({temp: this.state.num + this.state.temp});
		}
		else if (this.condition === "tempMinus"){
			this.setState({num: this.state.temp - this.state.num});
			this.setState({temp: this.state.temp - this.state.num});
		}
		else if (this.condition === "tempMultiply"){
			this.setState({num: this.state.temp * this.state.num});
			this.setState({temp: this.state.temp * this.state.num});
		}
		else if (this.condition === "tempDivide"){
			this.setState({num: this.state.temp / this.state.num});
			this.setState({temp: this.state.temp / this.state.num});
		}
	}
  	render() {
    return (
      	<div className="calc-app">
        	<div className="calc-container">
          	<div className="calc-output">
            <div className="calc-display">{this.state.num}</div>
        </div>
         	 <div className="calc-row">
            	<CalcButton onClick={this.resetState}>AC</CalcButton>
            	<CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            	<CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            	<CalcButton className="calc-operator" onClick={this.pressDivide}>÷</CalcButton>
          	</div>
          	<div className="calc-row">
            	<CalcButton className="calc-number" onClick={() => this.pressButton(7)}>7</CalcButton>
            	<CalcButton className="calc-number" onClick={() => this.pressButton(8)}>8</CalcButton>
            	<CalcButton className="calc-number" onClick={() => this.pressButton(9)}>9</CalcButton>
            	<CalcButton className="calc-operator" onClick={this.pressMultiply}>x</CalcButton>
          	</div>
          	<div className="calc-row">
            	<CalcButton className="calc-number" onClick={() => this.pressButton(4)}>4</CalcButton>
            	<CalcButton className="calc-number" onClick={() => this.pressButton(5)}>5</CalcButton>
            	<CalcButton className="calc-number" onClick={() => this.pressButton(6)}>6</CalcButton>
            	<CalcButton className="calc-operator" onClick={this.pressMinus}>-</CalcButton>
          	</div>
          	<div className="calc-row">
            	<CalcButton className="calc-number" onClick={() => this.pressButton(1)}>1</CalcButton>
            	<CalcButton className="calc-number" onClick={() => this.pressButton(2)}>2</CalcButton>
            	<CalcButton className="calc-number" onClick={() => this.pressButton(3)}>3</CalcButton>
            	<CalcButton className="calc-operator" onClick={this.pressPlus}>+</CalcButton>
          	</div>
          	<div>
            	<CalcButton className="calc-number, bigger-btn" onClick={() => this.pressButton(0)}>0</CalcButton>
            	<CalcButton className="calc-number">.</CalcButton>
            	<CalcButton className="calc-operator" onClick={this.pressEqual}>=</CalcButton>
          	</div>
        </div>
    </div>
    );
  }
}

export default CalcApp;
