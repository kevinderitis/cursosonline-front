const producto1Img = document.getElementById("producto1-img");
const producto2Img = document.getElementById("producto2-img");
const producto2Img2 = document.getElementById("producto2-img2");
const producto3Img = document.getElementById("producto3-img");
const background = document.getElementById("gr");
const background2 = document.getElementById("gr2");

var queryString = window.location.search;

var params = new URLSearchParams(queryString);

var curso = params.get('curso');

if (!curso) {
    // window.location.href = "https://www.google.com"; 
}

const cursoBackend = {
    pretitulo: `¿Quieres sumergirte en el mundo del desarrollo backend?`,
    titulo: "Aprende Programación Backend con Node.js",
    precioTotal: "$100",
    precioConDescuento: "$70",
    tituloParrafo1: "Explora el emocionante campo del desarrollo backend utilizando Node.js.",
    tituloParrafo2: "¿Qué es Node.js?",
    parrafo2: "Node.js es un entorno de tiempo de ejecución de JavaScript que te permite crear aplicaciones del lado del servidor de manera eficiente y escalable.",
    parrafo1: "En nuestro curso, te brindamos las herramientas esenciales para convertirte en un desarrollador backend competente con Node.js. Desde la creación de servidores hasta el manejo de bases de datos, estamos seguros de que encontrarás un contenido valioso que te entusiasmará.",
    beneficios: "Beneficios de tomar este curso",
    parrafoBeneficios: "Al unirte a nuestro curso de Programación Backend con Node.js, experimentarás una serie de beneficios, como:\n\n- Adquirir habilidades en el desarrollo de servidores y APIs utilizando Node.js.\n- Aprender a interactuar con bases de datos y gestionar la persistencia de datos.\n- Dominar técnicas de autenticación y seguridad para proteger tus aplicaciones.\n- Obtener experiencia práctica a través de ejemplos y proyectos del mundo real.\n- Acceder a un aprendizaje flexible y práctico que se adapta a tu ritmo y horario.\n- Obtener certificados de finalización para fortalecer tu perfil profesional.",
    aprender: "Lo que aprenderás en este curso",
    parrafoAprender1: "• Fundamentos de Node.js y su entorno de desarrollo.",
    parrafoAprender2: "• Creación de APIs y endpoints para tus aplicaciones.",
    parrafoAprender3: "• Uso de bases de datos para almacenar y recuperar información.",
    parrafoAprender4: "• Implementación de autenticación y autorización en tus aplicaciones.",
    parrafoAprender5: "• Integración de librerías y módulos para extender la funcionalidad.",
    parrafoAprender6: "• Desarrollo de proyectos completos que demuestran tus habilidades.",
    tituloAcceso: "Acceso ilimitado al curso",
    parrafoAcceso: "Una vez inscrito, tendrás acceso sin restricciones al contenido del curso. Puedes estudiar desde cualquier dispositivo en cualquier momento.",
    opinionesTitulo: "Experiencias de nuestros estudiantes",
    opinion1Titulo: "¡Curso increíble!",
    opinion1: "Realmente disfruté cada lección del curso. La forma en que explican los conceptos complejos es asombrosa.",
    opinion1Nombre: "María García",
    opinion2Titulo: "Recomendado para todos",
    opinion2: "Si estás interesado en desarrollo backend, este curso es definitivamente el camino a seguir. Los ejemplos prácticos son muy útiles.",
    opinion2Nombre: "Juan Pérez",
    opinion3Titulo: "Gran apoyo",
    opinion3: "El equipo de soporte está siempre dispuesto a ayudar. No me sentí perdido en ningún momento durante el curso.",
    opinion3Nombre: "Andrés Martínez",
    preguntas1: "¿Cuánto tiempo tendré acceso al curso?",
    preguntas2: "¿Qué requisitos necesito cumplir?",
    preguntas3: "¿Recibiré un certificado al finalizar?",
    parrafoFinalTitulo: "¡Comienza tu viaje como desarrollador backend hoy!",
    parrafoFinal: "No pierdas la oportunidad de adentrarte en el mundo del desarrollo backend con Node.js. ¡Inscríbete ahora y comienza a transformar tus habilidades!",
    mobileSectionTitulo: "Aprende sobre la marcha",
    mobileSectionParrafo: "Accede a los contenidos desde tu dispositivo móvil y continúa aprendiendo estés donde estés.",
};

const cursoProcrastinacion = {
    pretitulo: "¡No esperes más, tene esa vida productiva y comprometida que queres!",
    titulo: "Curso para vencer la Procrastinación",
    aprender: "Vas a aprender",
    parrafoAprender1: `• Fundamentos de Prompt Engineering1`,
    parrafoAprender2: `• Fundamentos de Prompt Engineering2`,
    parrafoAprender3: `• Fundamentos de Prompt Engineering3`,
    parrafoAprender4: `• Fundamentos de Prompt Engineering4`,
    parrafoAprender5: `...y muchísimo más!`,
    precioTotal: "$5.664",
    precioConDescuento: "$1.699",
    tituloParrafo1: "Deja de lado la procrastinación",
    tituloParrafo2: "¿Qué es la procrastinación?",
    parrafo2: "La procrastinación es cuando posponemos hacer algo importante o necesario, como una tarea o responsabilidad, y en lugar de hacerlo en ese momento, lo dejamos para después. A diario, esto puede hacernos sentir mal porque sabemos que deberíamos estar haciendo esa tarea o responsabilidad, pero por alguna razón, simplemente no lo hacemos. La procrastinación puede afectarnos en diferentes áreas de nuestra vida, como el trabajo, la escuela o incluso las tareas diarias, y es importante entender cómo manejarla para ser más efectivos y sentirnos mejor con lo que hacemos..",
    parrafo1: "En este libro, desentrañaremos las raíces de la procrastinación, explorando desde el miedo y la falta de claridad hasta las distracciones modernas. Entenderás cómo esta fuerza invisible puede socavar tus esfuerzos y aprenderás a desarmarla.",
    beneficios: "Beneficios",
    parrafoBeneficios: "Mejoraras en tu desarrollo tanto personal como laboral. Ganaras hábitos, liberarás tiempo, fortalecerás tu autoconfianza, mejorarás tus relaciones y te acercarás a tus objetivos de manera constante. Vas a tener el control de tu tiempo y energía, permitiéndote aprovechar al máximo cada día y crear una vida más plena.",
    tituloAcceso: `sadasdasdadadadadaa crastinación!`,
    parrafoAcceso: `Recibilo para imprimir o leer desde tu celular o PC!!!!!!!!`,
    opinionesTitulo: 'Todo el mundo lo recomienda',
    opinion1Titulo: 'Muchas gracias locos!',
    opinion1: 'Aaslñdkaslñdkalsñdkalsñd alksdñlakdlsañkdeñlak adlñakdslñkalñdkalsñ adñlakslñdaklñaskdaldka lñskdalña kañlf alñk lakslgfaksf{lka a',
    opinion1Nombre: 'Carlos lopez',
    opinion2Titulo: 'Muchas gracias locos!',
    opinion2: 'Aaslñdkaslñdkalsñdkalsñd alksdñlakdlsañkdeñlak adlñakdslñkalñdkalsñ adñlakslñdaklñaskdaldka lñskdalña kañlf alñk lakslgfaksf{lka a',
    opinion2Nombre: 'Carlos lopez',
    opinion3Titulo: 'Muchas gracias locos!',
    opinion3: 'Aaslñdkaslñdkalsñdkalsñd alksdñlakdlsañkdeñlak adlñakdslñkalñdkalsñ adñlakslñdaklñaskdaldka lñskdalña kañlf alñk lakslgfaksf{lka a',
    opinion3Nombre: 'Carlos lopez',
    preguntas1: 'Para siempre',
    preguntas2: 'Internet',
    preguntas3: 'Garantia',
    parrafoFinalTitulo: 'Inicia hoy tu viaje!',
    parrafoFinal: 'Inicia ahoraaa',
    mobileSectionTitulo: 'El futuro es YA',
    mobileSectionParrafo: 'Este es el texto que va en la parte mobile',
}

var data;

switch (curso) {
    case 'backend':
        data = cursoBackend;
        break;
    case 'procrastinacion':
        data = cursoProcrastinacion;
        break;
    default:
        console.error('Curso no reconocido:', curso);
        break;
}

console.log(data)

               

async function cargarDatos() {
    document.getElementById('pretitulo').textContent = data.pretitulo;
    document.getElementById('titulo').textContent = data.titulo;
    document.getElementById('precioTotal').textContent = data.precioTotal;
    document.getElementById('precioConDescuento').textContent = data.precioConDescuento;
    document.getElementById('titulo-parrafo1').textContent = data.tituloParrafo1;
    document.getElementById('titulo-parrafo2').textContent = data.tituloParrafo2;
    document.getElementById('parrafo1').textContent = data.parrafo1;
    document.getElementById('beneficios').textContent = data.beneficios;
    document.getElementById('parrafo-beneficios').textContent = data.parrafoBeneficios;
    document.getElementById('parrafo2').textContent = data.parrafo2;
    document.getElementById('aprender').textContent = data.aprender;
    document.getElementById('parrafo-aprender1').textContent = data.parrafoAprender1;
    document.getElementById('parrafo-aprender2').textContent = data.parrafoAprender2;
    document.getElementById('parrafo-aprender3').textContent = data.parrafoAprender3;
    document.getElementById('parrafo-aprender4').textContent = data.parrafoAprender4;
    document.getElementById('parrafo-aprender5').textContent = data.parrafoAprender5;
    document.getElementById('parrafo-aprender6').textContent = data.parrafoAprender6;
    document.getElementById('acceso-titulo').textContent = data.tituloAcceso;
    document.getElementById('parrafo-acceso').textContent = data.parrafoAcceso;
    document.getElementById('opiniones-titulo').textContent = data.opinionesTitulo;
    document.getElementById('opinion1-titulo').textContent = data.opinion1Titulo;
    document.getElementById('opinion1').textContent = data.opinion1;
    document.getElementById('opinion1-nombre').textContent = data.opinion1Nombre;
    document.getElementById('opinion2-titulo').textContent = data.opinion2Titulo;
    document.getElementById('opinion2').textContent = data.opinion2;
    document.getElementById('opinion2-nombre').textContent = data.opinion2Nombre;
    document.getElementById('opinion3-titulo').textContent = data.opinion3Titulo;
    document.getElementById('opinion3').textContent = data.opinion3;
    document.getElementById('opinion3-nombre').textContent = data.opinion3Nombre;
    document.getElementById('preguntas1').textContent = data.preguntas1;
    document.getElementById('preguntas2').textContent = data.preguntas2;
    document.getElementById('preguntas3').textContent = data.preguntas3;
    document.getElementById('parrafo-final-titulo').textContent = data.parrafoFinalTitulo;
    document.getElementById('parrafo-final').textContent = data.parrafoFinal;
    document.getElementById('precioTotalFinal').textContent = data.precioTotal;
    document.getElementById('precioConDescuentoFinal').textContent = data.precioConDescuento;
    document.getElementById('mobile-section-titulo').textContent = data.mobileSectionTitulo;
    document.getElementById('mobile-section-parrafo').textContent = data.mobileSectionParrafo;

}

async function cargarImagenes() {
    producto1Img.src = `img/${curso}/producto1.png`
    producto2Img.src = `img/${curso}/producto2.png`
    producto2Img2.src = `img/${curso}/producto2.png`
    producto3Img.src = `img/${curso}/producto3.png`
    background.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('img/${curso}/background1.jpg')`;
    background2.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('img/${curso}/background2.jpg')`

}




cargarDatos();
cargarImagenes()


