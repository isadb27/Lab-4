import { FighterActions, StoreActions, TeamActions } from '../flux/Actions';
import { State, store, Team } from '../flux/Store';
import { fetchStateMockLocal } from '../services/ApiMock';
import { isStateValid } from '../utils/StateCheck';
import { template } from './TeamTemplate';

class ComponenteA extends HTMLElement {
    /* private _team: Team;

    constructor(team: Team | undefined) {
        super();

        this._team = team!;

        // const shadow = this.attachShadow({ mode: 'open' });

        

        this.render = this.render.bind(this);
    } */

    connectedCallback() {
        store.subscribe((state: State) => {this.handleChange(state)});
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        if (!this.shadowRoot) return;

        // Cache first: Primero miro si en el store ya hay datos. Si no, pido a la API y actualizo el store."
        // Qué pasa si quito el !, o sea que siempre hago la llamada a la API?
        /* if (!isStateValid(state)) {
            // Then check API
            fetchStateMockLocal()
                .then((data) => {
                    StoreActions.loadState(data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        } */

        this.shadowRoot.innerHTML = template(state.teams!.teamA);

        /* this.shadowRoot.querySelector('#inc')?.addEventListener('click', () => {
            CounterActions.increment(1);
        }); */

       /*  this.shadowRoot.querySelector('#dec')?.addEventListener('click', () => {
            CounterActions.decrement(1);
        }); */

       /*  this.shadowRoot.querySelector('#saveUser')?.addEventListener('click', () => {
            const user = { name: 'Juan', age: 30 };
            UserActions.saveUser(user);
        }); */
    }
}

export default ComponenteA;