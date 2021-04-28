
   

function randomize(){
    let int_0 = []
    let int_1 = []
    let int_2 = []
    let int_3 = []
    let int_4 = []
    let int_5 = []
    let int_6 = []
    let int_7 = []
    let int_8 = []
    let int_9 = []

    for(i = 0; i < 10000; i++){
        let random = Math.floor(Math.random() * 100)
    /*     console.log(random); */
     
     
        if(random >= 0 && random < 10){
            int_0.push(random);
        }
        if(random >= 10 && random < 20){
            int_1.push(random);
        }
        if(random >= 20 && random < 30){
            int_2.push(random);
        }
        if(random >= 30 && random < 40){
            int_3.push(random);
        }
        if(random >= 40 && random < 50){
            int_4.push(random);
        }
        if(random >= 50 && random < 60){
            int_5.push(random);
        }
        if(random >= 60 && random < 70){
            int_6.push(random);
        }
        if(random >= 70 && random < 80){
            int_7.push(random);
        }
        if(random >= 80 && random < 90){
            int_8.push(random);
        }
        if(random >= 90 && random <= 100){
            int_9.push(random);
        }
    
        let frequency = [[...int_0],[...int_1],[...int_2],[...int_3],[...int_4],[...int_5],[...int_6],[...int_7],[...int_8],[...int_9]]
    
       /*  console.log(frequency); */
        
    }

    // para improtar librería 

    let frequencyPlot = {
        type: 'bar',
        x: ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90-100"],
        y: [int_0.length, int_1.length, int_2.length, int_3.length, int_4.length, int_5.length,int_6.length,int_7.length,int_8.length,int_9.length],
        marker: {
            color: '#C8A2C8',
            line: {
                width: 1.5
            }
        }
      };
      
      let data = [ frequencyPlot ];
      
      let layout = { 
        title: "Distribución de frecuencias",
        font: {size: 18}
       
      };
      
      let config = {responsive: true}
      
      Plotly.newPlot('plotedData', data, layout, config );
      
}


