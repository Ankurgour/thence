import React from 'react';
import './Success.css';
import womanImage from '../../assets/girlimage.png'

const Success = () => {
  return (
    <div className="success-section">
      <div className="success-text">
        <h2>Success Stories</h2>
        <h1>Every success journey we've encountered.</h1>
      </div>
      <div className="success-details">
        <div className="image-container">
          <img src={womanImage} alt="Woman" className="woman-image" />
          <div className="stats-container">
            <div className="stats">
              <span className="stats-number">40%</span>
              <span className="stats-label">Achieved reduction in project execution time by optimizing team availability</span>
            </div>
          </div>
        </div>
        <div className="info-container">
          <h3>Enhance fortune 50 company's insights teams research capabilities</h3>
          <div className="person-details">
            <span className="person-name">ASHLEY CAHAN</span>
            <div className="project-details">
              <span className="project-label">10 DAYS</span>
              <span className="project-description">Staff Deployment</span>
            </div>
            <div className="savings-details">
              <span className="savings-amount">$0.5 MILLION</span>
              <span className="savings-label">Reduced client expenses by saving on hiring and employee costs</span>
            </div>
          </div>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
      <div className="person-names">
        <span>Lopa Panda</span>
        <span>Sarmisti Bansal</span>
        <span>Sneehari Prasad</span>
        <span>Sarthak</span>
      </div>
    </div>
  );
};

export default Success;