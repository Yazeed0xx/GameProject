let canvas = document.getElementById('2d');
let context = canvas.getContext('2d');
canvas.width =1500
canvas.height=750


let gravity = 0.5
let backgroundImage = new Image();
backgroundImage.src = 'bg.png';

let char1image = new Image();
char1image.src = 'char1.png';

let char2image = new Image();
char2image.src = 'char2.png';


class Characters {
    constructor(x, y, width, height, image,gravity) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.moveX = 0;
        this.moveY = 0;
        this.moveSpeed = 10;
        this.OnGround = false;
        this.gravity = 0.2;
        this.gravity=gravity

      
      

    }

    draw() {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

  

    game() {
        this.x += this.moveX;
        this.y += this.moveY;

        if (!this.isOnGround) {
            this.moveY += gravity;
        } else {
            this.moveY = 0;
        }

        if (this.x < 0) {
            this.x =0;
        } else if (this.x > canvas.width - this.width) {
            this.x = canvas.width - this.width;
        }

        if (this.y < 0) {
            this.y = 0;
        } else if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
            this.isOnGround = true;
        }
        

        this.draw();
        
    }

    moveLeft() {
        this.moveX = -this.moveSpeed;
    }

    moveRight() {
        this.moveX = this.moveSpeed;
    }

    stopMoving() {
        this.moveX = 0;
    }

   

  


}
//  winner(character1,character2){
//     if(character1.health< character2.health){
//         document.querySelector("#winner").innerHTML="char1 win"
//     }else if(character2.health< character1.health){
//         document.querySelector("#winner").innerHTML="char1 win"

//     }
//     winner(character1, character2)
// }
let char1 = new Characters(100, 100, 50, 50, char1image,);
let char2 = new Characters(200, 100, 50, 50, char2image,);

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowLeft':
            char1.moveLeft();
            break;
        case 'ArrowRight':
            char1.moveRight();
            break;
        case 'ArrowUp':
            char1.jump();
            break;
        case 'KeyA':
            char2.moveLeft();
            break;
        case 'KeyD':
            char2.moveRight();
            break;
        case 'KeyW':
            char2.jump();
            break;
        
        
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'ArrowLeft':
        case 'ArrowRight':
            char1.stopMoving();
            break;
        case 'KeyA':
        case 'KeyD':
            char2.stopMoving();
            break;
    }
});

function game() {

    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    char1.game();
    char2.game();

    window.requestAnimationFrame(game);
}

game();
