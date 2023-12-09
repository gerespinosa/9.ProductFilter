const todoBtn = document.getElementById('todo-btn')
const pizzaBtn = document.getElementById('pizza-btn')
const burguerBtn = document.getElementById('burguer-btn')
const pastaBtn = document.getElementById('pasta-btn')
const container = document.getElementById('container')
const botones = document.querySelectorAll('.botones')
const imagenes = document.querySelectorAll('img')

// creamos la función para filtrar los alimentos por categorías según los botones
const reconocerAlimento = () => {
  botones.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filtro = btn.getAttribute('data-filter')

      imagenes.forEach((img) => {
        const categoria = img.getAttribute('data-filter')
        if (filtro === 'todo' || filtro === categoria) {
          img.parentNode.style.display = 'block'
        } else {
          img.parentNode.style.display = 'none'
        }
      })
    })
  })
}

// creamos la función para filtrar los alimentos por categoría según la barra de búsqueda
const busqueda = document.getElementById('busqueda')

const buscarAlimento = () => {
  const valorBusqueda = busqueda.value
  console.log(valorBusqueda)
  imagenes.forEach((img) => {
    const categoria = img.getAttribute('data-filter')
    // si el campo de búsqueda está vacio, todos los elementos permanecen visibles
    if (valorBusqueda === categoria || valorBusqueda == '') {
      img.parentNode.style.display = 'block'
    } else {
      img.parentNode.style.display = 'none'
    }
  })
}

// activamos la función para buscar según el cuadro de busqueda al introducir un input en el cuadro
busqueda.addEventListener('input', buscarAlimento)

// Llamar a la función después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', reconocerAlimento)
