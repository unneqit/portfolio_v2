<template>
  <div class="projectWrapper">

    <div class="projectHeader">
      <h1 class="projectTitle">Xenos</h1>
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
                Xenos est notre projet de fin de première année à HETIC.
              </h4>
              <p class="paragraph">
                Durant les 2 dernières semaines de cette première année de Bachelor Web à HETIC, nous avons été amenés à réaliser un projet qui mettrait à contribution toutes nos connaissances acquises ces derniers mois.
              </p>      
            </div>
            <div class="col-2">
              <p class="paragraph">
                C’est donc avec une équipe de 6 personnes que nous sommes parvenus à concrétiser notre idée, par l’intermédiaire d’un site web sur le thème qui nous était imposé : l’espace.
              </p>
            </div>
          </div>
          <div class="concept">
            <h4 class="projectSubtitle">Penser un concept innovant</h4>
            <div class="paragraphContainer">
              <p class="paragraph">
                Après un brainstorming créatif, nous nous sommes accordés sur une problématique : aujourd’hui, et dans un futur proche, l’exploration spatiale par des êtres humains est un processus contraignant, dangereux, extrêmement coûteux, mais surtout, apparaît inaccessible au grand public.
              </p>
              <p class="paragraph">
                C’est sur cette constatation que se positionne le concept de Xenos. Il s’inscrit dans un futur où l’exploration spatiale se serait démocratisé par l’intermédiaire du web. En effet, dans un but pédagogique et ludique, le site web propose une expérience accessible à des millions d’individus depuis la Terre. C’est ainsi que, pendant quelques instants, n’importe quelle personne pourra prendre le contrôle d’un rover pour explorer une autre planète du système solaire.
              </p>
            </div>
          </div>
        </div>

        <div class="credits">
          <div class="creditsItem">
            <h4 class="creditsTitle">Durée</h4>
            <p>
              2 semaines
            </p>
          </div>
          <div class="creditsItem">
            <h4 class="creditsTitle">Rôles</h4>
            <p>
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
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://www.behance.net/YeMarc">
                Marc Ye
              </a>
            </p>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://github.com/ShonhTan">
                Vincent Pham
              </a>
            </p>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://github.com/yip-theodore">
                Théodore Yip
              </a>
            </p>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://github.com/M00NBOY">
                Mahel Zeroual
              </a>
            </p>
          </div>
          <div class="creditsItem">
            <h4 class="creditsTitle">Design</h4>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://www.figma.com/file/p3BKA9wYbCh74wOgSXqeY4/XENOS-Quentin-LENGLIN?node-id=0%3A1">Fichier Figma</a>
            </p>
          </div>
          <div class="creditsItem">
            <h4 class="creditsTitle">Code</h4>
            <p class="creditsText">
              <a class="projectLink" target="_blank" href="https://github.com/ShonhTan/xenos">Repository Github</a>
            </p>
          </div>
        </div>
      </section>

      <section class="projectSection01">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Établir une charte graphique ludique
          </h4>
          <p class="paragraph">
            Afin de définir une direction globale à donner au projet, nous nous sommes accordés sur un charte graphique avec un logo qui évoque évidemment l’espace, mais qui appuie aussi cet aspect ludique.
          </p>
        </div>
        <div class="imgWrapper">
          <div class="imgContainer">
            <div class="imgItemContainer">
              <img class="imgItem" src="../../../src/assets/img/xenos_charte-graphique.png" alt="Charte graphique du projet Xenos">
            </div>
            <div class="imgItemContainer">
              <img class="imgItem" src="../../../src/assets/img/xenos_illu.png" alt="Illustration du projet Xenos">
            </div>
          </div>
          <div class="paragraphContainer">
            <p class="paragraph">
              Les illustrations, entièrement réalisées par Marc Ye, appuient ce côté dynamique et la gamification apportée à ce domaine qui peut paraître trop complexe.
            </p>
            <p class="paragraph">
              Elles permettent de renforcer la charte graphique et offrent une identité en adéquation avec les valeurs que Xenos véhicule.
            </p>
          </div>
        </div>
      </section>
      
      <section class="projectSection02">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Trier et structurer les informations 
          </h4>
          <p class="paragraph">
            L’étape la plus importante a été de définir les différents contenus et de les hiérarchiser de la manière la plus cohérente qui soit. Pour cela, nous sommes passés par la réalisation d’un sitemap.
          </p>
        </div>
        <div class="imgItemContainer">
          <img class="imgItem" src="../../../src/assets/img/xenos_sitemap.jpg" alt="Sitemap du projet Xenos">
        </div>
      </section> 
      
      <section class="projectSection03">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Penser mobile first 
          </h4>
          <p class="paragraph">
            Ce site se destinant à une utilisation principalement sur mobile, les maquettes ont été conçues en prenant en compte cette contrainte essentielle. Les maquettes sont d’ailleurs accessibles <a class="projectLink" target="_blank" href="https://www.figma.com/file/p3BKA9wYbCh74wOgSXqeY4/XENOS-Quentin-LENGLIN?node-id=0%3A1">ici</a>.
          </p>
        </div>
        <div class="imgWrapper">
          <div class="imgContainer">
            <div class="imgItemContainer">
              <img class="imgItem" src="../../../src/assets/img/xenos_maquette.png" alt="Maquette du projet Xenos">
            </div>
          </div>
          <div class="paragraphContainer">
            <p class="paragraph">
              Avant de passer par ce processus de réalisation de maquettes haute fidélité, des wireframes ont été réalisés sur papier et sur tableau. À force d’itérer, nous sommes parvenus à un résultat qui nous convenait.
            </p>
            <p class="paragraph">
              La navigation du site est finalement assez classique dans son approche. Cet effet était voulu, puisque le but de Xenos est de toucher le public le plus large possible, sans les dépayser.
            </p>
          </div>
        </div>
      </section>

      <section class="projectSection04">
        <div class="descriptionContainer">
          <h4 class="projectSubtitle">
            Décomposer pour mieux réutiliser
          </h4>
          <p class="paragraph">
            Pour nous permettre de garder une consistance et une cohérence globale, ainsi que pour faciliter le travail des développeurs, j’ai opté pour une approche atomique, adaptée à notre contrainte de temps, des principaux composants réutilisés sur les différentes pages.
          </p>
        </div>
        <div class="imgItemContainer">
          <img class="imgItem" src="../../../src/assets/img/xenos_atomic.png" alt="Système de design atomique">
        </div>
      </section> 

      <section class="projectSection05">
        <p class="conclusionParagraph">
          Intensif mais plein d’enseignements, ce projet de fin d’année a été le plus challengeant d’un point de vue technique.  L’utilisation des frameworks Vue.js et Symfony m’ont permis d’expérimenter une variante adaptée de l’atomic design afin de fluidifier l’intégration et le développement. L’envergure du concept étant si vaste, il était difficile de se concentrer sur tous les différents aspects en si peu de temps. Il a donc fallu faire des choix et en tirer l’essentiel pour obtenir un résultat compréhensible.
        </p>
      </section>

    </div>

    <div class="projectFooter">
      <router-link to="/kwint" class="projectLink__big">Projet suivant</router-link>
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
  & .descriptionContainer {
    margin-bottom: 40px;
  }
  & .imgWrapper {
    width: 100%;
    & .imgContainer {
      width: 100%;
      margin-bottom: 20px;
      & .imgItemContainer {
        &:not(:last-child) {
          margin-bottom: 40px;
        }
      }
      & .imgItem {
        width: 100%;
        height: auto;
      }
    }
    & .paragraphContainer {
      display: flex;
      flex-direction: column;
      & .paragraph:not(:last-child) {
        margin-bottom: 20px;
      }
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
  & .imgWrapper {
    width: 100%;
    & .imgContainer {
      width: 100%;
      margin-bottom: 20px;
      & .imgItem {
        width: 100%;
        height: auto;
      }
    }
    & .paragraphContainer {
      display: flex;
      flex-direction: column;
      & .paragraph:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}

.projectSection04 {
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

.projectSection05 {
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