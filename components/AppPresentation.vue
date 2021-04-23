<template>
  <div class="container">
    <article class="border-color">
      <p>
        Tech Sell est la plateforme de référence si vous souhaitez vendre vos
        produits tech ou en acheter de nouveaux. L’achat et la vente se font
        entre particuliers passionnés de tech, pour garantir du matériel de
        qualité !
      </p>
    </article>
    <aside>
      <p>Je souhaite</p>
      <nuxt-link to="/buy" class="btn-default border-color">Acheter</nuxt-link>
      <nuxt-link to="/sell" class="btn-default border-color">Vendre</nuxt-link>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'AppPresentation'
}
</script>

<style lang="scss" scoped>
article {
  background: white;
  text-align: center;
  border-radius: 10px;
}
p {
  margin: 2rem;
  font-size: 1.3rem;
}
aside {
  display: flex;
  place-items: center;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-left: 1.5rem;
  }
  place-content: center;
}

// Responsive
@media screen and (max-width: 700px) {
  aside {
    flex-direction: column;
    :last-child {
      margin: 1.5rem 0;
    }
    p {
      margin-right: 0;
    }
  }
}

@media screen and (min-width: 1000px) {
  article {
    width: 600px;
    margin: auto;
  }
}
</style>
