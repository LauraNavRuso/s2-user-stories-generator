'use strict';
//
// Vamos a crear un generador de historias de usuario. Una historia de usuario es una descripción simple de una característica nueva que queremos que tenga un programa pero enfocado desde el usuario que necesita esa nueva característica.
// Para definirlas seguimos una estructura muy simple:
// 	Yo como un <usuario>,
// 	necesito <funcionalidad>
// 	con la finalidad de <razón>.
//
// Vamos a poner un ejemplo
// 	Yo como un cliente de Netflix
// 	necesito más episodios de Stranger Things
// 	con la finalidad de que mi vida no sea un infierno.
//
// Pues vamos a crear un generador de historias de usuario usando JavaScript. Para ello, vamos a pedir los datos que necesitamos para definir la historia usando prompt: usuario, funcionalidad y razón. Con esta información, vamos a crear una ventana de alerta con la historia de usuario completa. ¡Vamos a ello!

var user = prompt ('¿Quién eres?');
var need = prompt ('¿Qué quieres?');
var reason = prompt ('¿Con la finalidad de qué?');

alert ('Yo como '+ user + ' necesito '+ need + ' con la finalidad ' + reason + '.' );
