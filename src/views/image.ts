import { IImage } from '../interfaces';

export default abstract class ImageView implements IImage {
    constructor() {
        console.log('this');
    }
}
