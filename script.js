const boton = document.querySelector('button');

boton.addEventListener("click", function() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
})

const contenedor = document.querySelector('.contenedor');

function crearNoticias(noticias) {
    for (const noticia of noticias) {
        const template = `
        <div class="item">
            <img src="${noticia.urlImagen}">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.contenido}</p>
        </div>
        `;
        contenedor.innerHTML += template;
    }
};

const noticias = [
    {
        titulo: 'El tigre',
        urlImagen: './imagenes/tiger.jpg',
        contenido: `El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae)
        pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y
        es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de
        los fósiles de félidos de mayor tamaño.`
    },
    {
        titulo: 'El leon',
        urlImagen: './imagenes/leon.jpg',
        contenido: `El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae)
        pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y
        es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de
        los fósiles de félidos de mayor tamaño.`
    },
    {
        titulo: 'El leopardo',
        urlImagen: './imagenes/leopardo.jpg',
        contenido: `El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás
        félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el
        hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje
        completamente oscuro como pantera negra (melánico).`
    },
    {
        titulo: 'La pantera negra',
        urlImagen: './imagenes/pantera-negra.jpg',
        contenido: `La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del
        leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni
        siquiera una subespecie, es simplemente una variación negra de estos animales.`
    },
    {
        titulo: 'El jaguar',
        urlImagen: './imagenes/jaguar.jpg',
        contenido: `El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y
        género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También
        es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera
        leo).`
    },
    {
        titulo: 'El guepardo',
        urlImagen: './imagenes/chita.jpg',
        contenido: `El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único
        representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre
        más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos
        metros.`
    }
];

crearNoticias(noticias);