<template>
  <div :class="$style['show-body']">
    <div :class="$style['text-content']">
      <div :class="$style.cat">
        <div :class="$style.whiskers"></div>
        <div :class="$style.face">
          <div :class="$style['ear-l']"></div>
          <div :class="$style['ear-r']"></div>
        </div>
        <div :class="$style.tag"></div>
        <div :class="$style.tail">
          <div :class="$style['tail-end']"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.show-body {
  display: flex;
  height: 60vh;
  width: 100%;
  background-color: #f5b400;
  border-radius: 10px;
}
.text-content {
  height: 31.25em;
  width: 31.25em;
  position: relative;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

/** 猫身体 */
.cat {
  background-color: black;
  height: 5em;
  width: 12.5em;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 18.75em;
  border-radius: 0 2.18em 0 0;
}

.cat::before {
  content: "";
  position: absolute;
  height: 1.87em;
  width: 1.75em;
  background-color: #000000;
  border-radius: 0 0 1.25em 1.25em;
  bottom: -1.18em;
  box-shadow: 3.75em 0 #000000, 7.18em 0 #000000, 10.75em 0 #000000;
}

.cat:after {
  content: "";
  position: absolute;
  height: 6.25em;
  width: 7.5em;
  background: linear-gradient(#f52d00 1.87em, #000000 1.87em);
  bottom: 4.93em;
}

/** 猫头 */
.face {
  position: absolute;
  background-color: #000000;
  height: 7.5em;
  width: 15em;
  bottom: 11.18em;
  left: -3.62em;
  border-radius: 3.75em;
}

.face::before {
  position: absolute;
  content: "";
  height: 3.75em;
  width: 5em;
  background-color: #ffffff;
  border-radius: 1.87em;
  left: 1.87em;
  top: 1.56em;
  box-shadow: 6.25em 0 #ffffff;
}

.face::after {
  position: absolute;
  content: "";
  height: 2.5em;
  width: 1.56em;
  background-color: #000000;
  top: 2.18em;
  left: 3.56em;
  border-radius: 0.93em;
  box-shadow: 6.25em 0 #000000;
}

/** 猫胡须 */
.whiskers,
.whiskers::before,
.whiskers::after {
  position: absolute;
  height: 0.62em;
  width: 18.75em;
  background-color: #000000;
  border-radius: 0.31em;
}

.whiskers {
  bottom: 15em;
  left: -5.5em;
}

.whiskers::before {
  position: absolute;
  content: "";
  transform: rotate(14deg);
}

.whiskers::after {
  position: absolute;
  content: "";
  transform: rotate(-14deg);
}

/** 左耳朵 */
.ear-l {
  height: 0;
  width: 0;
  border-bottom: 3.12em solid #000000;
  border-left: 1.56em solid transparent;
  border-right: 1.56em solid transparent;
  position: absolute;
  bottom: 7.37em;
  left: 3.12em;
}

/**  右耳朵 */
.ear-r {
  height: 0;
  width: 0;
  border-bottom: 3.12em solid #000000;
  border-left: 1.56em solid transparent;
  border-right: 1.56em solid transparent;
  position: absolute;
  bottom: 7.37em;
  left: 8.75em;
}

.ear-l::before,
.ear-r::before {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  border-bottom: 1.37em solid #f52d00;
  border-left: 0.75em solid transparent;
  border-right: 0.75em solid transparent;
  left: -0.68em;
  top: 1.56em;
}

/** 猫铃铛 */
.tag {
  position: absolute;
  height: 1.87em;
  width: 1.87em;
  background-color: #f5b400;
  border-radius: 50%;
  z-index: 1;
  bottom: 7.43em;
  left: 2.81em;
}

/** 尾巴结构 */
.tail {
  width: 3.75em;
  height: 1.25em;
  background-color: #000000;
  position: absolute;
  left: 10.62em;
  top: 1.87em;
}

.tail::before,
.tail::after {
  position: absolute;
  content: "";
  height: 4.37em;
  width: 4.37em;
  border: 1.25em solid #000000;
}

.tail::before {
  border-left: none;
  bottom: 0;
  left: 3.12em;
  border-radius: 0 3.12em 3.12em 0;
}

.tail::after {
  border-right: none;
  bottom: 3.12em;
  left: 1.25em;
  border-radius: 3.12em 0 0 3.12em;
}

/** 尾巴尖尖 */
.tail-end {
  position: absolute;
  background-color: #000000;
  height: 1.25em;
  width: 1.25em;
  left: 5.62em;
  bottom: 6.24em;
  border-radius: 0 50% 50% 0;
}

@media screen and (min-width: 600px) {
  .text-content {
    font-size: 1.2em;
  }
}
</style>