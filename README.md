Lotto Generator

# Studying in focus
* ###watch
* ###template
* ###v-for :key
* ###props

## INITIALIZR Project

### create directory (command prompt)
> mkdir vue/lotto-generator

> cd vue/lotto-generator

> git clone https://github.com/wiv33/vue.git

> git checkout lotto-generator

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

import LottoGenerator from "./LottoGenerator";

new Vue(LottoGenerator).$mount('#root');
```

### init LottoGenerator.html

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

### init LottoGenerator.vue

```
<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "LottoGenerator",
        data() {
            return {
                
            }
        },
        computed: {
            
        },
        methods: {
            
        },
        beforeMounted() {
            
        },
        mounted() {
            
        },
        beforeDestroyed() {
            
        }
    };
</script>

<style scoped>
    
</style>
```

### init LottoBall.vue

```
<template>
    
</template>

<script>
    export default {
        name: "LottoBall"
    }
</script>

<style scoped>

</style>
```
