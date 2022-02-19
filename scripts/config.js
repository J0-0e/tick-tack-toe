function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.player;
  configOverlay.style.display = "block";
  backdrop.style.display = "block";
  form.firstElementChild.lastElementChild.value =
    players[editedPlayer - 1].name;
}

function closePlayerConfig() {
  configOverlay.style.display = "none";
  backdrop.style.display = "none";
  form.firstElementChild.classList.remove("error");
  errorOutput.textContent = "";
  form.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target),
    playerName = formData.get("playername").trim();

  if (!playerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutput.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = playerName;
  players[editedPlayer - 1].name = playerName;
  closePlayerConfig();
}
