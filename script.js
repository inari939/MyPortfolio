// script de los corazones del boton descargar cv
document.addEventListener("DOMContentLoaded", function () {
    const btnDescargar = document.getElementById("btn-descargar");

    btnDescargar.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el botón inicie la descarga inmediatamente

        // Crear corazones
        for (let i = 0; i < 10; i++) {
            setTimeout(crearCorazon, i * 100); // Los crea con un pequeño delay para mejor efecto
        }

        // Retrasar la descarga del CV después de 1 segundo
        setTimeout(() => {
            window.location.href = "img/-RamirezAlexandra-.pdf";
        }, 1000);
    });

    function crearCorazon() {
        const corazon = document.createElement("div");
        corazon.innerHTML = "❤️";
        corazon.classList.add("corazon");
        document.body.appendChild(corazon);

        // Obtener posición del botón en la pantalla
        let btnRect = btnDescargar.getBoundingClientRect();
        let x = btnRect.left + btnRect.width / 2; // Aparece en el centro del botón
        let y = btnRect.top + window.scrollY - 10; // Arriba del botón

        corazon.style.left = `${x}px`;
        corazon.style.top = `${y}px`;

        // Animación de los corazones
        let animacion = corazon.animate([
            { transform: "translateY(0) scale(1)", opacity: 1 },
            { transform: `translate(${Math.random() * 100 - 50}px, -150px) scale(1.5)`, opacity: 0 }
        ], {
            duration: 1500,
            easing: "ease-out"
        });

        // Eliminar después de la animación
        animacion.onfinish = () => corazon.remove();
    }
});




// formulario
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); //con esto evito el envío normal del formulario (va hacia mi gracias.html)

    let form = event.target;
    let formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            window.location.href = "gracias.html";
        } else {
            alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
        }
    }).catch(error => {
        alert("Hubo un problema con la conexión. Inténtalo de nuevo.");
    });
});

//Cambiar idioma de la página

const translations = {
    es: {
        home: "Home",
        about: "Sobre mí",
        projects: "Mis Proyectos",
        certifications:"Mis certificados  ",
        download: "Descargar cv",
        contact: "Contacto",
        greeting: "¡Hola! Me llamo",
        welcome: "Te doy la bienvenida a mi portfolio. Soy Diseñadora y Programadora Web junior y acá vas a encontrar algunos de mis proyectos.",
        quienSoy:"¿Quién soy?",
        parrafo1: "Soy una persona disciplinada y curiosa, me encanta aprender cosas nuevas. Me desenvuelvo muy bien en trabajos grupales, aportando responsabilidad, creatividad e ingenio, siempre con compromiso y buena actitud.",
        parrafo2: "Tengo experiencia en edición y maquetación web, combinando diseño y funcionalidad para crear interfaces atractivas. Mis principales herramientas son Photoshop, Canva y Figma. Además, cuento con conocimientos en Illustrator y en el uso de inteligencia artificial para potenciar mis diseños.",
        parrafo3: "Soy estudiante universitaria en la carrera de Ingeniería en informática, actualmente estoy más enfocada en el desarrollo FrontEnd, realizando una carrera aparte para solidificar más esa parte y tener mi propio emprendimiento, freelance si es posible para sustentar mis gastos universitarios, aunque también me gustaría mucho ser parte de un equipo de trabajo.",
        education: "educación",
        conocimientoIT:"Conocimientos Informáticos",
        skills: "Mis habilidades",
        tituloProyectos:"Estos son algunos proyectos destacados",
        strengths: "Fortalezas",
        exploreProjects:"¡Explorá mis proyectos en Behance y GitHub! Descubrí más sobre mi trabajo basado en diseño y la maquetación detrás.",
        roma:"Visitá Roma",
        tienda: "Vivero Tienda",
        generador: "Generador de contraseñas",
        behance: "Ir a Behance",
        github:"Ir a GitHub",
        createProject: "Creemos un proyecto nuevo",
        mensaje:"Mensaje",
        enviar: "Enviar",
        followMe: "Seguime en mis redes",
        createdBy: "Creado por Alexandra Ramirez (2023)©"

    },
    en: {
        home: "Home",
        about: "About Me",
        projects: "My Projects",
        certifications:"My certifications  ",
        download:"Download cv",
        contact: "Contact",
        greeting: "Hi! My name is",
        welcome: "Welcome to my portfolio. I'm a junior Web Designer and Programmer and here you will find some of my projects.",
        quienSoy: "Who am I?",
        parrafo1:"I am a disciplined and curious person; I love learning new things. I work well in team environments, bringing responsibility, creativity, and ingenuity, always with commitment and a positive attitude.",
        parrafo2:"I have experience in web editing and layout, combining design and functionality to create attractive interfaces. My main tools are Photoshop, Canva, and Figma. Additionally, I have knowledge of Illustrator and the use of artificial intelligence to enhance my designs.",
        parrafo3: "I am a university student pursuing a degree in Computer Engineering. Currently, I am more focused on FrontEnd development, taking an additional course to strengthen this area and build my own business. If possible, I would like to work as a freelancer to support my university expenses, although I would also love to be part of a team.",
        education:"education",
        conocimientoIT:"IT Knowledge",
        skills: "My Skills",
        tituloProyectos: "Here are some featured projects",
        strengths: "Strengths",
        exploreProjects: "Explore my projects on Behance and GitHub! Learn more about my design-based work and the layout behind it.",
        roma:"Visit Rome",
        tienda: "Plant Nursery Store",
        generador: "Password Generator",
        behance: "Go to Behance",
        github:"Go to GitHub",
        createProject: "Let's create a new project",
        mensaje:"Message",
        enviar: "Send",
        followMe: "Follow me on my social media",
        createdBy: "Created by Alexandra Ramirez (2023)©"
        
    }
};

const langToggle = document.getElementById("lang-toggle");
const elementsToTranslate = document.querySelectorAll("[data-translate]");

// Función para cambiar el idioma
toggleLanguage = () => {
    const currentLang = localStorage.getItem("language") || "es";
    const newLang = currentLang === "es" ? "en" : "es";
    localStorage.setItem("language", newLang);
    applyTranslations(newLang);
};

// Función para aplicar traducciones
applyTranslations = (lang) => {
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[lang][key];
    });
};

// Evento de clic en el botón
langToggle.addEventListener("click", toggleLanguage);

// Cargar idioma guardado al iniciar
const savedLang = localStorage.getItem("language") || "es";
applyTranslations(savedLang);

