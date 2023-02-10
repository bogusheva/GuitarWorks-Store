export default function createArticleCard(article) {
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
  articleShortText.innerText = `${article.text.slice(0, 90)}...`;
  const articleTextWrapper = document.createElement("div");
  articleTextWrapper.classList.add("article-text-wrapper");
  articleTextWrapper.append(articleTitle, articleDate, articleShortText);
  const newsCard = document.createElement("div");
  newsCard.classList.add("article-card");
  newsCard.append(articleImgWrapper, articleTextWrapper);
  return newsCard;
}
