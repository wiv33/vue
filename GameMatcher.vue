<template>
    <div v-if="currentGame === 'number-baseball'">
        <baseball></baseball>
    </div>
    <div v-else-if="currentGame === 'response-check'">
        <ResponseCheck></ResponseCheck>
    </div>
    <div v-else-if="currentGame === 'lotto-generator'">
        <lotto-generator></lotto-generator>
    </div>
    <div v-else-if="currentGame === 'rock-scissors-paper'">
        <rock-scissors-paper></rock-scissors-paper>
    </div>
    <div v-else-if="currentGame === 'tic-tac-toe'">
        <tic-tac-toe></tic-tac-toe>
    </div>
<!--    <div v-else-if="currentGame === 'mine-sweeper'">-->
<!--        <mine-sweeper></mine-sweeper>-->
<!--    </div>-->
    <div v-else>
        일치하는 게임이 없습니다.
    </div>
</template>

<script>
    import ResponseCheck from "./response-check/ResponseCheck";
    import LottoGenerator from "./lotto-generator/LottoGenerator";
    import RockScissorsPaper from "./rock-scissors-paper/RockScissorsPaper";
    import TicTacToe from "./tic-tak-toe/TicTacToe";
    import MineSweeper from "./mine-sweeper/MineSweeper";
    import Baseball from "./baseball/Baseball";

    export default {
        name: "GameMatcher",
        components: {
            MineSweeper,
            Baseball,
            RockScissorsPaper,
            LottoGenerator,
            TicTacToe,
            ResponseCheck
        },
        mounted() {
            console.log(this.$router); // vue-router 전체 설정
            console.log(this.$route); //현재 주소
        },
        computed: {
            currentGame() {
                return this.$route.params.name;
            }
        }
    }
</script>

<style scoped>

</style>