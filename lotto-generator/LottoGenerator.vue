<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" :key=""></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball></lotto-ball>
        <button v-if="redo">한 번 더!</button>
    </div>
</template>

<script>
    export default {
        name: "LottoGenerator",
        data() {
            return {
                winBalls: [],
                redo: false,
                bonus: null
            }
        },
        computed: {

        },
        methods: {

        },
        beforeMounted() {

        },
        mounted() {

        },
        beforeDestroyed() {

        }
    };
</script>

<style scoped>

</style>