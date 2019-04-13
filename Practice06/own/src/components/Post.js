import React from "react";

export default ({ id }) => {
    return (
        <div className="main">
            <h2>My Post {id}</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <img src={images[id-1]} alt=""></img>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <br />
        </div>
    );
};

const images = ["https://s.yimg.com/uu/api/res/1.2/._vwGjKrP0YdzL_RTqmgAg--~B/aD0xMDcyO3c9MTYwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/zh-Hant-TW/homerun/youthdailynews_517/b3b58dd32da5e94a35666b30e264f717",
    "https://obs.line-scdn.net/0hUaMe3ZpgCk5wHCYWBbF1GUpKCSFDcBlNFCpbTTNyVHoNLhoeRS0VIFMeUSxaeU0QHnJCKlweEX9bKh4QGy4V/w644",
    "https://c1.staticflickr.com/5/4771/40686350291_b7b5b388e1_b.jpg",
    "http://media.pbplus.me/wp-content/uploads/2017/09/21082897_1638478296172035_1713942032626361786_o.jpg",
    "https://volsports.co/wp-content/uploads/2018/12/DSC09756.jpg",
    "https://volsports.co/wp-content/uploads/2018/12/cdbca54d7bcda8c2583393d08523f72fb_14906360_181201_0004.jpg"
]