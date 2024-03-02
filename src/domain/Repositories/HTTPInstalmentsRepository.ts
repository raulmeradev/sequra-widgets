import { Config } from '../Config'
import { InstalmentOption } from '../types'
import { ListInstalmentValueObject } from '../Models/ListInstalmentValueObject'
import { InstalmentsRepository } from './InstalmentsRepository'

type FactoryProps = {
  config: Config
}

type ConstructorProps = FactoryProps

export class HTTPInstalmentsRepository implements InstalmentsRepository {
  protected _config: Config

  static create({ config }: FactoryProps) {
    return new HTTPInstalmentsRepository({ config })
  }

  constructor({ config }: ConstructorProps) {
    this._config = config
  }

  async getCreditAgreements({ credit }: { credit: number }) {
    const url = new URL(this._config.get<string>('API_BASE_URL') + '/credit_agreements')
    url.searchParams.set('totalWithTax', `${credit * 100}`)

    try {
      const response = await fetch(url)
      const data: InstalmentOption[] | null = await response.json()

      return (
        data &&
        ListInstalmentValueObject.create({
          instalments: data,
        })
      )
    } catch (err) {
      console.error('Error in HTTPInstalmentsRepository.getCreditAgreements:', err)
      return null
    }
  }
}
