<template>

</template>

<script>
    import {mapState} from 'vuex';
    import TrComponent from './TrComponent';

    export default {
        name: "TableComponent",
        computed: {
            ...mapState({
                tableData: state => state.tableData
            }),
        },
        components: {
            TrComponent
        }
    }
</script>

<style scoped>

</style>