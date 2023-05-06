<template>
  <div :class="$style['show-body']">
    <div :class="$style.container">
      <div :class="$style.item"></div>
      <div :class="$style.item"></div>
      <div :class="$style.item"></div>
      <div :class="$style.item"></div>
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
  flex-direction: row-reverse;
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