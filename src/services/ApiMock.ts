import { State } from "../flux/Store";

function getRandomAge(min: number = 18, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function fetchStateMockLocal(): Promise<State> {
    // Simulate an API call with fake data
    console.log("Fetching state from local mock API...");
    return new Promise((resolve) => {
        setTimeout(() => {
            const myState: State = {
                teams: {
                    teamA: {
                        name:"Los Nacionales",
                        fighters: [
                            { name: 'Freddy', age:getRandomAge(), weight: 220, height: 220, image: 'freddy.jpg', isTheRoundWinner: undefined },
                            { name: 'Chica', age:getRandomAge(), weight: 200, height: 220, image: 'chica.jpg', isTheRoundWinner: undefined },
                            { name: 'Golden Freddy', age:getRandomAge(), weight: 220, height: 215, image: 'goldenfreddy.jpg', isTheRoundWinner: undefined },
                            { name: 'Toy Freddy', age:getRandomAge(), weight: 210, height: 210, image: 'toyfreddy.jpg', isTheRoundWinner: undefined },
                            { name: 'Toy Chica', age:getRandomAge(), weight: 195, height: 200, image: 'toychica.jpg', isTheRoundWinner: undefined },
                            { name: 'Circus Baby', age:getRandomAge(), weight: 190, height: 185, image: 'circusbaby.jpg', isTheRoundWinner: undefined },
                            { name: 'Funtime Freddy', age:getRandomAge(), weight: 210, height: 220, image: 'funtime-freddy.jpg', isTheRoundWinner: undefined },
                            { name: 'Ennard', age:getRandomAge(), weight: 250, height: 230, image: 'ennard.jpg', isTheRoundWinner: undefined },
                        ],
                        wins: 0,
                        losses: 0,
                    },
                    teamB: {
                        name:"Los Internacionales",
                        fighters: [
                            { name: 'Bonnie', age:getRandomAge(), weight: 210, height: 210, image: 'bonnie.jpg', isTheRoundWinner: undefined },
                            { name: 'Foxy', age:getRandomAge(), weight: 190, height: 210, image: 'foxy.jpg', isTheRoundWinner: undefined },
                            { name: 'Springtrap', age:getRandomAge(), weight: 230, height: 230, image: 'Springtrap.jpg', isTheRoundWinner: undefined },
                            { name: 'Toy Bonnie', age:getRandomAge(), weight: 200, height: 200, image: 'toybonnie.jpg', isTheRoundWinner: undefined },
                            { name: 'Mangle', age:getRandomAge(), weight: 190, height: 210, image: 'Mangle.jpg', isTheRoundWinner: undefined },
                            { name: 'Ballora', age:getRandomAge(), weight: 175, height: 185, image: 'Ballora.jpg', isTheRoundWinner: undefined },
                            { name: 'Funtime Foxy', age:getRandomAge(), weight: 210, height: 210, image: 'funtime-foxy.jpg', isTheRoundWinner: undefined },
                            { name: 'The Puppet', age:getRandomAge(), weight: 160, height: 200, image: 'puppet.jpg', isTheRoundWinner: undefined },
                        ],
                        wins: 0,
                        losses: 0,
                    },
                },
                isFightStarted: false,
                isFightFinished: false,
                actualFight: 0,
            };
            resolve(myState);
        }, 1000);
    });
}

export { fetchStateMockLocal }