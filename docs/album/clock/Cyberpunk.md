# 赛博朋克时钟

> 赛博朋克时钟效果

## 效果演示
<Cyberpunk />

## 源代码
### Vue代码
```vue
<template>
  <div :class="$style['show-body']">
    <div :class="$style.wrapper">
      <div :class="$style.display">
        <div :class="$style.time">12:00:00 PM</div>
      </div>
      <span></span>
    </div>
  </div>
</template>
```

### css代码
```css
<style module>
.show-body {
  display: grid;
  height: 20vh;
  width: 100%;
  background-color: #1d1c1c;
  border-radius: 10px;
  place-items: center;
}

.wrapper {
  height: 100px;
  width: 360px;
  cursor: default;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  border-radius: 10px;
  animation: animate 1.5s linear infinite;
}

.wrapper .display,
.wrapper span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.wrapper .display {
  z-index: 999;
  background: #1b1b1b;
  height: 85px;
  width: 345px;
  border-radius: 6px;
  text-align: center;
}

.wrapper .display .time {
  color: #fff;
  line-height: 85px;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}

.wrapper span {
  height: 100%;
  width: 100%;
  background: inherit;
  border-radius: 10px;
}

.wrapper span {
  filter: blur(20px);
}
</style>
```

## 实现思路
1. 通过`clip`将背景色限制在文字内。
2. 并通过`text-fill`设置文字为透明以看到背景色。
3. 将文字和背景色都设置为相同的渐变色，并添加`hue-rotate`动画实现流动的效果。

## 代码讲解
- **`-webkit-background-clip: text`**：将背景限制在文本内容区域内，而不是整个元素的背景区域内。
- **`-webkit-text-fill-color: transparent`**：将文本颜色设置为透明，以便看到背景渐变色。
- **`filter: hue-rotate(360deg)`**：将元素的色相值旋转360度，使其颜色发生变化。
- **`place-items: center`**：Grid布局属性，将元素水平、垂直居中对齐。

<script setup>
import Cyberpunk from "./Cyberpunk.vue"
</script>