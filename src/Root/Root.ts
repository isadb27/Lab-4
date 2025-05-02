import { State, store } from '../flux/Store';
import { isStateValid } from '../utils/StateCheck';
import { fetchStateMockLocal } from '../services/ApiMock';
import { StoreActions } from '../flux/Actions';

class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        store.load();
        store.subscribe((state: State) => {this.handleChange(state)});
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        if (!this.shadowRoot) return;

        if (!isStateValid(state)) {
            // Then check API
            fetchStateMockLocal()
                .then((data) => {
                    StoreActions.loadState(data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }

        this.shadowRoot.innerHTML = `
            <style>
                :root {
                    
                }
                    
            </style>

            ${state.isFightFinished? '<winners-view-component></winners-view-component>' : state.isFightStarted? '<battle-view-component></battle-view-component>' : '<main-view-component></main-view-component>'}
        `;

        this.querySelector('root')?.appendChild
    }
}

export default Root;