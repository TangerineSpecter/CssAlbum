# 跳动Loading

> Loading跳动效果

## 效果演示
<View />

## 源代码
### Vue代码
```vue
<template>
  <div :class="$style['show-body']">
    <div :class="$style['text-content']">
      <div :class="$style.txt" style="--i: 1">L</div>
      <div :class="$style.txt" style="--i: 2">o</div>
      <div :class="$style.txt" style="--i: 3">a</div>
      <div :class="$style.txt" style="--i: 4">d</div>
      <div :class="$style.txt" style="--i: 5">i</div>
      <div :class="$style.txt" style="--i: 6">n</div>
      <div :class="$style.txt" style="--i: 7">g</div>
    </div>
  </div>
</template>
```

### css代码
```css
<style module>
.show-body {
  display: flex;
  height: 20vh;
  width: 100%;
  background-color: #1d1c1c;
  border-radius: 10px;
}
.text-content {
  margin: auto;
  color: #fff;
  display: flex;
  font-size: 70px;
  font-weight: bolder;
  transform: translateY(-150%);
}

.text-content .txt {
  animation: animate ease 0.5s infinite alternate;
  animation-delay: calc(var(--i) / 10 * 1s);
}

@keyframes animate {
  100% {
    color: #91c5b0;
    filter: drop-shadow(0 0 10px #91c5b0);
    transform: translateY(50px);
  }
}
</style>
```

## 实现思路
1. 给每个文字设置一个Y轴偏移的动画。
2. 重点在于，给每个文字单独绑定延迟动画的时间，让动画效果错开，达到波动的效果。

## 代码讲解
- **`@keyframes animate`**：关键帧（keyframes）规则，定义一个名为「 animate 」100%的过度方式为Y轴偏移50px。
- **`animation`**：添加一个动画规则，绑定名为「 animate 」的动画，持续5秒，`ease`缓动函数，开始和结束的时候慢下来，`infinite`为无限循环，`alternate`表示每次播放反向执行。
- **`filter`**：滤镜规则，dropp-shadow该滤镜会在元素周围添加阴影效果，偏移量为0，模糊程度为10px，阴影颜色等。
- **`style="--i: 1"`**：表示CSS自定义属性`--i`，并赋值为1。
- **`animation-delay: calc(var(--i) / 10 * 1s)`**：表示动画延迟，`calc`进行计算，`var(--i)`和style定义的赋值对应，计算结果就是动画延迟时间。

<script setup>
import View from "./Index.vue"
</script>