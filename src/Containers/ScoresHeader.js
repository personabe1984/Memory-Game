import React, { Component } from 'react';
// import './CardsList.css';
import TimerDisplay from '../Components/TimerDisplay'

class ScoresHeader extends Component {

  render(){
    return(
      <section className="score-panel">

          <button className="btn restart">
              <i className="fa fa-repeat"></i>
          </button>

          <div className="current-rate">
              <div className="counter"></div>
              <span>Move(s) </span><span className="moves">0</span>
          </div>

          <ul className="star-rating">
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
          </ul>

          <TimerDisplay />

          <button className="btn ratings">Show <br /> ratings</button>

      </section>
    )
  }
}

export default ScoresHeader;
