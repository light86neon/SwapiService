import React, {Component} from "react";
import Spinner from '../spinner';
import './style.css';

import SwapiService from "../../services";
import PlanetDetails from "../planet-details";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    //створюєм і ініціалізуєи свапіСервіс
    swapiService = new SwapiService();

    state = {
       planet: {},
        loading: true,
        // error: false
    };

    constructor(){
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet = () => {
        console.log('update')
        // const id = Math.floor(Math.random() * 25 + 2);
        const id = 12;
        this.swapiService
            .getAllPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render(){
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet = { planet} /> : null;
        if (loading) {
            return <Spinner/>
        }

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage }
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term"> Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"> Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
