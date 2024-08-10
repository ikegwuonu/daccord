import React from 'react';
import './Fourth.css';

const Fourth = ({ menuTwo,setMenuTwo }) => {
  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return menuTwo ? 'open' : '';
    }
    return '';
  };

  return (
    <div className={`fourth ${getMenuStyles()}`}>
      
      
      <div className="head">
        <img src="./Symbol.png" alt="Symbol" />
        <img src="./Bell.png" alt="Bell" />
        <img src="./Chat.png" alt="Chat" />
        <img src="./Mail.svg" alt="Mail" />
        <img src="./icons8-close-window-26.png" className="close-btn" onClick={() => setMenuTwo(false)}/>

      </div>
      <div className="avatar">
        <div>
          <img src="./Group 1295.png" alt="Avatar" />
          <img src="./Group 1298.png" alt="Avatar Badge" className='avatar-ab' />
        </div>
        <p className='white'>Sophie Fortune</p>
        <p className='grey small'>@sophiefortune</p>
      </div>
      <div className="members">
        <div className="new lightgray">
          <p>New Members</p>
          <p>See all</p>
        </div>
        <div className='member'>
          <img src="./User Profil.png" alt="Anne Couture" />
          <div className='member-details'>
            <p className='white'>Anne Couture</p>
            <p className='lightgray small'>5 min ago</p>
          </div>
        </div>
        <div className='member'>
          <img src="./Polygon 1.png" alt="Miriam Soleill" />
          <div className='member-details'>
            <p className='white'>Miriam Soleill</p>
            <p className='lightgray small'>25 min ago</p>
          </div>
        </div>
        <div className='member'>
          <img src="./Polygon 1 (1).png" alt="Marie Lawal" />
          <div className='member-details'>
            <p className='white'>Marie Lawal</p>
            <p className='lightgray small'>30 min ago</p>
          </div>
        </div>
        <p className='lightgray'>Follow Me</p>
        <div className='member'>
          <img src="./Group 1293.png" alt="aksondesign" />
          <div className='member-details'>
            <p className='white small'><u>@aksondesign</u></p>
          </div>
        </div>
        <div className='member'>
          <img src="./Group 1293 (1).png" alt="aksonvady" />
          <div className='member-details'>
            <p className='white small'><u>@aksonvady</u></p>
          </div>
        </div>
      </div>
      <div className='copy'>
        <p className='white small'>Copyright. Design by aksonvady</p>
      </div>
    </div>
  );
};

export default Fourth;
