export const getImageObject = async (image: File) => {
    const id = image.name.replace(/\s+/g, '_').toLowerCase().replace(/[^a-z0-9_]/g, '');
    const thumbnailLink = URL.createObjectURL(image);
    const webContentLink = URL.createObjectURL(image);
    const name = image.name;
    const dimensions = await getImageDimensions(image);
    const imageMediaMetadata = {
        height: dimensions.height,
        width: dimensions.width
    };
    return {
        "id": id,
        "thumbnailLink": thumbnailLink,
        "webContentLink": webContentLink,
        "name": name,
        "imageMediaMetadata": imageMediaMetadata
    };
}

const getImageDimensions = (file: File): Promise<{ height: number; width: number }> => {
    return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
            resolve({
                height: img.height,
                width: img.width,
            });
        };

        img.src = URL.createObjectURL(file);
    });
};