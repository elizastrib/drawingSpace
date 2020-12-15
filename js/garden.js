let gridSpacing = 20

let W = window.innerWidth
let H = window.innerHeight 



function setup() {


    for (let y = (gridSpacing/2); y < H - (gridSpacing * 2); y += gridSpacing) {
        for (let x = (gridSpacing/2); x < W - gridSpacing; x += gridSpacing) {
            
            let img
            img = './assets/blank.png'

            let d = createDiv('<img src='+img+'>')

            d.position(x,y)
            d.mouseOut(changeImage)

            d.touchStarted(changeImage)
            d.touchMoved(changeImage)


        }
    }
    
}


function changeImage() {
    

    let images = ['./assets/star1.png', './assets/star2.png', './assets/star3.png', './assets/star4.png', './assets/star5.png', './assets/star6.png', './assets/star7.png', './assets/star8.png', './assets/star9.png', './assets/star10.png', './assets/star11.png', './assets/star12.png', './assets/star13.png', './assets/star14.png', './assets/star15.png', './assets/star16.png', './assets/star17.png', './assets/star18.png', './assets/star19.png', './assets/star20.png', './assets/star21.png', './assets/star22.png', './assets/star23.png', './assets/star24.png', './assets/star25.png', './assets/star26.png', './assets/star27.png', './assets/star28.png', './assets/star29.png', './assets/star30.png', './assets/star31.png']
    let rand = floor(random(images.length))
    let randomImage = images[rand]

    img = randomImage
    console.log(img)

    this.html('<img src='+img+'>')

}

function randomImage() {

  let images = ['.assets/star1.png', './assets/star2.png', './assets/star3.png', './assets/star4.png']

  let output;

  let rand = floor(random(images.length))
    img =  images[rand]


}
