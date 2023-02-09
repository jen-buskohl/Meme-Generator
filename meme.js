let form = document.querySelector('#form');
let imageLink = document.querySelector('input[name="urlInput"]');
let topText = document.querySelector('input[name="topText"]');
let bottomText = document.querySelector('input[name="bottomText"]');
let results = document.querySelector('#results')

form.addEventListener('submit', function(e){
    e.preventDefault();

    makeMeme(
      imageLink.value, 
      topText.value, 
      bottomText.value   
    );
    
    imageLink.value = "";
    topText.value = "";
    bottomText.value = "";
  });

  //creating the function to generate the meme by creating the new elements and appending them to the appropriate parent
  function makeMeme(link, top, bottom) { 
  const finalmeme = document.createElement('div');
  finalmeme.classList.add('finalmeme');
  const memeImage = document.createElement('img');
  memeImage.src = link;
  const wordContainer = document.createElement('div');
  wordContainer.classList.add('wordcontainer');
  const topText = document.createElement('p');
  topText.innerText = top;
  const bottomText = document.createElement('p');
  bottomText.innerText= bottom;
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const overlayText = document.createElement('div');
  overlayText.classList.add('overlaytext');
  overlay.append(overlayText);
  overlayText.textContent = 'Click to Delete';
  wordContainer.append(topText, bottomText);
  finalmeme.append(memeImage, wordContainer, overlay);
  results.append(finalmeme);
  return results;
  };
  
  // adding an event listener and the function so that when the generated meme is clicked on it will delete
  results.addEventListener('click', deleteMeme); 

  function deleteMeme(e) {
    const selector = e.target;
    if(selector.className === 'overlaytext') {
      selector.parentElement.parentElement.remove();
    };
  };
  