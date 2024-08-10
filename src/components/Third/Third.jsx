import React from 'react'
import './Third.css'

const Third = ({setMenuOne, menuOne, setMenuTwo, menuTwo}) => {
  return (
    <div className='third'>
        <div className='search'>
            <p onClick={()=>setMenuOne(!menuOne)}>
                <img src="./icons8-menu-bar.svg" alt="" width={30} height={30} className='menu' />
            </p>
            <p className='search-p'>  <img src="./Search.svg" alt="" />
            Explore</p>
            <p onClick={()=>setMenuTwo(!menuTwo)}>
            <img src="./icons8-menu-bar.svg" alt="" width={30} height={30} className='menu' />
            </p>
        </div>
        <div className='main'>
            <div className='main-one'>
            <img src="main.png" alt="" className='main-img' />
            <p>Find your community <br />on Daccord</p>
            </div>
            <div className='feature'>
                <p><b>Featured Community</b></p>
                <p className='see'>See all</p>
            </div>
            <div className='VR'>
                <div className='virtual'>
                    {/*<img src="./wave (3).svg" alt="" className='real' />*/}
                    <div className='reality '>
                        
                        <p>Virtual Reality</p>
                        <p>A community for novices and pros alike. regular and frequent chat</p>
                    </div>    
                    
                </div>
                <div className='virtualo'>
                    
                    <div className='reality'>
                        <p>Gamee play</p>
                        <p>Always a new challenge. Great place to make new friends</p>
                    </div>    
                    
                </div>
            </div>
            <div className='feature'>
                <p><b>Popular Right Now</b></p>
                <p className='see'>See all</p>
            </div>
            <div className="popular">
                <div className="card">
                    <div>
                        <img src="./Roman.png" alt="" />
                        <div className='details '>
                            <p><b> 3D Art</b></p>
                            <p>A great place to discuss art</p>
                            <p>345,678 Members</p>
                        </div>
                    </div>
                    <img src="./Polygon 16.png" alt="" className='absolute' />
                    
                </div>

                <div className="card">
                    <div>
                        <img src="./Keypad (2).png" alt="" />
                        <div className='details '>
                            <p><b> NFT Art</b></p>
                            <p>An NFT community so everyone  can share their NFTs</p>
                            <p>345,678 Members</p>
                        </div>
                    </div>
                    <img src="./Polygon 16.png" alt="" className='absolute' />
                    
                </div>

            </div>
        </div>
       

    </div>
  )
}

export default Third