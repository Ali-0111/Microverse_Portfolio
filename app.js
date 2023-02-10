const humberger = document.querySelector('.humberger');
const mainHead = document.querySelector('.main-head-desktop');
const spanHide = document.querySelector('.humberger .hide');
const span1 = document.querySelector('.humberger .span-1');
const span2 = document.querySelector('.humberger .span-2');
const links = document.querySelectorAll('nav .flex a');
const main = document.querySelector('main');
const card2_6 = document.querySelector('.work-mid');
const work = document.querySelector('.work');
const body = document.querySelector('main');
const sectionWork = document.querySelector('.work');
const projects = [
  {
    name : 'Project-1',
    tecnologies : ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    img : './img/w1.png',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-2',
    tecnologies : ['HTML/CSS', 'Ruby', 'Java',],
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    img : './img/w-2.jpg',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-3',
    tecnologies : ['HTML/CSS', 'Python', 'Rails'],
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    img : './img/w-3.jpg',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-4',
    tecnologies : ['React', 'Ruby on Rails', 'Nodes JS'],
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    img : './img/w-4.jpg',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-5',
    tecnologies : ['Ruby', 'C++', 'Python'],
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    img : './img/w5.jpg',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-6',
    tecnologies : ['C#', 'C', 'OOP'],
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    img : './img/w6.jpg',
    linkLive: '#',
    linkSource: '#'
  }

];

// munu-tuggle function
function menuTuggle() {
  humberger.classList.toggle('p-fixed');
  spanHide.classList.toggle('hidden');
  span1.classList.toggle('span-1-j');
  span2.classList.toggle('span-2-j');
  mainHead.classList.toggle('main-head-visible');
}

// function for projecs iterating 
// create all work section by javascript
function showCards(projects) {
  const workTop = document.createElement('div');
  workTop.classList.add('work-top');
  workTop.innerHTML = `
  <header class="work-head">
          <h1>
            Projects
          </h1>
          <div class="work-dots"></div>
        </header>
          <div class="content-1 content grid_2r">
            <div class="img1">
              <img src="${projects[0].img}" alt="Image for project 1">
            </div>
            <div class="texts">
              <h2>${projects[0].name}</h2>
              <ul class="btns">
                <li class="btn-1 btn">${projects[0].tecnologies[0]}</li>
                <li class="btn-2 btn">${projects[0].tecnologies[1]}</li>
                <li class="btn-3 btn">${projects[0].tecnologies[2]}</li>
              </ul>
              <button class="btn-4 link">
                <span class="link-t">See this project</span>
                <div class="icon"></div>
              </button>
            </div>
          </div>
      </div>
  `;
  const workMid = document.createElement('div');
  workMid.classList.add('work-mid');
  workMid.innerHTML = `
  <div class="content-2 content grid_2r">
              <div class="img1">
                <img src="${projects[1].img}" alt="Image for project 2">
              </div>
              <div class="texts">
                <h2>${projects[1].name}</h2>
                <div class="btns">
                  <button class="btn-1 btn">${projects[1].tecnologies[0]}</button>
                  <button class="btn-2 btn">${projects[1].tecnologies[1]}</button>
                  <button class="btn-3 btn">${projects[1].tecnologies[2]}</button>
                  <button class="btn-4 link">
                  <span class="link-t">See this project</span>
                  <div class="icon"></div>
                </button>
                </div>
              </div>
            </div>
            <div class="sq-img"></div>
              <div class="content-3 content grid_2r">
              <div class="img1">
                <img src="${projects[2].img}" alt="Image for project 3">
              </div>
              <div class="texts">
                <h2>${projects[2].name}</h2>
                <div class="btns">
                  <button class="btn-1 btn">${projects[2].tecnologies[0]}</button>
                  <button class="btn-2 btn">${projects[2].tecnologies[1]}</button>
                  <button class="btn-3 btn">${projects[2].tecnologies[2]}</button>
                  <button class="btn-4 link">
                  <span class="link-t">See this project</span>
                  <div class="icon"></div>
                </button>
                </div>
              </div>
            </div>
            <div class="content-4 content grid_2r">
              <div class="img1">
                <img src="${projects[3].img}" alt="Image for project 4">
              </div>
              <div class="texts">
                <h2>${projects[3].name}</h2>
                <div class="btns">
                  <button class="btn-1 btn">${projects[3].tecnologies[0]}</button>
                  <button class="btn-2 btn">${projects[3].tecnologies[1]}</button>
                  <button class="btn-3 btn">${projects[3].tecnologies[2]}</button>
                  <button class="btn-4 link">
                  <span class="link-t">See this project</span>
                  <div class="icon"></div>
                </button>
                </div>
              </div>
            </div>
            <div class="red-shape"></div>
            <div class="two-shape"></div>
            <div class="content-5 content grid_2r">
              <div class="img1">
                <img src="${projects[4].img}" alt="Image for project 5">
              </div>
              <div class="texts">
                <h2>${projects[4].name}</h2>
                <div class="btns">
                  <button class="btn-1 btn">${projects[4].tecnologies[0]}</button>
                  <button class="btn-2 btn">${projects[4].tecnologies[1]}</button>
                  <button class="btn-3 btn">${projects[4].tecnologies[2]}</button>
                  <button class="btn-4 link">
                  <span class="link-t">See this project</span>
                  <div class="icon"></div>
                </button>
                </div>
              </div>
            </div>
            <div class="content-6 content grid_2r">
              <div class="img1">
                <img src="${projects[5].img}" alt="Image for project 6">
              </div>
              <div class="texts">
                <h2>${projects[5].name}</h2>
                <div class="btns">
                  <button class="btn-1 btn">${projects[5].tecnologies[0]}</button>
                  <button class="btn-2 btn">${projects[5].tecnologies[1]}</button>
                  <button class="btn-3 btn">${projects[5].tecnologies[2]}</button>
                  <button class="btn-4 link">
                  <span class="link-t">See this project</span>
                  <div class="icon"></div>
                </button>
                </div>
              </div>
            </div>
  `
  work.append(workTop);
  work.append(workMid); 
}

// function : pop up
function popUp(projects) {
  
  const btn4 = [...document.querySelectorAll('.btn-4')];
  console.log(btn4);
  btn4.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const section  = document.createElement('section');
      section.classList = 'pop-div2';

      const pop  = document.createElement('div');
      pop.classList = 'pop-div';
      pop.innerHTML= `
      <button class="close">X</button>
      <div><h2 class ="title-pop-up">${projects[i].name}</h2></div>
      <div class="btns-pop-up"">
            <ul class="btns-pop">
            <li class="btn-1-p btn-p">${projects[i].tecnologies[0]}</li>
            <li class="btn-2-p btn-p">${projects[i].tecnologies[1]}</li>
            <li class="btn-3-p btn-p">${projects[i].tecnologies[2]}</li>
            </ul>
        </div>        
          <div class="img1">
          <img src="${projects[i].img}" alt="${projects[i].name} picture">
        </div>
        <div class="description">
          <p>
            "${projects[i].description}";
          </p>
        </div>

        <div class = "extra">
          <button class ="live">
          See Live
            <span class="footer-down2"></span>
          </button>
          <button class ="source">
            See Source
            <span class="footer-down3"></span>
          </button>
        </div>

      </div>`;
    section.appendChild(pop);
    body.appendChild(section);
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => {
      body.removeChild(section);
    });
    })
  }) 
 }

// Adding events :

humberger.addEventListener('click', menuTuggle);
// humber ge clicked function

Array.from(links).forEach((element) => element.addEventListener('click', menuTuggle));

window.onload = () => {
  showCards(projects);
  // displayTech(projects);
  popUp(projects);
}