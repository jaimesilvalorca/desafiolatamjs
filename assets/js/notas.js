dataTable = document.getElementById('table1')

const calcularNotas = () => {
    let nota1 = parseInt(prompt("Ingrese Nota 1 [HTML]"))
    let nota2 = parseInt(prompt("Ingrese Nota 2 [HTML]"))
    let nota3 = parseInt(prompt("Ingrese Nota 3 [HTML]"))
    let promedioHtml = (nota1 + nota2 + nota3) / 3
    let nota4 = parseInt(prompt("Ingrese Nota 1 [CSS]"))
    let nota5 = parseInt(prompt("Ingrese Nota 2 [CSS]"))
    let nota6 = parseInt(prompt("Ingrese Nota 3 [CSS]"))
    let promedioCSS = (nota4 + nota5 + nota6) / 3
    let nota7 = parseInt(prompt("Ingrese Nota 1 [Javascript]"))
    let nota8 = parseInt(prompt("Ingrese Nota 2 [Javascript]"))
    let nota9 = parseInt(prompt("Ingrese Nota 3 [Javascript]"))
    let promedioJavascript = (nota7 + nota8 + nota9) / 3


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
            <td>${nota1}</td>
            <td>${nota2}</td>
            <td>${nota3}</td>
            <td>${promedioHtml}</td>
          </tr>
          <tr>
            <th scope="row">CSS</th>
            <td>${nota4}</td>
            <td>${nota5}</td>
            <td>${nota6}</td>
            <td>${promedioCSS}</td>
          </tr>
          <tr>
            <th scope="row">JAVASCRIPT</th>
            <td>${nota7}</td>
            <td>${nota8}</td>
            <td>${nota9}</td>
            <td>${promedioJavascript}</td>
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