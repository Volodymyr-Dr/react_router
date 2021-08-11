import React from 'react'
import './Publications.css'


export default function Publication (props) {
    return (
    <div className="main_box">
      
      <div className="publication1">
        <div className="box_top">
          <div >
            <img src={props.photo} alt="" className="user_photo butt" />
          </div>
          <div className="info">
              <div className="user_info">
                  <div className="user_name butt">{props.name}</div>
                  <div className="user_nickname">{props.nickname}</div>
                  <div className="date">{props.date}</div>
              </div>
              <div className="user_content">{props.content}</div>
          </div>
          <div className="menu butt">&#8943;</div>
        </div>
        <div className="box_middle">
            <img src={props.image} alt="" className="img" />
        </div>
        <div className="box_botton">
            <div className="coments butt">&#9998; {props.coments}</div>
            <div className="share butt">&#10150; {props.share}</div>
            <div className="likes butt">&#9825; {props.likes}</div>
            <div className="download butt">
              <div className="download_icon butt">&#8677;</div>
              <div>{props.download}</div>
            </div>
        </div>
      </div>
        
    </div>
    )
}