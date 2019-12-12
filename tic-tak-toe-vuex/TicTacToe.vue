<template>
    <div>
        <div>{{turn}} 님의 턴입니다.</div>
        <table>
            <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
                <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex"> {{cellData}}</td>
            </tr>
        </table>
        <div v-if="winner">{{turnMessage}}</div>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';
    import TableComponent from "./TableComponent";
    import store, {CHANGE_TURN, CLICK_CELL, NO_WINNER, RESET_GAME, SET_WINNER} from "./store";

    export default {
        store,
        name: "TicTacToe",
        components: {
            TableComponent
        },
        data: {
            psName() {
                return "Hello Pil Seong"
            }
        },
        computed: {
            // ...mapState(['winner', 'turn']),
            ...mapState({
                winner: state => state.winner,
                turn(state) {
                    return state.turn;
                },
                tableData: state => state.tableData
            }),
            ...mapGetters({
                turnMessage: "turnMessage"
            })
            // winner() {
            //     return this.$store.state.winner;
            // },
            // turn() {
            //     return this.$store.state.turn;
            // }
        },
        methods: {
            onClickTd(rowIndex, cellIndex) {
                if (this.cellData) return;
                // console.log(this.$root.$data);
                this.$store.commit(CLICK_CELL, {row: rowIndex, cell: cellIndex });

                let win = false;
                if (this.tableData[rowIndex][0] === this.turn
                    && this.tableData[rowIndex][1] === this.turn
                    && this.tableData[rowIndex][2] === this.turn) {
                    win = true;
                } else if (this.tableData[0][cellIndex] === this.turn
                    && this.tableData[1][cellIndex] === this.turn
                    && this.tableData[2][cellIndex] === this.turn) {
                    win = true;
                } else if (this.tableData[0][0] === this.turn
                    && this.tableData[1][1] === this.turn
                    && this.tableData[2][2] === this.turn) {
                    win = true;
                } else if (this.tableData[0][2] === this.turn
                    && this.tableData[1][1] === this.turn
                    && this.tableData[2][0] === this.turn) {
                    win = true;
                }

                if (win) {
                    this.$store.commit(SET_WINNER, this.turn);
                    this.$store.commit(RESET_GAME);
                } else { // 무승부
                    let all = true; //all이 무승부라는 뜻
                    this.tableData.forEach(row => {
                        row.forEach(cell => {
                            if (!cell) {
                                all = false;
                            }
                        });
                    });

                    if (all) {
                        this.$store.commit(NO_WINNER);
                        this.$store.commit(RESET_GAME);
                    } else {
                        this.$store.commit(CHANGE_TURN);
                    }

                }

            }

        }
    }
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>