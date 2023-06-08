let game = document.querySelector(".game__fields"),
  three,
  res = document.querySelector(".res"),
  player = document.querySelector(".player"),
  btnGame = document.querySelector(".new-game"),
  fields = document.querySelectorAll(".game__field"),
  step = false,
  count = 0;

let circle = () => {
  if (window.screen.width < 461)
    return `<svg class="circle">
    <circle class="three" r="40" cx="55" cy="55" stroke="#5AA1EF" stroke-width="8" fill="none" stroke-linecap="round" />
  </svg> `;
  if (window.screen.width < 601)
    return `<svg class="circle">
    <circle class="three" r="45" cx="70" cy="70" stroke="#5AA1EF" stroke-width="10" fill="none" stroke-linecap="round" />
  </svg> `;
  if (window.screen.width < 650)
    return `<svg class="circle">
    <circle class="three" r="45" cx="85" cy="85" stroke="#5AA1EF" stroke-width="10" fill="none" stroke-linecap="round" />
  </svg> `;
  else {
    return `<svg class="circle">
    <circle class="three" r="45" cx="100" cy="100" stroke="#5AA1EF" stroke-width="10" fill="none" stroke-linecap="round" />
  </svg> `;
  }
};

let cross = () => {
  if (window.screen.width < 461)
    return `<svg class="cross">
				<line class="first"  x1="12" y1="12" x2="97" y2="97" stroke="#EF8240" stroke-width="8" stroke-linecap="round" />
				<line class="second"  x1="97" y1="12" x2="12" y2="97" stroke="#EF8240" stroke-width="8" stroke-linecap="round" />
			</svg>`;
  if (window.screen.width < 601)
    return `<svg class="cross">
				<line class="first" x1="25" y1="25" x2="110" y2="110" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />
				<line class="second" x1="110" y1="25" x2="25" y2="110" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />
			</svg>`;
  if (window.screen.width < 650)
    return `<svg class="cross">
				<line class="first" x1="42.5" y1="42.5" x2="127.5" y2="127.5" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />
				<line class="second" x1="127.5" y1="42.5" x2="42.5" y2="127.5" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />
			</svg>`;
  else {
    return `<svg class="cross">
				<line class="first" x1="50" y1="50" x2="135" y2="135" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />
				<line class="second" x1="135" y1="50" x2="50" y2="135" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />
			</svg>`;
  }
};

function stepCross(target) {
  target.innerHTML = cross();
  target.classList.add("x");
  count++;
}
function stepZero(target) {
  target.innerHTML = circle();
  target.classList.add("o");
  count++;
}

function init(e) {
  if (!step) stepCross(e.target);
  else stepZero(e.target);
  step = !step;
  win();
}

function newGame() {
  step = false;
  count = 0;
  res.innerText = "";
  fields.forEach((item) => {
    item.innerHTML = "";
    item.classList.remove("x", "o", "active");
  });
  game.addEventListener("click", init);
}

function win() {
  let comb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < comb.length; i++) {
    if (
      fields[comb[i][0]].classList.contains("x") &&
      fields[comb[i][1]].classList.contains("x") &&
      fields[comb[i][2]].classList.contains("x")
    ) {
      setTimeout(() => {
        fields[comb[i][0]].classList.add("active");
        fields[comb[i][1]].classList.add("active");
        fields[comb[i][2]].classList.add("active");
        res.innerText = "X";
      }, 1500);
      game.removeEventListener("click", init);
    } else if (
      fields[comb[i][0]].classList.contains("o") &&
      fields[comb[i][1]].classList.contains("o") &&
      fields[comb[i][2]].classList.contains("o")
    ) {
      setTimeout(() => {
        fields[comb[i][0]].classList.add("active");
        fields[comb[i][1]].classList.add("active");
        fields[comb[i][2]].classList.add("active");
        res.innerText = "O";
      }, 1500);
      game.removeEventListener("click", init);
    } else if (count == 9) {
      res.innerText = "Ничья";
      game.removeEventListener("click", init);
    }
  }
}

btnGame.addEventListener("click", newGame);
game.addEventListener("click", init);
