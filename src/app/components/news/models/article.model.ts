export class Article {
  private readonly imgUrl: string;
  private readonly headline: string;
  private readonly description: string;

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
