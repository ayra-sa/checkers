import { data } from "./data.js";


const container = document.getElementById("catalog-list");

data.forEach((item,id) => {
  const catalogCard = document.createElement("div");
  catalogCard.className = "catalog-card";

  // Gambar
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.altText;
  catalogCard.appendChild(img);

  // Konten
  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const title = document.createElement("b");
  title.className = "card-title";
  title.textContent = `\u300A${id+1}\u300B ${item.content.title}`;
  cardContent.appendChild(title);

  // Deskripsi
  item.content.description.forEach((desc) => {
    const p = document.createElement("p");
    p.className = "card-desc";
    p.textContent = desc;
    cardContent.appendChild(p);
  });

  // Detail
  const ul = document.createElement("ul");
  item.content.details.forEach((detail) => {
    const li = document.createElement("li");
    li.textContent = detail;
    ul.appendChild(li);
  });
  cardContent.appendChild(ul);
  catalogCard.appendChild(cardContent);

  // catalog-divo (Statis)
  const catalogDivo = document.createElement("div");
  catalogDivo.className = "catalog-divo";

  const divoTitle = document.createElement("b");
  divoTitle.textContent = "Dive Deep";
  catalogDivo.appendChild(divoTitle);

  const divoNote = document.createElement("span");
  divoNote.textContent = "*more photos / video";
  catalogDivo.appendChild(divoNote);

  catalogCard.appendChild(catalogDivo);

  // Links
  const catalogLinks = document.createElement("div");
  catalogLinks.className = "catalog-link";

  Object.entries(item.links).forEach(([platform, url]) => {
    const link = document.createElement("a");
    link.href = url || "#";
    link.target = "_blank"
    link.textContent = platform;
    catalogLinks.appendChild(link);
  });

  catalogCard.appendChild(catalogLinks);

  // Tambahkan ke container
  container.appendChild(catalogCard);
});
