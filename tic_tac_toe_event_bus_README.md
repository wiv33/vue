TicTacToe

## Studying in focus
* template, component
* v-for :key
* this.$set
* this.$root
* this.$parent / this.$parent.$parent

## INITIALIZR Project

### create directory (command prompt)
> mkdir vue/tic-tac-toe-event-bus

> cd vue/tic-tac-toe-event-bus

> git clone https://github.com/wiv33/vue.git

> git checkout tic-tac-toe-event-bus

> npm i

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

import TicTacToe from "./TicTacToe";

new Vue(TicTacToe).$mount('#root');
```

### init TicTacToe.html

```
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tic Tac Toe</title>
</head>
<body>
<div id="root"></div>
<script src="./dist/app.js"></script>
</body>
</html>
```

### init TicTacToe.vue

```
<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "TicTacToe",
        data() {
            return {

            }
        },
        methods: {

        },
        components: {

        }
    }
</script>

<style scoped>

</style>
```

### init TableComponent.vue

```
<template>
    <table>
        <tr-component></tr-component>
    </table>
</template>

<script>
    import TrComponent from './TrComponent';

    export default {
        name: "TableComponent",
        props: {
        },
        components: {
        }
    }
</script>

<style scoped>

</style>
```

### init TrComponent.vue

```
<template>
    <tr>
        <td-component></td-component>
    </tr>
</template>

<script>
    import TdComponent from "./TdComponent";

    export default {
        name: "TrComponent",
        props: {
        },
        components: {TdComponent}
    }
</script>

<style scoped>

</style>
```

### init TdComponent.vue

```
<template>
    <td></td>
</template>

<script>
    export default {
        name: "TdComponent",
        props: {
        },
        methods: {
            onClickTd() {
            }
        }
    }
</script>

<style scoped>

</style>
```

### init EventBus.js

```
import Vue from 'vue';

export default new Vue();
```
