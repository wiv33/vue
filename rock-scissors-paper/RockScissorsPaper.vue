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

            }
        },
        beforeCreated() {
            console.log("beforeCreated");
        },
        created() {
            console.log("created");
        },
        beforeMounted() {
            console.log("beforeMounted");
        },
        mounted() {
            setInterval(() => {
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
            console.log("mounted");
        },
        beforeUpdated() {
            console.log("beforeUpdated");
        },
        updated() {
            console.log("updated");
        },
        beforeDestroyed() {
            clearInterval(interval);
            console.log("beforeDestroyed");
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