
/* localStorage.removeItem('cartItems'); */
localStorage.getItem('cartItems') 
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')


//funcionalidad para guardar en storage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const contadorCarrito = document.getElementById('cart-counter');
const totalCarrito = document.getElementById('cart-total');
const listaItemsCarrito = document.getElementById('cart-items-list');

function guardarCarritoEnLocalStorage(cartItems) {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function actualizarCarritoUI(cartItems) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  contadorCarrito.textContent = cartItems.length;
  totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
  

  listaItemsCarrito.innerHTML = '';

  cartItems.forEach(item => {
    const nuevoItemCarrito = document.createElement('li');
    nuevoItemCarrito.className = 'cart__item';
    nuevoItemCarrito.dataset.title = item.title;
    nuevoItemCarrito.dataset.price = item.price;
    nuevoItemCarrito.innerHTML = `
        <img src="${item.image}" alt="" class="cart__item-img">
        <h3 class="cart__item-title">${item.title}</h3>
        <div class="cart__item-actions">
          <button class="cart__item-decrease" onclick="decreaseQuantity(this)">-</button>
          <span class="cart__item-quantity">${item.quantity}</span>
          <button class="cart__item-increase" onclick="increaseQuantity(this)">+</button>
        </div>
        <span class="cart__item-price">$${(item.price * item.quantity).toFixed(2)}</span>
      `;
    listaItemsCarrito.appendChild(nuevoItemCarrito);
  });


}

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')

  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,

})

sr.reveal(`.home__header, .section__title`, { delay: 600 })
sr.reveal(`.home__footer`, { delay: 700 })
sr.reveal(`.home__img`, { delay: 900, origin: 'top' })

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, { origin: 'top', interval: 100 })
sr.reveal(`.specs__data, .discount__animate`, { origin: 'left', interval: 100 })
sr.reveal(`.specs__img, .discount__img`, { origin: 'right' })
sr.reveal(`.case__img`, { origin: 'top' })
sr.reveal(`.case__data`)


/* ====================== TRAGOS SECTION======================*/

document.addEventListener("DOMContentLoaded", function () {

  const recetas = [

    {
      nombre: 'Gin Tonic',
      ingredientes: ['Gin Marqués Verdebello', 'agua tónica', 'rodaja de limón']
    },
    {
      nombre: 'Negroni',
      ingredientes: ['Gin Marqués Verdebello', 'vermut rojo', 'Campari', 'rodaja de naranja']
    },
    {
      nombre: 'Tom Collins',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de limón', 'jarabe de azúcar', 'agua mineral', 'cerezas']
    },
    {
      nombre: 'Clover Club',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de frambuesa', 'jugo de limón', 'jarabe de azúcar', 'clara de huevo']
    },
    {
      nombre: 'Gimlet',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de lima', 'jarabe de azúcar']
    },
    {
      nombre: 'Ramos Gin Fizz',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de limón', 'jarabe de azúcar', 'clara de huevo', 'agua con gas', 'crema']
    },
    {
      nombre: 'French 75',
      ingredientes: ['Gin Marqués Verdebello', 'champán', 'jugo de limón', 'jarabe de azúcar']
    },
    {
      nombre: 'Martini',
      ingredientes: ['Gin Marqués Verdebello', 'vermut seco', 'aceituna']
    },
    {
      nombre: 'Aviation',
      ingredientes: ['Gin Marqués Verdebello', 'licor de cereza', 'jugo de limón', 'jarabe de azúcar']
    },
    {
      nombre: 'Gin Fizz',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de limón', 'jarabe de azúcar', 'clara de huevo', 'agua con gas']
    },
    {
      nombre: 'Southside',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de limón', 'jarabe de azúcar', 'menta', 'hojas de menta']
    },
    {
      nombre: 'Pink Gin',
      ingredientes: ['Gin Marqués Verdebello', 'Angostura', 'hielo']
    },
    {
      nombre: 'Gin Buck',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de limón', 'ginger ale']
    },
    {
      nombre: 'Gin Smash',
      ingredientes: ['Gin Marqués Verdebello', 'limón', 'jarabe de azúcar']
    },
    {
      nombre: 'Gin Daisy',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de limón', 'jarabe de azúcar', 'refresco de lima-limón']
    },
    {
      nombre: 'Gin Rickey',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de limón', 'soda', 'lima']
    },
    {
      nombre: 'Gin Swizzle',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de limón', 'jarabe de azúcar', 'soda']
    },
    {
      nombre: 'Gin Basil Smash',
      ingredientes: ['Gin Marqués Verdebello', 'limón', 'azúcar', 'albahaca']
    },
    {
      nombre: 'Gin Martini Lemon Twist',
      ingredientes: ['Gin Marqués Verdebello', 'vermut seco', 'limón']
    },
    {
      nombre: 'Gin Martini Olive',
      ingredientes: ['Gin Marqués Verdebello', 'vermut seco', 'aceitunas']
    },
    {
      nombre: 'Gin Martini Dirty',
      ingredientes: ['Gin Marqués Verdebello', 'vermut seco', 'aceitunas', 'jugo de aceituna']
    },
    {
      nombre: 'Gin Martini Perfect',
      ingredientes: ['Gin Marqués Verdebello', 'vermut seco', 'vermut dulce']
    },
    {
      nombre: 'Gin Martini Reverse',
      ingredientes: ['Gin Marqués Verdebello', 'vermut dulce', 'vermut seco']
    },
    {
      nombre: 'Gin Martini Vodka',
      ingredientes: ['Gin Marqués Verdebello', 'vodka', 'vermut seco']
    },
    {
      nombre: 'Gin Martini Gibson',
      ingredientes: ['Gin Marqués Verdebello', 'vermut seco', 'cebolla en vinagre']
    },
    {
      nombre: 'Gin Martini Fifty-Fifty',
      ingredientes: ['Gin Marqués Verdebello', 'vermut dulce', 'vermut seco']
    },
    {
      nombre: 'Gin Martini 90-10',
      ingredientes: ['Gin Marqués Verdebello', 'vermut dulce', 'vermut seco']
    },
    {
      nombre: 'Gin Martini 80-20',
      ingredientes: ['Gin Marqués Verdebello', 'vermut dulce', 'vermut seco']
    },
    {
      nombre: 'Gin Sunrise',
      ingredientes: ['Gin Marqués Verdebello', 'jugo de naranja', 'granadina', 'rodaja de naranja']
    },
    {
      nombre: 'Gin Mojito',
      ingredientes: ['Gin Marqués Verdebello', 'azúcar', 'jugo de limón', 'agua con gas']
    },
    {
      nombre: 'Gin Tropical',
      ingredientes: ['Gin Marqués Verdebello', 'piña', 'coco', 'jugo de lima']
    },
    {
      nombre: 'Gin Berry Bliss',
      ingredientes: ['Gin Marqués Verdebello', 'fresas', 'arándano', 'jugo de arándano']
    },
    {
      nombre: 'Gin Cucumber Cooler',
      ingredientes: ['Gin Marqués Verdebello', 'pepino', 'lima', 'jarabe de agave']
    },
    {
      nombre: 'Gin Spicy Citrus',
      ingredientes: ['Gin Marqués Verdebello', 'jalapeño', 'jugo de pomelo', 'limón', 'sirope de agave']
    },
    {
      nombre: 'Gin Elderflower Fizz',
      ingredientes: ['Gin Marqués Verdebello', 'licor de saúco', 'jugo de limón', 'soda']
    },
    {
      nombre: 'Gin Pineapple Express',
      ingredientes: ['Gin Marqués Verdebello', 'piña', 'jengibre', 'coco', 'jugo de lima']
    },
    {
      nombre: 'Gin Blackberry Smash',
      ingredientes: ['Gin Marqués Verdebello', 'mora', 'albahaca', 'jugo de limón', 'jarabe de agave']
    },
    {
      nombre: 'Gin Apple Pie',
      ingredientes: ['Gin Marqués Verdebello', 'manzana', 'canela', 'limón', 'jarabe de vainilla']
    },
    {
      nombre: 'Gin Passion Fizz',
      ingredientes: ['Gin Marqués Verdebello', 'maracuyá', 'jugo de limón', 'jarabe de vainilla', 'soda']
    },
    {
      nombre: 'Gin Honeydew Refresher',
      ingredientes: ['Gin Marqués Verdebello', 'melón', 'miel', 'lima', 'agua con gas']
    },
    {
      nombre: 'Gin Lavender Lemonade',
      ingredientes: ['Gin Marqués Verdebello', 'lavanda', 'jugo de limón', 'jarabe de lavanda', 'limonada']
    },
    {
      nombre: 'Gin Cherry Blossom',
      ingredientes: ['Gin Marqués Verdebello', 'cerezas', 'flor de cerezo', 'jugo de limón', 'soda']
    },
    {
      nombre: 'Gin Mint Julep',
      ingredientes: ['Gin Marqués Verdebello', 'menta', 'azúcar', 'agua con gas', 'hielo triturado']
    },
    {
      nombre: 'Gin Pineapple Basil Smash',
      ingredientes: ['Gin Marqués Verdebello', 'piña', 'albahaca', 'jugo de limón', 'jarabe de agave']
    },
    {
      nombre: 'Gin Raspberry Lemon Twist',
      ingredientes: ['Gin Marqués Verdebello', 'frambuesas', 'limón', 'azúcar', 'soda']
    },
    {
      nombre: 'Gin Coconut Dream',
      ingredientes: ['Gin Marqués Verdebello', 'coco', 'crema de coco', 'jugo de piña', 'lima']
    },
    {
      nombre: 'Gin Orange Blossom',
      ingredientes: ['Gin Marqués Verdebello', 'naranja', 'flor de azahar', 'jugo de limón', 'soda']
    },
    {
      nombre: 'Gin Watermelon Splash',
      ingredientes: ['Gin Marqués Verdebello', 'sandía', 'lima', 'agua con gas']
    },

    {
      nombre: 'Gin Summer Breeze',
      ingredientes: ['Gin Marqués Verdebello', 'sandía', 'lima', 'agua con gas']
    },
    {
      nombre: 'Gin Citrus Zing',
      ingredientes: ['Gin Marqués Verdebello', 'naranja', 'limón', 'jugo de limón', 'soda']
    },

    {
      nombre: 'Gin Sunset',
      ingredientes: ['Gin Marqués Verdebello', 'piña', 'granadina', 'jugo de limón', 'rodaja de piña']
    },
  ]

  let resultadosMostrados = false;

  function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function mostrarAlerta(mensaje) {
    if (mensaje.includes("Por favor, ingrese ingredientes antes de buscar recetas.")) {
      
      Swal.fire({
        title: '¡Atención!',
        text: mensaje,
        icon: 'warning',
        confirmButtonText: 'Entendido',
        background: '#333', 
    showCloseButton: true, 
    iconColor: '#ddd', 
    confirmButtonColor: '#555',
    cancelButtonColor: '#777', 
      });
    } else {
     
      const alerta = document.getElementById('notification');
      alerta.innerText = mensaje;
      alerta.classList.add('show');
    }
  }

  function filtrarRecetas(ingredientesUsuario) {
    const ingredientesIngresados = quitarTildes(ingredientesUsuario.toLowerCase()).split(',');

    if (ingredientesIngresados.length === 1 && ingredientesIngresados[0].trim() === '') {
      mostrarAlerta("Por favor, ingrese ingredientes antes de buscar recetas.");
      return [];
    }

    let tragosSugeridos = [];

    for (let i = 0; i < recetas.length; i++) {
      const receta = recetas[i];
      const ingredientesReceta = receta.ingredientes.map(ingrediente => quitarTildes(ingrediente.toLowerCase()));

      let coincide = false;

      for (let j = 0; j < ingredientesIngresados.length; j++) {
        const ingrediente = ingredientesIngresados[j].trim();
        if (ingredientesReceta.includes(ingrediente)) {
          coincide = true;
          break;
        }
      }

      if (coincide) {
        tragosSugeridos.push(receta.nombre);
      }
    }

    return tragosSugeridos;
  }

  const buttonDescubrir = document.querySelector('.cocktail__button');
  const textareaIngredientes = document.querySelector('.cocktail__textarea');

  buttonDescubrir.addEventListener('click', () => {
    const ingredientesUsuario = textareaIngredientes.value;
    const tragosSugeridos = filtrarRecetas(ingredientesUsuario);

    if (tragosSugeridos.length > 0) {
      let mensaje = 'Puedes preparar los siguientes tragos:\n';

      for (let i = 0; i < tragosSugeridos.length; i++) {
        const trago = tragosSugeridos[i];
        const recetaEncontrada = recetas.find(receta => receta.nombre === trago);

        mensaje += `\n${trago}:\n`;

        recetaEncontrada.ingredientes.forEach(ingrediente => {
          mensaje += `- ${ingrediente}\n`;
        });
      }

      mostrarAlerta(mensaje);
      resultadosMostrados = true;
    } else {
      if (ingredientesUsuario.trim() !== '') {
        mostrarAlerta('No hay recetas disponibles con los ingredientes ingresados.');
      }
    }
  });

  textareaIngredientes.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (!resultadosMostrados) {
        buttonDescubrir.click();
      }
    }
  });
});






/* Carrito   */



// DUMMY PRODUCTS (PRODUCT ID : DATA)
var products = {
  123: {
    name : "SET 3 ACCESORIOS GIN TONIC",
    desc : "Greatest properly off ham exercise all.",
    img : "../assets/img/product1.png",
    price : 20000
  },
  124: {
    name : "Copon Gin Tonic",
    desc : "Unsatiable its possession nor off.",
    img : "../assets/img/product2.png",
    price : 8000
  },
  125: {
    name : "Kit Botanicos Gin Tonic Regaloitude.",
    desc : "Unsatiable its possession nor off.",
    img : "../assets/img/product3.png",
    price : 4000,
  },
  126: {
    name : "Agua Tonica Britvic Lata",
    desc : "Had judgment out property the supplied. ",
    img : "../assets/img/product5.png",
    price : 2000
  },
  
};

/*


CART


*/

const cart = {
  hPdt: null,
  hItems: null,
  items: {},

  save: function () {
    localStorage.setItem("cart", JSON.stringify(cart.items));
  },

  load: function () {
    cart.items = localStorage.getItem("cart");
    if (cart.items == null) { cart.items = {}; }
    else { cart.items = JSON.parse(cart.items); }
  },

  nuke: function () {
    if (confirm("Empty cart?")) {
      cart.items = {};
      localStorage.removeItem("cart");
      cart.list();
    }
  },

  init: function () {
    cart.hPdt = document.getElementById("cart-products");
    cart.hItems = document.getElementById("cart-items");

    cart.hPdt.innerHTML = "";
    let p, item, part;
    for (let id in products) {
      p = products[id];
      item = document.createElement("div");
      item.className = "p-item";
      cart.hPdt.appendChild(item);

      part = document.createElement("img");
      part.src = "images/" + p.img;
      part.className = "p-img";
      item.appendChild(part);

      part = document.createElement("div");
      part.innerHTML = p.name;
      part.className = "p-name";
      item.appendChild(part);

      part = document.createElement("div");
      part.innerHTML = p.desc;
      part.className = "p-desc";
      item.appendChild(part);

      part = document.createElement("div");
      part.innerHTML = "$" + p.price;
      part.className = "p-price";
      item.appendChild(part);

      part = document.createElement("input");
      part.type = "button";
      part.value = "Add to Cart";
      part.className = "cart p-add";
      part.onclick = cart.add;
      part.dataset.id = id;
      item.appendChild(part);
    }

    cart.load();
    cart.list();
  },

  list: function () {
    cart.hItems.innerHTML = "";
    let item, part, pdt;
    let empty = true;
    for (let key in cart.items) {
      if (cart.items.hasOwnProperty(key)) { empty = false; break; }
    }

    if (empty) {
      item = document.createElement("div");
      item.innerHTML = "Carrito Vacío";
      cart.hItems.appendChild(item);
    } else {
      let p, total = 0, subtotal = 0;
      for (let id in cart.items) {
        p = products[id];
        item = document.createElement("div");
        item.className = "c-item";
        cart.hItems.appendChild(item);

        part = document.createElement("div");
        part.innerHTML = p.name;
        part.className = "c-name";
        item.appendChild(part);

        part = document.createElement("input");
        part.type = "button";
        part.value = "X";
        part.dataset.id = id;
        part.className = "c-del cart";
        part.addEventListener("click", cart.remove);
        item.appendChild(part);

        part = document.createElement("input");
        part.type = "number";
        part.value = cart.items[id];
        part.dataset.id = id;
        part.className = "c-qty";
        part.addEventListener("change", cart.change);
        item.appendChild(part);

        subtotal = cart.items[id] * p.price;
        total += subtotal;
      }

      item = document.createElement("input");
      item.type = "button";
      item.value = "Empty";
      item.addEventListener("click", cart.nuke);
      item.className = "c-empty cart";
      cart.hItems.appendChild(item);

      item = document.createElement("input");
      item.type = "button";
      item.value = "Checkout - " + "$" + total;
      item.addEventListener("click", cart.checkout);
      item.className = "c-checkout cart";
      cart.hItems.appendChild(item);
    }
  },

  add: function () {
    if (cart.items[this.dataset.id] == undefined) {
      cart.items[this.dataset.id] = 1;
    } else {
      cart.items[this.dataset.id]++;
    }
    cart.save();
    cart.list();
  },

  change: function () {
    if (this.value == 0) {
      delete cart.items[this.dataset.id];
    } else {
      cart.items[this.dataset.id] = this.value;
    }
    cart.save();
    cart.list();
  },

  remove: function () {
    delete cart.items[this.dataset.id];
    cart.save();
    cart.list();
  },

  checkout: function () {
    alert("TO DO");
  }
};
window.addEventListener("DOMContentLoaded", cart.init);







/* ====================== RECOMENDACION TRAGOS SECTION======================*/
const result = document.querySelector('.result');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.value === '' || nameCountry.value === '') {
        showError('Ambos campos son obligatorios...');
        return;
    }

    callAPI(nameCity.value, nameCountry.value);
})

function callAPI(city, country){
    const apiId = '41d1d7f5c2475b3a16167b30bc4f265c';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                showError('Ciudad no encontrada...');
            } else {
                clearHTML();
                showWeather(dataJSON);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function showWeather(data){
    const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;

    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);

    const drinkSuggestion = suggestDrinkByTemperature(degrees);

    const content = document.createElement('div');
    content.classList.add('result-content');
    content.innerHTML = `
        <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
        <h2>${degrees}°C</h2>
        <p>Max: ${max}°C</p>
        <p>Min: ${min}°C</p>
        <p class="drink-suggestion">${drinkSuggestion}</p>
    `;

    result.appendChild(content);
}

function suggestDrinkByTemperature(temperature) {
    if (temperature >= 0 && temperature <= 15) {
        return `
Negroni Refrescante:
- 1 onza de Gin Verdebello
- 1 onza de vermut rojo
- 1 onza de Campari
- Rodaja de naranja para decorar`;
    } else if (temperature > 15 && temperature <= 25) {
        return `
Martini Herbal:
- 1 onza de Gin Verdebello
- 1/2 onza de vermut seco
- Ramita de romero para infusionar
- Twist de limón para decorar`;
    } else if (temperature > 25 && temperature <= 35) {
        return `
Gimlet de Pepino:
- 1 onza de Gin Verdebello
- 1/2 onza de licor de pepino
- 1/2 onza de jarabe de agave
- Rodaja fina de pepino para decorar`;
    } else if (temperature > 35 && temperature <= 45) {
        return `
Mojito de Gin Verdebello:
- 1 onza de Gin Verdebello
- Hierbabuena fresca (al gusto)
- 1/2 lima, cortada en trozos
- 1 cucharadita de azúcar
- Agua con gas
- Hielo`;
    } else {
        return "Sugerencia de trago para temperaturas fuera de los rangos especificados";
    }
}

function showError(message){
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML = message;

    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function kelvinToCentigrade(temp){
    return parseInt(temp - 273.15);
}

function clearHTML(){
    result.innerHTML = '';
}
