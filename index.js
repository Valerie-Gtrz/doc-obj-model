//import "styles.css";

console.log(document);

/*
Add event listeners to the .expand_button buttons
*/

function expandArticleBody() {
  const buttons = document.querySelectorAll(".expand_button"); //find all elems with class '.expand_button'
  buttons.forEach((btn) => { //for each individual button in buttons
    btn.addEventListener("click", (event) => {
      const evtBtn = event.target; //declare variable for targeted button
      const article = evtBtn.parentNode.parentNode.parentNode; //climb up to needed article
      const articleBody = article.querySelector(".article_body"); //climb down one child from article
      if (evtBtn.innerText === "V") { //if inner text of button is 'V'
        articleBody.style.display = "none"; //set the display property of the article's body to 'none'.
        evtBtn.innerText = ">"; //also set the text on the button to '>'
      } else { //if inner text is not 'V'
        articleBody.style.display = "block"; //set the display property of the article's body to 'block'.
        evtBtn.innerText = "V"; //if inner text is not 'V'
      }
    });
  });
}

function highlightArticle() {
  const highlightBtns = document.querySelectorAll(".highlightBtn"); //find all elems with class '.highlightBtn'
  highlightBtns.forEach((button) => { //for each individual button in highlightBtns
    button.addEventListener("click", (event) => { //add 'click' event listener
      const evtBtn = event.target; //declare variable for targeted button
      const article = evtBtn.parentNode; //get parent of the targeted button ('div.article_controls')
      if (evtBtn.innerText === "+") { //if inner text of button is '+'
        article.classList.add("highlight"); //add class highlight to parentNode
        evtBtn.innerText = "-"; //set the text on targeted button to '-'
      } else if (evtBtn.innerText === "-") { //if inner text of button is '-'
        article.classList.remove("highlight"); //remove highlight class from parentNode
        evtBtn.innerText = "+"; //set the text on targeted button to '+'
      }
    });
  });
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
