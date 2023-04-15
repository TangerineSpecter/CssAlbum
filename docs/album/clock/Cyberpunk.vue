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