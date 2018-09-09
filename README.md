1. instalar firebasetools
--------------------------

 npm install -g firebase-tools

2. actualizar a la version mas reciente
----------------------------------------

 npm install firebase-functions@latest firebase-admin@latest --save

3. iniciar sesion en firebase
------------------------------

 firebase login
 firebase login --interactive # si queremos ejecutar en gitbash windows
 firebase login --no-localhost # en caso tengas bloqueado el puerto 9001
 firebase login --reauth # forzar la reautenticacion 

# ojo con el parametro --debug muestra información adicional del proceso 

4. inicializar un proyecto firebase 
 firebase init

#elegir el tipo de proyecto elegir functions
#elegir la bd a la que vas a conectarte

 firebase list #muestra la lista de bases de datos asociadas y resalta la base que estas utilizando

5. deployar cloud functions
----------------------------

 firebase deploy --only functions