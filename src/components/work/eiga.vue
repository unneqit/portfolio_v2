<template>
  <div class="projectContainer">
    <section class="projectHeader">
      <h1 class="projectTitle">eiga</h1>
      <div class="btnContainer">
        <router-link to="/" class="closeButton">&#x2715;</router-link>
      </div>
    </section>
    <section class="projectIntro">
      <div class="summary">
        <div class="col-1">
          <h4>eiga yes man</h4>
          <p>yoyoyo yoyoyoyoyoyoyoyoyo yoyoyo yoyoyo yoyoyo yoyoyo</p>
        </div>
        <div class="col-2">
          <p>yoyoyo yoyoyoyoyoyoyoyoyo yoyoyo yoyoyo yoyoyo yoyoyo</p>
        </div>
      </div>
      <div class="credits">
        <h4>Durée</h4>
        <p>1 semaine</p>
        <h4>Rôles</h4>
        <p>UX/UI Design</p>
        <p>Direction Artistique</p>
        <h4>Le code</h4>
        <p>https://github.com/ShonhTan/xenos</p>
      </div>
    </section>
    <section class="projectFooter">
      <div class="lol">
        <router-link to="/" class="nextButton">&#x2715;</router-link>
      </div>
    </section>
  </div>
  
</template>

<style lang="scss">
// // .projectContainer {
// //   z-index: 20;
// //   width:100%;
// //   height: 100%;
// //   background: var(--secondary-color);
// //   position: fixed;
// //   top:0;
// //   left:0;
// //   margin: 0 auto;
// //   overflow: scroll;
// // }

// .projectHeader {
//   background: var(--primary-color);
//   height: 300px;
//   margin-bottom: 80px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

// .projectTitle {
// }

// .closeButton {
//   position: absolute;
//   top: 60px;
//   right: 60px;
//   text-decoration: none;
//   color: #000;
//   font-size: 36px;
//   font-family: var(--text-font);
//   &:hover {
//     animation: shake 0.5s; 
//     animation-iteration-count: infinite; 
//   }
//   @media (min-width:768px) {
//     font-size: 52px;
//   }
// }

// .projectIntro {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   margin-left: 100px;
//   margin-right: 100px;
//   @media (min-width:768px) {
//     flex-direction: row;
//   }
// }

// .credits {
//   order: -1;
//   @media (min-width:768px) {
//     order: 1;
//   }
// }

// @keyframes shake {
//     0% { transform: translate(1px, 1px) rotate(0deg); }
//     10% { transform: translate(-1px, -2px) rotate(-1deg); }
//     20% { transform: translate(-3px, 0px) rotate(1deg); }
//     30% { transform: translate(3px, 2px) rotate(0deg); }
//     40% { transform: translate(1px, -1px) rotate(1deg); }
//     50% { transform: translate(-1px, 2px) rotate(-1deg); }
//     60% { transform: translate(-3px, 1px) rotate(0deg); }
//     70% { transform: translate(3px, 1px) rotate(-1deg); }
//     80% { transform: translate(-1px, -1px) rotate(1deg); }
//     90% { transform: translate(1px, 2px) rotate(0deg); }
//     100% { transform: translate(1px, -2px) rotate(-1deg); }
//   }

</style>
