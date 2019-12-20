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
    import store, {INCREMENT_TIME} from "./store";
    import MineForm from "./MineForm";

    let interval
    export default {
        store,
        name: "MineSweeper",
        components: {
            TableComponent,
            MineForm
        },
        data: {

        },
        computed: {
            ...mapState(['timer', 'result', "halted"])

        },
        methods: {

        },
        watch: {
            halted(value, oldValue) {
                if (!value) {
                    interval = setInterval(() => {
                        this.$store.commit(INCREMENT_TIME);
                    }, 1000);
                } else {
                    clearInterval(interval)
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