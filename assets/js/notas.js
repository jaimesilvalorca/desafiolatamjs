dataTable = document.getElementById('table1')

const calcularNotas = () => {

    let i = 1
    let listaNota = []

    while(i<= 9){
      let nota = Number(prompt(`Ingrese nota ${i} [HTML]` ))
      listaNota.push(nota)
      console.log(listaNota)
      i++
    }

    let promediohtml = (listaNota[0] + listaNota[1] + listaNota[2]) / 3
    let promediocss = (listaNota[3] + listaNota[4] + listaNota[5]) / 3
    let promediojs = (listaNota[6] + listaNota[7] + listaNota[8]) / 3

    // let nota1 = Number(prompt("Ingrese Nota 1 [HTML]"))
    // if(isNaN(nota1)){
    //   console.log("error")
    //   console.log(nota1)
    // }
    // let nota2 = Number(prompt("Ingrese Nota 2 [HTML]"))
    // let nota3 = Number(prompt("Ingrese Nota 3 [HTML]"))
    // let promedioHtml = (nota1 + nota2 + nota3) / 3
    // let nota4 = Number(prompt("Ingrese Nota 1 [CSS]"))
    // let nota5 = Number(prompt("Ingrese Nota 2 [CSS]"))
    // let nota6 = Number(prompt("Ingrese Nota 3 [CSS]"))
    // let promedioCSS = (nota4 + nota5 + nota6) / 3
    // let nota7 = Number(prompt("Ingrese Nota 1 [Javascript]"))
    // let nota8 = Number(prompt("Ingrese Nota 2 [Javascript]"))
    // let nota9 = Number(prompt("Ingrese Nota 3 [Javascript]"))
    // let promedioJavascript = (nota7 + nota8 + nota9) / 3


    dataTable.innerHTML = `<div id="table1">
    <table class="table">
        <thead class="table table-dark">
          <tr>
            <th scope="col">Ramo</th>
            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
            <th scope="col">Nota 3</th>
            <th scope="col">Promedio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">HTML</th>
            <td>${listaNota[0]}</td>
            <td>${listaNota[1]}</td>
            <td>${listaNota[2]}</td>
            <td>${promediohtml}</td>
          </tr>
          <tr>
            <th scope="row">CSS</th>
            <td>${listaNota[3]}</td>
            <td>${listaNota[4]}</td>
            <td>${listaNota[5]}</td>
            <td>${promediocss}</td>
          </tr>
          <tr>
            <th scope="row">JAVASCRIPT</th>
            <td>${listaNota[6]}</td>
            <td>${listaNota[7]}</td>
            <td>${listaNota[8]}</td>
            <td>${promediojs}</td>
          </tr>
        </tbody>
      </table>
    </div>`
}

resetTable = () => {
    dataTable.innerHTML = `        <div id="table1">
    <table class="table">
        <thead class="table table-dark">
          <tr>
            <th scope="col">Ramo</th>
            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
            <th scope="col">Nota 3</th>
            <th scope="col">Promedio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">HTML</th>
            <td>S/I</td>
            <td>S/I</td>
            <td>S/I</td>
            <td>S/I</td>
          </tr>
          <tr>
            <th scope="row">CSS</th>
            <td>S/I</td>
            <td>S/I</td>
            <td>S/I</td>
            <td>S/I</td>
          </tr>
          <tr>
            <th scope="row">JAVASCRIPT</th>
            <td>S/I</td>
            <td>S/I</td>
            <td>S/I</td>
            <td>S/I</td>
          </tr>
        </tbody>
      </table>
    </div>`

}


const unH1 = () =>{
  dataTable.innerHTML = "cambio en el boton negro"

}
