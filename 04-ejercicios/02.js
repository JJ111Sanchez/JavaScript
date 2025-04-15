/*
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

/* function nombreResolucion(ancho, alto){
    if(ancho >= 7680 && alto >= 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160){
        return '4K'; 
    } else if (ancho >= 2560 && alto >= 1440){
        return 'WQHD'; 
    } else if (ancho >= 1920 && alto >= 1080){
        return 'FHD'; 
    } else if (ancho >= 1280 && alto >= 720){
        return 'HD'; 
    } else {
        return false;
    }
}

let nombre = nombreResolucion(5366, 3768);
console.log(nombre);
 */

////////////////////////////////////////////////
/* 
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 
function calidadResolucion(ancho, alto) {
    if(ancho >= 7680 && alto >=4320){
        return 'Calidad 8K';
    }else if(ancho >= 3840 && alto >= 2160){    
        return 'Calidad 4k';
    }else if(ancho >= 2560 && alto >= 1440){    
        return 'Calidad WQHD';
    }else if(ancho >= 1920 && alto >= 1080){    
        return 'FHD';
    }else if(ancho >= 1280 && alto >= 720){    
        return 'HD';
    }else{    
        return false;
    }
}
let calRes = calidadResolucion(4000, 5000);
console.log(calRes); */

////////////////////////////////////////////////

/*  * Nombre: cantidadHelado x precioHelado
 * ConoFresa 1 x 7000
 * VasoHelado 1 x 6000
 * Cucurucho 1 x 3000
 * Cono 1 x 2000
 

function venderHelado(cantidadHelado, precioHelado){
    if(cantidadHelado >= 1 && precioHelado === 7000){
        return 'Delicioso Cono Fresa, Disfrutalo';
    }else if(cantidadHelado >= 1 && precioHelado === 6000){
        return 'Vaso de Helado, Fantastica Eleccion';
    }else if(cantidadHelado >= 1 && precioHelado === 3000){
        return 'Hmmm... Cucuruchoo!!!';
    }else if(cantidadHelado >= 1 && precioHelado === 2000){
        return 'Quieres chispitas?';
    }else{
        false;
    }
}

let venHel = venderHelado(6, 1000);
console.log(venHel); */

///////////////////////////////////////////////

/*
Nombre: cantidadLicor x precioLicor
 * Cerveza 1 x 7000
 * Aguardiente 1 x 25000
 * Ron 1 x 30000
 * Brandy 1 x 50000
*/ 

function venderLicor(cantidadLicor, precioLicor){
    if(cantidadLicor >= 1 && precioLicor === 7000){
        return 'Cerveza para el calor y la sed';
    }else if(cantidadLicor >= 1 && precioLicor === 25000){
        return 'Aguardiente antioqueño';
    }else if(cantidadLicor >= 1 && precioLicor === 30000){
        return 'Ron Caldas Esencial';
    }else if(cantidadLicor >= 1 && precioLicor === 50000){
        return 'Domeco de antaño';
    }else{
        false;
    }
}

let venLic = venderLicor(1, 25000);
console.log(venLic);


