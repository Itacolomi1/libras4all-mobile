// Define our labelmap
const labelMap = {
    1:{name:'A', color:'red'},
    2:{name:'B', color:'yellow'},
    3:{name:'C', color:'lime'},
    4:{name:'D', color:'blue'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            ctx.width = imgWidth;
            ctx.height = imgHeight;
           

            // Extract variables
            const [y,x,height,width] = boxes[i];
            const text = classes[i];  

            console.log('Previsão');
            console.log(labelMap[text]['name'] + ' ' + Math.round(scores[i]*100)/100);
   
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'black'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}