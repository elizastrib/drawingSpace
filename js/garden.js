let gridSpacing = 30

let W = window.innerWidth
let H = window.innerHeight


function setup() {

    for (let y = 0; y < H - (gridSpacing * 2); y += gridSpacing) {
        for (let x = gridSpacing; x < W - gridSpacing; x += gridSpacing) {
            
            let p
            p = createP("X");
            p.position(x, y)
            p.mouseOver(changeEmoji)

        }
    }
}


function changeEmoji() {
  //change the html inside of THIS p tag to be a new random emoji
  this.html(randomEmoji())
}

function randomEmoji() {

  let i = ['✨','💫','🌟','⭐️']

  let output;

  let r = floor(random(i.length))
    output =  i[r]

  /* if (random(1) < 0.03) {
    let rand = floor(random(creature.length))
    output = creature[rand];
  } else {
    let rand = floor(random(emojis.length))
    output =  emojis[rand]
  } */


  //favicon replacement
  //https://css-tricks.com/emojis-as-favicons/
  const linkForFavicon = document.querySelector(
    `head > link[rel='icon']`
  );

  newFavicon = faviconTemplate`${output}`;
    // console.log(newFavicon);
    linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);

  return output;

}


function faviconTemplate(string, icon) {
  return `
    <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        ${icon}
      </text>
    </svg>
  `.trim();
}
