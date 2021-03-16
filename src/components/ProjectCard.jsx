import React, { useEffect } from 'react';
import Avatar from "./ProjectAvatar";
import Detail from "./ProjectDetails";
import './ProjectCard.css';

import Aos from "aos";
import "aos/dist/aos.css";

/*import { Button, CardActions } from "react-mdl"; */




function Card(props) {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="row card" data-aos="fade-up" style={{
                flexDirection: props.id % 2 === 0 ? "row-reverse" : "row"
                    }}>
                <div className="card-left">
                    <div className="card-box">
                        <div className="card-image" onClick={() => {window.open(props.link1)}} style={{cursor: "pointer"}}>
                            <Avatar img={props.img} />
                            {/*<Detail detailInfo={props.id} /> */}
                        </div>
                    </div>
                </div>
                <div className="card-right" >
                    <div className="content-box">
                        <div className="title">
                            <Detail detailInfo={props.title} />
                        </div>
                        <div className="description">
                            <Detail detailInfo={props.description} style={{fontSize:"18px"}} />
                        </div>
                        <div className="sub-title">
                            <Detail detailInfo={props.subTitle} />
                        </div>
                        <div className="sub-description">
                            <Detail detailInfo={props.subDescription} />
                        </div>
                        <hr></hr>
                        
                        
                        {/*<CardActions border className="buttons">
                            <Button type="button" onClick={() => {window.open(props.link1)}} style={{color: "#fff", backgroundColor: "#83ABA3", border: '1px solid #83ABA3', padding: "5px 5px 15px", marginRight: "5px", marginBottom: "5px"}}><Detail detailInfo={props.buttonLabel} /></Button>
                            <div style={{display: props.buttonLabel2 === "" ? "none" : "inline"}}>
                                <Button  onClick={() => {window.open(props.link2)}} style={{color: "#83ABA3",  border: '1px solid #83ABA3', padding: "5px 5px 15px", marginBottom: "5px"}}><Detail detailInfo={props.buttonLabel2} /></Button>
                            </div>
                        </CardActions> */}
                        
                            <button className="btn-green" type="button" onClick={() => {window.open(props.link1)}}><Detail detailInfo={props.buttonLabel} /></button>
                            
                            <div style={{display: props.buttonLabel2 === "" ? "none" : "inline"}}>
                                <button className="btn-white" type="button" onClick={() => {window.open(props.link2)}}><Detail detailInfo={props.buttonLabel2} /></button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

/*style={{
                    display: "flex", 
                    flexDirection: imgStart === "start" ? "column-reverse" : "column"
                    }} */