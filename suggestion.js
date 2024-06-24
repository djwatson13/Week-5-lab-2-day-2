function suggestionChecker() {
    let game;
    let feature;
    game = prompt("What game do you have a suggestion for?");
    feature = prompt("What would you want to add to the game?");
    suggestionHeader.innerHTML = `Dear ${game} devs,`;
    suggestionParagraph.innerHTML = `I think it would be cool if you could add ${feature} into the new ${game} patch! Please consider!`;
  }
  
  suggestionButton.onclick = suggestionChecker;