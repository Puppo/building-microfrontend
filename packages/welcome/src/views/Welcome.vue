<template>
  <div class="welcome-page">
    <div class="text polka-dot-bg">
      <h1>Red Records</h1>
      <div class="separator" />
      <p>LONDON - NEW WORK</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.document.addEventListener("click", event =>
      console.log(`x: ${event.clientX} y: ${event.clientY}`)
    );
  },
};
</script>

<style>
.welcome-page {
  background-image: url("./vinyl-bg.jpg");
  background-size: cover;
  height: 100%;
  width: 100%;
}

.polka-dot-bg {
  background-image: radial-gradient(#212121 20%, transparent 20%);
  background-size: 10px 10px;
}

.text {
  position: absolute;
  top: 50%;
  height: 250px;
  width: 250px;
  margin-top: -175px;
  margin-left: 50px;
  padding: 0px 20px;
  font-family: sans-serif;
  border: 10px solid var(--mint-cream);
  color: var(--mint-cream);
}

.separator {
  background-color: var(--cinnabar);
  height: 5px;
  margin-top: -20px;
  margin-bottom: 22px;
}
</style>
