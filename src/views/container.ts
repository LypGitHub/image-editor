import { DEFAULT_CONTAINER_OPTION } from '../constants';
import Canvas from './canvas';
import { IContainer } from '../interfaces';

export default abstract class Container implements IContainer extends Canvas {
    config: object = DEFAULT_CONTAINER_OPTION;
 
    constructor(option?: object = {}, childrens>: array = []) {
        super(this, option);

        Object.assign(this.config, option);

        this.render(childrens);
    }

    get fixScreen() {
        return this.config.fixScreen;
    }

    set fixScreen(value) {
        this.config.fixScreen = !!value;
        this.update();
    }

    public addChildren(children?: object) {
    }

    public render(childrens?: array = []) {
        if (childrens.length) {
            childrens.forEach(element => {
                const { type } = element;

                if (type) {

                }
            });
        }
    }
}