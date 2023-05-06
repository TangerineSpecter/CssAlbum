<template>
  <div :class="$style['show-body']">
    <div :class="$style.container">
      <div :class="[$style.item, $style.item1, $style.grow1]"></div>
      <div :class="[$style.item, $style.item2, $style.grow2]"></div>
      <div :class="[$style.item, $style.item3, $style.grow3]"></div>
      <div :class="[$style.item, $style.item4, $style.grow4]"></div>
    </div>
    <div :class="$style.container">
      <div :class="[$style.item, $style.item1, $style.shrink1]"></div>
      <div :class="[$style.item, $style.item2, $style.shrink2]"></div>
      <div :class="[$style.item, $style.item3, $style.shrink3]"></div>
      <div :class="[$style.item, $style.item4, $style.shrink4]"></div>
    </div>
    <div :class="$style.container">
      <div :class="[$style.item, $style.item1, $style.basis1]"></div>
      <div :class="[$style.item, $style.item2, $style.basis2]"></div>
      <div :class="[$style.item, $style.item3, $style.basis3]"></div>
      <div :class="[$style.item, $style.item4, $style.basis4]"></div>
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
  height: 50px;
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
}

.item2 {
  background-color: orange;
}

.item3 {
  background-color: rgb(116 195 255);
}

.item4 {
  background-color: greenyellow;
}

.grow1 {
  flex-grow: 1;
}

.grow2 {
  flex-grow: 1;
}

.grow3 {
  flex-grow: 5;
}

.grow4 {
  flex-grow: 10;
}

.shrink1 {
  flex-shrink: 1;
}

.shrink2 {
  flex-shrink: 1;
}

.shrink3 {
  flex-shrink: 5;
}

.shrink4 {
  flex-shrink: 10;
}

.basis1 {
  flex-basis: 1;
}

.basis2 {
  flex-basis: 1;
}

.basis3 {
  flex-basis: 5;
}

.basis4 {
  flex-basis: 10;
}
</style>