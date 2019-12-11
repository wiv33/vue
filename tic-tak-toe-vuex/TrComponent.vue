<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :key="index"  :cell-index="index" :row-index="rowIndex"></td-component>
    </tr>
</template>

<script>
    import TdComponent from "./TdComponent";

    export default {
        name: "TrComponent",
        props: {
            rowIndex: Number,
        },
        computed: {
            rowData() {
                return this.$store.state.tableData[this.rowIndex];
            }
        },
        components: {TdComponent}
    }
</script>

<style scoped>

</style>