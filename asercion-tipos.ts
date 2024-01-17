
const canvas  = document.getElementById('canvas') as HTMLCanvasElement;

// null si no lo encuentra 
// HTMLElement si lo encuentra 

// ??? como sabe TypeSript que realmente

if (canvas != null && canvas instanceof HTMLCanvasElement ){
    const ctx = canvas.getContext('2d');
} 