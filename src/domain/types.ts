export type FormattedValue = {
  value: number
  string: string
}

export type InstalmentOption = {
  instalment_count: number
  instalment_fee: FormattedValue
  instalment_total: FormattedValue
}
