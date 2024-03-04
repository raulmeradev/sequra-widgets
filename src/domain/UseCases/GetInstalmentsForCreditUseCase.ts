import { Config } from '../Config'
import { GetInstalmentsService } from '../Services/GetInstalmentsService'

type FactoryProps = {
  config: Config
}

type ConstructorProps = FactoryProps & {
  service: GetInstalmentsService
}

export class GetInstalmentsForCreditUseCase {
  protected _config: Config
  protected _service: GetInstalmentsService

  static create({ config }: FactoryProps) {
    const service = GetInstalmentsService.create({ config })
    return new GetInstalmentsForCreditUseCase({ config, service })
  }

  constructor({ config, service }: ConstructorProps) {
    this._config = config
    this._service = service
  }

  async execute({ credit }: { credit: number }) {
    const result = await this._service.forCredit({ credit })
    return result?.serialize() ?? []
  }
}
