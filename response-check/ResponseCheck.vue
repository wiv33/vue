<template>
    <div>
        <div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
        <div>
            <div>평균시간: {{}}</div>
        </div>
        <button @click="onReset">리셋</button>
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
        methods: {
            onReset() {

            },
            onClickScreen() {
                switch (this.state) {
                    case "waiting":
                        this.state = 'ready';
                        break;
                    case "ready":
                        this.state = 'now';
                        break;
                    case "now":
                        this.state = 'waiting';
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