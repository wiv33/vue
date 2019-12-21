<template>
    <div>
        <div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
        <template v-if="result.length">
            <div>평균시간: {{average}}ms</div>
            <button @click="onReset">리셋</button>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                result:[],
                state: 'waiting',
                message: '클릭해서 시작하세요.'
            }
        },
        computed: {
            average() {
                return this.result.reduce((a,b) => a + b, 0) / this.result.length || 0
            }
        },
        methods: {
            onReset() {
                this.result = [];
            },
            onClickScreen() {
                let startTime = 0, endTime = 0, timeout = null;
                switch (this.state) {
                    case "waiting":
                        this.state = 'ready';
                        this.message = '초록색이 되면 클릭하세요.';
                        timeout = setTimeout(() => {
                            this.state = 'now';
                            this.message = '지금 클릭!';
                            startTime = new Date().getMilliseconds();
                        }, Math.floor(Math.random() * 1000) + 2000) // 2 ~ 3초
                        break;
                    case "ready":
                        clearTimeout(timeout);
                        this.state = 'waiting';
                        this.message = '너무 빨리 클릭했습니다. 초록색이 된 후 클릭하세요.'
                        break;
                    case "now":
                        this.state = 'waiting';
                        this.message = '클릭해서 시작하세요.';
                        endTime = new Date().getMilliseconds();
                        this.result.push(endTime - startTime);
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>