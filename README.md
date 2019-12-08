BASEBALL

## INITIALIZR Project

### create directory (command prompt)
> mkdir vue/response-check

> cd vue/response-check

> git clone https://github.com/wiv33/vue.git

> git checkout response-check

> npm i

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

import ResponseCheck from './responseCheck';

new Vue().$mount('#root');
```

### create ResponseCheck.html

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

### create ResponseCheck.vue

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
