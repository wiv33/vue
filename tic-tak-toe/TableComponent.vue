<template>
    <table>
        <tr-component v-for="(rowData, index) in tableData" :key="index" :table-data="rowData" :row-index="index"></tr-component>
    </table>
</template>

<script>
    import TrComponent from './trComponent';

    export default {
        name: "TableComponent",
        props: {
            tableData: Array
        },
        components: {
            TrComponent
        }
    }
</script>

<style scoped>

</style>