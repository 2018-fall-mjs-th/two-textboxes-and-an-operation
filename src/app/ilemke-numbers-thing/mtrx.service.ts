import { Injectable } from "@angular/core";

@Injectable() 
export class MatrixService {

    public callNeo(concatString: string) {

        console.log('Calling Neo...');
        
        let c = document.createElement("canvas");
        let parentNode = document.getElementById("matrixNode");

        let ctx = c.getContext("2d");

        //making the canvas full screen
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        //let chineseCharacters = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
        let numbers = concatString;
        let numbersArray = concatString.split("");

        let font_size = 12; 
        let columns = c.width/font_size; //number of columns for the rain
        
        //an array of drops - one per column
        var drops = [];

        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)

        // For each column, initiate a new array of 1s 
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        //drawing the characters
        function draw() {

        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        
        ctx.fillStyle = "#0F0"; //green text
        ctx.font = font_size + "px arial";

        
        drops.map((aDrop, i) => {
 
            let text = numbersArray[Math.floor(Math.random()*numbersArray.length)];
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            if (aDrop*font_size > c.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Increment Y Coordinate
            drops[i]++;

        });

    }


    setInterval(draw, 30);
    parentNode.appendChild(c);
        
        /*
        
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random chinese character to print
            var text = numbersArray[Math.floor(Math.random()*numbersArray.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);
            
            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;
            
            //incrementing Y coordinate
            drops[i]++;
        }
        */
        
        
    }
    
}