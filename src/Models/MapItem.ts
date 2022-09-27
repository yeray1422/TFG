class MapItem {
  id: number;
  name: string;
  partNumber: string;
  locationImages: Array<string>;

  constructor(id: number, name: string, partNumber: string, locationImages: Array<string>) {
    this.id = id;
    this.name = name;
    this.partNumber = partNumber;
    this.locationImages = locationImages;
  }
}

export default MapItem;