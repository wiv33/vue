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
};

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
        result: '',
        openedCount: 0

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
            state.openedCount = 0;
            state.result = '';
            /*
            객체, 배열은 데이터가 바뀌어도 화면이 바뀌지 않을 수 있다.
            state.data.row = row;
            Vue.set(state.data, 'row', row);
             */
        },
        [OPEN_CELL](state, {row, cell}) {
            let openedCount = 0;
            // 1,1 => 0,0 ~ 2,2 까지
            console.log(row, cell);
            console.log(state.data.cell, state.data.row);
            const checked = [];

            //주변 8칸 지뢰 확인
            function checkAround(row, cell) {
                const checkRowOrCellIsUndefined = row < 0 || row >= state.tableData.length || cell < 0 || cell >= state.tableData[0].length;
                if (checkRowOrCellIsUndefined) {
                    return;
                }
                //주변 칸이 이것들이면 열지 않기
                if ([CODE.OPENED, CODE.FLAG, CODE.FLAG_MINE, CODE.QUESTION_MINE, CODE.QUESTION].includes(state.tableData[row][cell])) {
                    return;
                }

                if (checked.includes(row + '/' + cell)) {
                    return;
                } else {
                    checked.push(row + '/' + cell);
                }

                let around = [];
                if (state.tableData[row - 1]) {
                    around = around.concat([
                        state.tableData[row - 1][cell - 1], state.tableData[row - 1][cell], state.tableData[row - 1][cell + 1]
                    ]);
                }
                around = around.concat([
                    state.tableData[row][cell - 1], state.tableData[row][cell + 1]
                ]);
                if (state.tableData[row + 1]) {
                    around = around.concat([
                        state.tableData[row + 1][cell - 1], state.tableData[row + 1][cell], state.tableData[row + 1][cell + 1]
                    ]);
                }

                const counted = around.filter((v) => {
                    return [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v);
                });

                if (counted.length === 0 && row > -1) { //주변칸에 지뢰가 하나도 없으면 8칸 열어보기
                    const near = [];
                    if (row - 1 > -1) {
                        near.push([row - 1, cell - 1]);
                        near.push([row - 1, cell]);
                        near.push([row - 1, cell + 1]);
                    }
                    near.push([row, cell - 1]);
                    near.push([row, cell + 1]);
                    if (row + 1 < state.tableData.length) {
                        near.push([row + 1, cell - 1]);
                        near.push([row + 1, cell]);
                        near.push([row + 1, cell + 1]);
                    }
                    near.forEach(n => {
                        if (state.tableData[n[0]][n[1]] !== CODE.OPENED) {
                            checkAround(n[0], n[1]);
                        }
                    });
                }
                if (state.tableData[row][cell] === CODE.NORMAL) {
                    openedCount++;
                }
                Vue.set(state.tableData[row], cell, counted.length);
            }
            checkAround(row, cell);
            let halted = false, result = '';
            if (state.data.row * state.data.cell - state.data.mine === state.openedCount + openedCount) {
                halted = true;
                result = `${state.timer} 초만에 승리`;
            }
            state.openedCount += openedCount;
            state.halted = halted;
            state.result = result;
        },
        [CLICK_MINE](state, {row, cell}) {
            state.halted = true;
            Vue.set(state.tableData[row], cell, CODE.CLICKED_MINE)
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