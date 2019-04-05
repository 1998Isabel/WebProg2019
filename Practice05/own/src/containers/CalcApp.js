import React from 'react';

import CalcButton from '../components/CalcButton';
import OperButton from '../components/OperButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      // ans: 0,
      monitor: "0",
      reg: 0,
      reg2: 1,
      oper1: 0, // 1: plus, 2: minus, 3: multiply, 4: devide
      oper2: 0,
      isIn: true,
      isMul: false,
      sign: true
    };
  }

  resetState = () => {
    // TODO
    this.setState({ monitor: "0", ans: 0, reg: 0, reg2: 1, oper1: 0, oper2: 0, isIn: true, isMul: false, sign: true })
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  shownum = (num) => {
    let monstr = num;
    if (this.state.isIn) {
      monstr = this.state.monitor === "0" ? num : (this.state.monitor + num);
    }
    //console.log(num);
    this.setState({ monitor: monstr, isIn: true });
  }

  plus = () => {
    this.setState({ isMul: false, isIn: false })
    let now = parseFloat(this.state.monitor);
    now = this.dooperate(now);
    this.setState({ monitor: now, reg: now, reg2: 1, oper1: 1, oper2: 0})
  }

  minus = () => {
    this.setState({ isMul: false, isIn: false })
    let now = parseFloat(this.state.monitor);
    now = this.dooperate(now);
    this.setState({ monitor: now, reg: now, reg2: 1, oper1: 2, oper2: 0, isIn: false })
  }

  mul = () => {
    this.setState({ isMul: true, isIn: false })
    let now = parseFloat(this.state.monitor);
    now = this.dooperate2(now);
    this.setState({ monitor: now, reg2: now, oper2: 3, isIn: false})
  }

  dev = () => {
    this.setState({ isMul: true, isIn: false })
    let now = parseFloat(this.state.monitor);
    now = this.dooperate2(now);
    this.setState({ monitor: now, reg2: now, oper2: 4, isIn: false})
  }

  answer = () => {
    this.setState({ isMul: false, isIn: false })
    let now = parseFloat(this.state.monitor);
    now = this.dooperate(now);
    this.setState({ monitor: now, reg: now, reg2: 1, oper1: 0, oper2: 0, isIn: false })
  }

  dooperate = (now) => {
    if (!this.state.isIn)
      return now;
    if (!this.state.isMul) {
      if (this.state.oper1 === 1)
        now = this.state.reg + now;
      else if (this.state.oper1 === 2)
        now = this.state.reg - now;
    }
    else {
      if (this.state.oper2 === 3) {
        if (this.state.oper1 === 1 || this.state.oper1 === 0){
          console.log(now)
          now = this.state.reg2 * now + this.state.reg;
        }
        else if (this.state.oper1 === 2)
          now = this.state.reg - this.state.reg2 * now;
      }
      else if (this.state.oper2 === 4) {
        console.log(4);
        if (this.state.oper1 === 1  || this.state.oper1 === 0)
          now = this.state.reg2 / now + this.state.reg;
        else if (this.state.oper1 === 2)
          now = this.state.reg - this.state.reg2 / now;
      }
    }
    // console.log(now);
    return now;
  }

  dooperate2 = (now) => {
    if (!this.state.isIn)
      return now;
    if (this.state.oper1 === 1 || this.state.oper1 === 2)
      return now;
    else if (this.state.oper2 === 3)
      now = this.state.reg2 * now;
    else if (this.state.oper2 === 4)
      now = this.state.reg2 / now;
    return now;
  }

  render() {
    let showans = () => {
      return this.state.monitor;
    }
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{showans()}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <OperButton className="calc-operator" children="÷" onClick={this.dev}></OperButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children="7" onClick={this.shownum}></CalcButton>
            <CalcButton className="calc-number" children="8" onClick={this.shownum}></CalcButton>
            <CalcButton className="calc-number" children="9" onClick={this.shownum}></CalcButton>
            <OperButton className="calc-operator" children="x" onClick={this.mul}></OperButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children="4" onClick={this.shownum}></CalcButton>
            <CalcButton className="calc-number" children="5" onClick={this.shownum}></CalcButton>
            <CalcButton className="calc-number" children="6" onClick={this.shownum}></CalcButton>
            <OperButton className="calc-operator" children="-" onClick={this.minus}></OperButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children="1" onClick={this.shownum}></CalcButton>
            <CalcButton className="calc-number" children="2" onClick={this.shownum}></CalcButton>
            <CalcButton className="calc-number" children="3" onClick={this.shownum}></CalcButton>
            <OperButton className="calc-operator" children="+" onClick={this.plus}></OperButton>
          </div>
          <div className="calc-row">
            <CalcButton className="bigger-btn" children="0" onClick={this.shownum}></CalcButton>
            <CalcButton className="calc-number" children="."></CalcButton>
            <OperButton className="calc-operator" children="=" onClick={this.answer}></OperButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
