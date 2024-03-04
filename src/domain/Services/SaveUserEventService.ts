import { Config } from '../Config'
import { UserEventValueObject } from '../Models/UserEventValueObject'
import { HTTPUserEventsRepository } from '../Repositories/HTTPUserEventsRepository'

type FactoryProps = {
  config: Config
}

type ConstructorProps = FactoryProps & {
  repository: HTTPUserEventsRepository
}

export class SaveUserEventService {
  protected _config: Config
  protected _repository: HTTPUserEventsRepository

  static create({ config }: FactoryProps) {
    const repository = HTTPUserEventsRepository.create({ config })
    return new SaveUserEventService({ config, repository })
  }

  constructor({ config, repository }: ConstructorProps) {
    this._config = config
    this._repository = repository
  }

  async save({ userEvent }: { userEvent: UserEventValueObject }) {
    return this._repository.saveUserEvent(userEvent)
  }
}
