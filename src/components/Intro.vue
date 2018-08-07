<template>
  <section id="intro" :class="{isOpened: step != 1}">
    <div class="introHeader">
      <h1 class="introTitle">Quentin Lenglin</h1>
      <h2 class="introSubtitle">UX/UI Designer Junior</h2>
    </div>

    <div class="scrollWrapper"
         @mouseover="hoverOn"
         @mouseout="hoverOff">
      <div class="scrollContainer" :style="{ transform: transform}">
        <div class="scrollContent" ref="scrollContent">
          <h4 class="scrollText">Étudiant à HETIC</h4>
          <h4 class="scrollText">UX/UI Designer Junior stagiaire chez Dernier Cri</h4>
          <h4 class="scrollText"><span class="textBlink">Scrollez pour en savoir plus</span></h4>
          <h4 class="scrollText">blabla bla bla bla bla bla bla bla</h4>
          <h4 class="scrollText">Ne cliquez pas <span>&#8680; ici &#8678;</span></h4>
          <h4 class="scrollText">Beaucoup trop d'heures passés sur NBA 2K</h4>
        </div>
        <div class="scrollContent">
          <h4 class="scrollText">Étudiant à HETIC</h4>
          <h4 class="scrollText">UX/UI Designer Junior stagiaire chez Dernier Cri</h4>
          <h4 class="scrollText"><span class="textBlink">Scrollez pour en savoir plus</span></h4>
          <h4 class="scrollText">blabla bla bla bla bla bla bla bla</h4>
          <h4 class="scrollText">Ne cliquez pas <span>&#8680; ici &#8678;</span></h4>
          <h4 class="scrollText">Beaucoup trop d'heures passés sur NBA 2K</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "intro",
  data: () => ({
    scroll:0,
    hoverScroll:false
  }),
  props: ["step"],
  computed: {
    transform() {
      return "translate(-" + this.scroll +"px)"
    }
  },
  methods: {
    hoverOn() {
      this.hoverScroll=true
    },
    hoverOff() {
      this.hoverScroll=false
    }
  },
  mounted() {
    var scrollContent = this.$refs.scrollContent
    setInterval(() => {
      if (this.scroll > scrollContent.offsetWidth) {
        this.scroll = 0
      } else if(!this.hoverScroll && window.innerWidth>480) {
        this.scroll += 0.8
      } else {
        this.scroll += 0.8
      }
    }, 10)
  }
}
</script>


<style lang="scss" scoped>
  
  ::selection {
    background: var(--secondary-color);
    }

  #intro {
    height: 100%;
    display: flex;
    top:0;
    left:0;
    right:0;
    z-index:2;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    background-color: var(--main-color);
    transition: transform 1s ease;
    transform-origin: center top 0px; 
    &.isOpened {
      transform: matrix3d(1,0,0.00,0,0.00,0.17,0.98,0.001,0,-0.98,0.17,0,0,0,0,1);
      -webkit-transform: matrix3d(1,0,0.00,0,0.00,0.17,0.98,0.001,0,-0.98,0.17,0,0,0,0,1);
    }
  }

  .introHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    & .introTitle{
      margin-bottom: 20px;
    }
  }

  .scrollWrapper {
    height: 20px;
    display:flex;
    width:100%;
    overflow: hidden;
    position: absolute;
    bottom: 40px;
  }

  .scrollContainer {
    display:flex;
  }

  .scrollContent {
    display: flex;
    justify-content: space-around;
    & .scrollText {
      white-space: nowrap;
      padding-left:40px;
      &::after {
        content: "///";
        margin-left:40px;
      }
      & span {
        cursor: not-allowed;
      }
    }
  }

  
</style>
