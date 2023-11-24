// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const parentElement = document.getElementById("channels");
const radioUrl = "https://api.sr.se/api/v2/channels/?format=json";

async function getRadio() {
  const answer = await fetch(radioUrl);
  const data = await answer.json();
  console.log(data);

  data.channels.forEach((radioInfo) => {
    console.log(radioInfo);
    const audioTag = document.createElement("div");
    audioTag.className = "bakgrund";
    audioTag.innerHTML = `<img class ="image" src="${radioInfo.image}"/>
<div>
<h2>${radioInfo.name}</h2>
<audio controls>
<source src= "${radioInfo.liveaudio.url}" type="audio/mpeg" />
</audio>
</div>`;
    audioTag.style.backgroundColor = `#${radioInfo.color}`;

    parentElement.appendChild(audioTag);
  });
}

getRadio();

/* fetch(radioUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
 */
