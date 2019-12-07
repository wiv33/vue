<template>
    <div>
        <h1>{{result}}</h1>
        <form @on:submit="onSubmitForm">
            <input type="text" ref="answer" maxlength="4" v-model=""value>
            <button>입력</button>
        </form>
        <div>시도 : {{}}</div>
    </div>
</template>

<script>
    export default {
        name: "Baseball",
        data() {
            return {
                value: '',
                result: ''
            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>

</style>