import React from 'react';
import defaultImg from "../assets/images/room-1.jpeg";
import { Link } from 'react-router-dom';
import { RoomObject } from '../models/models';

interface IRoomProps {
    room: RoomObject;
}

const Room: React.FC<IRoomProps> = React.memo((props) => {
    const { name, slug, images, price } = props.room;
    // console.log(props);
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="quarto simples" />
                <div className="price-top">
                    <h6>R${price}</h6>
                    <p>pernoite</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Detalhes</Link>
             </div>
             <p className="room-info">{name}</p>
        </article>
    )
})

export default Room;

// React.memo
// Class components can bail out from rendering when their input props are 
// the same using PureComponent or shouldComponentUpdate. Now you can do the 
// same with function components by wrapping them in React.memo.
