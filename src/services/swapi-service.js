export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }

        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    getAllPlanets(){
        const res = this.getResource(`/planets/`);
        return res.results;
    }

    getAllPlanet(id){
        return this.getResource(`/planets/${id}/`);
    }

    getAllStarships(){
        const res = this.getResource('/starships');
        return res.results;
    }

    getStarShip(id) {
        return this.getResource(`/starships/${id}`);
    }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
        console.log(p.name)
    })
});
