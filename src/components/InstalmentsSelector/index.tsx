import { useState } from 'react'
import { InstalmentOption } from './types'
import { InstalmentList } from './InstalmentList'

const instalments: InstalmentOption[] = [
  {
    instalment_count: 3,
    instalment_fee: { value: 300, string: '3,00 €' },
    instalment_total: { value: 5300, string: '53,00 €' },
  },
  {
    instalment_count: 6,
    instalment_fee: { value: 300, string: '3,00 €' },
    instalment_total: { value: 2800, string: '28,00 €' },
  },
  {
    instalment_count: 12,
    instalment_fee: { value: 300, string: '3,00 €' },
    instalment_total: { value: 1550, string: '15,50 €' },
  },
]

export const InstalmentsSelector: React.FC = () => {
  const [selection, setSelection] = useState<InstalmentOption>()

  const onSelectOption = (instalment: InstalmentOption) => {
    setSelection(instalment)
  }

  return (
    <div className="border-blue-950 text-blue-950 border rounded p-5 h-32">
      <div className="flex place-content-between pb-2 text-base font-medium">
        <span>Págalo en</span>
        <button className="font-light">Más info</button>
      </div>
      <div className="relative">
        <div className="absolute w-full">
          <InstalmentList options={instalments} onSelect={onSelectOption} selection={selection} />
        </div>
      </div>
    </div>
  )
}
