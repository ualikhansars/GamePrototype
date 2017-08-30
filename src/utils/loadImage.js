// load image
export const loadImage = (imgPath, callback) => {
    console.error('loadImage');
    let img = new Image;
    img.onload = () => {
        callback(null, img);
    };
    img.onerror = () => {
        let msg = 'Cannot load the image at ' + imgPath;
        callback(new Error(msg));
    };
    img.src = imgPath;
};
//# sourceMappingURL=loadImage.js.map