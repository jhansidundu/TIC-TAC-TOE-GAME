const h1text = document.getElementById("headings");
const h2text = document.getElementById("stratagy");
const restartBtn = document.getElementById("restart");
const boxes = document.querySelectorAll(".box");

const drawBoard = () => {
  // let stylestring = '';
  boxes.forEach((box, i) => {
    let stylestring = '';
    if (i < 3) {
      stylestring += 'border-bottom: 3px solid black;';
      stylestring += 'border-top: 3px solid black;';
    }
    if (i % 3 === 0) {
      stylestring += 'border-right: 3px solid black;';
      stylestring += 'border-left: 3px solid black;';
    }

    if (i % 3 === 2) {
      stylestring += 'border-left: 3px solid black;';
      stylestring += 'border-right: 3px solid black;';

    }

    if (i > 5) {
      stylestring += 'border-top: 3px solid black;';
      stylestring += 'border-bottom: 3px solid black;';


    }
    box.style = stylestring;
    box.addEventListener('click', boxClick);
  })

}
const spaces = [];
const tick_circle = 'O';
const xplayer = 'X';
let current_player = tick_circle;


const boxClick = (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = current_player;
    e.target.innerText = current_player;
  }
  if (PlayerWon()) {
    h1text.innerText = `${current_player} won`;
    h1text.innerText = "over";
    setTimeout(restart, 1000);
    return;
  }

  if (PlayDraw()) {
    restart();
    return;
  }
  current_player = (current_player !== tick_circle) ? tick_circle : xplayer;

}


const PlayerWon = () => {
  if (spaces[0] === current_player) {
    if (spaces[4] == current_player && spaces[8] === current_player) {
      h2text.innerText = `${current_player} has won`;
      return true;
    }
    if (spaces[1] == current_player && spaces[2] === current_player) {
      h2text.innerText = `${current_player} has won`;
      return true;
    }
    if (spaces[3] == current_player && spaces[6] === current_player) {
      h2text.innerText = `${current_player} has won`;
      return true;
    }

  }
  if (spaces[4] === current_player) {
    if (spaces[1] == current_player && spaces[7] === current_player) {
      h2text.innerText = `${current_player} has won`;
      return true;
    }
    if (spaces[3] == current_player && spaces[5] === current_player) {
      h2text.innerText = `${current_player} has won`;
      return true;
    }
    if (spaces[6] == current_player && spaces[2] === current_player) {
      h2text.innerText = `${current_player} has won`;
      return true;
    }

  }

  if (spaces[8] === current_player) {
    if (spaces[2] == current_player && spaces[5] === current_player) {
      h2text.innerText = `${current_player} has won`;
      return true;
    }
    if (spaces[6] == current_player && spaces[7] === current_player) {
      h2text.innerText = `${current_player} has won`;
      return true;
    }
  }
}

const restart = () => {
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    })
    boxes.forEach((box, i) => {
      box.innerText = '';
    })

    h1text.innerText = "play";
    h2text.innerText = ''
  }, 1000)
  return true;
};

const PlayDraw = () => {
  let draw = 0;
  spaces.forEach((space, i) => {
    if (spaces[i] !== null) {
      draw++;
    }
  })

  if (draw === 9) {
    h1text.innerText = "Draw";
    return true;
  }
}

restartBtn.addEventListener('click', restart);

restart();


drawBoard();
