import { Config } from '../Config'
import { EventData } from '../types'
import { UserEventValueObject } from '../Models/UserEventValueObject'
import { SaveUserEventService } from '../Services/SaveUserEventService'

type FactoryProps = {
  config: Config
}

type ConstructorProps = FactoryProps & {
  service: SaveUserEventService
}

export class SaveUserEventUseCase {
  protected _config: Config
  protected _service: SaveUserEventService

  static create({ config }: FactoryProps) {
    const service = SaveUserEventService.create({ config })
    return new SaveUserEventUseCase({ config, service })
  }

  constructor({ config, service }: ConstructorProps) {
    this._config = config
    this._service = service
  }

  async execute({ eventData }: { eventData: EventData }) {
    const userEvent = UserEventValueObject.create(eventData)
    const result = await this._service.save({ userEvent })
    return result
  }
}
