function surveyChecker() {
    let survey;
    survey = prompt("On a scale from 1-10, how would you rate your recent experience?");
    surveyParagraph.innerHTML = `After my experience with your product, I would rate your service a ${survey}.`;
  }
  
  surveyButton.onclick = surveyChecker;