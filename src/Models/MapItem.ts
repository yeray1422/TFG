interface MapItem {
  id: number;
  type: string;
  emoji: string;
  name: string;
  usage: string;
  pieces: string[];
  locations: string[][];
  descriptions: string[][];
}

export default MapItem;
