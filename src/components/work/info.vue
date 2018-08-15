<template>
  <div class="information">
    <div class="infoContainer">
      <p class="infoParagraph">
        Vous pouvez voir d'autres projets que j'ai réalisé sur mon compte <a target="_blank" href="https://www.behance.net/quentinlenglin" class="textLink">Behance</a>. Je possède aussi un compte <a target="_blank" href="https://dreamvo.com/" class="textLink">Github</a>. Actuellement contributeur au projet <a target="_blank" href="https://dreamvo.com/" class="textLink">Dreamvo</a> en tant que designer.
      </p>
      <p class="infoParagraph">
        Si vous avez une opportunité intéressante, n'hésitez pas à me contacter <a href="mailto:quentin.lenglin@gmail.com" class="textLink">ici</a>, ou sur <a href="https://www.linkedin.com/in/quentin-lenglin/" class="textLink">Linkedin</a>.
      </p>
    </div>
    <div class="btnContainer">
      <router-link to="/" class="closeButton">&#x2715;</router-link>
    </div>
  </div>
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

  .closeButton {
    position: absolute;
    z-index: 1;
    right: 5%;
    top: 10%;
    text-decoration: none;
    color: #000;
    font-size: 36px;
    font-family: var(--text-font);
    &:hover {
      animation: shake 0.5s; 
      animation-iteration-count: infinite; 
    }
    @media (min-width:768px) {
      font-size: 52px;
    }
  }

  .information {
    z-index: 20;
    width:100%;
    height: 100%;
    background: var(--secondary-color);
    position: fixed;
    top:0;
    left:0;
    margin: 0 auto;
    overflow-y: auto;
  }

  .infoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 20vw 0 20vw;
    max-width: 900px;
    & .infoParagraph {
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
</style>