import { InstalmentOption } from '../types'
import { InstalmentValueObject } from './InstalmentValueObject'

type FactoryProps = {
  instalments: InstalmentOption[]
}

type ConstructorProps = {
  value: InstalmentValueObject[]
}

export class ListInstalmentValueObject {
  protected _value: InstalmentValueObject[]

  static create({ instalments }: FactoryProps) {
    return new ListInstalmentValueObject({ value: instalments.map(InstalmentValueObject.create) })
  }

  constructor({ value }: ConstructorProps) {
    this._value = value
  }

  value() {
    return this._value
  }

  serialize(): InstalmentOption[] {
    return this.value().map(instalment => instalment.serialize())
  }
}
