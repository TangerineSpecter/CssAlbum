<template>
  <div :class="$style['show-body']">
    <div :class="$style.container">
      <div :class="$style.item">1</div>
      <div :class="$style.item" style="height: 50px">2</div>
      <div :class="$style.item" style="height: 70px;padding-top: 20px;">3</div>
      <div :class="$style.item" style="height: 90px;padding-top: 50px">4</div>
    </div>
  </div>
</template>

<style module>
.show-body {
  display: grid;
  height: 30vh;
  width: 100%;
  background-color: #1d1c1c;
  border-radius: 10px;
  place-items: center;
}

.container {
  display: flex;
  align-items: baseline;
  height: 250px;
  width: 250px;
  border: dashed 2px white;
  flex-wrap: wrap;
}

.item {
  height: 30px;
  width: 30px;
  margin: 8px;
  background-color: rgb(116 195 255);
  border-radius: 5px;
}
</style>