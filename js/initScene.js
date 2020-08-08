export default function(gl)
{
	let horizAspect = 480.0/640.0;

	initBuffers(gl);
}


function initBuffers(gl) {
  let squareVerticesBuffer = gl.createBuffer();
  						 	 gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

  let vertices = [
    1.0,  1.0,  0.0,
    -1.0, 1.0,  0.0,
    1.0,  -1.0, 0.0,
    -1.0, -1.0, 0.0
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
}