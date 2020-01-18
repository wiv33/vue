<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
        <button v-if="redo" @click="onClickRedo">한 번 더!</button>
    </div>
</template>

<script>
    import LottoBall from "./LottoBall";

    function getWinNumbers() {
        const candidate = Array(45).fill().map((v, i) => i + 1);
        const shuffle = [];
        while (candidate.length > 0) {
            let number = Math.random();
            let x = number * candidate.length;
            let start = Math.floor(x);
            let numbers = candidate.splice(start, 1);
            let number1 = numbers[0];
            shuffle.push(number1);
        }
        const bonusNumber = shuffle[shuffle.length - 1];
        const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
        let newVar = [...winNumbers, bonusNumber];
        console.log(newVar);
        return newVar;
    }

    const timeOuts = [];
    export default {
        components: {
            //파스칼, 케밥 케이스가 서로 호ㄹ환되는 경우 key 값을 생략할 수 있다.
            /*'lotto-ball':*/ LottoBall
        },
        name: "LottoGenerator",
        data() {
            return {
                winNumbers: getWinNumbers(),
                winBalls: [],
                redo: false,
                bonus: null
            };
        },
        computed: {

        },
        methods: {
            onClickRedo() {
                this.winNumbers = getWinNumbers();
                this.winBalls = [];
                this.bonus = null;
                this.redo = false;
                this.showBalls();
            },
            showBalls() {
                for (let i = 0; i < this.winNumbers.length - 1; i++) {
                    timeOuts[i] = setTimeout(() => this.winBalls.push(this.winNumbers[i]), (i + 1) * 1000);
                }
                timeOuts[6] = setTimeout(() => {
                    this.bonus = this.winNumbers[6];
                    this.redo = true;
                }, 7000);
            }
        },
        mounted() {
            this.showBalls();
        },
        beforeDestroyed() {
            timeOuts.forEach((t) => clearInterval(t));
        },
        // 웬만하면 사용을 자제.
        watch: {
            //이전 값, 현재 값
            redo(val, oldVal) {
                // console.log(val, oldVal);
                if (val == false) {
                    // this.showBalls();
                }
            }
        }
    };
</script>

<style scoped>

</style>