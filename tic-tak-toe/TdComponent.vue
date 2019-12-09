<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
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
                if (this.cellData) return ;

                // console.log(this.$root.$data);
                const rootData = this.$root.$data;
                this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);

                let win = false;
                if (rootData.tableData[this.rowIndex][0] === rootData.turn
                    && rootData.tableData[this.rowIndex][1] === rootData.turn
                    && rootData.tableData[this.rowIndex][2] === rootData.turn) {
                    win = true;
                } else if (rootData.tableData[0][this.cellIndex] === rootData.turn
                    && rootData.tableData[1][this.cellIndex] === rootData.turn
                    && rootData.tableData[2][this.cellIndex] === rootData.turn) {
                    win = true;
                } else if (rootData.tableData[0][0] === rootData.turn
                    && rootData.tableData[1][1] === rootData.turn
                    && rootData.tableData[2][2] === rootData.turn) {
                    win = true;
                } else if (rootData.tableData[0][2] === rootData.turn
                    && rootData.tableData[1][1] === rootData.turn
                    && rootData.tableData[2][0] === rootData.turn) {
                    win = true;
                }

                if (win) {
                    rootData.winner = rootData.turn;
                    rootData.turn = 'O';
                    rootData.tableData = [['', '', ''],['', '', ''],['', '', '']]
                } else { // 무승부
                    let all = true; //all이 무승부라는 뜻
                    rootData.tableData.forEach(row => {
                        row.forEach(cell => {
                            if (!cell) {
                                all = false;
                            }
                        });
                    });

                    if (all) {
                        rootData.winner = '';
                        rootData.turn = 'O';
                        rootData.tableData = [['', '', ''],['', '', ''],['', '', '']]
                    } else {
                        rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
                    }

                }
            }
        }
    }
</script>

<style scoped>

</style>