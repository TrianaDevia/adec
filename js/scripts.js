/*EMAIL JS*/
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_x4fhw5s';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('¡Mensaje enviado!');
      location.reload();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// MENU HAMBURGUESA

const menu = document.querySelector("#menu");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
    menu.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("visible");
})
//HEADER SCROLL

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0)
})