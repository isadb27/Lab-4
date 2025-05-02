import { store, State, Team, Fighter } from "../flux/Store";

class FighterComponent extends HTMLElement {
    team: 'teamA' | 'teamB' = 'teamA';

    connectedCallback() {
        // store.load();
        // store.subscribe((state: State) => {this.handleChange(state)});
        // this.attachShadow({ mode: 'open' });
        // @ts-ignore
        this.team = this.getAttribute('team')?? 'teamA';
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: 'fff';
                    gap: .5rem;
                    
                    min-height: 300px;
                    min-width: 300px;

                    cursor: pointer;
                }

                img {
                    width: 100%;
                    height: 100%;
                    max-width: 300px;
                    max-height: 300px;
                    object-fit: contain;
                    background-color: white;

                }

                button {
                        background-color: white;
                        color: black;
                        font-family: 'fff';
                        font-weight: bold;
                        font-size: 1.5rem;
                        padding: 8px 16px;
                        border: none;
                        cursor: pointer;

                        }
            </style>

            <img src="/img/fighters/${(((state.teams!)[this.team] as Team).fighters[state.actualFight] as Fighter).image}" alt="Fighter Image" width="100" height="150">

            <button>¡GANADOR!</button>
        `
    }
}

export default FighterComponent;