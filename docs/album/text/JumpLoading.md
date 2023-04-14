# 跳动Loading

> Loading跳动效果

## 效果演示
<JumpLoading />

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
    transform: translateY(50px);
  }
}
</style>
```

## 代码讲解
- **`@keyframes animate`**：关键帧（keyframes）规则，定义一个名为「 animate 」从0% ~ 100%的过度方式为宽度铺满。
- **`animation`**：添加一个动画规则，绑定名为「 animate 」的动画，持续5秒，`linear`为线性匀速动画，`infinite`为无限循环。
- **`filter`**：滤镜规则，dropp-shadow该滤镜会在元素周围添加阴影效果，偏移量为0，模糊程度为20px，阴影颜色等
- **`border-right`**：用来实现移动的字符，表示设置一个5px的右边框，solid为实线，指定边框颜色
- **`white-space: nowrap;`**：表示强制文本内容在一行显示，不能换行，超出宽度溢出边界
- **`::before`**：伪元素选择器，表示在`.text-content`元素「前面 」使用一个伪元素
- **`line-height`**：设置字体行高，保证动画效果跟父级元素（text-content）相对定位能够覆盖文字，如果太大，可以缩小

<script setup>
import JumpLoading from "./JumpLoading.vue"
</script>