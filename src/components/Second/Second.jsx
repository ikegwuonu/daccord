import React from 'react';
import './Second.css';

const Second = ({ menuOne, setMenuOne }) => {
  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return menuOne ? 'open' : '';
    }
    return '';
  };

  return (
    <div className={`second ${getMenuStyles()}`}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
    
      <div>Explore</div>
      <img src="./icons8-close-window-26.png" alt="" className="close-btn" onClick={() => setMenuOne(false)}/>
      <br />
      </div>
      <div className='content'>
        <div className='active' style={{ background: "#2c2f48" }}>
          <img src="./Explore.png" alt="Explore" width={30} height={30} />
          <p>Home</p>
        </div>
        <div>
          <img src="./Music.png" alt="Music" width={30} height={30} />
          <p>Music</p>
        </div>
        <div>
          <img src="./Game.png" alt="Gaming" width={30} height={30} />
          <p>Gaming</p>
        </div>
        <div>
          <img src="./Education.png" alt="Education" width={30} height={30} />
          <p>Education</p>
        </div>
        <div>
          <img src="./Tech.png" alt="Science & Tech" width={30} height={30} />
          <p>Science & Tech</p>
        </div>
        <div>
          <img src="./Entertainment.png" alt="Entertainment" width={30} height={30} />
          <p>Entertainment</p>
        </div>
        <div>
          <img src="./Student Hub.png" alt="Student Hubs" width={30} height={30} />
          <p>Student Hubs</p>
        </div>
      </div>
      <div className='bottom'>
        <img src="./Frame 7.png" alt="Frame 7" />
        <img src="./Frame 6.png" alt="Frame 6" />
      </div>
    </div>
  );
};

export default Second;
