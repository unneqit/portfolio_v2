<template>
  <section id="intro" :class="{isOpened: step != 1}">
    <div class="header">
      <h1 class="title">Quentin Lenglin</h1>
      <h2 class="subTitle">UX/UI Designer Junior</h2>
    </div>

    <div class="scrollWrapper"
         @mouseover="hoverOn"
         @mouseout="hoverOff">
      <div class="scrollContainer" :style="{ transform: transform}">
        <div class="scrollContent" ref="scrollContent">
          <h4>UX/UI Designer Junior en stage chez Dernier Cri</h4>
          <h4>quentin.lenglin@gmail.com</h4>
          <h4>Ne cliquez pas ici</h4>
          <h4>blabla bla bla bla bla bla bla bla</h4>
          <h4>hahahahahaha</h4>
          <h4>a a a a a aaaaaa a a aaaa a aaa</h4>
        </div>
        <div class="scrollContent">
          <h4>UX/UI Designer Junior en stage chez Dernier Cri</h4>
          <h4>quentin.lenglin@gmail.com</h4>
          <h4>Ne cliquez pas ici</h4>
          <h4>blabla bla bla bla bla bla bla bla</h4>
          <h4>hahahahahaha</h4>
          <h4>a a a a a aaaaaa a a aaaa a aaa</h4>
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
        this.scroll += 0.3
      }
    }, 10)
  }
}
</script>


<style lang="scss" scoped>
  #intro {
    height: 100%;
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index:2;
    transition: transform 1s ease;
    transform-origin: center top 0px; 
    &.isOpened {
      transform: matrix3d(1,0,0.00,0,0.00,0.17,0.98,0.001,0,-0.98,0.17,0,0,0,0,1);
      -webkit-transform: matrix3d(1,0,0.00,0,0.00,0.17,0.98,0.001,0,-0.98,0.17,0,0,0,0,1);
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center; 
    & .title{
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
    & h4 {
      white-space: nowrap;
      padding-left:40px;

      &::after {
        content: "///";
        margin-left:40px;
      }
    }

  }

  
</style>
