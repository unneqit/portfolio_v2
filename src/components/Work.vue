<template>
  <section id="work">
    <div class="workContainer">
      <div class="box"
            :style="{transform:`translateX(-50%) translateY(-50%) rotateX(${rotationValue}deg)`}">
        <div class="boxFace box__front">
          <h3 class="boxFace__title">
            <router-link to="/xenos" class="textLink">Xenos</router-link>
          </h3>
          <img class="boxFace__img" src="../../src/assets/img/xenos_cover.png" alt="">
        </div>
        <div class="boxFace box__bottom">
          <h3 class="boxFace__title">
            <router-link to="/kwint" class="textLink">Kwint</router-link>
          </h3>
            <img class="boxFace__img" src="../../src/assets/img/kwint_cover.png" alt="">
        </div>
        <div class="boxFace box__back">
          <h3 class="boxFace__title">
            <router-link to="/eiga" class="textLink">eiga</router-link>
          </h3>
            <img class="boxFace__img" src="../../src/assets/img/eiga_cover.png" alt="">
        </div>
        <div class="boxFace box__top">
          <p class="boxFace__text">
            Vous pouvez aussi me retrouver sur <a target="_blank" href="https://www.behance.net/quentinlenglin" class="textLink">Behance</a>. Je contribue également au projet <a target="_blank" href="https://github.com/Dreamvo" class="textLink">Dreamvo</a>.
          </p>
          <p class="boxFace__text">
            Si vous avez une opportunité intéressante, vous pouvez me contacter <a href="mailto:quentin.lenglin@gmail.com" class="textLink">ici</a>.
          </p>
        </div>
      </div> 
      <a class="closeButton"
        href="#"
        @click="back">
        &#x2715;
      </a>
    </div>
  </section>
</template>


<script>
export default {
  props: ["step", "allow"],
  data: () => ({
    cubeStep:0,
    allowCubeSpin:true,
    timeOut:false,
    touch: {
      active:false,
      start:undefined,
      end:undefined
    }
  }),
  computed: {
    rotationValue(){
      return this.cubeStep*90
    }
  },
  methods: {
    
    // retour à la step 1 (app)
    back(){
      this.$emit("back", 1)
      this.cubeStep = 0
    },
    // cubestep suivant
    cubeUp(){
      if(this.cubeStep >= 3 || !this.allowCubeSpin || this.step !== 3 || !this.allow) {
        return
      }
      this.cubeStep++
      this.allowCubeSpin=false
      this.spinTimeOut()
    },
    // cubestep précédent
    cubeDown(){
      if(!this.allowCubeSpin || this.step !== 3 || !this.allow) {
        return
      }
      // si cubestep == 0, retour à la step 2 (app)
      if (this.cubeStep <= 0) {
        this.$emit("back", 2)
        return
      }
      this.cubeStep--
      this.allowCubeSpin=false
      this.spinTimeOut()
    },
    // empeche le declenchement d'un nouveau changement de step avant la fin d'une animation
    spinTimeOut() {
      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        this.allowCubeSpin=true
      }, 1000);
    }
  },
  created() {
    // ecouteur sur le défilement
    window.addEventListener("wheel", (e) => {
      if (this.$router.currentRoute.path!=="/") {
        return
      }  
      if (e.deltaY>30) {
        this.cubeUp()
      } else if (e.deltaY<-30) {
        this.cubeDown()
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
      if (this.$router.currentRoute.path!=="/") {
        return
      }
      if (this.touch.active) {
        let diff = this.touch.start-this.touch.end
        if (diff < -50) {
          this.cubeDown()
        } else if (diff > 50) {
          this.cubeUp()
        }   
      }
      this.touch.active=false
    })
  }
}
</script>

<style lang="scss" scoped>
  ::-webkit-scrollbar { 
      display: none; 
  }

  ::selection {
    background: var(--primary-color);
  }

  #work {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 0;
    top: 0;
    left:0;
    background-color: var(--third-color);
    perspective: 1200px;
  }

  .workContainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .box {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 70vw;
    height: 50vh;
    max-width: 800px;
    will-change: transform;
    transform-style: preserve-3d; 
    transform: translate3d(-50%, -50%, 0);
    transition: transform 0.8s ease;
    & .boxFace {
      visibility: visible;
      position: absolute;
      margin: 0;
      overflow: hidden;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:nth-child(4) {
        overflow-y: auto;
      }
      &__title {
        padding: 10px;
        background-color: var(--primary-color);
        position: absolute;
        z-index: 1;
      }
      &__img {
        position: absolute;
        top: 0;
        width: 100%;
        height: auto;
      }
      &__text {
        font-size: 1.8rem;
        line-height: 1.4;
        margin: 0 5vw 0 5vw;
        @media (min-width:768px) {
          font-size: 2.4rem;
        }
        &:first-child {
          margin-bottom: 20px;
        }
      }
    }
    &__front {
      background:#333333;
      display: block;
      width: 100%;
      height: 100%;
      transform: rotateY(0deg) translateZ(25vh);
    }
    &__bottom {
      background: #ffffff; 
      display: block;
      width: 100%;
      height: 100%;
      transform: rotateX(270deg) translateZ(25vh);
    }
    &__back {
      background: #1A1D24;
      display: block;
      width: 100%;
      height: 100%;
      transform: rotateX(180deg) translateZ(25vh);
    }
    &__top {
      background: var(--secondary-color); 
      display: block;
      width: 100%; 
      height: 100%;
      transform: rotateX(90deg) translateZ(25vh);
    }
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
</style>