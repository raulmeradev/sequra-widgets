import { InstalmentOption } from '../types'

export class InstalmentValueObject {
  protected _instalmentCount: InstalmentOption['instalment_count']
  protected _instalmentFee: InstalmentOption['instalment_fee']
  protected _instalmentTotal: InstalmentOption['instalment_total']

  static create(data: InstalmentOption) {
    return new InstalmentValueObject(data)
  }

  constructor({ instalment_count, instalment_fee, instalment_total }: InstalmentOption) {
    this._instalmentCount = instalment_count
    this._instalmentFee = instalment_fee
    this._instalmentTotal = instalment_total
  }

  instalmentCount() {
    return this._instalmentCount
  }

  instalmentFee() {
    return this._instalmentFee
  }

  instalmentTotal() {
    return this._instalmentTotal
  }

  serialize(): InstalmentOption {
    return {
      instalment_count: this.instalmentCount(),
      instalment_fee: this.instalmentFee(),
      instalment_total: this.instalmentTotal(),
    }
  }
}
