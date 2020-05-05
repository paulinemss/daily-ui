const buttonUser = document.getElementById('button-user');
const buttonFavorites = document.getElementById('button-favorites');
const buttonWatchlist = document.getElementById('button-watchlist');
const buttonSettings = document.getElementById('button-settings');
const buttonNotifications = document.getElementById('button-notifications');

const containerUser = document.getElementById('main-right-user');
const containerFavorites = document.getElementById('main-right-favorites');
const containerWatchlist = document.getElementById('main-right-watchlist');
const containerSettings = document.getElementById('main-right-settings');
const containerNotifications = document.getElementById('main-right-notifications');

// this function uses a loop to go over all "content" elements
// that exist and then removes the active state from them
function removeOtherActiveStates () {
  const elements = document.getElementsByClassName('main-right');
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    elements[i].classList.remove('active');
  }
  const otherElements = document.getElementsByClassName('buttons');
  for (let i = 0; i < otherElements.length; i++) {
    console.log(otherElements[i]);
    otherElements[i].classList.remove('active');
  }
}

function showContainerUser () {
 // removing all existing active states
 removeOtherActiveStates();
  
 // adding new active state
 containerUser.classList.add('active');
 buttonUser.classList.add('active');
}

function showContainerFavorites () {
    removeOtherActiveStates();
    containerFavorites.classList.add('active');
    buttonFavorites.classList.add('active');
}

function showContainerWatchlist () {
    removeOtherActiveStates();
    containerWatchlist.classList.add('active');
    buttonWatchlist.classList.add('active');
}

function showContainerSettings () {
    removeOtherActiveStates();
    containerSettings.classList.add('active');
    buttonSettings.classList.add('active');
}

function showContainerNotifications () {
    removeOtherActiveStates();
    containerNotifications.classList.add('active');
    buttonNotifications.classList.add('active');
}

buttonUser.addEventListener('click', showContainerUser)
buttonFavorites.addEventListener('click', showContainerFavorites)
buttonWatchlist.addEventListener('click', showContainerWatchlist)
buttonSettings.addEventListener('click', showContainerSettings)
buttonNotifications.addEventListener('click', showContainerNotifications)