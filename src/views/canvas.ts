import { createCanvas } from '../utils/canvas-helper';

export default abstract class Canvas {
    $id: Symbol = Symbol();
    $canvas: HTMLCanvasElement = createCanvas();

    _cacheCanvas = null;

    constructor() {
    }

    public getContext() {
        return this.$canvas.getContext('2d');
    }

    public update() {
        const context = this.getContext();

        if (this._cacheCanvas) {
            const { width, height } = this._cacheCanvas;

            context.drawImage(this._cacheCanvas, 0, 0, width, height);
        }
    }

    public getElement() {
        return this.$canvas;
    }
}