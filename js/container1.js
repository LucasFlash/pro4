let div0 = document.getElementById("div0");

fetch('../json/list.json')
    .then( (res) => res.json())
    .then( (as) => {
                    let {id, user, p1, p2, p3, p4, p5, p6, gol, gd} = as
                    for (let j=0; j<2; j++){
                     div0.innerHTML += `
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
                    }
                  })
            
                  .catch((error) => {
                      console.log(error)
              
      });

