export function createCanvas(width: number = 4, height: number = 4): HTMLCanvasElement {
    const canvas = document.createElement('canvas');

    canvas.width = width;
    canvas.height = height;
    return canvas;
}