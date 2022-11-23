interface MapItem {
  id: number;
  type: string;
  emoji: string;
  name: string;
  pieces: string[];
  locations: string[][];
  descriptions: string[][];
}

export default MapItem;
