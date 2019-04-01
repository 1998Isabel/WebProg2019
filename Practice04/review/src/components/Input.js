import React from 'react';

export default ({onKeyUp}) => {
    return <input type='text'
                className="todo-app__input" 
                placeholder="what needs to be done" 
                onKeyUp = {onKeyUp}>
            </input>
};