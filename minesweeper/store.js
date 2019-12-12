import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION = 'QUESTION';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIME = 'INCREMENT_TIME';

//가장 중요한 한 객체만 export default 를 사용한다.
// import 할 때 이름을 마음대로 정할 수 있다.
export default new Vuex.Store({ // import store from './store';
    // vue의 data와 비슷
    state: {
        tableData: [],
        data: {
            row: 0,
            cell: 0,
            mine: 0,
        },
        timer: 0,
        result: ''

    },
    // vue의 computed와 비슷
    // state를 변경할 때 mutations을 통해서 변경하는 것을 권장한다.
    getters: {},
    // state를 수정할 때 동기적으로 사용.
    // mutation naming 은 대문자로 짓는 것이 뷰 커뮤니티에서 규칙이다.
    mutations: {
        [START_GAME](state) {

        },
        [OPEN_CELL](state) {

        },
        [CLICK_MINE](state) {

        },
        [FLAG_CELL](state) {

        },
        [QUESTION](state) {

        },
        [NORMALIZE_CELL](state) {

        },
        [INCREMENT_TIME](state) {

        },
    },
    // 비동기를 사용할 때, 또는 여러 mutation을 연달아 사용할 때
    actions: {},
});