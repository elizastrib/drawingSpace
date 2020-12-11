let gridSpacing = 40

let W = window.innerWidth
let H = window.innerHeight

// create a grid across the width and height of the browser
// starting at 0, until y/x is across the whole width/height, add x/y
for (let y=0; y < H - (gridSpacing*2); y += gridSpacing) {
    for (let x=0; x < W - (gridSpacing*2); x += gridSpacing) {
        
        let p = createP("x");

        p.position(x,y)
        p.mousePressed(change)
        p.mouseOver(change)

    }
}

function change() {
    
    //change the content of the p tag to be an emoji
    this.html(randomEmoji())

}

function randomEmoji() {
    
    let emojis = ["✨", "💫", "🌟", "⭐️"]
    let output = emojis[rand]

    return output;

}