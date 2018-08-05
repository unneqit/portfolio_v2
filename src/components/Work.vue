<template>
  <v-touch id="work"
           v-on:swipedown="cubeDown"
           v-on:swipeup="cubeUp">
    <a class="backButton"
       href="#"
       @click="back">Retour</a>
        <div class="box" style="width: 800px; height: 400px;"
              :style="{transform:`translateZ(-200px) translateX(-50%) translateY(-50%) rotateX(${rotationValue}deg)`}">
          <figure class="front" style="background:red; width: 800px; height: 400px; transform: rotateY(0deg) translateZ(200px); display: block;">
            <div style="text-align:center;">
              <router-link to="/project1">One</router-link>
            </div>
          </figure>
          <figure class="bottom" style="background:yellow; width: 800px; height: 400px; transform: rotateX(270deg) translateZ(200px); display: block;">
            <router-link to="/project3">Two</router-link>
          </figure>
          <figure class="back" style="background:green; width: 800px; height: 400px; transform: rotateX(180deg) translateZ(200px); display: block;">
            <router-link to="/project2">Switch</router-link>
          </figure>
          <figure class="top" style="background:blue; width: 800px; height: 400px; top: 200px; transform: rotateX(90deg) translateZ(400px); display: block;"></figure>
      
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
    back(){
      this.$emit("back")
      this.cubeStep = 0
    },
    cubeUp(){
      if(this.cubeStep >= 3 || !this.allowCubeSpin || this.step !== 3 || !this.allow) {
        return
      }
      this.cubeStep++
      this.allowCubeSpin=false
      this.spinTimeOut()

    },
    cubeDown(){
      if(this.cubeStep <= 0 || !this.allowCubeSpin || this.step !== 3 || !this.allow) {
        return
      }
      this.cubeStep--
      this.allowCubeSpin=false
      this.spinTimeOut()
    },
    spinTimeOut() {
      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        this.allowCubeSpin=true
      }, 1000);
    }
  },
  created() {

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
    -webkit-perspective: 1200px;

  }

  .box {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    will-change: transform;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    transition: transform 1s ease;
    position: absolute;
  & figure {
      visibility: visible;
      position: absolute;
      margin: 0;
      overflow: hidden;
      background-color: white;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
  } 

    
  .backButton {
    position: absolute;
    margin-top:500px;
  }

</style>


