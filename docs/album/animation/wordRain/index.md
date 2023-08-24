# 文字雨效果

> 下字母雨的云

## 效果演示
<View />

## 源代码
### Vue代码
```vue
<template>
  <div :class="$style['show-body']">
    <div :class="$style.cloud" id="myCloud"></div>
  </div>
</template>
```

### css代码
```css
.show-body {
  display: flex;
  min-height: 80vh;
  align-items: center;
  width: 100%;
  background-color: #1d1c1c;
  border-radius: 10px;
  box-sizing: border-box;
  justify-content: center;
}

.cloud {
  position: relative;
  width: 320px;
  height: 100px;
  background-color: #fff;
  border-radius: 100px;
  z-index: 100;
  filter: drop-shadow(0 0 35px #fff);
  bottom: 15vh;
}

.cloud::before {
  content: "";
  position: absolute;
  top: -50px;
  left: 40px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 90px 0 0 30px #fff;
}

.text {
  position: absolute;
  height: 20px;
  top: 40px;
  line-height: 20px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 15px #fff, 0 0 15px #fff;
  transform-origin: bottom;
  animation: animate 2s linear forwards;
}

@keyframes animate {
  0% {
    transform: translateY(0) scale(1);
  }
  70% {
    transform: translateY(290px) scale(1);
  }
  100% {
    transform: translateY(290px) scale(0);
  }
}
```

### js代码
```js
export default {
  mounted() {
    setInterval(() => {
      this.rain();
    }, 20);
  },
  methods: {
    randomText() {
      var text = "abcdefghijklmnopqrstuvwxyz0123456789";
      return text[Math.floor(Math.random() * text.length)];
    },

    rain() {
      let cloud = document.querySelector("#myCloud");
      let e = document.createElement("div");
      let left = Math.floor(Math.random() * 310);
      let size = Math.random() * 1.5;
      let duration = Math.random() * 1;
      e.classList.add(this.$style.text);
      cloud.appendChild(e);
      e.innerText = this.randomText();
      e.style.left = left + "px";
      e.style.fontSize = 0.5 + size + "em";
      e.style.animationDuration = 1 + duration + "s";

      setTimeout(() => {
        cloud.removeChild(e);
      }, 2000);
    },
  },
};
```

## 实现思路
1. 通过JS定时器随机生成字母。
2. 修改元素属性，文字大小和位置进行位移动画效果实现。

## 代码讲解
- **`animation: animate 2s linear forwards`**：创建2秒线性动画，设置forwards保持最后关键帧。
- **`transform: translateY(0) scale(1)`**：`transform`改变位置和缩放，`translateY`进行Y轴位移，`scale`进行缩放，1表示显示，0表示消失，动画三个步骤，开始 -> 位移 -> 缩放消失。
- **`document.createElement("div")`**：创建一个div元素。
- **`let left = Math.floor(Math.random() * 310)"`**：宽度内随机位置。
- **`let size = Math.random() * 1.5`**：文字大小随机。

<script setup>
import View from "./Index.vue"
</script>