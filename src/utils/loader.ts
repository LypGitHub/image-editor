export function imageLoader(url: string): void {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.crossOrigin = 'Anonymous';

        image.onload = function() {
            resolve(image);
        }

        image.onload = function() {
            reject(new Error('image onload error!'));
        }
        image.src = url;
    });
}