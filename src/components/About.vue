<template>
  <section id="about" :class="{isOpened: step>2}">
    <div class="aboutContainer">
      <p class="aboutText">Bonjour !</p>
      <p class="aboutText">Je m'appelle Quentin Lenglin et je suis étudiant en Bachelor Web à <a target="_blank" href="https://www.hetic.net/" class="textLink">HETIC</a>, actuellement en stage chez <a target="_blank" href="https://derniercri.io/" class="textLink">Dernier Cri</a>. Je suis à la recherche d'un <span>contrat de professionnalisation de 2 ans</span> à partir d’octobre 2018 en tant qu'UX/UI Designer.</p>
    </div>
    <div class="bottomContainer">
      <h4 class="textBlink">Scrollez pour voir un extrait de mon travail</h4>
    </div>
  </section>
</template>

<script>
export default {
  props:["step"]
}
</script>


<style lang="scss" scoped>

  ::selection {
    background: var(--primary-color);
  }

  #about {
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    transition: transform 0.8s ease;
    transform-origin: center bottom 0px;
    &.isOpened {
      transform: matrix3d(1,0,0.00,0,0.00,0.17,0.98,-0.001,0,-0.98,0.17,0,0,0,0,1);
      -webkit-transform: matrix3d(1,0,0.00,0,0.00,0.17,0.98,-0.001,0,-0.98,0.17,0,0,0,0,1);
    }
  }

  .aboutContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 20vw 0 20vw;
    max-width: 900px;
    & .aboutText {
      font-size: 1.8rem;
      line-height: 1.4;
      @media (min-width:768px) {
        font-size: 2.4rem;
      }
      &:first-child {
        margin-bottom: 30px;
      }
    }
  }
  
  .bottomContainer {
    align-self: center;
    position: absolute;
    bottom: 30px;
    text-align: center;
  }

</style>