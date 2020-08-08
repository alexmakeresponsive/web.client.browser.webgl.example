import initWebGL from '/js/initWebGL.js';
import initShaders from '/js/initShaders.js';

import initScene from '/js/initScene.js';
import drawScene from '/js/drawScene.js';


document.body.onload = function() {
	console.warn("document.body.onload");
	
	let gl; // глобальная переменная для контекста WebGL

	let canvas = document.getElementById("glcanvas");

		 gl = initWebGL(canvas);      // инициализация контекста GL
	if (!gl) 
	{
		returt;
	}
	
	gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // установить в качестве цвета очистки буфера цвета черный, полная непрозрачность
	gl.enable(gl.DEPTH_TEST);                               // включает использование буфера глубины
	gl.depthFunc(gl.LEQUAL);                                // определяет работу буфера глубины: более ближние объекты перекрывают дальние
	gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // очистить буфер цвета и буфер глубины.
	
	// gl.viewport(0, 0, canvas.width, canvas.height);
	
	initShaders(gl);
	
	initScene(gl);
	drawScene(gl);
};