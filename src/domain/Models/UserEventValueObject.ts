import { EventData } from '../types'

export class UserEventValueObject {
  protected _context: EventData['context']
  protected _type: EventData['type']
  protected _extraInfo: { [key: string]: string | number }

  static create(data: EventData) {
    return new UserEventValueObject(data)
  }

  constructor({ context, type, ...other }: EventData) {
    this._context = context
    this._type = type
    this._extraInfo = other
  }

  context() {
    return this._context
  }

  type() {
    return this._type
  }

  extraInfo() {
    return this._extraInfo
  }

  serialize(): EventData {
    return {
      context: this.context(),
      type: this.type(),
      ...this.extraInfo(),
    }
  }
}
