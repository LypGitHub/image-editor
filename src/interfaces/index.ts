export interface IPosition {
    x: Number,
    y: Number,
}

export interface ITransform {
    localTransform: ILocalTramsform,
}

export interface ILayout {
    $loaded: Bolean,
}

export interface IBase {
    readonly $id: Symbol,
    readonly $canvas: HTMLCanvasElement,

    left: Number,
    top: Number,
    width: Number,
    height: Number,

    opacity: Number,
    transform: ITransform,
    position: IPosition,
}

export interface IImage extends IBase {
    url: String,

    $width: Number,
    $height: Number,
}

export interface IContainer extends IBase {
    fixScreen: Boolean,
    children: Array,

    border: Bolean,
}

