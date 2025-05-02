import { AppDispatcher, Action } from './Dispatcher';
import { StoreActionTypes, FighterActionTypes, TeamActionTypes } from './Actions';

export type Fighter = {
    name: string;
    age: number;
    weight: number;
    height: number;
    image: string;
    isTheRoundWinner?: boolean;
}

export type Team = {
    name: string;
    fighters: Fighter[];

    wins: number;
    losses: number;
}

export type State = {
    teams: {"teamA": Team, "teamB": Team} | null;
    isFightStarted: boolean;
    isFightFinished: boolean;
    actualFight: number;
};

type Listener = (state: State) => void;


class Store {
    private _myState: State = {
        teams: null,
        isFightStarted: false,
        isFightFinished: false,
        actualFight: 0,
    }
    // Los componentes
    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this)); // Bind the context of this method to the Store instance
    }

    getState() {
        return this._myState;
    }

    _handleActions(action: Action): void {
        switch (action.type) {
            case TeamActionTypes.SAVE_TEAM:
                if (typeof action.payload === 'object') {
                    this._myState = {
                        ...this._myState,
                        //@ts-ignore
                        teams: this._myState.teams[payload.index as string]? (this._myState.teams[payload.index] = action.payload.team) : (this._myState.teams)
                    }
                }
                this._emitChange();
                break;

            /* case FighterActionTypes.SET_FIGHTER_VICTORY_AS:
                if (typeof action.payload === 'boolean') {
                    this._myState = {
                        ...this._myState,
                        teams: this._myState.count - action.payload,
                    }
                }
                this._emitChange();
                break;

            case FighterActionTypes.SAVE_USER:
                if (typeof action.payload === 'object') {
                    this._myState = {
                        ...this._myState,
                        user: action.payload as Fighter,
                    }
                }
                this._emitChange();
                break; */
                
            case StoreActionTypes.LOAD_STATE:
                if (typeof action.payload === 'object') {
                    this._myState = {
                        ...this._myState,
                        ...action.payload,
                    }
                }
                this._emitChange();
                break;

            case StoreActionTypes.SET_TEAMS:
                if (typeof action.payload === 'object') {
                    this._myState = {
                        ...this._myState,
                        teams: action.payload as {"teamA": Team, "teamB": Team},
                    }
                }
                this._emitChange();
                break;

            case StoreActionTypes.SET_FIGHTING:
                this._myState = {
                    ...this._myState,
                    isFightStarted: true,
                }
                this._emitChange();
                break

            case StoreActionTypes.SET_FINISHED:
                this._myState = {
                    ...this._myState,
                    isFightStarted: false,
                    isFightFinished: true,
                }
                this._emitChange();
                break;
        }

        // Persistir el estado en localStorage
        this.persist();
    }

    private _emitChange(): void {
        const state = this.getState();
        for (const listener of this._listeners) {
            listener(state);
        }
    }

    // Permite a los componentes suscribirse al store
    subscribe(listener: Listener): void {
        this._listeners.push(listener);
        listener(this.getState()); // Emitir estado actual al suscribirse
    }

    // Permite quitar la suscripción
    unsubscribe(listener: Listener): void {
        this._listeners = this._listeners.filter(l => l !== listener);
    }

    persist(): void {
        localStorage.setItem('flux:state', JSON.stringify(this._myState));
    }

    load(): void {
        const persistedState = localStorage.getItem('flux:state');
        if (persistedState) {
            this._myState = JSON.parse(persistedState);
            this._emitChange(); // Emitir el nuevo estado
        }
    }

}

export const store = new Store();