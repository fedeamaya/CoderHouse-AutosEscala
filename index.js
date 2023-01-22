
const botonModos = document.querySelector('#claro-oscuro')

botonModos.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
    botonModos.classList.toggle('active');

    if(document.body.classList.contains('modo-oscuro')) {
        localStorage.setItem('oscuro', 'true');
    } else {
        localStorage.setItem('oscuro', 'false');
    }

})

if(localStorage.getItem('oscuro') === 'true'){
    document.body.classList.add('modo-oscuro');
} else {
    document.body.classList.remove('modo-oscuro');
}

const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#username")
const inputPass = document.querySelector("#password")
const inputEmail = document.querySelector("#email")
const loginIncorrecto = document.querySelector("#login-incorrecto")
const contenedorForm = document.querySelector(".container-login")
const logout = document.querySelector("#login-out")

const datosUsuario = {
    user: ("fede"),
    password: ("coder123"),
    email:("fedeamaya88@hotmail.com")
}

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password && inputEmail.value === datosUsuario.email ) {
        subirAlLs("login", true)
        contenedorForm.style.display = "none"  
        logout.style.display = "block"              
    } else {        
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "1px solid red"
        inputUser.style.border = "1px solid red"
        inputEmail.style.border = "1px solid red"
    }
}

function validarLogin ( clave ) {
    if ( clave !== true ) {
        contenedorForm.style.display = "flex"
        logout.style.display = "none"        
    } else {
        contenedorForm.style.display = "none"
        logout.style.display = "block"        
    }
}

validarLogin(obtenerDelLs("login"))



logout.onclick = () => {
    localStorage.removeItem( "login" )
    console.log("cerrar sesion")
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
}


