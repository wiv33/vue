<template>
    <div>
        <div>
            <router-link to="/game/index">게임들</router-link>
            <router-link to="/game/number-baseball?currPage=3&offset=10&limit=1&sort=createAt">숫자야구</router-link>
            <router-link to="/game/response-check">반응속도 체크</router-link>
            <router-link to="/game/rock-scissors-paper">주먹 가위 보</router-link>
            <router-link to="/game/lotto-generator">로또</router-link>
            <router-link to="/game/tic-tac-toe">틱택토</router-link>
            <router-link to="/game/mine-sweeper">지뢰찾기</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import router from './routes'

    export default {
        name: "UserVueRouter",
        router,
    }
</script>

<style scoped>
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