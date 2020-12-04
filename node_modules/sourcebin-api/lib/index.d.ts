interface options {
  code?: string;
  title?: string;
}
interface get {
  url?: string;
}
export declare class SourceBin {
  static async postBin(text: options): Promise<string | any>;

  static async get(content: get): Promise<string | any>;
  /**
   *
   */
}
