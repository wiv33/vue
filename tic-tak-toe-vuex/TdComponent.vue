<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
    import EventBus from "./EventBus";

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
                this.$set(this.tableData[rowIndex], cellIndex, this.turn);

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
                    this.winner = this.turn;
                    this.turn = 'O';
                    this.tableData = [['', '', ''], ['', '', ''], ['', '', '']]
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
                        this.winner = '';
                        this.turn = 'O';
                        this.tableData = [['', '', ''], ['', '', ''], ['', '', '']]
                    } else {
                        this.turn = this.turn === 'O' ? 'X' : 'O';
                    }

                }

            }

        }
    }
</script>

<style scoped>

</style>