const humberger = document.querySelector('.humberger');
const mainHead = document.querySelector('.main-head-desktop');
const spanHide = document.querySelector('.humberger .hide');
const span1 = document.querySelector('.humberger .span-1');
const span2 = document.querySelector('.humberger .span-2');
const links = document.querySelectorAll('nav .flex a');
const main = document.querySelector('main');
const card2_6 = document.querySelector('.work-mid');

const projects = [
  {
    name : 'Project-1',
    tecnologies : ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    description : 'I used first project',
    img : './img/w1.png',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-2',
    tecnologies : ['HTML/CSS', 'Ruby', 'Java',],
    description : 'I used  project-2',
    img : './img/w-2.jpg',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-3',
    tecnologies : ['HTML/CSS', 'Python', 'Rails'],
    description : 'I used  project-3',
    img : './img/w-3.jpg',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-4',
    tecnologies : ['React', 'Ruby on Rails', 'Nodes JS'],
    description : 'I used  project -4',
    img : './img/w-4.jpg',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-5',
    tecnologies : ['Ruby on Rails', 'C++', 'Python'],
    description : 'I used  project-5',
    img : './img/w5.jpg',
    linkLive: '#',
    linkSource: '#'
  },
  {
    name : 'Project-6',
    tecnologies : ['C#', 'C', 'OOP'],
    description : 'I used project -6',
    img : './img/w6.jpg',
    linkLive: '#',
    linkSource: '#'
  }

];
// function for projecs iterating 
function showCards(projects) {
  for (let i = 1; i < projects.length; i += 1) {
    const htmlText = `
    <div class="content-2 content grid_2r">
          <div class="img1">
            <img src="${projects[i].img}" alt="${projects[i].name}">
          </div>
          <div class="texts">
            <h2>"${projects[i].name}"</h2>
            <ul class="btns">
            </ul>
            <button class="btn-4 link">
              <span class="link-t">See this project</span>
              <div class="icon"></div>
            </button>
          </div>
        </div>
    `;
  card2_6.insertAdjacentHTML('beforeend', htmlText); 
  };
}

// function : display technologies
function displayTech(projects) {
  const li = [...document.querySelectorAll('.btns')];
  for (let i = 1; i < projects.length; i += 1) {
    projects[i].tecnologies.forEach((tech) =>{
      const htmlText = `<li class="btn-1 btn">"${tech}"</li>`;
      li[i].insertAdjacentHTML('beforeend', htmlText);
    })
  }
}


// munu-tuggle function
function menuTuggle() {
  humberger.classList.toggle('p-fixed');
  spanHide.classList.toggle('hidden');
  span1.classList.toggle('span-1-j');
  span2.classList.toggle('span-2-j');
  mainHead.classList.toggle('main-head-visible');
}
// // function : pop up
function popUp(projects) {
  const btn4 = [...document.querySelectorAll('.btn-4')];
  console.log(btn4);
  btn4.forEach((btn) => {
    btn.addEventListener('click', (displayPop = () => {
      console.log("event added for ");
      const htmlText = `<div class="pop-div" style="width:100%">
      popUp content;
      </div>`;
      document.body.insertAdjacentHTML('beforebegin', htmlText);
      const popCont = document.querySelector('.pop-div');
      popCont.style.display = 'block';
    }));
  });
}

humberger.addEventListener('click', menuTuggle);
// humber ger clicked function
Array.from(links).forEach((element) => element.addEventListener('click', menuTuggle));



window.onload = () => {
  showCards(projects);
  displayTech(projects);
  popUp(projects);
} 



