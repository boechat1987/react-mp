import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Cover>
                <Banner 
                title="Acomodações"
                subtitle="Quartos a partir de  R$80"
                >
                <Link to="/rooms" className="btn-primary">Nossas acomodações</Link>
                </Banner>
            </Cover>
            <Services/>
            <FeaturedRooms />
        </React.Fragment>
    )
}

export default Home
