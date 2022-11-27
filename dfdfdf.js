const btn = document.getElementById('btn-1');

function addParagraph() {
  const rannum = Math.floor(Math.random() * 100);
  const pContent = 'The random bumber is: ' + rannum;

  const newElement = document.createElement('p');
  newElement.textContent = 'The random bumber is: ' + rannum;
  document.body.appendChild(newElement);
}

btn.onclick = addParagraph;
