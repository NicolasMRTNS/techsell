<template>
  <section role="img" class="masthead" aria-label="Hero for the homepage">
    <div class="brand-and-slogan container">
      <h1 class="brand">Tech Sell</h1>
      <h2>La plateforme d'achat/vente de matériel tech</h2>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/variables.scss';

.masthead {
  width: 100%;
  height: 80vh;
  margin-bottom: 60px;
  overflow: hidden;
  background-size: cover !important;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.35) 37%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(~assets/headerimg.jpg) no-repeat center center scroll;
  // Flip image
  transform: scaleX(-1);
}
h1 {
  font-size: 5rem;
  letter-spacing: 0.03em;
  line-height: 1;
  text-align: center;
  margin-bottom: 10px;
  color: white;
}
h2 {
  text-align: center;
}
.brand-and-slogan {
  width: 350px;
  margin-left: auto;
  margin-top: 20px;
  // Due to the image being flip, need to flip the brand and slogan
  transform: scaleX(-1);
  color: white;
}

// Responsive
@media screen and (max-width: 360px) {
  h1 {
    font-size: 4.5rem;
  }
  .brand-and-slogan {
    width: auto;
  }
}
@media screen and (max-width: 1000px) {
  .brand-and-slogan {
    margin-right: auto;
  }
}
</style>
