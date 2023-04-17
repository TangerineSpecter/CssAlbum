# 渐变色效果

> 流光溢彩的渐变色

## 效果演示
<View />

## 源代码

### css代码
```css
<style module>
.content {
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  animation: animate 1.5s linear infinite;
}

@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
```

## 实现思路
1. 通过`linear-gradient`设置渐变色
2. 通过动画播放流动性：
    - `filter`可以设置模糊、对比度、亮度、饱和度等这些可视化效果。
    -  `hue-rotate(360deg)`让色相轮旋转360度。


<script setup>
import View from "./index.vue"
</script>