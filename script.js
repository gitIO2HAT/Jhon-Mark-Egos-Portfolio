const visitedName = document.querySelector('#visited-name');

let name = localStorage.getItem('nickname');
let timestamp = localStorage.getItem('timestamp');

if (name && timestamp) {
    const currentTime = new Date().getTime();
    const timeElapsed = (currentTime - timestamp) / 1000 / 60;
    if (timeElapsed < 10) {
        visitedName.textContent = `Hi! ${name}`;
    } else {
        localStorage.removeItem('nickname');
        localStorage.removeItem('timestamp');
        name = null;
    }
}
if (!name) {
    name = prompt('Enter your Nickname...');
    visitedName.textContent = `Hi! ${name}`;

   
    localStorage.setItem('nickname', name);
    localStorage.setItem('timestamp', new Date().getTime());
}
