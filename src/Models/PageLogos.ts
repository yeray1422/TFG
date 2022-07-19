class PageLogos {
  id: number;
  page: string;
  logo: string;
  description: string;

  constructor(id: number, page: string, logo: string, description: string) {
    this.id = id;
    this.page = page;
    this.logo = logo;
    this.description = description;
  }
}

export default PageLogos;
