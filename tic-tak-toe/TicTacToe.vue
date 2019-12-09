<template>
    <table-component :table-data="tableData"></table-component>
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
            }
        },
        methods: {

        },

    }
</script>

<style scoped>
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