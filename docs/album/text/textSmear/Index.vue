<template>
  <div :class="$style['show-body']">
    <div :class="$style['text-content']">HELLO CSS WORLD</div>
  </div>
</template>

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
</style>