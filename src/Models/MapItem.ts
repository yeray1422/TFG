interface MapItem {
  id: number;
  type: string;
  emoji: string;
  name: string;
  usage: string;
  data: Record<string, Record<string, Record<string, string>>>;
}

export default MapItem;
