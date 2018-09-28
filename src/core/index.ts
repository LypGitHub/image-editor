import Container from '../views/container';

export function addContainer(el?: HTMLElement = document.body, option?: Object = {}): Object {
    const container = new Container();

    el.appendChild(container.getElement());

    return container;
};