<template>
    <div>
        <div>{{turn}} 님의 턴입니다.</div>
        <table-component :table-data="tableData"></table-component>
        <div v-if="winner">{{turnMessage}}</div>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';
    import TableComponent from "./TableComponent";
    import store from "./store";

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
                    return state.turn + this.psName();
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