import createShortArticleCard from "./createShortArticleCard.js";

export default function createFullArticleCard(article) {
  const newsCard = createShortArticleCard(article);
  newsCard.classList.add("all");
  return newsCard;
}
