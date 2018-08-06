<template>
  <v-touch id="app"
           v-on:swipedown="stepDown"
           v-on:swipeup="stepUp">
    
    <Intro :step="currentStep"/>
    <About :step="currentStep"/>
    <Work @back="backToStep"
          :step="currentStep"
          :allow="allowScroll"/>
    
    <router-view></router-view>

  </v-touch>
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
    timeOut: false
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
      if (e.deltaY>30) {
        this.stepUp()
      } else if (e.deltaY<-30) {
        this.stepDown()
      }
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
  font-family: var(--title-font);
}

</style>