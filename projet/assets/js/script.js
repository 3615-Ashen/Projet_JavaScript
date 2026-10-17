
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#comment");
const commentsSection = document.querySelector("main section:last-child");
 
// ---------- Conteneur de la liste, sous le titre "Commentaires" ----------
const list = document.createElement("div");
commentsSection.appendChild(list);
 
// ---------- Message d'erreur ----------
function clearError() {
  const oldError = document.querySelector(".error-message");
  if (oldError) {
    oldError.remove();
  }
}
 
function showError(message) {
  clearError();
 
  const error = document.createElement("div");
  error.className = "error-message";
  error.textContent = message;
 
  form.appendChild(error);
}
 
// ---------- Création d'un commentaire ----------
function addComment(author, text) {
  const card = document.createElement("div");
  card.className = "comment";
 
  const authorTitle = document.createElement("h4");
  authorTitle.textContent = author;
 
  const commentText = document.createElement("p");
  commentText.textContent = text;
 
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "🗑️ Supprimer";
 
  // Suppression du commentaire 
  deleteBtn.addEventListener("click", function () {
    card.remove();
  });
 
  card.appendChild(authorTitle);
  card.appendChild(commentText);
  card.appendChild(deleteBtn);
 
  // Le plus récent en haut de la liste
  list.prepend(card);
}
 
// ---------- Envoi du formulaire ----------
form.addEventListener("submit", function (event) {
  event.preventDefault();
 
  const author = nameInput.value.trim();
  const text = commentInput.value.trim();
 
  if (author.length < 2) {
    showError("Le nom doit contenir au moins 2 caractères.");
    return;
  }
 
  if (text.length < 10) {
    showError("Le commentaire doit contenir au moins 10 caractères.");
    return;
  }
 
  clearError();
  addComment(author, text);
  form.reset();
});