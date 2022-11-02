


let divlux = document.getElementById("divlux");

fetch('../json/list.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((us) => {
                    let {id, user, p1, p2, p3, p4, p5, p6, gol, gd} = us
                    
                    divlux.innerHTML +=  `
         <tbody>
        <tr>
          <th scope="row">${id}</th>
          <td>${user}</td>
          <td><img src="./img/${p1}"></td>
          <td><img src="./img/${p2}"></td>
          <td><img src="./img/${p3}"></td>
          <td><img src="./img/${p4}"></td>
          <td><img src="./img/${p5}"></td>
          <td><img src="./img/${p6}"></td>
          <td>${gol}</td>
          <td>${gd}</td>
        </tr><br>
      </tbody>
                    
                    
                    `
                  
            })
        })
            .catch((error) => {
                console.log(error)
        
});


let divz = document.getElementById("divz");

fetch('../json/list.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((us) => {
                    l1 = ["pe.png"]
                    l2 = ["si.png"] 
                    l3 = ["no.png"]
                    let {id, user, p1, p2, p3, p4, p5, p6, gol, gd} = us
                    c = ["b1.png", "b3.png", 0, 0, 0, 0]

                    let b = parseInt(id) + parseInt(gol)
                     {
                      
                    divz.innerHTML +=  `
                    <tbody>
                    <tr>
                      <th scope="row">${id}</th>
                      <td>${user}</td>
          </tr><br>
          </tbody> ` 
                    
                  }
                  
            })
        })
            .catch((error) => {
                console.log(error)
        
});


let div0 = document.getElementById("div0");

fetch('../json/list.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((us) => {
                    l1 = ["pe.png"]
                    l2 = ["si.png"] 
                    l3 = ["no.png"]
                    let {id, user, p1, p2, p3, p4, p5, p6, gol, gd} = us
                    c = ["b1.png", "b3.png", 0, 0, 0, 0]

                    let b = parseInt(id) + parseInt(gol)
                    if ( p1 == c[0] ) {
                      
                    div0.innerHTML +=  `
                    <tbody>
                    <tr>
          <td><img src="./img/${p1}"><img src="./img/${l2}"> </td>
          </tr><br>
          </tbody> ` }   else {
                      div0.innerHTML +=  `
                      <tbody>
                      <tr>
                        <td><img src="./img/${p1}"><img src="./img/${l3}"> </td>
                      </tr><br>
                    </tbody>`
                    
                  }
                  
            })
        })
            .catch((error) => {
                console.log(error)
        
});



let div1 = document.getElementById("div1");

fetch('../json/list.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((us) => {
                    l1 = ["pe.png"]
                    l2 = ["si.png"] 
                    l3 = ["no.png"]
                    let {id, user, p1, p2, p3, p4, p5, p6, gol, gd} = us
                    c = ["b1.png", "b3.png", 0, 0, 0, 0]

                    let b = parseInt(id) + parseInt(gol)
                    if ( p2 == c[1] ) {
                     
                    div1.innerHTML +=  `
                    <tbody>
                    <tr>
          <td><img src="./img/${p2}"><img src="./img/${l2}"> </td>
          </tr><br>
          </tbody> ` }   else {
                      div1.innerHTML +=  `
                      <tbody>
                      <tr>
                        <td><img src="./img/${p2}"><img src="./img/${l3}"> </td>
                      </tr><br>
                    </tbody>`
                  }
                  
                })
            })
            .catch((error) => {
                console.log(error)
        
});