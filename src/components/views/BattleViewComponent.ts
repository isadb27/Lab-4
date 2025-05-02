import { StoreActions } from "../../flux/Actions";
import { State, store } from "../../flux/Store";
// @ts-ignore
import FighterComponent from "../FighterComponent";

class BattleViewComponent extends HTMLElement {
    
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
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: auto 1fr auto;
                    background-image: url('/img/bg.jpeg');
                    background-size: cover;
                    background-position: center;
                    height: 100vh;

                    .top {
                        grid-column: 1 / span 2;
                        grid-row: 1;
                        background-color: rgba(0, 0, 0, 0.5);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 2rem;
                        color: white;

                        img {
                            width: 70px;
                            height: 100px;
                            object-fit: cover;
                        }

                        .left {
                            align-items: flex-end;
                        }
                    }

                    .body-left {
                        grid-column: 1;
                        justify-content: center;
                        align-items: center;
                        font-size: 2rem;
                        color: white;
                    }

                    .body-right {
                        grid-column: 2;
                        justify-content: center;
                        align-items: center;
                        font-size: 2rem;
                        color: white;
                    }

                    [class^="body-"] {
                        grid-row: 2;
                        display: flex;
                    }

                    .bottom {
                        grid-column: 1 / span 2;
                        grind-row: 3;
                    }
                }
            </style>

            <div class="top">
                <top-team-score-component title="${state.teams?.teamA.name}" score="${state.teams?.teamA.wins}" class="left"></top-team-score-component>
                <img src="/img/bg-small.png" />
                <top-team-score-component title="${state.teams?.teamB.name}" score="${state.teams?.teamB.wins}" class="right"></top-team-score-component>
            </div>

            <div class=body-left><fighter-component team="teamA" class=fighterA></fighter-component></div>
            <div class=body-right><fighter-component team='teamB' class=fighterB></fighter-component></div>

            <div class="bottom"></div>
        `;

        (this.shadowRoot.querySelector('.fighterA') as FighterComponent)
            .addEventListener('click', () => {
                console.log("Fighter A wins!");
                
                state.teams!.teamA.wins++;
                state.teams!.teamB.losses++;
                state.teams!.teamA.fighters[state.actualFight].isTheRoundWinner = true;
                state.teams!.teamB.fighters[state.actualFight].isTheRoundWinner = false;
                state.actualFight++;
                if (state.actualFight >= state.teams!.teamA.fighters.length) {
                    state.actualFight = 0;
                    state.isFightStarted = false;
                    state.isFightFinished = true;
                }
                StoreActions.loadState(state);
            });

        (this.shadowRoot.querySelector('.fighterB') as FighterComponent)
            .addEventListener('click', () => {
                console.log("Fighter B wins!");
                
                state.teams!.teamB.wins++;
                state.teams!.teamA.losses++;
                state.teams!.teamB.fighters[state.actualFight].isTheRoundWinner = true;
                state.teams!.teamA.fighters[state.actualFight].isTheRoundWinner = false;
                state.actualFight++;
                if (state.actualFight >= state.teams!.teamB.fighters.length) {
                    state.actualFight = 0;
                    state.isFightStarted = false;
                    state.isFightFinished = true;
                }
                StoreActions.loadState(state);
            });
    }
}

export default BattleViewComponent;
