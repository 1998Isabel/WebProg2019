import React, { Component } from 'react';


class List extends Component {
    render() {
      return (
        <ul className="todo-app__list" id="todo-list">
            {this.props.list.map(e=>
            <li key={e.id} className="todo-app__item">
                <div className="todo-app__checkbox">
                    <input type="checkbox" id={e.id}></input>
                    <label htmlFor={e.id}></label>
                </div>
                <h1 className="todo-app__item-detail">{e.value}</h1>   
                <img src={require("../img/x.png")} className="todo-app__item-x"></img>
            </li>
            )}
      </ul>
      );
    }
  }

export default List;