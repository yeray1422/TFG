class MapItem {
  id: number;
  type: string;
  emoji: string;
  name: string;
  part: string;
  location: string[];
  description: string[];

  constructor(
    id: number,
    type: string,
    emoji: string,
    name: string,
    part: string,
    location: string[],
    description: string[]
  ) {
    this.id = id;
    this.type = type;
    this.emoji = emoji;
    this.name = name;
    this.part = part;
    this.location = location;
    this.description = description;
  }
}

export default MapItem;
