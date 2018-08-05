<template>
  <section id="about" :class="{isOpened: step>2}">
    <div class="aboutContent">
      <p class="aboutText">Bonjour</p>
      <p class="aboutText">Je m'appelle Quentin Lenglin. Je suis étudiant en Bachelor Web à <a class="textLink">HETIC</a> et actuellement stagiaire chez <a class="textLink">Dernier Cri</a>. Je suis à la recherche d'un contrat de professionnalisation de 2 ans à partir d’octobre 2018. Vous pouvez me contacter ici : quentin.lenglin@gmail.com</p>
    </div>
  </section>
</template>

<script>
export default {
  props:["step"]
}
</script>


<style lang="scss" scoped>
  #about {
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 1;
    display: flex;
    background-color: var(--secondary-color);
    transition: transform 1s ease;
    transform-origin: center bottom 0px;
    &.isOpened {
      transform: matrix3d(1,0,0.00,0,0.00,0.17,0.98,-0.001,0,-0.98,0.17,0,0,0,0,1);
      -webkit-transform: matrix3d(1,0,0.00,0,0.00,0.17,0.98,-0.001,0,-0.98,0.17,0,0,0,0,1);
    }
  }

  .aboutContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 200px 0 200px;
    & .aboutText {
      font-size: 28px;
    }
  }

</style>