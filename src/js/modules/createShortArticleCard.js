export default function createShortArticleCard(
  article,
  length = article.text.length
) {
  const articleImgWrapper = document.createElement("div");
  articleImgWrapper.classList.add("article-image-wrapper");
  const articleImg = document.createElement("img");
  articleImg.src = article.src;
  articleImgWrapper.appendChild(articleImg);
  const articleTitle = document.createElement("h3");
  articleTitle.innerText = article.title;
  articleTitle.classList.add("article-title");
  const articleDate = document.createElement("span");
  articleDate.classList.add("article-date");
  articleDate.innerText = article.date;
  const articleShortText = document.createElement("p");
  articleShortText.classList.add("article-shorttext");
  const newsCard = document.createElement("a");
  if (length > 90) {
    articleShortText.innerText = `${article.text.slice(0, length)}`;
  } else {
    articleShortText.innerText = `${article.text.slice(0, length)}...`;
  }
  newsCard.id = `article${article.id}`;
  const anchor = `../../news.html#article${article.id}`;
  newsCard.setAttribute("href", anchor);
  const articleTextWrapper = document.createElement("div");
  articleTextWrapper.classList.add("article-text-wrapper");
  articleTextWrapper.append(articleTitle, articleDate, articleShortText);

  newsCard.classList.add("article-card");
  newsCard.append(articleImgWrapper, articleTextWrapper);
  return newsCard;
}
