
function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {

// create a grid across the width and height of the browser
// starting at 0, until y/x is across the whole width/height, add x/y
for (let y=0; y < height; y += 15) {
    for (let x=0; x < width; x += 15) {
        
        let p = createP(" ").size(15,15);

        p.position(x,y)
        p.mousePressed(change)
        p.mouseOver(change)
        p.mouseOver(p.c)

    }
}

function change() {
    
    //change the content of the p tag to be an emoji
    this.html(randomEmoji())
    console.log(randomEmoji())

}

function randomEmoji() {
    
    let emojis = ["✨", "💫", "🌟", "⭐️"]
    let output;

    let rand = floor(random(emojis.length))
    output = emojis[rand]

    return output;

}

}