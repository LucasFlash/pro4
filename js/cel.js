
let c1 = {
    id: 1,
    user: "JuanPedro",
    p1: "b1.png",
    p2: "b3.png",
    p3: "b4.png",
    p4: "b1.png",
    p5: "b1.png",
    p6: "b3.png",
    gol: 6,
    gd: "FRA"
};
let c2 = {
    id: 2,
    user: "Juanos",
    p1: "b2.png",
    p2: "b3.png",
    p3: "b4.png",
    p4: "b1.png",
    p5: "b1.png",
    p6: "b2.png",
    gol: 6,
    gd: "FRA"
};


al1 = {id:1, name:"Lucas Flash", p1:"Argentina",car:"1", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:6, gd:"Dinamarca"}
al2 = {id:2, name:"Lucas Putito", p1:"Arabia", car:0, p2:"Mexico", p3:"Polonia", p4:"Empate", p5:"Argentina", p6:"Empate", gol:6, gd:"Dinamarca"}

let Array22 = [
    al1, al2,
]

let Array1 = [
    {id:1, name:"Lucas Flash", p1:"Argen3tina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:6, gd:"Dinamarca"},
    {id:2, name:"Lucas Putito", p1:"Argedwentina", p2:"Mexreico", p3:"Polonia", p4:"Empate", p5:"Argentina", p6:"Empate", gol:6, gd:"Dinamarca"},
    {id:3, name:"Lucas Putit5o", p1:"Argentina", p2:"Mewexico", p3:"Polonia", p4:"Empate", p5:"Argentina", p6:"Empate", gol:6, gd:"Dinamarca"},
    {id:4, name:"Lucas Putito5", p1:"Argewdntina", p2:"Mex453co", p3:"Polonia", p4:"Empate", p5:"Argentina", p6:"Empate", gol:6, gd:"Dinamarca"},
];

let Array1x = [
    {id:1, name:"Lucas Flash", p1:0, p2:0, p3:0, p4:0, p5:0, p6:0, gol:0, gd:0},
    {id:2, name:"Lucas Putito", p1:0, p2:0, p3:0, p4:0, p5:0, p6:0, gol:6, gd:0},
    {id:3, name:"Lucas Flas5h", p1:0, p2:0, p3:0, p4:0, p5:0, p6:0, gol:0, gd:0},
    {id:4, name:"Lucas Putito5", p1:0, p2:0, p3:0, p4:0, p5:0, p6:0, gol:6, gd:0},
 ]

lag = {id:0, name:"Prueba", p1:"Argentina", p2:"Mexico", p3:"P", p4:"Empate", p5:"Argentina", p6:"M", gol:6, gd:"D"}







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

for (let index = 0; index < Array1.length; index++) {
    c1 = Array1[index];  
    d1 = c1["p3"]; 
    g1 = lag["p3"];
    h1h=Array1x[index];
    if (d1 == g1) { 
        h1h["p3"]=1; 
    }
}

for (let index = 0; index < Array1.length; index++) {
    c1 = Array1[index];  
    d1 = c1["p4"]; 
    g1 = lag["p4"];
    h1h=Array1x[index];
    if (d1 == g1) { 
        h1h["p4"]=1; 
    }
}

for (let index = 0; index < Array1.length; index++) {
    c1 = Array1[index];  
    d1 = c1["p5"]; 
    g1 = lag["p5"];
    h1h=Array1x[index];
    if (d1 == g1) { 
        h1h["p5"]=1; 
    }
}

for (let index = 0; index < Array1.length; index++) {
    c1 = Array1[index];  
    d1 = c1["p6"]; 
    g1 = lag["p6"];
    h1h=Array1x[index];
    if (d1 == g1) { 
        h1h["p6"]=1; 
    }
}

console.log(Array1x)

let imagen = new Image();
imagen.src = "./img/b1.png"; 


//Build Tabulator
var table = new Tabulator("#tablap", {
    height:"311px",
    layout:"fitColumns",
    reactiveData:true, //turn on data reactivity
    data:Array1, //load data into table
    columns:[
        {title:"Id", field:"id", sorter:"number"},
        {title:"Usuario", field:"name", sorter:"string", width:200},



        {title:imagen, field:"p1",  formatter:"tickCross", sorter:"boolean"},
        {title:imagen, field:"p2",  formatter:"tickCross", sorter:"boolean"},
        {title:"ASI vs POL", field:"p3",  formatter:"tickCross", sorter:"boolean"},
        {title:"ARG vs MEX", field:"p4",  formatter:"tickCross", sorter:"boolean"},
        {title:"ARG vs POL", field:"p5",  formatter:"tickCross", sorter:"boolean"},
        {title:"ASI vs MEX", field:"p6",  formatter:"tickCross", sorter:"boolean"},
        
        {title:"Goles", field:"gol", sorter:"number"},
        {title:"Rival", field:"gd",  formatter:"tickCross", sorter:"boolean"},

        {title:"Puntos", field:"gol", sorter:"number"},


    ],
});