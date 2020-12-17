import React, { Component } from 'react';
import defaultImg from "../assets/images/room-1.jpeg";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../store/context';
import StyledCover from '../components/StyledCover';

interface IPropsSingleRoom {
    match: any;
    getRoom: (slug: string) => any;
}

interface IStateSingleRoom {
    slug: string;
    defaultbcg: string;
}

export default class SingleRoom extends Component<IPropsSingleRoom, IStateSingleRoom> {

    constructor(props: IPropsSingleRoom) {
        super(props)
    
        this.state = {
            slug: this.props.match.params.slug,
            defaultbcg: defaultImg
        }
    }

    // Providing Context
    static contextType = RoomContext;
    
    public render() {
        // console.log("props", this.props);
        const { getRoom } = this.context;
        const room: any = getRoom(this.state.slug);

        if (!room) {
            return (
                <div className="error">
                    <h3>quarto não foi encontrado...</h3>
                    <Link to="/rooms" className="btn-primary">retornar para acomodações</Link>
                </div>
            );
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <React.Fragment>
               <StyledCover img={mainImg || this.state.defaultbcg}>
                   <Banner title={`${name} room`} >
                       <Link to="/rooms" className="btn-primary">acomodações</Link>
                   </Banner>
               </StyledCover>
               <section className="single-room">
                   <div className="single-room-images">
                       {defaultImg.map((item: string, index: number) => {
                          return <img key={index} src={item} alt={name} />
                       })}
                   </div>
                   <div className="single-room-info">
                       <article className="desc">
                           <h3>detalhes</h3>
                           <p>{description}</p>
                       </article>
                       <article className="info">
                           <h3>info</h3>
                           <h6>preço : R${price}</h6>
                           <h6>tamanho : {size} m²</h6>
                           <h6>capacidade máxima: { capacity > 1 ? `${capacity} pessoas` : `${capacity} pessoa` }</h6>
                           <h6>{pets ? "permitido pets" : "não permite pets"}</h6>
                           <h6>{breakfast && "café incluído"}</h6>
                       </article>
                   </div>
               </section>
               <section className="room-extras">
                   <h6>extras</h6>
                   <ul className="extras">
                       {extras.map((item: string, index: number) => {
                           return <li key={index}>- {item}</li>
                       })}
                   </ul>
               </section>
            </React.Fragment>
        )
    }
}
