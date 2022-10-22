class PageItem {
  id: number;
  title: string;
  image: string;
  description: string;
  page: string;

  constructor(id: number, title: string, image: string, description: string, page: string) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.page = page;
  }
}

export default PageItem;
