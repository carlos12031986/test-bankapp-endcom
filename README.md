# Manual de instalacion

  1.Establecer las rutas productivas que se van a consumir en el archivo enviroment.prod si es para despliegue a productivo.

  2.Compilar el proyecto con la instrucción 'ng build --configuration production' si es para despliegue a productivo, si es para despliegue en un servidor de pruebas  ejecute 'ng build'.

  3.El proceso anterior genera una carpeta llamada dist dentro del directorio del proyecto el cual contiene todos los archivos necesarios que se deben subir al servidor.

  4.Los archivos de la carpeta dist se deben subir a la carpeta raíz del servidor , luego acceder al dominio del sitio para validar.
   