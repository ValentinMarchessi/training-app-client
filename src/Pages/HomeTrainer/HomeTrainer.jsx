import React from 'react'
import './homeTrainer.scss'

const home = () => {
    return (
        <div className='contentHomeTrainer'>
            <div className="topBarContainer">
                <div className="leftItem">ICON</div>
                <div className="rightItem">
                    <div className="contentImg">IMG</div>
                    <div className="contentMenu">HAMBURGER</div>
                </div>
            </div>
            <div className="downContainer">
                <div className="leftContain"></div>
                <div className="rightContain"></div>
            </div>
        </div>
    )
}

export default home