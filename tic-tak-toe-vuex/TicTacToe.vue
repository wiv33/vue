<template>
    <div>
        <div>{{turn}} 님의 턴입니다.</div>
        <table-component :table-data="tableData"></table-component>
        <div v-if="winner">{{winner}} 님의 승리</div>
    </div>
</template>

<script>
    import TableComponent from "./TableComponent";

    export default {
        name: "TicTacToe",
        components: {
            TableComponent
        },
        data() {
            return {
                tableData: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ],
                turn: 'O',
                winner: '',
            }
        },
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