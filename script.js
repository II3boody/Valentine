const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const hearts = document.getElementById("hearts");
const bgHearts = document.getElementById("bgHearts");
const card = document.querySelector(".card");

// قلوب الخلفية
function createBgHearts() {
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("div");
    heart.classList.add("bg-heart");
    heart.innerHTML = "💕";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.fontSize = 30 + Math.random() * 30 + "px";
    bgHearts.appendChild(heart);
  }
}
createBgHearts();

let noClickCount = 0;
const noMessages = [
  "يلا بقى",
  "متكونيش كدة",
  "ثانية واحدة!",
  "مش هينفع لأ",
  "فكري تاني 🙏",
  "أنا مستني ❤️",
  "قولي آه 💖",
];

let noBtnMoved = false;

function moveNoButton() {
  if (!noBtnMoved) {
    noBtn.style.position = "absolute";
    noBtnMoved = true;
  }

  const cardRect = card.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = cardRect.width - btnWidth - 40;
  const maxY = cardRect.height - btnHeight - 40;

  let x = 20 + Math.random() * (maxX - 20);
  let y = 20 + Math.random() * (maxY - 20);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  noBtn.textContent = noMessages[noClickCount % noMessages.length];
  noClickCount++;

  noBtn.style.animation = "shake 0.3s";
  setTimeout(() => {
    noBtn.style.animation = "";
  }, 300);
}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  result.innerHTML = `شوكرن 💞💞<br> فالانتاين سعيد يا اغلى ما املك ✨🌹<br>بحبك ❤️
     <div><video src="vid/Cat kiss on camera.mp4" autoplay loop></video></div>`;

  document.querySelector(".card h1").style.display = "none";
  document.querySelector(".btns").style.display = "none";
  document.querySelector("p").style.display = "none";

  for (let i = 0; i < 50; i++) {
    setTimeout(() => createHeart(), i * 80);
  }

  for (let i = 0; i < 100; i++) {
    setTimeout(() => createConfetti(), i * 30);
  }

  document.body.style.background =
    "linear-gradient(135deg, #ec4899, #f472b6, #fbbf24)";
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const heartSymbols = ["💖", "💕", "💗", "💓", "💝", "💞"];
  heart.innerHTML =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = 20 + Math.random() * 30 + "px";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  const colors = [
    "#ff6b9d",
    "#fec1cc",
    "#ffd1dc",
    "#22c55e",
    "#fbbf24",
    "#a855f7",
  ];
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.top = "-10px";
  confetti.style.width = 5 + Math.random() * 10 + "px";
  confetti.style.height = 5 + Math.random() * 10 + "px";
  confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

  hearts.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 3500);
}

// أنيميشن اهتزاز
const style = document.createElement("style");
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px) rotate(-5deg); }
    75% { transform: translateX(5px) rotate(5deg); }
  }
`;
document.head.appendChild(style);
