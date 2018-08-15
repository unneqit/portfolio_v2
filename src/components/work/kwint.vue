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
            <h4 class="projectSubtitle">
              Améliorer un concept existant
            </h4>
            <div class="paragraphContainer">
              <p class="paragraph">
                L’idée de Kwint est venue après avoir utilisé l’application Yuka, qui propose de scanner ses aliments afin d’en obtenir les informations nutritionnelles. L’application Kwint propose donc un principe similaire, en élargissant son champs d’action à tous les produits du quotidien.
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
              <a class="projectLink" target="_blank" href="https://invis.io/M6NJC938ZFT">Projet Invision</a>
            </p>
          </div>
        </div>
      </section>

      <section class="projectSection01__kwint">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Définir un public cible
          </h4>
          <p class="paragraph">
            La première étape pour permettre un résultat cohérent a été de définir une cible à notre application.
          </p>
        </div>
        <div class="imgItemContainer">
          <img class="imgItem" src="../../../src/assets/img/kwint_persona.png" alt="Personas du projet Kwint">
        </div>
      </section> 
      
      <section class="projectSection02__kwint">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Imaginer un parcours type 
          </h4>
          <p class="paragraph">
            Définir un parcours type nous a aidé à mieux conceptualiser le cas d’utilisation principal de l’application, et de se concentrer sur les fonctionnalités disponibles.
          </p>
        </div>
        <div class="imgItemContainer">
          <img class="imgItem" src="../../../src/assets/img/kwint_journey.png" alt="Parcours utilisateur du projet Kwint">
        </div>
      </section>

      <section class="projectSection03__kwint">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Concevoir une navigation intuitive
          </h4>
          <p class="paragraph">
            L’utilisation de l’application doit pouvoir se faire de la manière la plus simple possible pour une utilisation express (scan d’un produit), comme pour une utilisation plus approfondie. Une fois les maquettes réalisées, nous avons réalisé un prototype interactif à l’aide d’Invision, que vous pouvez essayer <a class="projectLink" target="_blank" href="https://invis.io/M6NJC938ZFT">ici</a>.
          </p>
        </div>
        <div class="imgItemContainer">
          <img class="imgItem" src="../../../src/assets/img/kwint_maquette.png" alt="Maquettes du projet Kwint">
        </div>
      </section>

      <section class="projectSection04__kwint">
        <p class="conclusionParagraph">
          Ce petit projet, en parallèle de ceux liés directement à mes études, m’a invité à penser une interface mobile qui permet à l’utilisateur d’atteindre ses objectifs en rencontrant le moins de frustrations possibles. 
        </p>
      </section>

    </div>

    <div class="projectFooter">
      <router-link to="/eiga" class="projectLink__big">Projet suivant</router-link>
    </div>
  </div>
  
</template>

<style lang="scss">
.projectSection01 {
  &__kwint {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    @media (min-width:768px) {
      flex-direction: row;
    }
    & .descriptionContainer {
      margin-bottom: 40px;
      @media (min-width:768px) {
        width: 30%;
      }
    }
    & .imgItemContainer {
      width: 100%;
      @media (min-width:768px) {
        margin-right: 100px;
        order: -1;
      }
      & .imgItem {
        width: 100%;
        height: auto;
      }
    }
  }
}

.projectSection02 {
  &__kwint {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    @media (min-width:768px) {
      flex-direction: row;
    }
    & .descriptionContainer {
      margin-bottom: 40px;
      @media (min-width:768px) {
        width: 30%;
      }
    }
    & .imgItemContainer {
      width: 100%;
      @media (min-width:768px) {
        margin-right: 100px;
        order: -1;
      }
      & .imgItem {
        width: 100%;
        height: auto;
      }
    }
  }
}

.projectSection03 {
  &__kwint {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    @media (min-width:768px) {
      flex-direction: row;
    }
    & .descriptionContainer {
      margin-bottom: 40px;
      @media (min-width:768px) {
        width: 30%;
      }
    }
    & .imgItemContainer {
      width: 100%;
      @media (min-width:768px) {
        margin-right: 100px;
        order: -1;
      }
      & .imgItem {
        width: 100%;
        height: auto;
      }
    }
  }
}

.projectSection04 {
  &__kwint {
    display: flex;
    margin-bottom: 200px;
    & .conclusionParagraph {
      font-family: var(--title-font);
      font-size: 1.4rem;
      line-height: 1.6;
      @media (min-width:768px) {
        width: 70%;
      }
    }
  }
}
</style>