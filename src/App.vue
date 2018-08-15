<template>

  <div id="app">
    
    <Intro :step="currentStep"/>
    <About :step="currentStep"/>
    <Work @back="backToStep"
          :step="currentStep"
          :allow="allowScroll"/>
    <router-view></router-view>
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
        if (diff < -20) {
          this.stepDown()
        } else if (diff > 20) {
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
  src: url("./assets/fonts/WorkSans-Medium.woff2"),
       url("./assets/fonts/WorkSans-Medium.woff") format('woff'),
       url("./assets/fonts/WorkSans-Medium.ttf") format('truetype');
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  overflow: hidden;
  font-size: 62.5%;
}

:root {
  --primary-color: #FFFF55;
  --secondary-color: #FFFFFF;
  --third-color: #EFEFEF;
  --text-color: #000;
  --title-font: "O", "Arial Black", sans-serif;
  --text-font: "WorkSans-Medium", Helvetica, Arial, sans-serif;
}

h1 {
  font-family: var(--title-font);
  font-size: 5.2rem;
  color: transparent;
  -webkit-text-stroke: 2px var(--text-color);
  text-align: center;
  @media (min-width:768px) {
      font-size: 7.2rem;
  }
}

h2 {
  font-family: var(--title-font);
  font-size: 1.8rem;
  color: var(--text-color);
  text-align: center;
  @media (min-width:768px) {
    font-size: 2.8rem;
  }
}

h3 {
  font-family: var(--title-font);
  font-size: 2.4rem;
  color: transparent;
  -webkit-text-stroke: 2px var(--text-color);
  text-align: center;
}

h4 {
  font-family: var(--title-font);
  font-size: 1.4rem;
  line-height: 1.2;
  color: var(--text-color);
}

p {
  font-family: var(--text-font);
  font-size: 1.4rem;
  line-height: 1.2;
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

.textBlink {
  animation: blink 1s linear infinite;
}

// Project
.projectSubtitle {
    margin-bottom: 20px;
  }

.projectLink {
  text-decoration: underline;
  color: var(--text-color);
  &__big {
    text-align: center;
    text-decoration: none;
    font-family: var(--title-font);
    font-size: 5.2rem;
    color: transparent;
    -webkit-text-stroke: 2px var(--text-color);
    transition: color 0.5s ease;
    &:hover {
      color: var(--text-color);
    }
    @media (min-width:768px) {
      font-size: 7.2rem;
    }
  }
}

.projectWrapper {
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

.projectHeader {
  background: var(--primary-color);
  height: 300px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .closeButton {
  position: absolute;
  top: 60px;
  right: 60px;
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
}

.projectContainer {
  padding: 0 15vw 0 15vw;
}

.projectIntro {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  @media (min-width:768px) {
    flex-direction: row;
  }
  & .projectDescription {
    width: 100%;
    @media (min-width:768px) {
      margin-right: 100px;
      order: -1;
    }
    & .summary {
      display: flex;
      flex-direction: column;
      margin-bottom: 80px;
      @media (min-width:768px) {
        flex-direction: row;
        justify-content: space-between;
      }
      & .col-1 {
        margin-bottom: 20px;
        @media (min-width:768px) {
          margin-bottom: 0;
          width: 48%;
        }
      }
      & .col-2 {
        @media (min-width:768px) {
          width: 48%;
        }
      }
    }
    & .paragraph:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  & .credits {
    order: -1;
    margin-bottom: 80px;
    @media (min-width:768px) {
      width: 30%;
    }
    & .creditsItem {
      margin-bottom: 20px;
    }
    & .creditsTitle {
      margin-bottom: 5px;
    }
  }
}

//Keyframes
@keyframes blink {  
  50% { opacity: 0; }
}

@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

</style>