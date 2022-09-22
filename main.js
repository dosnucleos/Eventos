

/// DOM


const tituloPrincipal = document.getElementById ("tituloPrincipal");





tituloPrincipal.innerText= "Biblioteca Matias Fernández Burzaco";

//tituloPrincipal.innerHTML =`<p> Museo Barrio de Flores</p>`;



class libro {
    constructor ( titulo, autor, condicion, imagen){
        this.titulo = titulo;
        this.autor = autor;
        this.condicion= condicion;
        this.imagen= imagen;
    }
}


// Stock de Libros Actuales en la Biblioteca

const libroJueves = new libro ("Las Viudad de los Jueves", "Pinero", "usado" );
const libroSombras= new libro ("De Amor y de Sombras", "Allende", "usado");
const libroFlores= new libro ("Flores siempre es Bello", "Danna", "nuevo");
const libroOrwell= new libro ("1984", "Orwell", "usado");
const libroComedia= new libro ("Divina Comedia", "Alighieri", "usado");
const libroVioleta= new libro ("Violeta", "Allende", "usado");
const libroInfinito= new libro ("El Plan Infinito", "Allende", "nuevo");
const libroMunicipales= new libro ("Ex casita Municipal", "Danna", "nuevo");

const Libros=[];

Libros.push (libroJueves);
Libros.push (libroSombras);
Libros.push (libroFlores);
Libros.push (libroOrwell);
Libros.push (libroComedia);
Libros.push (libroVioleta);
Libros.push (libroInfinito);
Libros.push (libroMunicipales);

const formulario = document.getElementById ("formulario");






formulario.addEventListener ("submit", (e) => {
    e.preventDefault ();
    donarLibro();
})

function donarLibro (){
    const titulo = document.getElementById ("titulo").value;
    const autor= document.getElementById ("autor").value;
    const condicion= document.getElementById ("condicion").value;

    const nuevoLibro = new libro (titulo, autor, condicion);
    Libros.push (nuevoLibro);
    formulario.reset ();
}


const contenedorLibros= document.getElementById ("contenedorLibros");

const verBiblioteca= document.getElementById ("verBiblioteca");
verBiblioteca.addEventListener ("click", ()=> {
    mostrarLibros ();
})

function mostrarLibros (){
contenedorLibros.innerHTML = ""; 
Libros.forEach ( libro => {
const div = document.createElement ("div");
div.innerHTML = ` 
        
  <div class="card" style="width: 18rem;"> 
  <img src= "img/museoLogo.png" alt="...">
 Nombre del libro: <h3> ${libro.titulo} </h3>
Autor: <h4> ${libro.autor}</h4>
 Condicion: <h4> ${libro.condicion}</h4>

 </div>
     `
     ;
     contenedorLibros.appendChild(div);
     })
 }



 Libros.forEach ( libro => {
 let div= document.createElement ("div");
div.innerHTML = ` 
<div class="card" style="width: 18rem;">
<img src= "img/museoLogo.png" alt="...">
Nombre del libro: <h3> ${libro.titulo} </h3>
    Autor: <h4> ${libro.autor}</h4>
  Condicion: <h4> ${libro.condicion}</h4>
  
 </div>
     `;
    contenedorLibros.appendChild(div);
})