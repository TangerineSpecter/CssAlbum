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
  font-size: 60px;
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