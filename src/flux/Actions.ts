import { AppDispatcher } from './Dispatcher';
import { Fighter, State, Team } from './Store';

export const FighterActionTypes = {
    SAVE_FIGHTER: 'SAVE_USER',
    SET_FIGHTER_VICTORY_AS: 'SET_FIGHTER_VICTORY_AS',
};

export const TeamActionTypes = {
    SAVE_TEAM: 'SET_TEAM',
    SET_TEAM_VICTORY: 'SET_TEAM_VICTORY',
    SET_TEAM_DEFEAT: 'SET_TEAM_DEFEAT',
}

export const StoreActionTypes = {
    LOAD_STATE: 'LOAD_STATE',
    SET_TEAMS: 'SET_TEAMS',
    SET_FIGHTING: 'SET_FIGHTING',
    SET_FINISHED: 'SET_FINISHED',
}

export const StoreActions = {
    loadState: (state: State) => {
        AppDispatcher.dispatch({
            type: StoreActionTypes.LOAD_STATE,
            payload: state,
        });
    },
    setTeams: (teams: {teamA: Team, teamB: Team}) => {
        AppDispatcher.dispatch({
            type: StoreActionTypes.SET_TEAMS,
            payload: teams,
        });
    },
    setFighting: () => {
        AppDispatcher.dispatch({
            type: StoreActionTypes.SET_FIGHTING,
            payload: undefined,
        });
    },
    setFinished: () => {
        AppDispatcher.dispatch({
            type: StoreActionTypes.SET_FINISHED,
            payload: undefined,
        });
    },
}

export const FighterActions = {
    saveFighter: (fighter: Fighter) => {
        AppDispatcher.dispatch({
            type: FighterActionTypes.SAVE_FIGHTER,
            payload: fighter,
        });
    },
    setFighterVictoryAs: (fighter:{teamIndex:string, fighterIndex:number, fighter:Fighter}) => {
        AppDispatcher.dispatch({
            type: FighterActionTypes.SET_FIGHTER_VICTORY_AS,
            payload: fighter,
        });
    },
};

export const TeamActions = {
    saveTeam: (team: {index: number, team: Team}) => {
        AppDispatcher.dispatch({
            type: TeamActionTypes.SAVE_TEAM,
            payload: team,
        });
    },
    setTeamVictory: (index: number) => {
        AppDispatcher.dispatch({
            type: TeamActionTypes.SET_TEAM_VICTORY,
            payload: index,
        });
    },
    setTeamDefeat: (index: number) => {
        AppDispatcher.dispatch({
            type: TeamActionTypes.SET_TEAM_DEFEAT,
            payload: index,
        });
    },
}