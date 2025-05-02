import { Fighter, Team } from "../flux/Store";

export const fighterPictureTemplate = (fighter: Fighter) => `
    <div class="fighter-container">
    <img class="fighterPicture" src="/img/fighters/${fighter.image}" alt="${fighter.name} picture" />
    <span class="fighter-name">${fighter.name}</span>
    </div>
`

export const template = (team: Team) => `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    * {box-sizing: border-box;}
                }
                div.fighters-container {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    align-items: center;
                    padding: 0 16px;
                    gap: 16px
                }

                

                h2 {
                    font-family: 'fight';
                    font-size: 2.5rem;
                    text-align: center;
                }

                div.fighter-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                }

                img.fighterPicture {
                    width: 100px;
                    height: 100px;
                    border-radius: 10%;
                }
                    
            </style>

            <h2 class="team-name">
            ${team.name}
            </h2>

            <div class="fighters-container">
                ${team.fighters.map(fighterPictureTemplate).join("")}
            </div>
        `