import React, {Component} from "react";
import Spinner from '../spinner';
import './style.css';

import SwapiService from "../../services";

export default class RandomPlanet extends Component {

    //створюєм і ініціалізуєи свапіСервіс
    swapiService = new SwapiService();

    state = {
       planet: {},
        loading: true
    };

    constructor(){
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet(){
        const id = Math.floor(Math.random()*25 + 2);
        this.swapiService
            .getAllPlanet(id)
            //копіюєм дані з арі в state
            .then(this.onPlanetLoaded);
    }

    render(){

        const { planet:{id, name, population, rotationPeriod, diameter} } = this.state;

        return <div className="random-planet jumbotron rounded">

            <Spinner />
            </div>
        // return(
        //     <div className="random-planet jumbotron rounded">
        //         <img className="planet-image"
        //             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}             />
        //         <div>
        //             <h4>{name}</h4>
        //             <ul className="list-group list-group-flush">
        //                 <li className="list-group-item">
        //                     <span className="term"> Population</span>
        //                     <span>{population}</span>
        //                 </li>
        //                 <li className="list-group-item">
        //                     <span className="term"> Rotation Period</span>
        //                     <span>{rotationPeriod}</span>
        //                 </li>
        //                 <li className="list-group-item">
        //                     <span className="term">Diameter</span>
        //                     <span>{diameter}</span>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // );
    }
}
