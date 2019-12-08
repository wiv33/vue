<template>
    <div>
        <div id="screen" v-bind:class="state">{{message}}</div>
        <div>
            <div>평균시간: {{}}</div>
        </div>
        <button @click="onReset"></button>
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