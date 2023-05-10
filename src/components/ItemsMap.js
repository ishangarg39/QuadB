import React from 'react'
import { useNavigate } from 'react-router-dom';
import Details from './Details';

export default function ItemsMap(props) {
    const navigate=useNavigate();

    let { title, desc, imageUrl, newsUrl, author, date, source } = props;
const Summary=()=>{
    navigate('/items/details', { state: { title, desc, imageUrl, newsUrl, author, date, source } });

        

};

  return (
    <div>
        
    <div className="card" >
        <div className="imageCard">
            <span className=" badge rounded-pill bg-danger" style={{
                display: "flex",
                justifyContent: "flex - end",
                position: "absolute"
            }}>
                {props.source}</span>
            <img src={props.imageUrl} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">

            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <p className="card-text"><small className="text-muted">Status: {!author ? "Unknown" : author}   || Premiered:{date}</small></p>
            <a rel="noreferrer" onClick={Summary} target="_blank" className="btn btn-btn-sn btn-dark">Read More</a>
        </div>
    </div>

</div>

  )
}
