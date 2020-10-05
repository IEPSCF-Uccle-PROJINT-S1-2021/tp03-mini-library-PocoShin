const express = require('express');
const router = express.Router();

const list = [
  {
    author: "Guillaume Debré", title: "L'affaire Lafayette", category: "roman historique"
  },
  {
    author: "Gérald Messadié", title: "La conspiration Jeanne d'Arc", category: "roman historique"
  },
  {
    author: "J.R.R. Tolkien", title: "Le Seigneur des anneaux", category: "fantasy"
  },
  {
    author: "Michael Ende", title: "L'Histoire sans fin", category: "fantasy"
  },
  {
    author: "Andrzej Sapkowski", title: "Le Sorceleur", category: "fantasy"
  },
  {
    author: "George R. R. Martin", title: "Le Trône de fer", category: "fantasy"
  },
  {
    author: "Hervé Bazin", title: "Vipère au poing", category: "autobiographie"
  },
  {
    author: "Marie Cardinal", title: "Les mots pour le dire", category: "autobiographie"
  },
  {
    author: "Giacomo Casanova", title: "Histoire de ma vie", category: "autobiographie"
  },
  {
    author: "Kentarō Miura", title: "Berserk", category: "dark fantasy"
  },
  {
    author: "Etorouji Shiono", title: "Übel Blatt", category: "dark fantasy"
  }
];

router.get('/search', (req, res) => {
  res.render('form', {title: "Choix de catégorie"});
});

router.post('/list', (req, res) => {
  const category = req.body.category;
  let selectedList = [];
  list.forEach(function(element) {
    if (element.category === category) {
      selectedList.push({ author: element.author, title: element.title, category: element.category });
    }
  });
  res.render('show', {choice: category, selectedList: selectedList});
});

module.exports = router;
