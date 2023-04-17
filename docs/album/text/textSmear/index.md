# 涂抹效果

> 文字涂抹效果

## 效果演示
<View />

## 源代码
### Vue代码
```vue
<template>
  <div :class="$style['show-body']">
    <div :class="$style['text-content']">HELLO CSS WORLD</div>
  </div>
</template>
```

### css代码
```css
.show-body {
  display: flex;
  height: 20vh;
  width: 100%;
  background-color: #1d1c1c;
  border-radius: 10px;
}
.text-content {
  margin: auto;
  color: #d1d1d1;
  font-size: 38px;
  font-weight: bolder;
  position: relative;
  line-height: 1.2;
}

.text-content::before {
  content: "HELLO CSS WORLD";
  color: #06ee99;
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: animate 5s linear infinite;
  border-right: 5px solid #06ee99;
  filter: drop-shadow(0 0 20px #06ee99);
}

@keyframes animate {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
```

## 实现思路
1. 在文字前定义一个伪元素，使用一样的内容，并携带关键帧动画，从左往右增加宽度。
2. 本质上就是通过伪元素叠加相同文字，换个颜色进行覆盖，需要注意设置`overflow`，溢出部分要隐藏。
3. 光标效果实质上就是一个加宽的右边框，跟着动画一起移动。

## 代码讲解
- **`@keyframes animate`**：关键帧（keyframes）规则，定义一个名为「 animate 」从0% ~ 100%的过度方式为宽度铺满。
- **`animation`**：添加一个动画规则，绑定名为「 animate 」的动画，持续5秒，`linear`为线性匀速动画，`infinite`为无限循环。
- **`filter`**：滤镜规则，dropp-shadow该滤镜会在元素周围添加阴影效果，偏移量为0，模糊程度为20px，阴影颜色等
- **`border-right`**：用来实现移动的字符，表示设置一个5px的右边框，solid为实线，指定边框颜色
- **`white-space: nowrap;`**：表示强制文本内容在一行显示，不能换行，超出宽度溢出边界
- **`::before`**：伪元素选择器，表示在`.text-content`元素「前面 」使用一个伪元素
- **`line-height`**：设置字体行高，保证动画效果跟父级元素（text-content）相对定位能够覆盖文字，如果太大，可以缩小

<script setup>
import View from "./Index.vue"
</script>