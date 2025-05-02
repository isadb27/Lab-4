import { store, State } from "../flux/Store";

class TopTeamScore extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // store.load();
        // store.subscribe((state: State) => {this.handleChange(state)});
        // this.attachShadow({ mode: 'open' });
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
                }

                span {
                    font-size: 1.3rem;
                    font-family: 'fff';
                    }

                .score {
                    font-family: 'fight';
                    font-size: 2rem;
                }

                .progress-bar {
                    width: 300px;
                    height: 20px;
                    /*background-color: #ccc;*/
                    background-color: red;
                    border-radius: 5px;
                    border: 1px solid gray;

                    .progress {
                        width: ${Number.parseInt(this.getAttribute('score')?? '0') / Number.parseInt(this.getAttribute('total')?? '1') * 100 }%;
                    }
                    }
            </style>

            <span>${this.getAttribute('title')?? "no title"}</span>
            <span class=score>${this.getAttribute('score')?? "no score"}</span>
            <!--div class="progress-bar"><div class="progress"></div></div-->
        `
    }
}

export default TopTeamScore;