<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
    import {CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER} from "./store";

    export default {
        name: "TdComponent",
        created() {
            console.log(this.cellData);
        },
        props: {
            cellData: String,
            cellIndex: Number,
            rowIndex: Number
        },
        methods: {
            onClickTd() {
                if (this.cellData) return;
                // console.log(this.$root.$data);
                this.$store.commit(CLICK_CELL, {row: this.rowIndex, cell: this.cellIndex });

                let win = false;
                if (this.tableData[this.rowIndex][0] === this.turn
                    && this.tableData[this.rowIndex][1] === this.turn
                    && this.tableData[this.rowIndex][2] === this.turn) {
                    win = true;
                } else if (this.tableData[0][this.cellIndex] === this.turn
                    && this.tableData[1][this.cellIndex] === this.turn
                    && this.tableData[2][this.cellIndex] === this.turn) {
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

<style scoped>

</style>