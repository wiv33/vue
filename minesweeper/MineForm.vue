<template>
    <div>
        <input type="number" placeholder="세로" :value="row" @change="onChangeRow">
        <input type="number" placeholder="가로" :value="cell" @change="onChangeCell">
        <input type="number" placeholder="지뢰 개수" :value="mine" @change="onChangeMine">
    </div>
</template>

<script>
    export default {
        name: "MineForm",
        data() {
            return {
                row: 10,
                cell: 10,
                mine: 20,
            };
        },
        methods: {
            onChangeRow(e) {
                this.row = e.target.value;
            },

            onChangeCell(e) {
                this.cell = e.target.value;
            },

            onChangeMine(e) {
                this.mine = e.target.value
            },

        }
    }
</script>

<style scoped>

</style>