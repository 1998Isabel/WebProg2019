import React from "react";

export default ({ act, des, ima, time }) => {
    console.log(act)
    return (
        <div className="main">
            <h2>{act}</h2>
            <h4>{des}, {time}</h4>
            <img src={ima} alt=""></img>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
    );
};
