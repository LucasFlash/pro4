



let Array1 = [
    {id:1, name:"Lucas Flash", p1:"Argentina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:6, gd:"Dinamarca"},

];

let Array1x = [
    {id:1, name:"Lucas Flash", p1:"?", p2:"?", p3:"?", p4:"?", p5:"?", p6:"?", gol:"0", gd:"0"},

 ]

lag = {id:0, name:"Prueba", p1:"Argentina", p2:"Mexico", p3:0, p4:0, p5:0, p6:0, gol:6, gd:"D"}


let c = new Date();console.log(c);
let cod = c.getDate()*1000000 + c.getHours()*10000 + c.getMinutes()*100 + c.getSeconds(); 
if (cod > 1212600) {


for (let index = 0; index < Array1.length; index++) {
    c1 = Array1[index];  
    d1 = c1["p1"]; 
    g1 = lag["p1"];
    h1h=Array1x[index];
    if (d1 == g1) { 
        h1h["p1"]=1; 
    }
}

for (let index = 0; index < Array1.length; index++) {
    c1 = Array1[index];  
    d1 = c1["p2"]; 
    g1 = lag["p2"];
    h1h=Array1x[index];
    if (d1 == g1) { 
        h1h["p2"]=1; 
    }
}

}

console.log(Array1x)

const imagen1 = new Image();
imagen1.src = "./img/lo1.png"; 
const imagen2 = new Image();
imagen2.src = "./img/lo2.png"; 
const imagen3 = new Image();
imagen3.src = "./img/lo3.png"; 
const imagen4 = new Image();
imagen4.src = "./img/lo4.png"; 
const imagen5 = new Image();
imagen5.src = "./img/lo5.png"; 
const imagen6 = new Image();
imagen6.src = "./img/lo6.png"; 
const imagen7 = new Image();
imagen7.src = "./img/los.png"; 

//Build Tabulator
var table = new Tabulator("#tablap", {
    height:"311px",
    layout:"fitColumns",
    reactiveData:true, //turn on data reactivity
    data:Array1x, //load data into table
    columns:[
        {title:"Usuario", field:"name", sorter:"string", width:200},
        {title:imagen1, field:"p1",   formatter:"tickCross", sorter:"boolean"},
        {title:imagen2, field:"p2",   formatter:"tickCross", sorter:"boolean"},
        {title:imagen3, field:"p3",  sorter:"string"},
        {title:imagen4, field:"p4",  sorter:"string"},
        {title:imagen5, field:"p5",  sorter:"string"},
        {title:imagen6, field:"p6",  sorter:"string"},
        
        {title:"Goles", field:"gol", sorter:"number"},
        {title:imagen7, field:"gd",  sorter:"string"},

        {title:"Puntos", field:"gol", sorter:"number"},


    ],
});