# 毛玻璃效果

> 毛玻璃遮挡小球

## 效果演示
<ClarityGlass />

## 源代码
### Vue代码
```vue
<template>
  <div :class="$style['show-body']">
    <div :class="$style.circle"></div>
    <div :class="$style.glass">
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
      <div :class="$style.layer"></div>
    </div>
  </div>
</template>
```

### css代码
```css
<style module>
.show-body {
  display: flex;
  max-height: 40vh;
  align-items: center;
  width: 100%;
  background-color: #1d1c1c;
  border-radius: 10px;
  box-sizing: border-box;
  justify-content: center;
}

.circle {
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(#03a9f4, #23ff2c);
  border-radius: 50%;
  animation: animate 5s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    transform: translateX(200px);
  }
  50% {
    transform: translateX(-200px);
  }
}

.glass {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glass .layer {
  position: relative;
  width: 20px;
  height: 40vh;
  margin: 1px;
  box-shadow: 0 5px 25px rgba(35, 34, 34, 0.15);
}

.glass .layer:nth-child(4n + 1) {
  backdrop-filter: blur(5px);
}
.glass .layer:nth-child(4n + 2) {
  backdrop-filter: blur(25px);
}
.glass .layer:nth-child(4n + 3) {
  backdrop-filter: blur(15px);
}
.glass .layer:nth-child(4n + 4) {
  backdrop-filter: blur(10px);
}
</style>
```

## 实现思路
1. 主要是定义一个多个毛玻璃效果的光栅，毛玻璃效果主要靠模糊和透明背景实现。
2. 小球设置动画，层级调整为毛玻璃效果下，由于透明背景色加模糊效果，显示出毛玻璃的感觉。

## 代码讲解
- **`background: linear-gradient`**：创建线性渐变背景色。
- **`box-shadow`**：为元素添加阴影，前两个是x、y偏移量，模糊半径25px，颜色使用透明度0.15。
- **`justify-content: center`**：容器内子元素全部居中显示。
- **`backdrop-filter: blur"`**：元素背景创建30px半径的模糊效果。
- **`.glass .layer:nth-child(4n + 1)`**：伪元素选择器，表示选择父元素glass下的layer元素中的第一个，每间隔4个选一次。
- **`ease-in-out`**：动画开始和结束的速度比较平滑过度，缓慢加速，缓慢减速。而`ease`是开始快，然后逐渐减速到结束。

<script setup>
import ClarityGlass from "./ClarityGlass.vue"
</script>