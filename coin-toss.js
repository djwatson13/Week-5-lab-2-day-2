function coinTossChecker() {
    let coin;
    coin = prompt("You know what date is on this coin? 1958. It's been travelling for 22 years to get here. And now it's here. And it's either Heads or Tails. And you have to say. Call it.");
    coinTossParagraph.innerHTML = `Alright... ${coin}. then. Well done. Don't put it in your pocket, sir. It's your lucky quarter`;
  }
  
  coinTossButton.onclick = coinTossChecker;