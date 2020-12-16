import React, { Component } from 'react';
import { FaCoffee, FaHiking, FaShuttleVan, FaWater } from 'react-icons/fa';
import Title from './Title';

interface Service {
    icon: JSX.Element | string;
    title: string;
    info: string;
}

interface IStateServices {
    services: Service[];
}

export default class Services extends Component<{}, IStateServices> {

    public readonly state: Readonly<IStateServices> = {
        services: [
            {
                icon: <FaCoffee />,
                title: "Café disponível",
                info: "Aqui vai um texto aleatório dummy text of the printing and typesetting industry."
            },
            {
                icon: <FaHiking />,
                title: "Temos trilhas",
                info: "Outro texto aleatório in the 1960s with the release of Letraset sheets containing."
            },
            {
                icon: <FaShuttleVan />,
                title: "Buscamos na rodoviária",
                info: "Mais um texto legal simply dummy text of the printing and typesetting industry."
            },
            {
                icon: <FaWater />,
                title: "Temos piscina",
                info: "Algo a mais aqui many variations of passages of Lorem Ipsum available, but the majority form."
            },
        ]
    }

    public render() {
        const { services } = this.state;
        return (
            <section className="services">
                <Title title="Serviços" />
                <div className="services-center">
                    {services.map((item: Service, index: number) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
