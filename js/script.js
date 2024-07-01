const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '26px',
  duration: 3500,
  reset: true,
});

sr.reveal('.home-text', { delay: 190, origin: 'bottom' });

sr.reveal('.about,.services', {
  delay: 200,
  origin: 'bottom',
});

//SURVEY
const quizData = [
  // {
  //   code: 'allo',
  //   question: 'Do you prefer a less structured Itinerary? (To have more freedom to explore on your own)',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'd',
  // },
  // {
  //   code: 'allo',
  //   question: "Do you enjoy meeting new people or different cultures?",
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'allo',
  //   question: "Are you into exploring new and unusual areas? (New destinations, Hidden gems, Secluded areas, Off beaten path destinations)",
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'allo',
  //   question: "Do you like higher activity levels? (Trekking, Zip lining, Bungee jumping, Wakeboarding, River Rafting, Ultralight flying, Paragliding, etc.)",
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'allo',
  //   question: "Are you a risk taker?",
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'allo',
  //   question: "Do you prefer to take a flight to your destination?",
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'allo',
  //   question: "Are you eager to learn while traveling?",
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'allo',
  //   question: "Do you feel excited about adventure? ",
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'allo',
  //   question: "Do you like to travel during holidays?",
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  {
    code: 'allo',
    question: "Do you prefer group tours?",
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    correct: 'b',
  },
  // {
  //   code: 'mid',
  //   question: 'Are you curious about new surroundings yet require some planned activities?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'a',
  // },
  // {
  //   code: 'mid',
  //   question: 'Do you find meeting new people or different cultures interesting?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'a',
  // },
  // {
  //   code: 'mid',
  //   question: 'Are you not exceptionally adventurous but still open to new experiences?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'a',
  // },
  // {
  //   code: 'mid',
  //   question: 'Do you like a balance of novelty and home comforts? (Fun activities with relaxation)',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'a',
  // },
  // {
  //   code: 'mid',
  //   question: 'Are you willing to take risks?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'a',
  // },
  // {
  //   code: 'mid',
  //   question: 'Both flying and driving to destinations is fine? ',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'a',
  // },
  // {
  //   code: 'mid',
  //   question: 'Are you willing to partake in events? (Festivals, Activities)',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'a',
  // },
  // {
  //   code: 'mid',
  //   question: 'Are you fine to travel to familiar places while also discovering the unknown?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'a',
  // },
  // {
  //   code: 'mid',
  //   question: 'Are you fine traveling with your friends or family?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'a',
  // },
  {
    code: 'mid',
    question: 'Do you travel to obtain a break from your routine?',
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    correct: 'a',
  },
  // {
  //   code: 'psy',
  //   question: 'Do you prefer a structured Itinerary? (Detailed plan itinerary)',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'psy',
  //   question: 'Are you Comfortable being around other tourists?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'psy',
  //   question: 'Do you prefer a familiar tourist destination? (Well-known tourist destinations)',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'psy',
  //   question: 'Do you like the following activities? (Beach trip, Spa trip, Sightseeing, Shopping, etc.)',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'psy',
  //   question: 'Are you a non-risk taker?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'psy',
  //   question: 'Do you prefer to drive rather than fly to your destinations?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'psy',
  //   question: 'Do you prefer to be in a serene place and relaxing atmosphere?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'psy',
  //   question: 'Do you prefer to have inclusive tours? (Arranged and organized by the operators)',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  // {
  //   code: 'psy',
  //   question: 'Do you prefer to have peace and quiet travel?',
  //   a: '1',
  //   b: '2',
  //   c: '3',
  //   d: '4',
  //   e: '5',
  //   correct: 'b',
  // },
  {
    code: 'psy',
    question: 'Do you like to have your home comfort while on holiday?',
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    correct: 'b',
  },
];

const portfolio = document.getElementById('portfolio-content');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let displayAnswers = '';
let inputArray = [];
let questionsArray = [];
let allocentric = [];
let midcentric = [];
let psychocentric = [];

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  console.log('top: ', currentQuizData.question);
  console.log('type of Question: ', currentQuizData.code);
  questionsArray.push(`${currentQuizData.question} <br>`);
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = parseInt(answerEl.id);
    }
  });
  return parseInt(answer);
}

function loader() {
  portfolio.innerHTML = `
  <div class="center">
      <div class="ring"></div>
      <span>generating...</span>
    </div>
  `;
}

//Main
function packages() {
  console.log('Questions: ', questionsArray);
      console.log('Answers: ', typeof inputArray[3]);
      console.log(
        'Allocentric: ', A);

      console.log(
        'Midcentric ', M);

      console.log(
        'Psychocentric: ', P);

        //Validation project
// let allocentricTotal = 11;
// let midcentricTotal = 120;
// let psychocentricTotal = 13;
const input = [A, M, P];
const largestPoints = Math.max(...input);
console.log(input);
//if all values are equal and has largestPoints
if (
  A == largestPoints &&
  M == largestPoints &&
  P == largestPoints
) {
  console.log('You are jack of all traits!');
  AlloMidPsy();
} else {
  //>>>>>>> allocentric validation
  if (A == largestPoints) {
    if (A == M) {
      console.log('You are both allocentric and midcentric');
      console.log("allo function is executed");
      alloAndMid();
    } else if (A == P) {
      console.log('You are both allocentric and psychocentric');
      alloAndPsy();
    } else {
      console.log('You are Allocentric: POINTS: ', largestPoints);
      allo();
    }
    //>>>>>>>> midcentric validation
  } else if (M == largestPoints) {
    if (M == A) {
      console.log('You are both midcentric and allocentric');
      alloAndMid();
    } else if (M == P) {
      console.log('You are both midcentric and psychocentric');
      midAndPsy();
    } else {
      console.log('You are Midcentric: POINTS: ', largestPoints);
      mid();
    }
    //>>>>>>> psychocentric validation
  } else if (P == largestPoints) {
    if (P == A) {
      console.log('You are both psychocentric and allocentric');
      alloAndPsy();
    } else if (P == M) {
      console.log('You are both psychocentric and midcentric');
      midAndPsy();
    } else {
      console.log('You are Psychocentric: POINTS: ', largestPoints);
      psy();
    }
  } else {
    console.log('error');
  }
}
}

//ALL TYPES
function AlloMidPsy(){
   // loader();
   portfolio.innerHTML = `
   <!-- popup -->
    <!-- location 1 -->
    <div class="popup">
        <!-- top bar -->
        <div class="top-bar">
            <p class="image-name">img1.png</p>
            <span class="close-btn"></span>
        </div>
        <!-- image -->
        <img src="img/img2.png" class="large-image" alt="">
        <!-- image-index -->
        <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
        <h1 class="index">01</h1>
    </div>
    <div class="row">
    <div class="gallery-image">
            <img src="pic/allo/main.jpg" alt="" class="image"> 
        </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Ilocos Itinerary</h3>
  </div>

  <!-- location 2 -->
  <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main2.png" alt="" class="image"> 
       </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Anawangin Cove</h3>
  </div>

<!-- location 3 -->
  <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main3.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Aurora Adventure</h3>
  </div>
    </div>

    <!-- location 4 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main4.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Aurora Baler</h3>
  </div>
    </div>

<!-- location 5 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main5.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Baler, Aurora Getaway</h3>
  </div>
    </div>

<!-- location 6 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main6.jpg" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Bataan Eco Tour</h3>
  </div>
    </div>

<!-- location 7 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main7.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Bataan Tarak Ridge & Papaya River Hike</h3>
  </div>
    </div>

<!-- location 8 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main8.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Bulacan AdvenTOUR</h3>
  </div>
    </div>

<!-- location 9 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main9.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Ilocos Norte TouRavel</h3>
  </div>
    </div>

<!-- location 10 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main10.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Ilocos Norte Itinerary</h3>
  </div>
    </div>

<!-- location 11 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main11.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Mt. Pinatubo Day trip</h3>
  </div>
    </div>

<!-- location 12 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main12.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Nueva Vizcaya</h3>
  </div>
    </div>

<!-- location 13 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main13.jpg" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Zambales Escapade</h3>
  </div>
    </div>

    <!-- popup -->
    <!-- location 1 -->
    <div class="popup">
        <!-- top bar -->
        <div class="top-bar">
            <p class="image-name">img1.png</p>
            <span class="close-btn"></span>
        </div>
        <!-- image -->
        <img src="img/img2.png" class="large-image" alt="">
        <!-- image-index -->
        <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
        <h1 class="index">01</h1>
    </div>
    <div class="row">
    <div class="gallery-image">
            <img src="pic/mid/main.png" alt="" class="image"> 
        </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>A Beautiful Disaster Tour at Mt. Pinatubo</h3>
  </div>

  <!-- location 2 -->
  <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main2.jpg" alt="" class="image"> 
       </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Beat the Heat at La Union</h3>
  </div>

<!-- location 3 -->
  <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main3.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Doña Remedios Trinidad Quick Escapade</h3>
  </div>
    </div>

    <!-- location 4 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main4.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Journey to La Union</h3>
  </div>
    </div>

<!-- location 5 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main5.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Nueva Ecija Barkada Tour</h3>
  </div>
    </div>

<!-- location 6 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main6.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pampanga Historical Tour</h3>
  </div>
    </div>

<!-- location 7 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main7.jpg" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pampanga Itinerary</h3>
  </div>
    </div>

<!-- location 8 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main8.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pampanga Tour</h3>
  </div>
    </div>

<!-- location 9 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main9.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pampanga Trip</h3>
  </div>
    </div>

<!-- location 10 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main10.jpg" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pangasinan Hundred Island Adventure</h3>
  </div>
    </div>

<!-- location 11 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main11.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Trip to Tarlac</h3>
  </div>
    </div>

<!-- location 12 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main12.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Where in Cagayan</h3>
  </div>
    </div>

<!-- location 13 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main13.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Zambales - Reconnect with Nature</h3>
  </div>
    </div>

    <!-- popup -->
  <!-- location 1 -->
  <div class="popup">
      <!-- top bar -->
      <div class="top-bar">
          <p class="image-name">img1.png</p>
          <span class="close-btn"></span>
      </div>
      <!-- image -->
      <img src="img/img2.png" class="large-image" alt="">
      <!-- image-index -->
      <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
      <h1 class="index">01</h1>
  </div>
  <div class="row">
  <div class="gallery-image">
          <img src="pic/psy/main.png" alt="" class="image"> 
      </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bagac Bataan</h3>
</div>

<!-- location 2 -->
<div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main2.png" alt="" class="image"> 
     </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Balanga Bataan</h3>
</div>

<!-- location 3 -->
<div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main3.jpg" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bataan Historical Tour</h3>
</div>
  </div>

  <!-- location 4 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main4.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Batanes of the East</h3>
</div>
  </div>

<!-- location 5 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main5.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bulacan Lakbay Norte</h3>
</div>
  </div>

<!-- location 6 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main6.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Explore Tarlac</h3>
</div>
  </div>

<!-- location 7 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main7.jpg" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Exploring Batanes</h3>
</div>
  </div>

<!-- location 8 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main8.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Find Inner Peace in Bulacan</h3>
</div>
  </div>

<!-- location 9 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main9.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Heading to Tarlac Day Tour</h3>
</div>
  </div>
 `;

 const type = document.getElementById("type");
 const typeTitle = document.createElement('h1');
 typeTitle.className = "animate__heartBeat";
 typeTitle.innerHTML = "YOU ARE ALL TYPES!";
 type.appendChild(typeTitle);
   const images = [...document.querySelectorAll('.image')];
 
 // popup
 
 const popup = document.querySelector('.popup');
 const closeBtn = document.querySelector('.close-btn');
 const imageName = document.querySelector('.image-name');
 const largeImage = document.querySelector('.large-image');
 const imageIndex = document.querySelector('.index');
 
 let index = 0; // will track our current image;
 
 images.forEach((item, i) => {
     item.addEventListener('click', () => {
         updateImage(i);
         popup.classList.toggle('active');
     })
 })
 
 const updateImage = (i) => {
     let path = `pic/alloNmidNpsy/img${i+1}.png`;
     largeImage.src = path;
     imageName.innerHTML = path;
     imageIndex.innerHTML = `0${i+1}`;
     index = i;
 }
 
 closeBtn.addEventListener('click', () => {
     popup.classList.toggle('active');
 })

const images2 = [...document.querySelectorAll('.image2')];

// popup

const popup2 = document.querySelector('.popup2');
const closeBtn2 = document.querySelector('.close-btn2');
const imageName2 = document.querySelector('.image-name2');
const largeImage2 = document.querySelector('.large-image2');
const imageIndex2 = document.querySelector('.index2');

let index2 = 0; // will track our current image;

images2.forEach((item2, i) => {
    item2.addEventListener('click', () => {
        updateImage2(i);
        popup2.classList.toggle('active');
    })
})

const updateImage2 = (i) => {
    let path = `pic/alloNmidNpsy/img${i+1}.png`;
    largeImage2.src = path;
    imageName2.innerHTML = path;
    imageIndex2.innerHTML = `0${i+1}`;
    index2 = i;
}

closeBtn2.addEventListener('click', () => {
    popup2.classList.toggle('active');
})

//PSYYYYYY
const images3 = [...document.querySelectorAll('.image3')];

// popup

const popup3 = document.querySelector('.popup3');
const closeBtn3 = document.querySelector('.close-btn3');
const imageName3 = document.querySelector('.image-name3');
const largeImage3 = document.querySelector('.large-image3');
const imageIndex3 = document.querySelector('.index3');

let index3 = 0; // will track our current image;

images3.forEach((item3, i) => {
  item3.addEventListener('click', () => {
      updateImage3(i);
      popup3.classList.toggle('active');
  })
})

const updateImage3 = (i) => {
  let path = `pic/alloNmidNpsy/img${i+1}.png`;
  largeImage3.src = path;
  imageName3.innerHTML = path;
  imageIndex3.innerHTML = `0${i+1}`;
  index3 = i;
}

closeBtn3.addEventListener('click', () => {
  popup3.classList.toggle('active');
})
}


//Allocentric 
function allo() {
  // loader();
    portfolio.innerHTML = `
    <!-- popup -->
    <!-- location 1 -->
    <div class="popup">
        <!-- top bar -->
        <div class="top-bar">
            <p class="image-name">img1.png</p>
            <span class="close-btn"></span>
        </div>
        <!-- image -->
        <img src="img/img2.png" class="large-image" alt="">
        <!-- image-index -->
        <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
        <h1 class="index"></h1>
    </div>
    <div class="row">
    <div class="gallery-image">
            <img src="pic/allo/main.jpg" alt="" class="image"> 
        </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Ilocos Itinerary</h3>
  </div>

  <!-- location 2 -->
  <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main2.png" alt="" class="image"> 
       </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Anawangin Cove</h3>
  </div>

<!-- location 3 -->
  <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main3.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Aurora Adventure</h3>
  </div>
    </div>

    <!-- location 4 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main4.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Aurora Baler</h3>
  </div>
    </div>

<!-- location 5 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main5.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Baler, Aurora Getaway</h3>
  </div>
    </div>

<!-- location 6 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main6.jpg" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Bataan Eco Tour</h3>
  </div>
    </div>

<!-- location 7 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main7.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Bataan Tarak Ridge & Papaya River Hike</h3>
  </div>
    </div>

<!-- location 8 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main8.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Bulacan AdvenTOUR</h3>
  </div>
    </div>

<!-- location 9 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main9.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Ilocos Norte TouRavel</h3>
  </div>
    </div>

<!-- location 10 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main10.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Ilocos Norte Itinerary</h3>
  </div>
    </div>

<!-- location 11 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main11.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Mt. Pinatubo Day trip</h3>
  </div>
    </div>

<!-- location 12 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main12.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Nueva Vizcaya</h3>
  </div>
    </div>

<!-- location 13 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/allo/main13.jpg" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Zambales Escapade</h3>
  </div>
    </div>
	`;
  const type = document.getElementById("type");
const typeTitle = document.createElement('h1');
typeTitle.className = "animate__heartBeat";
typeTitle.innerHTML = "YOU ARE ALLOCENTRIC!";
type.appendChild(typeTitle);
  const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `pic/allo/img${i+1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})
  }


//Midcentric
function mid() {
  // loader();
    portfolio.innerHTML = `
    <!-- popup -->
    <!-- location 1 -->
    <div class="popup">
        <!-- top bar -->
        <div class="top-bar">
            <p class="image-name">img1.png</p>
            <span class="close-btn"></span>
        </div>
        <!-- image -->
        <img src="img/img2.png" class="large-image" alt="">
        <!-- image-index -->
        <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
        <h1 class="index">01</h1>
    </div>
    <div class="row">
    <div class="gallery-image">
            <img src="pic/mid/main.png" alt="" class="image"> 
        </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>A Beautiful Disaster Tour at Mt. Pinatubo</h3>
  </div>

  <!-- location 2 -->
  <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main2.jpg" alt="" class="image"> 
       </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Beat the Heat at La Union</h3>
  </div>

<!-- location 3 -->
  <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main3.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Doña Remedios Trinidad Quick Escapade</h3>
  </div>
    </div>

    <!-- location 4 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main4.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Journey to La Union</h3>
  </div>
    </div>

<!-- location 5 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main5.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Nueva Ecija Barkada Tour</h3>
  </div>
    </div>

<!-- location 6 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main6.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pampanga Historical Tour</h3>
  </div>
    </div>

<!-- location 7 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main7.jpg" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pampanga Itinerary</h3>
  </div>
    </div>

<!-- location 8 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main8.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pampanga Tour</h3>
  </div>
    </div>

<!-- location 9 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main9.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pampanga Trip</h3>
  </div>
    </div>

<!-- location 10 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main10.jpg" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Pangasinan Hundred Island Adventure</h3>
  </div>
    </div>

<!-- location 11 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main11.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Trip to Tarlac</h3>
  </div>
    </div>

<!-- location 12 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main12.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Where in Cagayan</h3>
  </div>
    </div>

<!-- location 13 -->
    <div class="row">
      <div class="gallery-image">
      <img src="pic/mid/main13.png" alt="" class="image"> 
    </div>
    <div class="main-row">
      <div class="row-text">
        <h6>Location</h6>
      </div>
      <div class="row-icon">
        <i class="bx bx-heart"></i>
      </div>
    </div>
    <h3>Zambales - Reconnect with Nature</h3>
  </div>
    </div>

	`;
  const type = document.getElementById("type");
const typeTitle = document.createElement('h1');
typeTitle.className = "animate__heartBeat";
typeTitle.innerHTML = "YOU ARE MIDCENTRIC!";
type.appendChild(typeTitle);
  const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
  let path = `pic/mid/img${i+1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})
}

//Psychcentic
function psy() {
  // loader();
  portfolio.innerHTML = `
  <!-- popup -->
  <!-- location 1 -->
  <div class="popup">
      <!-- top bar -->
      <div class="top-bar">
          <p class="image-name">img1.png</p>
          <span class="close-btn"></span>
      </div>
      <!-- image -->
      <img src="img/img2.png" class="large-image" alt="">
      <!-- image-index -->
      <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
      <h1 class="index">01</h1>
  </div>
  <div class="row">
  <div class="gallery-image">
          <img src="pic/psy/main.png" alt="" class="image"> 
      </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bagac Bataan</h3>
</div>

<!-- location 2 -->
<div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main2.png" alt="" class="image"> 
     </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Balanga Bataan</h3>
</div>

<!-- location 3 -->
<div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main3.jpg" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bataan Historical Tour</h3>
</div>
  </div>

  <!-- location 4 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main4.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Batanes of the East</h3>
</div>
  </div>

<!-- location 5 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main5.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bulacan Lakbay Norte</h3>
</div>
  </div>

<!-- location 6 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main6.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Explore Tarlac</h3>
</div>
  </div>

<!-- location 7 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main7.jpg" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Exploring Batanes</h3>
</div>
  </div>

<!-- location 8 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main8.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Find Inner Peace in Bulacan</h3>
</div>
  </div>

<!-- location 9 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main9.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Heading to Tarlac Day Tour</h3>
</div>
  </div>
`;

const type = document.getElementById("type");
const typeTitle = document.createElement('h1');
typeTitle.className = "animate__heartBeat";
typeTitle.innerHTML = "YOU ARE PSYCHOCENTRIC!";
type.appendChild(typeTitle);
const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');

let index = 0; // will track our current image;

images.forEach((item, i) => {
  item.addEventListener('click', () => {
      updateImage(i);
      popup.classList.toggle('active');
  })
})

const updateImage = (i) => {
  let path = `pic/psy/img${i+1}.png`;
  largeImage.src = path;
  imageName.innerHTML = path;
  imageIndex.innerHTML = `0${i+1}`;
  index = i;
}

closeBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
})

// leftArrow.addEventListener('click', () => {
//   if(index > 0){
//       updateImage(index - 1);
//   }
// })

// rightArrow.addEventListener('click', () => {
//   if(index < images.length - 1){
//       updateImage(index + 1);
//   }
// })
}

//Allo and Mid
function alloAndMid() {
   // loader();
   portfolio.innerHTML = `
   <!-- popup -->
   <!-- location 1 -->
   <div class="popup">
       <!-- top bar -->
       <div class="top-bar">
           <p class="image-name">img1.png</p>
           <span class="close-btn"></span>
       </div>
       <!-- image -->
       <img src="img/img2.png" class="large-image" alt="">
       <!-- image-index -->
       <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
       <h1 class="index">01</h1>
   </div>
   <div class="row">
   <div class="gallery-image">
           <img src="pic/allo/main.jpg" alt="" class="image"> 
       </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Ilocos Itinerary</h3>
 </div>

 <!-- location 2 -->
 <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main2.png" alt="" class="image"> 
      </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Anawangin Cove</h3>
 </div>

<!-- location 3 -->
 <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main3.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Aurora Adventure</h3>
 </div>
   </div>

   <!-- location 4 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main4.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Aurora Baler</h3>
 </div>
   </div>

<!-- location 5 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main5.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Baler, Aurora Getaway</h3>
 </div>
   </div>

<!-- location 6 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main6.jpg" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Bataan Eco Tour</h3>
 </div>
   </div>

<!-- location 7 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main7.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Bataan Tarak Ridge & Papaya River Hike</h3>
 </div>
   </div>

<!-- location 8 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main8.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Bulacan AdvenTOUR</h3>
 </div>
   </div>

<!-- location 9 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main9.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Ilocos Norte TouRavel</h3>
 </div>
   </div>

<!-- location 10 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main10.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Ilocos Norte Itinerary</h3>
 </div>
   </div>

<!-- location 11 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main11.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Mt. Pinatubo Day trip</h3>
 </div>
   </div>

<!-- location 12 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main12.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Nueva Vizcaya</h3>
 </div>
   </div>

<!-- location 13 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/allo/main13.jpg" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Zambales Escapade</h3>
 </div>
   </div>

   <!-- popup -->
   <!-- location 1 -->
   <div class="popup">
       <!-- top bar -->
       <div class="top-bar">
           <p class="image-name">img1.png</p>
           <span class="close-btn"></span>
       </div>
       <!-- image -->
       <img src="img/img2.png" class="large-image" alt="">
       <!-- image-index -->
       <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
       <h1 class="index">01</h1>
   </div>
   <div class="row">
   <div class="gallery-image">
           <img src="pic/mid/main.png" alt="" class="image"> 
       </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>A Beautiful Disaster Tour at Mt. Pinatubo</h3>
 </div>

 <!-- location 2 -->
 <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main2.jpg" alt="" class="image"> 
      </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Beat the Heat at La Union</h3>
 </div>

<!-- location 3 -->
 <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main3.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Doña Remedios Trinidad Quick Escapade</h3>
 </div>
   </div>

   <!-- location 4 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main4.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Journey to La Union</h3>
 </div>
   </div>

<!-- location 5 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main5.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Nueva Ecija Barkada Tour</h3>
 </div>
   </div>

<!-- location 6 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main6.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Pampanga Historical Tour</h3>
 </div>
   </div>

<!-- location 7 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main7.jpg" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Pampanga Itinerary</h3>
 </div>
   </div>

<!-- location 8 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main8.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Pampanga Tour</h3>
 </div>
   </div>

<!-- location 9 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main9.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Pampanga Trip</h3>
 </div>
   </div>

<!-- location 10 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main10.jpg" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Pangasinan Hundred Island Adventure</h3>
 </div>
   </div>

<!-- location 11 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main11.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Trip to Tarlac</h3>
 </div>
   </div>

<!-- location 12 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main12.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Where in Cagayan</h3>
 </div>
   </div>

<!-- location 13 -->
   <div class="row">
     <div class="gallery-image">
     <img src="pic/mid/main13.png" alt="" class="image"> 
   </div>
   <div class="main-row">
     <div class="row-text">
       <h6>Location</h6>
     </div>
     <div class="row-icon">
       <i class="bx bx-heart"></i>
     </div>
   </div>
   <h3>Zambales - Reconnect with Nature</h3>
 </div>
   </div>
 `;

 const type = document.getElementById("type");
 const typeTitle = document.createElement('h1');
 typeTitle.className = "animate__heartBeat";
 typeTitle.innerHTML = "YOU ARE BOTH ALLOCENTRIC AND MIDCENTRIC!";
 type.appendChild(typeTitle);
   const images = [...document.querySelectorAll('.image')];
 
 // popup
 
 const popup = document.querySelector('.popup');
 const closeBtn = document.querySelector('.close-btn');
 const imageName = document.querySelector('.image-name');
 const largeImage = document.querySelector('.large-image');
 const imageIndex = document.querySelector('.index');
 
 let index = 0; // will track our current image;
 
 images.forEach((item, i) => {
     item.addEventListener('click', () => {
         updateImage(i);
         popup.classList.toggle('active');
     })
 })
 
 const updateImage = (i) => {
     let path = `pic/alloNmid/img${i+1}.png`;
     largeImage.src = path;
     imageName.innerHTML = path;
     imageIndex.innerHTML = `0${i+1}`;
     index = i;
 }
 
 closeBtn.addEventListener('click', () => {
     popup.classList.toggle('active');
 })

const images2 = [...document.querySelectorAll('.image2')];

// popup

const popup2 = document.querySelector('.popup2');
const closeBtn2 = document.querySelector('.close-btn2');
const imageName2 = document.querySelector('.image-name2');
const largeImage2 = document.querySelector('.large-image2');
const imageIndex2 = document.querySelector('.index2');

let index2 = 0; // will track our current image;

images2.forEach((item2, i) => {
    item2.addEventListener('click', () => {
        updateImage2(i);
        popup2.classList.toggle('active');
    })
})

const updateImage2 = (i) => {
    let path = `pic/alloNmid/img${i+1}.png`;
    largeImage2.src = path;
    imageName2.innerHTML = path;
    imageIndex2.innerHTML = `0${i+1}`;
    index2 = i;
}

closeBtn2.addEventListener('click', () => {
    popup2.classList.toggle('active');
})
}

//AlloAndPsy
function alloAndPsy() {
  // loader();
  portfolio.innerHTML = `
  <!-- popup -->
  <!-- location 1 -->
  <div class="popup">
      <!-- top bar -->
      <div class="top-bar">
          <p class="image-name">img1.png</p>
          <span class="close-btn"></span>
      </div>
      <!-- image -->
      <img src="img/img2.png" class="large-image" alt="">
      <!-- image-index -->
      <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
      <h1 class="index">01</h1>
  </div>
  <div class="row">
  <div class="gallery-image">
          <img src="pic/allo/main.jpg" alt="" class="image"> 
      </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Ilocos Itinerary</h3>
</div>

<!-- location 2 -->
<div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main2.png" alt="" class="image"> 
     </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Anawangin Cove</h3>
</div>

<!-- location 3 -->
<div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main3.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Aurora Adventure</h3>
</div>
  </div>

  <!-- location 4 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main4.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Aurora Baler</h3>
</div>
  </div>

<!-- location 5 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main5.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Baler, Aurora Getaway</h3>
</div>
  </div>

<!-- location 6 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main6.jpg" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bataan Eco Tour</h3>
</div>
  </div>

<!-- location 7 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main7.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bataan Tarak Ridge & Papaya River Hike</h3>
</div>
  </div>

<!-- location 8 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main8.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bulacan AdvenTOUR</h3>
</div>
  </div>

<!-- location 9 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main9.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Ilocos Norte TouRavel</h3>
</div>
  </div>

<!-- location 10 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main10.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Ilocos Norte Itinerary</h3>
</div>
  </div>

<!-- location 11 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main11.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Mt. Pinatubo Day trip</h3>
</div>
  </div>

<!-- location 12 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main12.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Nueva Vizcaya</h3>
</div>
  </div>

<!-- location 13 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/allo/main13.jpg" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Zambales Escapade</h3>
</div>
  </div>

  <!-- popup -->
  <!-- location 1 -->
  <div class="popup">
      <!-- top bar -->
      <div class="top-bar">
          <p class="image-name">img1.png</p>
          <span class="close-btn"></span>
      </div>
      <!-- image -->
      <img src="img/img2.png" class="large-image" alt="">
      <!-- image-index -->
      <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
      <h1 class="index">01</h1>
  </div>
  <div class="row">
  <div class="gallery-image">
          <img src="pic/psy/main.png" alt="" class="image"> 
      </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bagac Bataan</h3>
</div>

<!-- location 2 -->
<div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main2.png" alt="" class="image"> 
     </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Balanga Bataan</h3>
</div>

<!-- location 3 -->
<div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main3.jpg" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bataan Historical Tour</h3>
</div>
  </div>

  <!-- location 4 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main4.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Batanes of the East</h3>
</div>
  </div>

<!-- location 5 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main5.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Bulacan Lakbay Norte</h3>
</div>
  </div>

<!-- location 6 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main6.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Explore Tarlac</h3>
</div>
  </div>

<!-- location 7 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main7.jpg" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Exploring Batanes</h3>
</div>
  </div>

<!-- location 8 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main8.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Find Inner Peace in Bulacan</h3>
</div>
  </div>

<!-- location 9 -->
  <div class="row">
    <div class="gallery-image">
    <img src="pic/psy/main9.png" alt="" class="image"> 
  </div>
  <div class="main-row">
    <div class="row-text">
      <h6>Location</h6>
    </div>
    <div class="row-icon">
      <i class="bx bx-heart"></i>
    </div>
  </div>
  <h3>Heading to Tarlac Day Tour</h3>
</div>
  </div>
`;
const type = document.getElementById("type");
const typeTitle = document.createElement('h1');
typeTitle.className = "animate__heartBeat";
typeTitle.innerHTML = "YOU ARE BOTH ALLOCENTRIC AND PSYCHOCENTRIC!";
type.appendChild(typeTitle);
const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');

let index = 0; // will track our current image;

images.forEach((item, i) => {
  item.addEventListener('click', () => {
      updateImage(i);
      popup.classList.toggle('active');
  })
})

const updateImage = (i) => {
  let path = `pic/alloNpsy/img${i+1}.png`;
  largeImage.src = path;
  imageName.innerHTML = path;
  imageIndex.innerHTML = `0${i+1}`;
  index = i;
}

closeBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
})
//PSYYYYYY
const images3 = [...document.querySelectorAll('.image3')];

// popup

const popup3 = document.querySelector('.popup3');
const closeBtn3 = document.querySelector('.close-btn3');
const imageName3 = document.querySelector('.image-name3');
const largeImage3 = document.querySelector('.large-image3');
const imageIndex3 = document.querySelector('.index3');

let index3 = 0; // will track our current image;

images3.forEach((item3, i) => {
  item3.addEventListener('click', () => {
      updateImage3(i);
      popup3.classList.toggle('active');
  })
})

const updateImage3 = (i) => {
  let path = `pic/alloNpsy/img${i+1}.png`;
  largeImage3.src = path;
  imageName3.innerHTML = path;
  imageIndex3.innerHTML = `0${i+1}`;
  index3 = i;
}

closeBtn3.addEventListener('click', () => {
  popup3.classList.toggle('active');
})
}
//Mid And Psy
function midAndPsy() {
 // loader();
 portfolio.innerHTML = `
 <!-- popup -->
 <!-- location 1 -->
 <div class="popup">
     <!-- top bar -->
     <div class="top-bar">
         <p class="image-name">img1.png</p>
         <span class="close-btn"></span>
     </div>
     <!-- image -->
     <img src="img/img2.png" class="large-image" alt="">
     <!-- image-index -->
     <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
     <h1 class="index">01</h1>
 </div>
 <div class="row">
 <div class="gallery-image">
         <img src="pic/mid/main.png" alt="" class="image"> 
     </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>A Beautiful Disaster Tour at Mt. Pinatubo</h3>
</div>

<!-- location 2 -->
<div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main2.jpg" alt="" class="image"> 
    </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Beat the Heat at La Union</h3>
</div>

<!-- location 3 -->
<div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main3.png" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Doña Remedios Trinidad Quick Escapade</h3>
</div>
 </div>

 <!-- location 4 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main4.png" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Journey to La Union</h3>
</div>
 </div>

<!-- location 5 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main5.png" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Nueva Ecija Barkada Tour</h3>
</div>
 </div>

<!-- location 6 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main6.png" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Pampanga Historical Tour</h3>
</div>
 </div>

<!-- location 7 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main7.jpg" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Pampanga Itinerary</h3>
</div>
 </div>

<!-- location 8 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main8.png" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Pampanga Tour</h3>
</div>
 </div>

<!-- location 9 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main9.png" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Pampanga Trip</h3>
</div>
 </div>

<!-- location 10 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main10.jpg" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Pangasinan Hundred Island Adventure</h3>
</div>
 </div>

<!-- location 11 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main11.png" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Trip to Tarlac</h3>
</div>
 </div>

<!-- location 12 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main12.png" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Where in Cagayan</h3>
</div>
 </div>

<!-- location 13 -->
 <div class="row">
   <div class="gallery-image">
   <img src="pic/mid/main13.png" alt="" class="image"> 
 </div>
 <div class="main-row">
   <div class="row-text">
     <h6>Location</h6>
   </div>
   <div class="row-icon">
     <i class="bx bx-heart"></i>
   </div>
 </div>
 <h3>Zambales - Reconnect with Nature</h3>
</div>
 </div>

 <!-- popup -->
<!-- location 1 -->
<div class="popup">
   <!-- top bar -->
   <div class="top-bar">
       <p class="image-name">img1.png</p>
       <span class="close-btn"></span>
   </div>
   <!-- image -->
   <img src="img/img2.png" class="large-image" alt="">
   <!-- image-index -->
   <button class="btnGetPackage"><a href="https://www.facebook.com/flightajwtravel?mibextid=ZbWKwL" class="linkPackage">GET PACKAGE</a></button>
   <h1 class="index">01</h1>
</div>
<div class="row">
<div class="gallery-image">
       <img src="pic/psy/main.png" alt="" class="image"> 
   </div>
<div class="main-row">
 <div class="row-text">
   <h6>Location</h6>
 </div>
 <div class="row-icon">
   <i class="bx bx-heart"></i>
 </div>
</div>
<h3>Bagac Bataan</h3>
</div>

<!-- location 2 -->
<div class="row">
 <div class="gallery-image">
 <img src="pic/psy/main2.png" alt="" class="image"> 
  </div>
<div class="main-row">
 <div class="row-text">
   <h6>Location</h6>
 </div>
 <div class="row-icon">
   <i class="bx bx-heart"></i>
 </div>
</div>
<h3>Balanga Bataan</h3>
</div>

<!-- location 3 -->
<div class="row">
 <div class="gallery-image">
 <img src="pic/psy/main3.jpg" alt="" class="image"> 
</div>
<div class="main-row">
 <div class="row-text">
   <h6>Location</h6>
 </div>
 <div class="row-icon">
   <i class="bx bx-heart"></i>
 </div>
</div>
<h3>Bataan Historical Tour</h3>
</div>
</div>

<!-- location 4 -->
<div class="row">
 <div class="gallery-image">
 <img src="pic/psy/main4.png" alt="" class="image"> 
</div>
<div class="main-row">
 <div class="row-text">
   <h6>Location</h6>
 </div>
 <div class="row-icon">
   <i class="bx bx-heart"></i>
 </div>
</div>
<h3>Batanes of the East</h3>
</div>
</div>

<!-- location 5 -->
<div class="row">
 <div class="gallery-image">
 <img src="pic/psy/main5.png" alt="" class="image"> 
</div>
<div class="main-row">
 <div class="row-text">
   <h6>Location</h6>
 </div>
 <div class="row-icon">
   <i class="bx bx-heart"></i>
 </div>
</div>
<h3>Bulacan Lakbay Norte</h3>
</div>
</div>

<!-- location 6 -->
<div class="row">
 <div class="gallery-image">
 <img src="pic/psy/main6.png" alt="" class="image"> 
</div>
<div class="main-row">
 <div class="row-text">
   <h6>Location</h6>
 </div>
 <div class="row-icon">
   <i class="bx bx-heart"></i>
 </div>
</div>
<h3>Explore Tarlac</h3>
</div>
</div>

<!-- location 7 -->
<div class="row">
 <div class="gallery-image">
 <img src="pic/psy/main7.jpg" alt="" class="image"> 
</div>
<div class="main-row">
 <div class="row-text">
   <h6>Location</h6>
 </div>
 <div class="row-icon">
   <i class="bx bx-heart"></i>
 </div>
</div>
<h3>Exploring Batanes</h3>
</div>
</div>

<!-- location 8 -->
<div class="row">
 <div class="gallery-image">
 <img src="pic/psy/main8.png" alt="" class="image"> 
</div>
<div class="main-row">
 <div class="row-text">
   <h6>Location</h6>
 </div>
 <div class="row-icon">
   <i class="bx bx-heart"></i>
 </div>
</div>
<h3>Find Inner Peace in Bulacan</h3>
</div>
</div>

<!-- location 9 -->
<div class="row">
 <div class="gallery-image">
 <img src="pic/psy/main9.png" alt="" class="image"> 
</div>
<div class="main-row">
 <div class="row-text">
   <h6>Location</h6>
 </div>
 <div class="row-icon">
   <i class="bx bx-heart"></i>
 </div>
</div>
<h3>Heading to Tarlac Day Tour</h3>
</div>
</div>
`;
const type = document.getElementById("type");
const typeTitle = document.createElement('h1');
typeTitle.className = "animate__heartBeat";
typeTitle.innerHTML = "YOU ARE BOTH MIDCENTRIC AND PSYCHOCENTRIC!";
type.appendChild(typeTitle);
const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');

let index = 0; // will track our current image;

images.forEach((item, i) => {
 item.addEventListener('click', () => {
     updateImage(i);
     popup.classList.toggle('active');
 })
})

const updateImage = (i) => {
let path = `pic/midNpsy/img${i+1}.png`;
 largeImage.src = path;
 imageName.innerHTML = path;
 imageIndex.innerHTML = `0${i+1}`;
 index = i;
}

closeBtn.addEventListener('click', () => {
 popup.classList.toggle('active');
})

//PSYYYYYY
const images3 = [...document.querySelectorAll('.image3')];

// popup

const popup3 = document.querySelector('.popup3');
const closeBtn3 = document.querySelector('.close-btn3');
const imageName3 = document.querySelector('.image-name3');
const largeImage3 = document.querySelector('.large-image3');
const imageIndex3 = document.querySelector('.index3');

let index3 = 0; // will track our current image;

images3.forEach((item3, i) => {
  item3.addEventListener('click', () => {
      updateImage3(i);
      popup3.classList.toggle('active');
  })
})

const updateImage3 = (i) => {
  let path = `pic/midNpsy/img${i+1}.png`;
  largeImage3.src = path;
  imageName3.innerHTML = path;
  imageIndex3.innerHTML = `0${i+1}`;
  index3 = i;
}

closeBtn3.addEventListener('click', () => {
  popup3.classList.toggle('active');
})
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  console.log('what type? ', typeof answer);
  if (answer) {
    const currentQuizData = quizData[currentQuiz];
    if (currentQuizData.code == 'allo') {
      parseInt(allocentric.push(`${answer}`));
      console.log('Alloocentric total: ');
      A = allocentric.reduce((a, b) => parseInt(a) + parseInt(b));
    } else if (currentQuizData.code == 'mid') {
      midcentric.push(`${answer}`);
      console.log('Midcentric total: ');
      M = midcentric.reduce((a, b) => parseInt(a) + parseInt(b));
    } else if (currentQuizData.code == 'psy') {
      psychocentric.push(`${answer}`);
      console.log('Psychocentric total: ');
      P = psychocentric.reduce((a, b) => parseInt(a) + parseInt(b));
    } else {
      console.log('YOU HAVE AN ERROR');
    }
    if (answer === quizData[currentQuiz].correct) {
      score++;
      inputArray.push(`${answer}`);
      displayAnswers = answer;
    } else {
      inputArray.push(`${answer}`);
    }

    currentQuiz++;
    // let locationDiv = document.getElementById('location-details');
    // locationDiv.innerText = `${data.address.state}, ${data.address.country} `;
    // const crimeInfos2 = document.createElement('div');
    // crimeInfos2.className = 'info-content2';
    // crimeInfos2.textContent = json.name;
    // containerElement.appendChild(crimeInfos2);

    
    if (currentQuiz < quizData.length) {
      loadQuiz();
      // <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    } else {
      //input somthing here...
      quiz.innerHTML = `
			 <div id="container1">
      <div class="span1">ALLOCENTRIC</div>
      <div id="digits" style="font-size:35px;"></div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="45" cy="45" r="35" stroke-linecap="round" />
          </svg>
		   </div> 
       <div id="container2">
       <div class="span2">MIDCENTRIC</div>
       <div id ="digits2" style="font-size:35px;"></div>

       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="45" cy="45" r="35" stroke-linecap="round" />
          </svg>
		   </div> 
       <div id="container3">
       <div class="span3">PSYCHOCENTRIC</div>
       <div id ="digits3" style="font-size:35px;"></div>

       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="45" cy="45" r="35" stroke-linecap="round" />
          </svg>
		   </div> 
       
			 <button onclick="packages()" class="viewPackage">View Packages</button>
			 `
       //>>>>>>>>>>>> 1st percent <<<<<<<<<<<<<
       
        // let container1 = document.getElementById('container1');
        // const percentage = document.createElement('div');
        // percentage.className = 'percent';
        // // percentage.innerHTML = `50%`;
        // // percentage.innerHTML = `<div> Allocentric points: </div>` + A+`%` + `<div>Midcentric points: </div> ` + M + `<div> Psychocentric points: </div>` + P;
        // container1.appendChild(percentage);

        // const outer = document.createElement('div');
        // outer.className = "outer";
        // // outer.innerHTML = `100%`;
        // container1.appendChild(outer);

        // const inner = document.createElement('div');
        // inner.className = "inner";
        // // inner.innerHTML = `90%`;
        // container1.appendChild(inner);

        //>>>>>>>>>>>>>>>>>>>>.>>2nd percentage <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        // let container2 = document.getElementById('container2');
        // const percentage2 = document.createElement('div');
        // percentage2.className = 'percent';
        // // percentage2.innerHTML = `50%`;
        // // percentage.innerHTML = `<div> Allocentric points: </div>` + A+`%` + `<div>Midcentric points: </div> ` + M + `<div> Psychocentric points: </div>` + P;
        // container2.appendChild(percentage2);

        // const outer2 = document.createElement('div');
        // outer2.className = "outer2";
        // // outer.innerHTML = `100%`;
        // container2.appendChild(outer2);

        // const inner2 = document.createElement('div');
        // inner2.className = "inner2";
        // // inner.innerHTML = `90%`;
        // container2.appendChild(inner2);

        //>>>>>>>>>>>>>>>>>>>>.>>3nd percentage <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        // let container3 = document.getElementById('container3');
        // const percentage3 = document.createElement('div');
        // percentage3.className = 'percent';
        // // percentage3.innerHTML = `50%`;
        // // percentage.innerHTML = `<div> Allocentric points: </div>` + A+`%` + `<div>Midcentric points: </div> ` + M + `<div> Psychocentric points: </div>` + P;
        // container3.appendChild(percentage3);

        // const outer3 = document.createElement('div');
        // outer3.className = "outer3";
        // // outer.innerHTML = `100%`;
        // container3.appendChild(outer3);

        // const inner3 = document.createElement('div');
        // inner3.className = "inner3";
        // // inner.innerHTML = `90%`;
        // container3.appendChild(inner3);

        //Percent of Allocentric
      let digits = document.getElementById("digits");
       let counter = 0;
       let total = Math.round(A*2)/1;
       
       console.log(total);
       setInterval(() => {
         if(counter == total) {
           clearInterval();
         }else {
          console.log("else executed");
           counter += 1;
           digits.innerHTML = counter + "%";
         }
       }, 60);

       //Percent of Midcentric
      let digits2 = document.getElementById("digits2");
      let counter2 = 0;
      let total2 = Math.round(M*2)/1;
      
      console.log(total2);
      setInterval(() => {
        if(counter2 == total2) {
          clearInterval();
        }else {
         console.log("else executed");
          counter2 += 1;
          digits2.innerHTML = counter2 + "%";
        }
      }, 60);

      //Percent of Midcentric
      let digits3 = document.getElementById("digits3");
      let counter3 = 0;
      let total3 = Math.round(P*2)/1;
      
      console.log(total3);
      setInterval(() => {
        if(counter3 == total3) {
          clearInterval();
        }else {
         console.log("else executed");
          counter3 += 1;
          digits3.innerHTML = counter3 + "%";
        }
      }, 60);
       ;


      // console.log('Midcentric: ', typeof midcentric);
      // console.log('Psychocentric: ', psychocentric);

      //2 allocentric value

      //1 midcentric value

      //1 psychocentric value

      // inputArray2 = ['d', 'a', 'a', 'b'];

      // function match(answer) {
      //   return (containesAll = answer.some(element => {
      //     return inputArray2.includes(element);
      //   }));
      // }
      // const final = match(inputArray);
      // console.log('Validation: ', final);
      // if (final) {
      //   console.log('IT IS TRUE DISPLAY THIS PACKAGE');
      // } else {
      //   console.log('NO PACKAGE');
      // }
      // console.log(typeof inputArray2);
    }
  }
});

// This is for the script of Slider

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

