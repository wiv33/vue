BASEBALL

## INITIALIZR Project

### create directory (command prompt)
> mkdir vue/rock-scissors-paper

> cd vue/rock-scissors-paper

> git clone https://github.com/wiv33/vue.git

> git checkout rock-scissors-paper

> npm i

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

import RockScissorsPaper from "./RockScissorsPaper";

new Vue(RockScissorsPaper).$mount('#root');
```

### init RockScissorsPaper.html

```
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rock Scissor Paper</title>
</head>
<body>
<div id="root"></div>
<script src="./dist/app.js"></script>
</body>
</html>
```

### init RockScissorsPaper.vue

```
<template>
    
</template>

<script>
    export default {
        name: "RockScissorPaper",
        data() {

        },
        computed: {

        },
        methods: {

        },
    };
</script>

<style scoped>

</style>
```


### Vue LifeCycle

![Life Cycle](./images/lifecycle.dcbe29f6)