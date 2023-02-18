export class ConsumerError extends Error {
  url: string;
  constructor(msg: string, url: string) {
    super(msg);
    this.url = url;
  }

  printWarning() {
    console.log(`Failure hitting carbon api for URL: ${this.url}`);
  }
}
