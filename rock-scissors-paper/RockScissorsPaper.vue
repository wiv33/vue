<template>
    <div>
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>
    </div>
</template>

<script>
    const rspCoords = {
        바위: '0',
        가위: '-142px',
        보: '-284px'
    };
    const scores = {
        가위: 1,
        바위: 0,
        보: -1
    };

    const computerChoice = imgCoord => Object.entries(rspCoords).find(v => v[1] === imgCoord)[0];

    let interval = null;
    export default {
        name: "RockScissorPaper",
        data() {
            return {
                imgCoord: rspCoords.바위,
                score: 0,
                result: ''
            }
        },
        computed: {
            computedStyleObject() {
                return {
                    background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
                    fontSize: '14px'
                }
            }
        },
        methods: {
            onClickButton(choice) {
                clearInterval(interval);
                const myScore = scores[choice];
                const cpuScore = scores[computerChoice(this.imgCoord)];
                const diff = myScore - cpuScore;
                if (diff === 0) {
                    this.result = '비겼습니다.';
                } else if ([-1, 2].includes(diff)) {
                    this.result = '승리';
                    this.score++;
                } else {
                    this.result = "졌습니다.";
                    this.score--;
                }
                interval = null;
                setTimeout(() => {
                    this.changeHand()
                }, 1000);
            },
            changeHand() {
                if (!interval) {
                    interval = setInterval(() => {
                        switch (this.imgCoord) {
                            case rspCoords.바위:
                                this.imgCoord = rspCoords.가위;
                                break;
                            case rspCoords.가위:
                                this.imgCoord = rspCoords.보;
                                break;
                            case rspCoords.보:
                                this.imgCoord = rspCoords.바위;
                                break;
                        }
                    }, 100);
                }
            },
        },
        beforeCreated() {
            // console.log("beforeCreated");
        },
        created() {
            // console.log("created");
        },
        beforeMounted() {
            // console.log("beforeMounted");
        },
        mounted() {
            this.changeHand();
            // console.log("mounted");
        },
        beforeUpdated() {
            // console.log("beforeUpdated");
        },
        updated() {
            // console.log("updated");
        },
        beforeDestroyed() {
            clearInterval(interval);
            // console.log("beforeDestroyed");
        },
        destroyed() {
            console.log("destroyed");
        }
    };
</script>

<style scoped>
    #computer {
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>