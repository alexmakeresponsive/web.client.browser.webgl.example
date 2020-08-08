export default function(gl)
{
    let fragmentShader = getShader(gl, "shader-fs");
    let vertexShader = getShader(gl, "shader-vs");
  
    // создать шейдерную программу
  
    let shaderProgram = gl.createProgram();
					    gl.attachShader(shaderProgram, vertexShader);
					    gl.attachShader(shaderProgram, fragmentShader);
					    gl.linkProgram(shaderProgram);
  
    // Если создать шейдерную программу не удалось, вывести предупреждение
  
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert("Unable to initialize the shader program.");
    }
  
    gl.useProgram(shaderProgram);
  
    let vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    						  	  gl.enableVertexAttribArray(vertexPositionAttribute);
}


function getShader(gl, id) {
  let shaderScript, theSource, currentChild, shader;
  
  shaderScript = document.getElementById(id);
  
  if (!shaderScript) {
    return null;
  }
  
  theSource = "";
  currentChild = shaderScript.firstChild;
  
  while(currentChild) {
    if (currentChild.nodeType == currentChild.TEXT_NODE) {
      theSource += currentChild.textContent;
    }
    
    currentChild = currentChild.nextSibling;
  }
  
  if (shaderScript.type == "x-shader/x-fragment") {
     shader = gl.createShader(gl.FRAGMENT_SHADER);
   } else if (shaderScript.type == "x-shader/x-vertex") {
     shader = gl.createShader(gl.VERTEX_SHADER);
   } else {
      // неизвестный тип шейдера
      return null;
   }
   
   gl.shaderSource(shader, theSource);
    
     // скомпилировать шейдерную программу
     gl.compileShader(shader);  
    
     // Проверить успешное завершение компиляции
     if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {  
         alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));  
         return null;  
     }
    
     return shader;
}
