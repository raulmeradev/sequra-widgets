type ConfigProps = {
  [key: string]: unknown
}

export class Config {
  protected _config: ConfigProps

  static create() {
    const API_BASE_URL = 'http://localhost:8080'

    return new Config({ API_BASE_URL })
  }

  constructor(config: ConfigProps) {
    this._config = config
  }

  get<T>(key: string) {
    return this._config[key] as T
  }

  set(key: string, value: unknown) {
    this._config[key] = value
    return this
  }
}
