<template>
  <div :class="$style['show-body']">
    <div :class="$style.container">
      <div :class="[$style.item, $style.item1]"></div>
      <div :class="[$style.item, $style.item2]"></div>
      <div :class="[$style.item, $style.item3]"></div>
      <div :class="[$style.item, $style.item4]"></div>
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
  align-items: flex-start;
  height: 250px;
  width: 250px;
  border: dashed 2px white;
  flex-wrap: wrap;
}

.item {
  height: 30px;
  width: 30px;
  margin: 8px;
  border-radius: 5px;
}

.item1 {
  background-color: red;
  order: 2;
}

.item2 {
  background-color: orange;
  order: 1;
  align-self: center;
}

.item3 {
  background-color: rgb(116 195 255);
  order: 4;
}

.item4 {
  background-color: greenyellow;
  order: 3;
  align-self: flex-end;
}
</style>