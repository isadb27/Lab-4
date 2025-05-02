import { StoreActions } from "../../flux/Actions";
import { store } from "../../flux/Store";
import { fetchStateMockLocal } from "../../services/ApiMock";
import { fighterPictureTemplate } from "../TeamTemplate";

class WinnersViewComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render(state = store.getState()) {
        if (!this.shadowRoot) return;

        const winner = (state.teams!.teamA.wins > state.teams!.teamB.wins) ? state.teams?.teamA : state.teams?.teamB;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: black;
                    background-size: cover;
                    background-position: center;
                    height: 100vh;
                    color: white;

                    h2 {
                        font-family: 'fff';
                        font-size: 2rem;
                    }
                        h1 {
                            font-family: 'fight';
                            font-size: 3rem;
                        }

                        .team {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            gap: 1rem;
                        }

                        button {
                        margin-top: 4rem;
                        background-color: white;
                        color: black;
                        font-family: 'fff';
                        font-weight: bold;
                        font-size: 1.5rem;
                        padding: 8px 16px;
                        border: none;
                        cursor: pointer;

                        }

div.fighter-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: .5rem;
                }

                .fighter-name {
                    font-family: 'fff';
                    font-size: 1rem;
                    color: white;
                }

                        img.fighterPicture {
                    width: 100px;
                    height: 100px;
                    border-radius: 10%;
                    object-fit: contain;
                    background-color: white;
                }
                }
                    </style>

            <h2>El equipo ganador</h2>
            <h1>${winner?.name}</h1>

            <div class="team">
               ${winner?.fighters.map(fighterPictureTemplate).join("")}
            </div>

            <button class="button-element">REINICIAR</button>
                    `

                    this.shadowRoot.querySelector('.button-element')?.addEventListener('click', () => {
                        fetchStateMockLocal()
                        .then((data) => {
                            StoreActions.loadState(data);
                        })
                        .catch((error) => {
                            console.error('Error fetching data:', error);
                        });
                    })
    }
}

export default WinnersViewComponent;