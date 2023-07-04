import { API_DOMAIN } from './env';

export abstract class HttpRepository {
  protected apiDomain = '';

  protected endpoint = '';

  protected headers: Headers = {};

  constructor() {
    this.endpoint = '';
    this.apiDomain = API_DOMAIN;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  /**
   * Method to modify the current config of th request
   * necessary when you want to modify some parameters like
   * domain, endpoint or add headers before you execute the petition
   *
   * @example
   * configRequest({
   *   apiDomain: 'my-domain.com',
   *   endpoint: '/order',
   *   headers: {
   *     'Content-Type': string
   *   }
   * })
   */
  protected configRequest(config: ConfigRequest): void {
    this.endpoint += config.endpoint;
    this.apiDomain = config.apiDomain || this.apiDomain;
    this.headers = {
      ...this.headers,
      ...config.headers
    };
  }

  /**
   * Method to add the token to the header of the request
   */
  protected useToken(token: string): void {
    this.headers = {
      ...this.headers,
      authorization: token
    };
  }

  /**
   * Method to build the url with the current configuration of th request
   * This method must be used inside of some of the petition methods (get, post, put or delete)
   *
   * @example
   * const res = await fetch(urlBuilder(), config)
   */
  protected urlBuilder(): string {
    return `${this.apiDomain}${this.endpoint}`;
  }

  protected abstract get(): Promise<unknown | null>;

  protected abstract post(data?: unknown): Promise<unknown | null>;

  protected abstract put(data?: unknown): Promise<unknown | null>;

  protected abstract delete(): Promise<unknown | null>;
}

export type ConfigRequest = {
  endpoint: string;
  apiDomain?: string;
  headers?: Headers;
};

export type Headers = Record<string, string>;
