<template>
    <div>
        <mine-form/>
        <div>{{timer}}</div>
        <table-component></table-component>
        <div>{{result}}</div>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';
    import TableComponent from "./TableComponent";
    import store, { } from "./store";

    export default {
        store,
        name: "MineSweeper",
        components: {
            TableComponent
        },
        data: {

        },
        computed: {
            ...mapState('timer', 'result')

        },
        methods: {

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