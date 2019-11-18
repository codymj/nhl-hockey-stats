export class Article {
  private imgUrl: string;
  private headline: string;
  private description: string;

  constructor(imgUrl: string, headline: string, description: string) {
    this.imgUrl = imgUrl;
    this.headline = headline;
    this.description = description;
  }

  public getImgUrl(): string {
    return this.imgUrl;
  }

  public getHeadline(): string {
    return this.headline;
  }

  public getDescription(): string {
    return this.description;
  }
}
