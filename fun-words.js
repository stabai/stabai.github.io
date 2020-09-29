const ALL_WORDS = [
  'YUNI', 'DORY', 'LIZ', 'MIMI', 'LANDO', 'CHASE', 'BINGO', 'ARF', 'ROLLY', 'SMEE', 'PLUTO', 'SUN', 'MOON', 'FOX', 'BEAR', 'LION',
];

const WORD_IMAGES = {
  'YUNI': 'https://lh3.googleusercontent.com/u5rHFwesIrFPcrWjVA9EQY5znRjhH7-VsxBFDrOtkh30hX7hmBjbNVlsntaDH5dVJRJxFRgHIvhC6uyqWwhnYTicJarCJndXp6SP5pQn_gQzON_iUH5_Vb1DucW54UUMLuXMXOs6lUWHXV71JPfTJAlfAURZzSuQjenMPxbdcIalGP6eVt6UgFofWmVYpfiMCZ0VlU-UHYJAY5MyVfuBWRF5nrESZ7nkb8s0duVhLFcz3kFhPgnC_dxFackhgOb4ucHc4R31rmyR75UKRdvHV0P1tojWGsDIL3y9uTu-srjsmPxq7d_uorqIgfNctWxQnrg0WC4sS0xyBjUBFcFUnJiX_YGv7k9CfgeY0YFg2F27izFO_uEM3OE1PhVI8luLPzWj8XuYXwWGmb94cIqLASi1fnll2rt42HopBByoZ999pdFZYR37RkM5i3IyMSyQ9-hgcKF76QcJvvphRER6t8earP_m6s1Q41G428T37x6IJRvHgnhVbJimIdD01S_qWknSKzqd83ajJlDi1KJeEN4zhcbG_iICRqnoIAcGgxCMwW5Rz9uphIEQwMAb6d51b3PQYvgT1s-4eqlkmFpPsfwv4jM6yOx_ZwfU2VvuJhjhMePt3GmQcwlWR0vEpgDubZQ6QorpcAIlYIO8-q2U7M09tkOwq33a3aGj5Q_ofp8HUVE7J6rybK5VS7n8xA=w703-h937-no',
  'DORY': 'https://lh3.googleusercontent.com/i9PoHVV665zjrFb--RPa4z_2e_OG5RBfna3R8WnGOsVA3A0we2720BK-OUvsSne65Zk3UdxwiWBkWkC1OEQJANL_L_jasOawPcoM37maAy2GzFPTT6c1I74vA2Zq4ItTQt5f6YrDTw6hTk7CsW1wO44GNEHB3ZqvqU8f6je_O46tFL9T9VPOGdw2TRIDoQsIkVAFnFtgl0ONNXFGj5ObeSLhFedsnB-upeuLEYUJSB20f0A3XBg_XY5kDgvterQFSW5zyaC2eBtek0d-1t9HF8QBH3fjRVk1eR0dpGjIKj1qoTY7B3vQw1zOkkQGmoRdE6fthJ7uYnzsHkqr_VxYpleUAL2r3xweQyWJOOfAKxOPnzmg3cwDCo7ewwFPIQaHYYGhOPgYepa3oUVxwhetz7pIZ0A8qplP2lRGW-d3Xpn0i8e107hNExsSuupGt-DHHIWqhvlc-MsrwruwDVZRRt1LTrCpdLMnyztB9rdU0ajYYCilLZ2k7LPfSCImBAeAADQBmpgEmFnjVF5lKylK_tDPPeMABFDNVyVeXA4y4kdqP5mOiNJjmJ8uEQDLzGrs_ioTVPeiwD_RkHXD8ONfcLjtiK4uMh16pNxwDOV-Hcg_lJ-7FWgODSFpQoGHCHazeVRPe6xNeCGSZgtForsnfPo7K5L3Tsq6EWRk-Iie_ULy9FELEFe1y_rWaovSgA=w1204-h937-no',
  'LIZ': 'https://lh3.googleusercontent.com/M9ICG5BcSx9kgtn1VWDvdKgsVnH0ap3_wsw_9okQ69r3u-3S0h51pjdrXO34OoX2v8DNDwERR9CAppV9PR7aG_2T1smy3CQ7_1ikqWq0AvphM_QQ5FhJ61oaxRgXekR1O9RHIIieCP-YQx7kmFLyk6_yn8Uq6P3jcuAYwvg7-kLZNZxaNd9UVmxJPEwVIUxtbUUPOUWaVkXnGeWNoXKkv4d730xVy_VUPSG73DVREU4vyplLjzPuh8WWDFTkdijrSFuyJp0jBTSeNjNB9plGBd8XprLRB8ijtUAfiScYV0wXpiaGOLTGjVYJobYTrQWZfg1WXSWXOZTq_DJ8jgFVv1ijbFGUuD4OGFm714f3I74xaDGd_cpHIl4uM6FTISxhCnKo_on4V-tQZcKqJtE4yj241JGSvKaKQgSclXXlwTFFMHVmYXG7fCJKBZFi8tlAL9YXRjteVvHZ-1Oz7FTQTpJurIfb6m5ITyTy6D2FDI7yudvWF5-i7qD7zKI5-QLRbXV_2uVGu5NCYngnb2D-dO38WdEKGVn-b4ASuR0LFv8S-VJO_YR0rQWvRUpvWZBWqkhD15nUC4vNzkuLLkImkYt8lxqjVp2wRsej-gdu6oO7Noo82vjVYHFEGrNyR1ZV1ob-iI1KlwERoAoM9HDqzgKe0RUGW32up7HvbHHjXGR6Gwk5-ZWQ2rOBy-KPWQ=w702-h750-no',
  'MIMI': 'https://lh3.googleusercontent.com/CEefWyqoL3y2IVTPjFiAKZ98HQFvNXM7VvY6z6p4jUFTmxkmFN3z0flryScWxFxcYfsGNQOEakjIyZF_IxKo0PQ8B6gurR_Ef3rOAJrCtmPf6vHy3VQxIvviRN2GMlemnP7F9_lMaVODK0sA2C1N7kwajEpEsYok1WrNRymz9Fm-isLtbCAhjJKkKfT6qC2b08LhwHuZCpDXpMrHcTvDom9TOfRRdN2QKwj7pIQa-C-keVL71CkggdpPkFlc-UxSXp1Y0Es11p1jxWjoV266dWSnwvLCEgwsP5tjARhydJpboOh_JbgBSIf7C9BCwxFJfFBdSEeBB2SHj4JZwkmE_L5NwLLlYBpOpBI5vHNyU7sgIag-I1O20zaR0jMx-STWFnDmB0F3_2FbIVIbg5H3oCse-yTjq-TSpdnn4vIX_Wj20cvuSgTkEJa4KQSOX4QLt78yDOG8scuGXYhz7V8bWOriCOmeDXvCinE4u6zB-pQpwuB7Z-bPT2hCrBngbndZ3ZmijoNoOjCXU63PczIb7vKnRaJP_RBg1ynTA_JE5MVnMiRCuPI8OzbmMXl6mLRBjlsoXnbRZTPrEjLpQwImZ7ozYA75VwP4McHYFXHOIQZPgLhT6Fdh9shkh4NG7mVL1hXcswT2I59S1yUvTaZjKRCpRKuXEET5XOMi5xerVDYj8t3dwRXpKIzcbwnndw=w606-h937-no',
  'LANDO': 'https://lh3.googleusercontent.com/-toPIvBTDFtk/X21PyeWxiLI/AAAAAAACWb0/PZzjVQgzZCo1dp2bcWN5tqQMRSaMU8ReACK8BGAsYHg/s0/2020-09-24.jpg',
  'CHASE': 'https://i5.walmartimages.com/asr/6cbfbaae-6d62-4f3c-b97d-198b5ec323e3_2.3162e870986c1a53c047d592ae624e17.jpeg',
  'BINGO': 'https://vignette.wikia.nocookie.net/disney/images/8/84/5ae9675f6554160a79be9f68.png/revision/latest/top-crop/width/360/height/450?cb=20200127230658',
  'ARF': 'https://vignette.wikia.nocookie.net/disney/images/b/ba/A.R.F.png/revision/latest?cb=20180422193332',
  'ROLLY': 'https://vignette.wikia.nocookie.net/dj-puppydogpals/images/f/f8/Rolly_%28promotional_image%29.png/revision/latest?cb=20180403160318',
  'SMEE': 'http://i3.ytimg.com/vi/_BKsV2rpFrA/maxresdefault.jpg',
  'PLUTO': 'https://vignette.wikia.nocookie.net/disney/images/7/7b/Pluto.PNG/revision/latest/top-crop/width/360/height/450?cb=20170628205507',
  'SUN': 'https://media.nationalgeographic.org/assets/photos/000/290/29094.jpg',
  'MOON': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg',
  'FOX': 'https://i2.wp.com/wp-cpr.s3.amazonaws.com/uploads/2020/08/fox.jpg?fit=1200%2C811&ssl=1',
  'BEAR': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg',
  'LION': 'https://www.marylandzoo.org/wp-content/uploads/2017/10/lionhassan2-1024x683.jpg',
};

const WORDS_PER_GAME = 4;

let words = [];
let wordIndex = 0;
let letterIndex = 0;
let score = 0;
let errors = 0;
let startTime;
let finishedLettersView;

const musicLoop = new SeamlessLoop();
const soundEffectLoop = new SeamlessLoop();

const BASE_LETTER_POINTS = 1000;
const POINT_UNITS = ['🐞', '🌻', '🐟', '😻', '🐶', '🎈', '🦄', '🌈', '🚀', '🌙', '🌎', '☀️', '🌌'];

const GAME_AREA_ELEMENT = document.querySelector('#game-area');

const GAME_ACTIVITY_ELEMENT = GAME_AREA_ELEMENT.querySelector('#game-activity');
const CURRENT_WORD_INDICATOR_ELEMENT = GAME_ACTIVITY_ELEMENT.querySelector('#current-word-indicator');
const CURRENT_WORD_ELEMENT = GAME_ACTIVITY_ELEMENT.querySelector('#current-word');
const WORD_IMAGES_ELEMENT = GAME_ACTIVITY_ELEMENT.querySelector('#word-images');

const GAME_RESULT_ELEMENT = GAME_AREA_ELEMENT.querySelector('#game-results');

document.addEventListener('keypress', event => onKeyPress(event));

GAME_AREA_ELEMENT.querySelector('#game-intro #intro-play-button').focus();

initialize();

function initialize() {
  musicLoop.addUri('rainbowpuzzle.mp3', 16552, 'level-background');
  musicLoop.addUri('odetojoy.mp3', 0, 'level-complete');
  soundEffectLoop.addUri('error.mp3', 0, 'letter-error');
  soundEffectLoop.addUri('letterdone.mp3', 0, 'letter-complete');
  soundEffectLoop.addUri('worddone.mp3', 0, 'word-complete');

  for (const word of ALL_WORDS) {
    const image = document.createElement('img');
    image.classList.add('word-image', 'shrunk');
    image.setAttribute('data-word', word);
    image.src = WORD_IMAGES[word];
    WORD_IMAGES_ELEMENT.appendChild(image);
  }
}

function onKeyPress(event) {
  if (!GAME_AREA_ELEMENT.classList.contains('activity-mode')) {
    return;
  }
  const key = (event.key || '').toUpperCase();
  const isAlpha = /[A-Z]/i.test(key);
  if (!isAlpha) {
    return;
  }
  event.preventDefault();
  if (key === words[wordIndex][letterIndex]) {
    advanceLetter();
  } else {
    soundEffectLoop.start('letter-error');
    CURRENT_WORD_ELEMENT.querySelector('.letter.current').classList.add('error');
    errors++;
  }
}

function newGame() {
  soundEffectLoop.stop();
  musicLoop.stop();
  musicLoop.start('level-background');
  const wordsCopy = ALL_WORDS.slice();
  words = [];
  while (words.length < WORDS_PER_GAME) {
    const i = getRandomInt(wordsCopy.length);
    words.push(wordsCopy[i]);
    wordsCopy.splice(i, 1);
  }
  wordIndex = 0;
  score = 0;
  errors = 0;
  startTime = undefined;
  finishedLettersView = rainbowText(GAME_ACTIVITY_ELEMENT.querySelector('#done-letters'), '');

  const expandedWord = WORD_IMAGES_ELEMENT.querySelector('.word-image.expanded');
  if (expandedWord) {
    expandedWord.classList.replace('expanded', 'shrunk');
  }
  WORD_IMAGES_ELEMENT.classList.add('transitionless');

  renderCurrentWord();
  GAME_AREA_ELEMENT.classList.remove('intro-mode', 'results-mode');
  GAME_AREA_ELEMENT.classList.add('activity-mode');
}

function advanceLetter() {
  if (selectNextLetter()) {
    soundEffectLoop.start('letter-complete');
    return;
  }
  if (++wordIndex >= words.length) {
    showResults();
  } else {
    soundEffectLoop.start('word-complete');
    renderCurrentWord();
  }
}

function showResults() {
  soundEffectLoop.stop();
  musicLoop.stop();
  musicLoop.start('level-complete');
  const tokens = scoreToTokens();
  GAME_RESULT_ELEMENT.querySelector('.score').textContent = score;
  GAME_RESULT_ELEMENT.querySelector('.tokens').textContent = tokens;
  GAME_AREA_ELEMENT.classList.replace('activity-mode', 'results-mode');
  finishedLettersView.stop();
  rainbowArc(GAME_RESULT_ELEMENT.querySelector('#rainbow-arc'), 300);
}

function scoreToTokens() {
  let log = Math.floor(Math.log10(score));
  let tokens = '';
  while (log >= 0) {
    const units = POINT_UNITS[log];
    const topLog = tokens.length === 0;
    let quantity;
    if (!topLog) {
      tokens += '\n';
      quantity = 10;
    } else {
      const power = Math.pow(10, log);
      quantity = Math.max(1, Math.floor(score / power));
    }
    tokens += units.repeat(quantity);
    log--;
  }
  return tokens;
}

function renderCurrentWord() {
  const newTime = new Date().getTime();
  if (startTime != null) {
    const secondsTaken = Math.ceil((newTime - startTime) / 1000);
    startTime = newTime;
    score += Math.ceil(BASE_LETTER_POINTS / ((errors + 1) * secondsTaken));
  }
  errors = 0;
  startTime = newTime;

  CURRENT_WORD_INDICATOR_ELEMENT.style.transform = `translateX(0)`;
  for (const element of CURRENT_WORD_ELEMENT.querySelectorAll('.letter')) {
    element.remove();
  }
  for (let i = 0; i < words[wordIndex].length; i++) {
    const element = document.createElement('span');
    element.classList.add('letter');
    if (i === 0) {
      element.classList.add('current');
    }
    element.textContent = words[wordIndex].charAt(i);
    CURRENT_WORD_ELEMENT.appendChild(element);
  }

  finishedLettersView.clearText();

  const wordName = words[wordIndex];

  const oldWordImageElement = WORD_IMAGES_ELEMENT.querySelector('.word-image.expanded');
  const wordImageElement = WORD_IMAGES_ELEMENT.querySelector(`.word-image.shrunk[data-word=${wordName}]`);

  wordImageElement.classList.replace('expanded', 'shrunk');
  if (oldWordImageElement) {
    oldWordImageElement.classList.replace('shrunk', 'expanded');
  }

  setTimeout(() => {
    if (oldWordImageElement) {
      WORD_IMAGES_ELEMENT.classList.remove('transitionless');
      oldWordImageElement.classList.replace('expanded', 'shrunk');
    }
    wordImageElement.classList.replace('shrunk', 'expanded');
  }, 1);
}

function selectNextLetter() {
  const currentLetter = CURRENT_WORD_ELEMENT.querySelector('.letter.current');
  const nextLetter =
    currentLetter
      ? currentLetter.nextElementSibling
      : CURRENT_WORD_ELEMENT.querySelector('.letter:first-child');
  letterIndex = nextLetter ? letterIndex + 1 : -1;
  if (letterIndex === -1) {
    letterIndex = 0;
    showAnimal(words[wordIndex]);
    return false;
  }
  showAnimal();
  const pixelOffset = letterIndex  * 84;
  if (currentLetter) {
    currentLetter.classList.replace('current', 'done');
    currentLetter.style.backgroundPositionY = getRandomInt(100) + '%';
    finishedLettersView.appendText(words[wordIndex][letterIndex - 1]);
  }
  if (nextLetter) {
    nextLetter.classList.add('current');
  }
  CURRENT_WORD_INDICATOR_ELEMENT.style.transform = `translateX(${pixelOffset}px)`;
  return true;
}

function showAnimal(forWord) {
  if (forWord == null) {
    animals();
    return;
  }

  switch (forWord) {
    case 'YUNI':
      magicWord({'type': 'cat', 'imageUrl': 'cat-calico.gif'});
      break;
    case 'DORY':
      magicWord({'type': 'corgi', 'imageUrl': 'corgi-velvet.gif'});
      break;
    case 'LIZ':
      magicWord({ 'type': 'corgi', 'imageUrl': 'corgi-oreo.gif' });
      break;
    default:
      magicWord();
  }
}