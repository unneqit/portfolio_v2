<template>
  <div id="app"
           v-on:swipedown="stepDown"
           v-on:swipeup="stepUp">
  <div id="app">
    
    <Intro :step="currentStep"/>
    <About :step="currentStep"/>
    <Work @back="backToStep"
          :step="currentStep"
          :allow="allowScroll"/>
      <transition name="slide-fade">

    <router-view></router-view>
</transition>
  </div>
</template>

<script>
import Intro from "./components/Intro.vue"
import About from "./components/About.vue"
import Work from "./components/Work.vue"

export default {
  name: "app",
  components: {
    Intro,
    About,
    Work
  },
  data : () => ({
    currentStep: 1,
    allowScroll: true,
    timeOut: false,
    touch: {
      active:false,
      start:undefined,
      end:undefined
    }
  }),
  methods: {
    // step suivante
    stepUp() {
      if(this.currentStep >= 3 || !this.allowScroll) {
        return
      }
      this.currentStep++
      this.allowScroll=false
      this.scrollTimeOut()
    },
    // step précédente
    stepDown() {
      if(this.currentStep <= 1 || !this.allowScroll || this.currentStep===3 ) {
        return
      }
      this.currentStep--
      this.allowScroll=false
      this.scrollTimeOut()
    },
    // retour à une step précédente (appelé depuis work)
    backToStep(step) {
      this.currentStep=step
      this.allowScroll=false
      this.scrollTimeOut()
    },
    // empeche un nouveau changement de step avant la fin d'une animation
    scrollTimeOut() {
      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        this.allowScroll=true
      }, 1000);
    }
  },
  created() {

    // ecouteur sur le défilement
    window.addEventListener("wheel", (e) => {
      if (e.deltaY>20) {
        this.stepUp()
      } else if (e.deltaY<-20) {
        this.stepDown()
      }
    })

    window.addEventListener('touchstart', (e) => {
      this.touch.active=true
      this.touch.start=e.changedTouches[0].clientY
      this.touch.end=e.changedTouches[0].clientY
    })
    window.addEventListener('touchmove', (e) => {
      if(this.touch.active) {
        this.touch.end=e.changedTouches[0].clientY
      }
    })
    window.addEventListener('touchend', (e) => {
      if (this.touch.active) {
        let diff = this.touch.start-this.touch.end
        if (diff < -100) {
          this.stepDown()
        } else if (diff > 100) {
          this.stepUp()
        }      
      }
      this.touch.active=false
    })


  }
}
</script>

<style lang="scss">
@import "./assets/css/reset.css";

@font-face {
  font-family: "O";
  src: url("./assets/fonts/OPTIImprovNewWideNine.otf");
}

@font-face {
  font-family: "WorkSans-Medium";
  src: url("./assets/fonts/WorkSans-Medium.otf");
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  overflow: hidden;
}

:root {
  --main-color: #FFFF55;
  --secondary-color: #FFFFFF;
  --third-color: #E5E5E5;
  --text-color: #000;
  --title-font: "O", "Franklin Gothic", sans-serif;
  --text-font: "WorkSans-Medium";
}

h1 {
  font-family: var(--title-font);
  font-size: 52px;
  color: transparent;
  -webkit-text-stroke: 2px var(--text-color);
  text-align: center;
  @media (min-width:768px) {
      font-size: 72px;
  }
}

h2 {
  font-family: var(--title-font);
  font-size: 18px;
  color: var(--text-color);
  text-align: center;
  @media (min-width:768px) {
    font-size: 28px;
  }
}

h3 {
  font-family: var(--title-font);
  font-size: 24px;
  color: transparent;
  -webkit-text-stroke: 2px var(--text-color);
  text-align: center;
}

h4 {
  font-family: var(--title-font);
  font-size: 14px;
  color: var(--text-color);
}

p {
  font-family: var(--text-font);
  font-size: 14px;
  color: var(--text-color);
}

#app {
  height: 100%;
}

.textLink {
  text-decoration: none;
  font-family: var(--title-font);
  color: transparent;
  -webkit-text-stroke: 1.2px var(--text-color);
  transition: color 0.5s ease;
  &:hover {
      color: var(--text-color);
  }
}


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-1000px);
}
</style>