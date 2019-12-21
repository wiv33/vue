<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
    import EventBus from "./EventBus";

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
                if (this.cellData) return;
                //emit이 되면 on이 실행된다.
                EventBus.$emit('clickTd', this.rowIndex, this.cellIndex);
            }
        }
    }
</script>

<style scoped>

</style>