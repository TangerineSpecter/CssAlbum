<template>
  <div :class="$style['show-body']">
    <div :class="$style.cloud" id="myCloud"></div>
  </div>
</template>

<style module>
.show-body {
  display: flex;
  min-height: 80vh;
  align-items: center;
  width: 100%;
  background-color: #1d1c1c;
  border-radius: 10px;
  box-sizing: border-box;
  justify-content: center;
}

.cloud {
  position: relative;
  width: 320px;
  height: 100px;
  background-color: #fff;
  border-radius: 100px;
  z-index: 100;
  filter: drop-shadow(0 0 35px #fff);
  bottom: 15vh;
}

.cloud::before {
  content: "";
  position: absolute;
  top: -50px;
  left: 40px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 90px 0 0 30px #fff;
}

.text {
  position: absolute;
  height: 20px;
  top: 40px;
  line-height: 20px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 15px #fff, 0 0 15px #fff;
  transform-origin: bottom;
  animation: animate 2s linear forwards;
}

@keyframes animate {
  0% {
    transform: translateY(0) scale(1);
  }
  70% {
    transform: translateY(290px) scale(1);
  }
  100% {
    transform: translateY(290px) scale(0);
  }
}
</style>

<script>
export default {
  mounted() {
    setInterval(() => {
      this.rain();
    }, 20);
  },
  methods: {
    randomText() {
      var text = "abcdefghijklmnopqrstuvwxyz0123456789";
      return text[Math.floor(Math.random() * text.length)];
    },

    rain() {
      let cloud = document.querySelector("#myCloud");
      let e = document.createElement("div");
      let left = Math.floor(Math.random() * 310);
      let size = Math.random() * 1.5;
      let duration = Math.random() * 1;
      e.classList.add(this.$style.text);
      cloud.appendChild(e);
      e.innerText = this.randomText();
      e.style.left = left + "px";
      e.style.fontSize = 0.5 + size + "em";
      e.style.animationDuration = 1 + duration + "s";

      setTimeout(() => {
        cloud.removeChild(e);
      }, 2000);
    },
  },
};
</script>