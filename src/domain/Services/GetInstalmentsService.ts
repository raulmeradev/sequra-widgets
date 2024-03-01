import { Config } from '../Config'
import { HTTPInstalmentsRepository } from '../Repositories/HTTPInstalmentsRepository'

type FactoryProps = {
  config: Config
}

type ConstructorProps = FactoryProps & {
  repository: HTTPInstalmentsRepository
}

export class GetInstalmentsService {
  protected _config: Config
  protected _repository: HTTPInstalmentsRepository

  static create({ config }: FactoryProps) {
    const repository = HTTPInstalmentsRepository.create({ config })
    return new GetInstalmentsService({ config, repository })
  }

  constructor({ config, repository }: ConstructorProps) {
    this._config = config
    this._repository = repository
  }

  async forCredit({ credit }: { credit: number }) {
    return this._repository.getCreditAgreements({ credit })
  }
}
