import { useMemo, useRef, useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { InstalmentOption } from '../../domain/types'
import { useClickOutside } from '../../hooks/useClickOutside'

type InstalmentListProps = {
  options: InstalmentOption[]
  onSelect(item: InstalmentOption): void
  selection?: InstalmentOption
}

export const InstalmentList: React.FC<InstalmentListProps> = ({
  options,
  onSelect,
  selection,
}: InstalmentListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const listRef = useRef<HTMLDivElement>(null)

  const sortedOptions = useMemo(() => {
    if (!isOpen) return (selection && [selection]) || (options[0] && [options[0]]) || []
    if (!selection) return [...options]

    const otherOptions = options.filter(opt => opt.instalment_count !== selection.instalment_count)
    return [selection, ...otherOptions]
  }, [options, selection, isOpen])

  const onItemClick = (item: InstalmentOption) => {
    isOpen && onSelect(item)
    setIsOpen(v => !v)
  }

  useClickOutside({
    element: listRef.current,
    handler: () => setIsOpen(false),
  })

  return (
    <div className="border-gray-300 bg-white text-blue-950 border rounded-md" ref={listRef}>
      {sortedOptions.map((item, i) => {
        const description = `${item.instalment_count} cuotas de ${item.instalment_total.string}/mes`
        const borderCls = isOpen && i === 0 ? 'border-b border-b-gray-300' : ''

        return (
          <div
            key={item.instalment_count}
            className={`flex items-center place-content-between p-2 border-gray-300 cursor-pointer hover:bg-slate-200 ${borderCls}`}
            onClick={() => onItemClick(item)}
          >
            <span>{description}</span>

            {i === 0 && (
              <>
                <MdOutlineKeyboardArrowDown className={isOpen ? 'hidden' : 'block'} />
                <MdOutlineKeyboardArrowUp className={isOpen ? 'block' : 'hidden'} />
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
