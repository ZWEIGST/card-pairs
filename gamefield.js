export function chooseDifficulty() {
    let pairsCards = 0;
    /* choose a difficuly */
    function setPairsCards(difficultyGame) {
     switch (difficultyGame) {
      case 'easy':
        pairsCards = 3;
        break;
      case 'medium':
        pairsCards = 6;
        break;
      case 'hard':
        pairsCards = 9;
        break;
      default:
        pairsCards = 0;
        }
        return pairsCards;
    }
    
    document.querySelector('.easy_level').addEventListener('click', function() {
        setPairsCards('easy');
    });
    
    document.querySelector('.medium_level').addEventListener('click', function() {
        setPairsCards('medium');
    
    });document.querySelector('.hard_level').addEventListener('click', function() {
        setPairsCards('hard');
    });
    
    document.getElementById('start_game').addEventListener('click', function() {
        if (pairsCards) {
            console.log(`Игра запущена с выбранной сложностью: ${pairsCards} пар карточек`);
        } else {
            console.log('Выберите сложность игры');
        }
    });
    return pairsCards;
};

