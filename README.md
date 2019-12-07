BASEBALL

## INITIALIZR Project

### create directory (command prompt)
> mkdir vue/baseball

> cd vue/baseball

> npm init

> npm i vue

> npm i webpack webpack-cli -D


### create webpack.config.js and edit

```
module.exports = {
  entry: {},
  module: {},
  plugins: [],
  output: {}
}
```


### create main.js

```
import Vue from 'vue';

new Vue().$mount('#root');
```

### create Baseball.html

```
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div id="root"></div>
<script src="/dist/app.js"></script>
</body>
</html>
```

### create Baseball.vue

```
<template>
    <div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
```
