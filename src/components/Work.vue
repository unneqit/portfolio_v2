<template>
  <v-touch id="work"
           v-on:swipedown="cubeDown"
           v-on:swipeup="cubeUp">
    <a class="backButton"
       href="#"
       @click="back">Retour</a>
        <div class="box"
             :style="{transform:`translateZ(-150px) translateX(-50%) translateY(-50%) rotateX(${rotationValue}deg)`}">
          <div class="boxFace box__front">
            <h3 class="boxFace__title">
              <router-link to="/project1" class="textLink">Xenos</router-link>
            </h3>
            <img class="boxFace__img" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f554862416727.5a8f67a59d9a9.png" alt="">
          </div>
          <div class="boxFace box__bottom">
            <h3 class="boxFace__title">
              <router-link to="/project2" class="textLink">Kwint</router-link>
            </h3>
          </div>
          <div class="boxFace box__back">
            <h3 class="boxFace__title">
              <router-link to="/project3" class="textLink">eiga</router-link>
            </h3>
          </div>
          <div class="boxFace box__top"></div>
    </div> 


  </v-touch>
</template>


<script>
export default {
  props: ["step", "allow"],
  data: () => ({
    cubeStep:0,
    allowCubeSpin:true,
    timeOut:false
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
      if (e.deltaY>30) {
        this.cubeUp()
      } else if (e.deltaY<-30) {
        this.cubeDown()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  #work {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 0;
    top: 0;
    left:0;
    background-color: var(--third-color);
    display: flex;
    flex-direction: column;
    perspective: 1200px;
  }

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px; 
    height: 300px;
    transform: rotateX(0);
    will-change: transform;
    transform-style: preserve-3d; 
    transform: translate3d(-50%, -50%, 0);
    transition: transform 1s ease;
    & .boxFace {
      visibility: visible;
      position: absolute;
      margin: 0;
      overflow: hidden;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      &__title {
        padding: 10px;
        background-color: var(--main-color);
        position: absolute;
        z-index: 1;
      }
      &__img {}
    }
    &__front {
      background:red;
      display: block;
      width: 600px;
      height: 300px;
      transform: rotateY(0deg) translateZ(150px); 
    }
    &__bottom {
      background:yellow; 
      display: block;
      width: 600px;
      height: 300px; 
      transform: rotateX(270deg) translateZ(150px); 
    }
    &__back {
      background:green;
      display: block;
      width: 600px;
      height: 300px; 
      transform: rotateX(180deg) translateZ(150px); 
    }
    &__top {
      background:blue; 
      display: block;
      width: 600px; 
      height: 300px; 
      top: 150px; 
      transform: rotateX(90deg) translateZ(300px); 
    }
  } 

    
  .backButton {
    position: absolute;
    margin-top:500px;
  }

</style>


