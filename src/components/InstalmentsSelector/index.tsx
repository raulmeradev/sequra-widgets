import { useEffect, useState } from 'react'
import { InstalmentOption } from '../../domain/types'
import { getInstalmentsForCreditUseCase, saveUserEventUseCase } from '../../domain'
import { InstalmentList } from './InstalmentList'
import { InstalmentsInfoModal } from '../InstalmentsInfoModal'

type InstalmentsSelectorProps = {
  credit: number
}

export const InstalmentsSelector: React.FC<InstalmentsSelectorProps> = ({ credit }: InstalmentsSelectorProps) => {
  const [instalments, setInstalments] = useState<InstalmentOption[]>([])
  const [selection, setSelection] = useState<InstalmentOption>()
  const [showInfo, setShowInfo] = useState(false)
  const moreInfoFee = instalments[0]?.instalment_fee

  const onSelectOption = (instalment: InstalmentOption) => {
    setSelection(instalment)
  }

  const onMoreInfoClick = () => {
    moreInfoFee?.string && setShowInfo(true)
    saveUserEventUseCase.execute({ eventData: { context: 'checkoutWidget', type: 'moreInfoClicked' } })
  }

  const onMoreInfoClose = () => {
    setShowInfo(false)
    saveUserEventUseCase.execute({ eventData: { context: 'checkoutWidget', type: 'moreInfoClose' } })
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInstalmentsForCreditUseCase.execute({ credit })
      setInstalments(data)
      setSelection(undefined)
    }

    fetchData()
  }, [credit])

  return (
    <div className="border-blue-950 text-blue-950 border rounded p-5 h-32">
      <div className="flex justify-between pb-2 text-base font-medium">
        <span>Págalo en</span>
        <button onClick={onMoreInfoClick} className="font-light">
          Más info
        </button>
      </div>
      <div className="relative">
        <div className="absolute w-full">
          <InstalmentList options={instalments} onSelect={onSelectOption} selection={selection} />
        </div>
      </div>
      {showInfo && <InstalmentsInfoModal formattedFee={moreInfoFee?.string} onClose={onMoreInfoClose} />}
    </div>
  )
}
