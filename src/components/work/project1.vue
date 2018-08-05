<template>
  <div class="projectContainer">
    <div class="projectHeader">
      <h1>Xenos</h1>
      <router-link to="/">X</router-link>
    </div>
  </div>
  
</template>

<style lang="scss">
.projectContainer {
  z-index: 20;
  width:100%;
  height: 100%;
  background: var(--secondary-color);
  position: fixed;
  top:0;
  left:0;
}

.projectHeader {
  background: var(--main-color);
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
