import { StoreActions } from "../../flux/Actions";
import { State, store } from "../../flux/Store";

class MainVewComponent extends HTMLElement {
    connectedCallback() {
        store.subscribe((state: State) => { this.handleChange(state) });
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
                    color: white;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: 1fr auto;
                    column-gap: 200px;
                    row-gap: 15px;
                    background-image: url('/img/bg.jpeg');
                    background-size: cover;
                    background-position: center;
                    height: 100vh;

                    .a {
                        grid-column: 1;
                        grid-row: 1;
                        }
                    .b {
                        grid-column: 2;
                        grid-row: 1;
                        }
                    .button-container {
                        display: flex;
                        justify-content: center;
                        grid-column: 1 / span 2;
                        grid-row: 2;
                        background-color: rgba(0, 0, 0);
                        padding: 16px;
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
                } 
            </style>
            
            <team-a-component class="a"></team-a-component>
            <team-b-component class="b"></team-b-component>
            <div class="button-container"><button class="button-element">INICIAR</button></div>
        `;

        this.shadowRoot.querySelector('.button-element')?.addEventListener('click', () => {
            StoreActions.setFighting();
        });
    }
}

export default MainVewComponent;
