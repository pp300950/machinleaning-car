const carCanvas=document.getElementById("carCanvas");
carCanvas.width=300;//200=3เลน , 350=5เลน
const networkCanvas=document.getElementById("networkCanvas");
networkCanvas.width=300;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road=new Road(carCanvas.width/2,carCanvas.width*0.9);

const N=700;
const cars=generateCars(N);
let bestCar=cars[0];
if(localStorage.getItem("bestBrain")){
    for(let i=0;i<cars.length;i++){
        cars[i].brain=JSON.parse(
            localStorage.getItem("bestBrain"));
        if(i!=0){
            NeuralNetwork.mutate(cars[i].brain,0.3);
        }
    }
}

//const traffic=[

    /*
    //Level0.1
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-500,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-900,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-900,30,50,"DUMMY",2)
     */
    /*
    //Level0.2
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-500,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-700,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-900,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-900,30,50,"DUMMY",2),
    
    *//*
   //Level0.3
   new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-100,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(1),-300,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-500,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-700,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-900,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-900,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-1100,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(1),-1100,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-1300,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-1300,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-1500,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-1700,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-1700,30,50,"DUMMY",2),
   */
    /*
    //Level0.4
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-900,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-900,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-1100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-1100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-1300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-1300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-1500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-1500,30,50,"DUMMY",2),
    */
   /*
   //Level0.5
   new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-300,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-700,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-900,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(1),-900,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-1100,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-1100,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-1300,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(1),-1300,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-1500,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-1500,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-1700,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(1),-1700,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-1900,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-1900,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-2100,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(1),-2100,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-2300,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-2300,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-2500,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-2500,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-2700,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-2900,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-2900,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-3100,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-3100,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-3300,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-3300,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-3500,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(1),-3500,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-3700,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-3700,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-3900,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(1),-3900,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(1),-4100,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-4100,30,50,"DUMMY",2),

   new Car(road.getLaneCenter(0),-4300,30,50,"DUMMY",2),
   new Car(road.getLaneCenter(2),-4300,30,50,"DUMMY",2),
   */
    /*
    //Level1
    new Car(road.getLaneCenter(0),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),
    */
    /*
    //Level2
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-900,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-900,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-1100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-1100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(2),-1300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-1500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-1500,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-1700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-1700,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-1900,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-1900,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-2100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-2100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-2300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-2500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-2500,30,50,"DUMMY",2),
    */
    /*
    //Level3
    new Car(road.getLaneCenter(2),-100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-900,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-900,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-1000,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(2),-1100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-1300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-1300,30,50,"DUMMY",2),


    new Car(road.getLaneCenter(0),-1500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-1500,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-1700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-1700,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-1900,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-1900,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-2100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-2100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-2300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-2300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-2400,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-2400,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-2500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-2500,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(2),-2600,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-2700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-2700,30,50,"DUMMY",2),
    ];*/
  const traffic=[
    //Level1
    /*
    new Car(road.getLaneCenter(2),-100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(3),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(4),-300,30,50,"DUMMY",2),
    
    //Level2
    new Car(road.getLaneCenter(0),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(3),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(4),-100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(2),-300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(2),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(3),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(4),-500,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(3),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),
*/
     //Level3
    new Car(road.getLaneCenter(0),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-100,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-400,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-400,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(3),-400,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(4),-400,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(3),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-700,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-1000,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(4),-1000,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-1000,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-1300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(3),-1300,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(0),-1600,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-1600,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-1600,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(4),-1900,30,50,"DUMMY",2),

    new Car(road.getLaneCenter(1),-2200,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-2200,30,50,"DUMMY",2),

    
  ];
animate();

function save(){
    localStorage.setItem("bestBrain",
        JSON.stringify(bestCar.brain));
}

function discard(){
    localStorage.removeItem("bestBrain");
    localStorage.removeItem("SaveCount");
}

function generateCars(N){
    const cars=[];
    for(let i=1;i<=N;i++){
        cars.push(new Car(road.getLaneCenter(1),100,30,50,"AI"));
    }
    return cars;
}

function animate(time){
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.borders,[]);
    }
    for(let i=0;i<cars.length;i++){
        cars[i].update(road.borders,traffic);
    }
    bestCar=cars.find(
        c=>c.y==Math.min(
            ...cars.map(c=>c.y)
        ));

    carCanvas.height=window.innerHeight;
    networkCanvas.height=window.innerHeight;

    carCtx.save();
    carCtx.translate(0,-bestCar.y+carCanvas.height*0.7);

    road.draw(carCtx);
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(carCtx,"red");
    }
    carCtx.globalAlpha=0.2;
    for(let i=0;i<cars.length;i++){
        cars[i].draw(carCtx,"blue");
    }
    carCtx.globalAlpha=1;
    bestCar.draw(carCtx,"blue",true);

    carCtx.restore();

    networkCtx.lineDashOffset=-time/50;
    Visualizer.drawNetwork(networkCtx,bestCar.brain);
    requestAnimationFrame(animate);
}

