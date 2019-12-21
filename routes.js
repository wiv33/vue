import Vue from 'vue';
import VueRouter from "vue-router";
import ResponseCheck from "./response-check/ResponseCheck";
import LottoGenerator from "./lotto-generator/LottoGenerator";
import RockScissorsPaper from "./rock-scissors-paper/RockScissorsPaper";
import TicTacToe from "./tic-tak-toe/TicTacToe";
import MineSweeper from "./mine-sweeper/MineSweeper";
import Baseball from "./baseball/Baseball";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/number-baseball', component: Baseball},
        {path: '/response-check', component: ResponseCheck},
        {path: '/lotto-generator', component: LottoGenerator},
        {path: '/rock-scissors-paper', component: RockScissorsPaper},
        {path: '/tic-tac-toe', component: TicTacToe},
        {path: '/mine-sweeper', component: MineSweeper},
    ]
});