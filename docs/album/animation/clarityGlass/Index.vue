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
  backdrop-filter: blur(30px);
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