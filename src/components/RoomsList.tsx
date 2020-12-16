import React from 'react';
import Room from './Room';

interface IPropsRoomsFilter {
    rooms: any[];
}


const RoomsList: React.FC<IPropsRoomsFilter> = ({rooms}) => {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>infelizmente não há quartos disponíveis para essa pesquisa</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                { rooms.map(item => {
                    return <Room key={item.id} room={item} />
                }) }
            </div>
        </section>
    )
}

export default RoomsList;
