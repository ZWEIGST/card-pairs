const game = document.getElementById('game');

function startGame(game, pairsCards) {
  const cardsNumberArr = [];
  let firstCard = null;
  let secondCard = null;

  for (let i = 1; i <= pairsCards; i++) {
    cardsNumberArr.push(i, i);
  }

  // mix array
  for (let i = 0; i < cardsNumberArr.length; i++) {
    const randomIndex = Math.floor(Math.random() * cardsNumberArr.length);

    const temp = cardsNumberArr[i];
    cardsNumberArr[i] = cardsNumberArr[randomIndex];
    cardsNumberArr[randomIndex] = temp;
  }

  
  let columns = 2;

  switch(pairsCards) {
    case 3:
    columns = 3;
    break;
    case 6:
    columns = 6;
    break;
    case 9:
    columns = 3;
    break;
  }

  game.style = `grid-template-columns: repeat(${columns}, 1fr);`;

  // create cards
  for (const cardNumber of cardsNumberArr) {
    const card = document.createElement('div');
    card.textContent = cardNumber;
    card.classList.add('card');


    card.addEventListener('click', function () {
      if (card.classList.contains('open') || card.classList.contains('success')) {
        alert("Эта карточка уже открыта");
        return;
      };

      if (firstCard !== null && secondCard !== null) {
        firstCard.classList.remove('open');
        secondCard.classList.remove("open");
        firstCard = null;
        secondCard = null;
      }

      card.classList.add("open");

      if (firstCard === null) {
        firstCard = card;
      } else {
        secondCard = card;
      };

      if (firstCard !== null && secondCard !== null) {
        let firstCardNumber = firstCard.textContent;
        let secondCardNumber = secondCard.textContent;

        if (firstCardNumber === secondCardNumber) {
          firstCard.classList.add('success');
          secondCard.classList.add('success');
        };
      };

      // final check
      if (cardsNumberArr.length === document.querySelectorAll(".success").length) {
        setTimeout(function () {
          game.innerHTML = "";
          alert("Все карточки собраны!");
          let pairsCards = Number(prompt("Введите количество пар", 3));
          startGame(game, pairsCards);
        }, 400);
      };

    });

    game.append(card);
  };
};

// start game
const pairsCards = Number(prompt("Введите количество пар", 3));
startGame(game, pairsCards);