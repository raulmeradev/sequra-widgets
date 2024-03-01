import { Config } from '../Config'
import { UserEventValueObject } from '../Models/UserEventValueObject'
import { UserEventsRepository } from './UserEventsRepository'

type FactoryProps = {
  config: Config
}

type ConstructorProps = FactoryProps

export class HTTPUserEventsRepository implements UserEventsRepository {
  protected _config: Config

  static create({ config }: FactoryProps) {
    return new HTTPUserEventsRepository({ config })
  }

  constructor({ config }: ConstructorProps) {
    this._config = config
  }

  async saveUserEvent(userEvent: UserEventValueObject) {
    const url = new URL(this._config.get<string>('API_BASE_URL') + '/events')
    const params = userEvent.serialize()

    try {
      const response = await fetch(url, { method: 'POST', body: JSON.stringify(params) })
      return response.status === 200
    } catch (err) {
      console.error('Error in HTTPUserEventsRepository.saveUserEvent:', err)
      return false
    }
  }
}
