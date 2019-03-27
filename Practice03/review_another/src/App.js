import React, { Component } from 'react';
import backButton from './images/back.png';
import nextButton from './images/next.png';
import initPizza from './images/pizza01.jpg';
import './App.css';

const all_src = ["http://storage.googleapis.com/bro-cdn1/zgrid/themes/10307/images/home/pizza.png",
                 initPizza,
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOaoaK94-1WPVEXlKBgWSYs4DJWkt8vMe6a6BU1hKKU7GmlAw",
                 "https://media-cdn.tripadvisor.com/media/photo-s/0b/c5/5e/da/pizza-hut.jpg"];

let curPosit = 1;
class Container extends Component {
   render() {
      return (
         <div className="image-viewer__container">
            <div className="image-viewer__title"> image viewer </div>
            <Main />
            <div className="image-viewer__display-source-wrapper" id="source"> source : { initPizza } </div>
         </div>
      );
   }
}

class Main extends Component {
   toPrevious() {
      if (curPosit === 0)
         return;

      if (curPosit === 1) {
         let button = document.getElementById('left_button');
         button.classList.add('disabled');
      }
      else if (curPosit === all_src.length -1) {
         let button = document.getElementById('right_button');
         button.classList.remove('disabled');
      }

      let imgNode = document.getElementById('image');
      let sourceNode = document.getElementById('source');
      curPosit -= 1;
      imgNode.src = all_src[curPosit];
      sourceNode.textContent = 'source: '+ all_src[curPosit];
   }

   toNext() {
      if (curPosit === all_src.length -1)
         return;

      if (curPosit === all_src.length -2) {
         let button = document.getElementById('right_button');
         button.classList.add('disabled');
      }
      else if (curPosit === 0) {
         let button = document.getElementById('left_button');
         button.classList.remove('disabled');
      }
      
      let imgNode = document.getElementById('image');
      let sourceNode = document.getElementById('source');
      curPosit += 1;
      imgNode.src = all_src[curPosit];
      sourceNode.textContent = 'source: '+ all_src[curPosit];
   }

   render() {
      return (
         <div className="image-viewer__main">
            <Button classname="image-viewer__button" handleClick={ this.toPrevious } id="left_button" src={ backButton } />
            <div className="image-viewer__display">
               <img src= {all_src[curPosit]} id="image" />
            </div>
            <Button classname="image-viewer__button" handleClick={ this.toNext } id="right_button" src={ nextButton } />
         </div>
      );
   }
}

class Button extends Component {

   render() {
      return(
         <div className={ this.props.classname } id={ this.props.id } onClick={ this.props.handleClick }>
            <img src={ this.props.src } />
         </div>
      );
   }
}

export default Container;