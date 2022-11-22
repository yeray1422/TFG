interface MapItem {
  id: number;
  type: string;
  emoji: string;
  name: string;
  part: string;
  location: string[];
  description: string[];
  mock: Map<string, Map<string, string>>;
}

export default MapItem;
