class MapItem {
  id: number;
  name: string;
  parts: Map<String, Map<String, String>>

  constructor(id: number, name: string, parts: Map<String, Map<String, String>>) {
    this.id = id;
    this.name = name;
    this.parts = parts;
  }
}

export default MapItem;