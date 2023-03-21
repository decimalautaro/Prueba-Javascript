# Challenge:

El desafío es hacer una aplicación web pequeña, en angular o react en donde se pueda realizar un pequeño login con una Wallet Address, es decir que pueda recibir una Wallet Adress cualquiera, con esa Wallet ver si hay una(Wallet) registrada para un usuario y pedir la contraseña para hacer el login.

Un plus que estaria bueno resolver, es que en lugar de que pongas la wallet manual, puedas reconocer la que esta en uso con tu wallet de metamask en el navegador.

Este usuario tiene que estar hardcodeado no hay problema con eso!

# DOCUMENTACIÓN DE LA APLICACIÓN.

### En este documento se encuentra la documentacion para correr la aplicación de la prueba tecnica.

## Descripcion:
Esta es una pequeña aplicación web que cuenta con un sistema de login. Si el usuario tiene instalada la extensión de Metamask en su navegador, la aplicación se conectará automáticamente a su billetera digital y mostrará la dirección de la misma. Además, en caso de que la dirección de la billetera del usuario esté registrada en la aplicación, se podrá iniciar sesión en el sistema. En caso contrario, se mostrará un mensaje de error. Esta aplicación utiliza ReactJS como framework de desarrollo y Material-UI para la interfaz de usuario.
  
### __Se usarón librerias como:__  

+ ***ReactJS:*** Un framework de JavaScript utilizado para la creación de aplicaciones web.

+ ***Material-UI:*** Una librería de componentes de interfaz de usuario para ReactJS.

+ ***Web3.js:*** Una librería de JavaScript que permite interactuar con la red Ethereum y acceder a información de la cadena de bloques, como direcciones de billeteras y transacciones.

+ ***Metamask:*** Una extensión para navegadores que permite a los usuarios interactuar con aplicaciones descentralizadas basadas en la red Ethereum.


## __1. Instalar dependencias en back-end y front-end:__
  
```
npm install

```


## __2. Cambiar datos del usuario harcodeado:__

+ Ir a la carpeta ***back-end/src/data/user.js***

```
export const user = {
    walletAddress : "colocar una wallet address valida o la que tengas cargada en metamask."
    password: "wallet123"
}

```
**Nota:** Se tiene que realizar este paso porque la aplicacion valida si hay un usuario con esa Wallet Address.


## __3. Inicializar proyecto en back-end y front-end:__

```
npm run dev

```