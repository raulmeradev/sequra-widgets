export type FormattedValue = {
  value: number
  string: string
}

export type InstalmentOption = {
  instalment_count: number
  instalment_fee: FormattedValue
  instalment_total: FormattedValue
}

export type EventData = {
  context: string
  type: string
  [key: string]: string | number
}
