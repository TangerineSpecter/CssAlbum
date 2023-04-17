<template>
  <div :class="$style['show-body']">
    <div :class="$style.wrapper">
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
  border-radius: 10px;
  cursor: default;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  animation: animate 1.5s linear infinite;
}

@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>