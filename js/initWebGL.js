export default function(canvas)
{
    let gl = null;
  
    try {
      // Попытаться получить стандартный контекст. Если не получится, попробовать получить экспериментальный.
      gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e) {}
  
    // Если мы не получили контекст GL, завершить работу
    if (!gl) {
      alert("Unable to initialize WebGL. Your browser may not support it.");
      gl = null;
    }
  
    return gl;
}