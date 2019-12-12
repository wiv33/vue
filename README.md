MineSweeper

## Studying in focus
* 

## INITIALIZR Project

### create directory (command prompt)
> mkdir vue/MineSweeper

> cd vue/MineSweeper

> git clone https://github.com/wiv33/vue.git

> git checkout MineSweeper

> npm i

> npm i vuex

> npm run dev

### init webpack.config.js

```
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require('path');

module.exports = {
    mode: 'development', //production
    devtool: 'eval', //hidden-sourceMap
    resolve: {
        extensions: ['.js', '.vue']
    },
    entry: {
        app: path.join(__dirname, 'main.js')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'), //distribution
        //add webpack-dev-server
        publicPath: '/dist'
    }
};
```


### init main.js

```
import Vue from 'vue';

import MineSweeper from "./MineSweeper";

new Vue(MineSweeper).$mount('#root');
```

### init store.js

```
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION = 'QUESTION';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIME = 'INCREMENT_TIME';

//가장 중요한 한 객체만 export default 를 사용한다.
// import 할 때 이름을 마음대로 정할 수 있다.
export default new Vuex.Store({ // import store from './store';
    // vue의 data와 비슷
    state: {
        tableData: [],
        data: {
            row: 0,
            cell: 0,
            mine: 0,
        },
        timer: 0,
        result: ''

    },
    // vue의 computed와 비슷
    // state를 변경할 때 mutations을 통해서 변경하는 것을 권장한다.
    getters: {},
    // state를 수정할 때 동기적으로 사용.
    // mutation naming 은 대문자로 짓는 것이 뷰 커뮤니티에서 규칙이다.
    mutations: {
        [START_GAME](state) {

        },
        [OPEN_CELL](state) {

        },
        [CLICK_MINE](state) {

        },
        [FLAG_CELL](state) {

        },
        [QUESTION](state) {

        },
        [NORMALIZE_CELL](state) {

        },
        [INCREMENT_TIME](state) {

        },
    },
    // 비동기를 사용할 때, 또는 여러 mutation을 연달아 사용할 때
    actions: {},
});
```

### init MineSweeper.html

```
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MineSweeper</title>
</head>
<body>
<div id="root"></div>
<script src="./dist/app.js"></script>
</body>
</html>
```

### init MineSweeper.vue

```
<template>
    <div>
        <mine-form/>
        <div>{{timer}}</div>
        <table-component></table-component>
        <div>{{result}}</div>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';
    import TableComponent from "./TableComponent";
    import store, { } from "./store";

    export default {
        store,
        name: "MineSweeper",
        components: {
            TableComponent
        },
        data: {

        },
        computed: {
            ...mapState('timer', 'result')

        },
        methods: {

        }
    }
</script>

<style>
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
```

### init MineForm.vue

```
<template>
    <div>
        <input type="number" placeholder="세로" :value="row" @change="onChangeRow">
        <input type="number" placeholder="가로" :value="cell" @change="onChangeCell">
        <input type="number" placeholder="지뢰 개수" :value="mine" @change="onChangeMine">
    </div>
</template>

<script>
    export default {
        name: "MineForm",
        data() {
            return {
                row: 10,
                cell: 10,
                mine: 20,
            };
        },
        methods: {
            onChangeRow(e) {
                this.row = e.target.value;
            },

            onChangeCell(e) {
                this.cell = e.target.value;
            },

            onChangeMine(e) {
                this.mine = e.target.value
            },

        }
    }
</script>

<style scoped>

</style>
```
