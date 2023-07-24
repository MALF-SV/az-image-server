import { RESTDataSource } from '@apollo/datasource-rest';

class ImagesAPI extends RESTDataSource {
  override baseURL = 'https://placekeanu.com/';

  async getImage(
    width: number,
    height: number,
    young: boolean,
    grayscale: boolean,
  ): Promise<any> {
    const y = young ? 'y' : '';
    const g = grayscale ? 'g' : '';
    const path = `${width}/${height}/${y}${g}`;
    return await this.get<any>(path);
  }
}

export default ImagesAPI;
