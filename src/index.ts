import Root from "./Root/Root";

import TeamAComponent from "./components/TeamAComponent";
import TeamBComponent from "./components/TeamBComponent";
import TopTeamScore from "./components/TopTeamScore";
import BattleViewComponent from "./components/views/BattleViewComponent";
import MainViewComponent from "./components/views/MainViewComponent";
import FighterComponent from "./components/FighterComponent";
import WinnersViewComponent from "./components/views/WinnersViewComponent";

customElements.define('root-element', Root);

customElements.define('team-a-component', TeamAComponent);
customElements.define('team-b-component', TeamBComponent);
customElements.define('main-view-component', MainViewComponent);
customElements.define('battle-view-component', BattleViewComponent);
customElements.define('winners-view-component', WinnersViewComponent);

customElements.define('top-team-score-component', TopTeamScore);
customElements.define('fighter-component', FighterComponent);