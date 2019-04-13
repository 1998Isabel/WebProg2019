import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import './Blog.css';
import Activity from '../components/Activity'

class Content extends Component {
  render() {
    const list = act_list.map((id, index) => (
      <Activity key={index} act={id} des={description[index]} time={time[index]}ima={img[index]}>
        <NavLink to={"/activities/" + id}></NavLink>
      </Activity>
    ));
    return (
      <div className="row">
        <div className="main">
          <h2>Coming Up Activities About Volleyball...</h2>
          <hr />
          {list}
        </div>
      </div>
    );
  }
}

const act_list = ["2019年亞洲俱樂部男子排球錦標賽","HVL高中排球聯賽", "企業十四年甲級男女排球聯賽"];
const description = ["BE WITH YOU", "YOUTH GENERATOR", "IGNITE新勢代"]
const time = ["April 18, 2019", "March 28, 2019", "Febuary 23, 2019"]
const img = ["https://volsports.co/wp-content/uploads/2019/03/53591936_2042599652526688_5830934363683946496_o-1024x683.jpg",
            "https://4.bp.blogspot.com/-LGcsqzST-LQ/WqzH8mMNqJI/AAAAAAAACzI/nh4dcoi8GakGyWmuk0R5FIVK74jeBeouQCLcBGAs/s1600/IMG_7945-2.jpg",
            "http://tvl.ctvba.org.tw/wp-content/uploads/2018/10/-1023-%E5%B9%B3%E9%9D%A2%E5%8C%96-616X290-1-e1540953826903.png"       
            ]

export default Content;
