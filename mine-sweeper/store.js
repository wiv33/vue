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

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0, //0 이상이면 다 opened
}

const plantMine = (row, cell, mine) => {
    console.log(row, cell, mine);
    const candidate = Array(row * cell).fill().map((arr, i) => i);
    const shuffle = [];
    while (candidate.length > row * cell - mine)
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);

    const data = [];
    for (let i = 0; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for (let j = 0; j < cell; j++) {
            rowData.push(CODE.NORMAL);
        }
    }
    for (let k = 0; k < shuffle.length; k++) {
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }
    console.log(data);
    return data;
}

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
        halted: true, //중단된
        result: ''

    },
    // vue의 computed와 비슷
    // state를 변경할 때 mutations을 통해서 변경하는 것을 권장한다.
    getters: {},
    // state를 수정할 때 동기적으로 사용.
    // mutation naming 은 대문자로 짓는 것이 뷰 커뮤니티에서 규칙이다.
    mutations: {
        //구조분해 data = {row, cell, mine}
        [START_GAME](state, {row, cell, mine}) {
            state.data = {
                row, cell, mine
            };
            state.tableData = plantMine(row, cell, mine);
            state.timer = 0;
            state.halted = false;
            /*
            객체, 배열은 데이터가 바뀌어도 화면이 바뀌지 않을 수 있다.
            state.data.row = row;
            Vue.set(state.data, 'row', row);
             */
        },
        [OPEN_CELL](state, {row, cell}) {
            Vue.set(state.tableData[row], cell, CODE.OPENED);
        },
        [CLICK_MINE](state, {row, cell}) {

        },
        [FLAG_CELL](state, {row, cell}) {
            if (state.tableData[row][cell] === CODE.MINE) {
                Vue.set(state.tableData[row], cell, CODE.FLAG_MINE);
            } else {
                Vue.set(state.tableData[row], cell, CODE.FLAG);
            }
        },
        [QUESTION](state, {row, cell}) {
            if (state.tableData[row][cell] === CODE.FLAG_MINE) {
                Vue.set(state.tableData[row], cell, CODE.QUESTION_MINE);
            } else {
                Vue.set(state.tableData[row], cell, CODE.QUESTION);
            }
        },
        [NORMALIZE_CELL](state, {row, cell}) {
            if (state.tableData[row][cell] === CODE.QUESTION_MINE) {
                Vue.set(state.tableData[row], cell, CODE.MINE);
            } else {
                Vue.set(state.tableData[row], cell, CODE.NORMAL);
            }
        },
        [INCREMENT_TIME](state) {
            state.timer++;
        },
    },
    // 비동기를 사용할 때, 또는 여러 mutation을 연달아 사용할 때
    actions: {},
});