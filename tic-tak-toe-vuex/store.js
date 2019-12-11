import Vuex from 'vuex';
import Vue from 'vue';

export const SET_WINNER = 'SET_WINNER'; // import { SET_WINNER, CLICK_CELL, CHANGE_TURN } from './store';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

//가장 중요한 한 객체만 export default 를 사용한다.
// import 할 때 이름을 마음대로 정할 수 있다.
export default new Vuex.Store({ // import store from './store';
    // vue의 data와 비슷
    state: {
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        turn: 'O',
        winner: '',
    },
    // vue의 computed와 비슷
    // state를 변경할 때 mutations을 통해서 변경하는 것을 권장한다.
    getters: {

    },
    // state를 수정할 때 동기적으로 사용.
    // mutation naming 은 대문자로 짓는 것이 뷰 커뮤니티에서 규칙이다.
    mutations: {
        [SET_WINNER](state, winner) {
            state.winner = winner;
        },
        [CLICK_CELL](state, {row, cell}) {
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === 'O' ? 'X' : 'O';
        },
        [RESET_GAME](state) {
            state.turn = 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ]
        },
        [NO_WINNER](state) {
            state.winner = '';
        }
    },
    // 비동기를 사용할 때, 또는 여러 mutation을 연달아 사용할 때
    actions: {}
});