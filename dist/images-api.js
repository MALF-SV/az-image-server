import { RESTDataSource } from '@apollo/datasource-rest';
class ImagesAPI extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = 'https://placekeanu.com/';
    }
    async getImage(width, height, young, grayscale) {
        const y = young ? 'y' : '';
        const g = grayscale ? 'g' : '';
        const path = `${width}/${height}/${y}${g}`;
        return await this.get(path);
    }
}
export default ImagesAPI;
