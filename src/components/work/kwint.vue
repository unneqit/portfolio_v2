<template>
  <div class="projectWrapper">

    <div class="projectHeader">
      <h1 class="projectTitle">Kwint</h1>
      <div class="btnContainer">
        <router-link to="/" class="closeButton">&#x2715;</router-link>
      </div>
    </div>

    <div class="projectContainer">
      <section class="projectIntro">
        <div class="projectDescription"> 
          <div class="summary">
            <div class="col-1">
              <h4 class="projectSubtitle">
                Un projet pour s’exercer
              </h4>
              <p class="paragraph">
                Dans l’optique de se challenger et de se former sur de nouveaux outils de design (Adobe XD et InVision), nous avons réalisé, avec Valentine Leroy, un concept d’application mobile sur le thème de la santé et du bien-être.
              </p>      
            </div>
            <div class="col-2">
              <p class="paragraph">
                Ce projet fictif m’a permis d’aborder des problèmatiques de design mobile, auxquelles j’ai pu répondre en appliquant des processus de conception concrets.
              </p>
            </div>
          </div>
          <div class="concept">
            <h4 class="projectSubtitle">Améliorer un concept existant</h4>
            <div class="paragraphContainer">
              <p class="paragraph">
                L’idée de Kwint est venue après avoir utilisé l’application Yuka, qui propose de scanner ses aliments afin d’en obtenir les informations nutritionnelles. L’application Kwint propose donc un principe similaire, en élargissant son champs d’action à tout les produits du quotidien.
              </p>
            </div>
          </div>
        </div>

        <div class="credits">
          <div class="creditsItem">
            <h4 class="creditsTitle">Durée</h4>
            <p class="creditsText">
              1 semaine
            </p>
          </div>
          <div class="creditsItem">
            <h4 class="creditsTitle">Rôles</h4>
            <p class="creditsText">
              Direction artistique
            </p>
            <p class="creditsText">
              UX/UI Design
            </p>
          </div>
          <div class="creditsItem">
            <h4 class="creditsTitle">Équipe</h4>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://www.behance.net/valentineleroy">
                Valentine Leroy
              </a>
            </p> 
          </div>
          <div class="creditsItem">
            <h4 class="creditsTitle">Prototype</h4>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://www.figma.com/file/p3BKA9wYbCh74wOgSXqeY4/XENOS-Quentin-LENGLIN?node-id=0%3A1">Projet Invision</a>
            </p>
          </div>
        </div>
      </section>

      <section class="projectSection01">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Trier et structurer les informations 
          </h4>
          <p class="paragraph">
            L’étape la plus importante a été de définir les différents contenus et de les hiérarchiser de la manière la plus cohérente qui soit. Pour cela, nous sommes passés par la réalisation d’un sitemap.
          </p>
        </div>
        <div class="imgItemContainer">
          <img class="imgItem" src="../../../src/assets/img/kwint_persona.png" alt="Personas du projet Kwint">
        </div>
      </section> 
      
      <section class="projectSection02">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Imaginer un parcours type 
          </h4>
          <p class="paragraph">
            Définir un parcours type nous a aidé à mieux conceptualiser le cas d’utilisation principal de l’application, et de se concentrer sur les fonctionnalités disponibles.
          </p>
        </div>
        <div class="imgItemContainer">
          <img class="imgItem" src="../../../src/assets/img/kwint_journey.png" alt="Parcours utilisateur du projet Xenos">
        </div>
      </section>

      <section class="projectSection03">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Concevoir une navigation intuitive
          </h4>
          <p class="paragraph">
            L’utilisation de l’application doit pouvoir se faire de la manière la plus simple possible pour une utilisation express (scan d’un produit), comme pour une utilisation plus approfondie. Une fois les maquettes réalisées, nous avons réalisé un prototype interactif à l’aide d’Invision.
          </p>
        </div>
        <div class="imgItemContainer">
          invision
        </div>
      </section>

      <section class="projectSection04">
        <p class="conclusionParagraph">
          Ce petit projet, en parallèle de ceux liés directement à mes études, m’a invité à penser une interface mobile compréhensible et qui permet à l’utilisateur d’atteindre ses objectifs en rencontrant le moins de frustrations possibles. 
        </p>
      </section>

    </div>

    <div class="projectFooter">
      <router-link to="/eiga" class="projectLink__big">Projet suivant</router-link>
    </div>
  </div>
  
</template>

<style lang="scss">

.projectSubtitle {
    margin-bottom: 20px;
  }

.projectLink {
  text-decoration: underline;
  color: var(--text-color);
  &__big {
    text-decoration: none;
    font-family: var(--title-font);
    font-size: 5.2rem;
    color: transparent;
    -webkit-text-stroke: 2px var(--text-color);
    text-align: center;
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
  justify-content: space-between;
  margin-bottom: 100px;
  @media (min-width:768px) {
    flex-direction: row;
  }
}

.projectDescription {
  width: 100%;
  @media (min-width:768px) {
    width: 70%;
  }
  & .paragraph:not(:last-child) {
    margin-bottom: 20px;
  }
}

.credits {
  order: -1;
  margin-bottom: 80px;
  @media (min-width:768px) {
    order: 1;
  }
  & .creditsItem {
    margin-bottom: 20px;
  }
  & .creditsTitle {
    margin-bottom: 5px;
  }
}

.summary {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  & .col-1 {
    margin-bottom: 20px;
  }
}

.projectSection01 {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  @media (min-width:768px) {
    flex-direction: row;
  }
  & .descriptionContainer {
    margin-bottom: 40px;
    @media (min-width:768px) {
      order: 1;
    }
  }
  & .imgItemContainer {
    width: 100%;
    @media (min-width:768px) {
      width: 70%;
    }
    & .imgItem {
      width: 100%;
      height: auto;
    }
  }
}

.projectSection02 {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  & .descriptionContainer {
    margin-bottom: 40px;
  }
  & .imgItemContainer {
    width: 100%;
    & .imgItem {
      width: 100%;
      height: auto;
    }
  }
}

.projectSection03 {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  & .descriptionContainer {
    margin-bottom: 40px;
  }
  & .imgItemContainer {
    width: 100%;
    & .imgItem {
      width: 100%;
      height: auto;
    }
  }
}


.projectSection04 {
  display: flex;
  margin-bottom: 200px;
  & .conclusionParagraph {
    font-family: var(--title-font);
    font-size: 1.4rem;
    line-height: 1.6;
  }
}

.projectFooter {
  background: var(--primary-color);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>