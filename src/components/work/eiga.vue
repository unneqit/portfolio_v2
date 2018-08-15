<template>
  <div class="projectWrapper">

    <div class="projectHeader">
      <h1 class="projectTitle">eiga</h1>
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
                Penser et développer une plateforme de streaming
              </h4>
              <p class="paragraph">
                Développer en 5 jours, par groupes de 5 personnes, un service de streaming en continu pour les jeunes créateurs et amateurs de fan-films. Ce fut la mission qui nous a été confiée pendant la semaine de JavaScript à HETIC.
              </p>      
            </div>
            <div class="col-2">
              <p class="paragraph">
                Les deux principaux objectifs de cette semaine étaient de développer un player vidéo fonctionnel, ainsi qu’une interface permettant d’afficher les films disponibles
              </p>
            </div>
          </div>
          <div class="concept">
            <h4 class="projectSubtitle">
              Repenser le mode de navigation
            </h4>
            <div class="paragraphContainer">
              <p class="paragraph">
                En tant que designer sur ce projet, mon objectif était de rendre le produit cohérent et intuitif. La première étape a alors été d’identifier quels étaient les principaux problèmes rencontrés à l’utilisation de plateformes similaires, et quels étaient les points positifs à en tirer. En souhaitant se rapprocher d’une sensation web app, facilement adaptable à un format app TV, il m’est apparu évident de me concentrer sur le mode de navigation au sein de la plateforme.
              </p>
            </div>
          </div>
        </div>

        <div class="credits">
          <div class="creditsItem">
            <h4 class="creditsTitle">Durée</h4>
            <p class="creditsText">
              5 jours
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
              <a class="projectLink" target="_blank" href="https://github.com/Sopaa">
                Pierre Bourgeois
              </a>
            </p>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://github.com/Loriick">
                Lorick Travailleur
              </a>
            </p>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://github.com/Mehdi-Verfaillie">
                Mehdi Verfaillie
              </a>
            </p>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://github.com/HadrienVillani">
                Hadrien Villani
              </a>
            </p>
          </div>
          <div class="creditsItem">
            <h4 class="creditsTitle">Code</h4>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://github.com/Sopaa/SemaineIntensive3">Repository Github</a>
            </p>
          </div>
          
        </div>
      </section>

      <section class="projectSection01__eiga">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Le scroll horizontal n’est pas toujours la solution la plus adaptée...
          </h4>
          <p class="paragraph">
            En effectuant un benchmark de plusieurs plateformes de streaming, j’ai pu noter que plusieurs d’entre eux privilégiaient un scroll horizontal parmi les programmes. C’est une solution qui paraît évidente sur un appareil mobile, mais qui ne correspondait pas à notre cible Desktop/TV. J'ai donc opté pour une approche différente avec un scroll plus intuitif sur ce type de support.
          </p>
        </div>
        <div class="imgItemContainer">
          <img class="imgItem" src="../../../src/assets/img/eiga_scroll.gif" alt="Animation du scroll d'eiga">
        </div>
      </section> 
      
      <section class="projectSection02__eiga">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Synthétiser l’expérience de navigation
          </h4>
          <p class="paragraph">
            Garder les choses simples. C’est l’objectif que je me suis fixé avec ce projet, étant donné le peu de temps qui nous était donné.
          </p>
        </div>
        <div class="imgWrapper">
          <div class="imgContainer">
            <div class="imgItemWrapper">
              <div class="imgItemContainer">
                <img class="imgItem" src="../../../src/assets/img/eiga_login.png" alt="Maquette de l'écran de connexion d'eiga">
              </div>
              <div class="paragraphContainer">
                <p class="paragraph">
                  L’arrivée sur le site propose une page de connexion/inscription, mais laisse tout de même la possibilité à l’utilisateur de naviguer à travers le catalogue.
                </p>
                <p class="paragraph">
                  Cette option permet de réduire une des principales frustrations généralement présente sur les sites similaires, où l’utilisateur est forcé à s’engager avec la création d’un compte.
                </p>
              </div>
            </div>
            <div class="imgItemWrapper">
              <div class="imgItemContainer">
                <img class="imgItem" src="../../../src/assets/img/eiga_homepage.png" alt="Maquette de la homepage d'eiga">
              </div>
            </div>
            <div class="paragraphContainer">
              <p class="paragraph">
                La page principale est divisée en 3 parties distinctes immédiatement identifiables. Sur la barre latérale se trouvent donc les différents filtres, et juste à leur droite est affichée la liste des films.
              </p>
              <p class="paragraph">
                Plus de la moitié de la page est alors réservée au player ainsi qu’à une description détaillée de chaque film. 
              </p>
            </div>

          </div>
        </div>
      </section>

      <section class="projectSection03__eiga">
        <p class="conclusionParagraph">
          Penser et concevoir l’interface d’une plateforme de streaming était un exercice qui s’est avéré très enrichissant. Étant amateur de ce type de site web, j’ai été poussé à prendre du recul par rapport à ma propre expérience, et à en tirer des observations concernant leur utilisation. J’ai ainsi pu expérimenter une manière de disposer les éléments d’une page qui permettait de se rapprocher le plus possible d’une expérience web app.   
        </p>
      </section>

    </div>

    <div class="projectFooter">
      <router-link to="/info" class="projectLink__big">Plus d'infos ?</router-link>
    </div>
  </div>
  
</template>

<style lang="scss">
.projectSection01 {
  &__eiga {
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
  &__eiga {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    @media (min-width:768px) {
      flex-direction: row;
    }
    & .imgWrapper {
      width: 100%;
      @media (min-width:768px) {
        margin-right: 100px;
        order: -1;
      }
      & .imgContainer {
        width: 100%;
        margin-bottom: 20px;
        & .imgItemWrapper {
          &:first-child {
            margin-bottom: 40px;
          }
          & .imgItemContainer {
            margin-bottom: 20px;
          }
          & .imgItem {
            width: 100%;
            height: auto;
          }
        }
      }
      & .paragraphContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        @media (min-width:768px) {
          flex-direction: row;
          justify-content: space-between;
        }
        & .paragraph {
          &:first-child {
            margin-bottom: 20px;
            @media (min-width:768px) {
              margin-bottom: 0;
              width: 48%;
            }
          }
          &:last-child {
            @media (min-width:768px) {
              width: 48%;
            }
          }
        }
      }
    }
    & .descriptionContainer {
      margin-bottom: 40px;
      @media (min-width:768px) {
        width: 30%;
      }
    }

  }
}

.projectSection03 {
  &__eiga {
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