<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
    export default {
        name: "TdComponent",
        props: {
            cellData: String,
            cellIndex: Number,
            rowIndex: Number
        },
        methods: {
            onClickTd() {
                console.log(this.$root.$data);
            }
        }
    }
</script>

<style scoped>

</style>