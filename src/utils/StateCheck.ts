import { State } from "../flux/Store";

export function isStateValid(state: State): boolean {
    if (state.teams === null) {
        return false;
    }

    return true;

    // const { teamA, teamB } = state.teams;
    // return name.trim().length > 0 && age > 0;
}