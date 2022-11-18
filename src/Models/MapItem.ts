class MapItem {
  id: number;
  type: string;
  emoji: string;
  name: string;
  parts: Map<String, Map<String, String>>;

  constructor(
    id: number,
    type: string,
    emoji: string,
    name: string,
    parts: Map<String, Map<String, String>>
  ) {
    this.id = id;
    this.type = type;
    this.emoji = emoji;
    this.name = name;
    this.parts = parts;
  }
}

export default MapItem;
