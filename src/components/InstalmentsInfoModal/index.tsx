import { Fragment, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { GrMoney } from 'react-icons/gr'
import { TbPigMoney } from 'react-icons/tb'
import { FaRegCreditCard } from 'react-icons/fa6'
import { BsDot } from 'react-icons/bs'

type InstalmentsInfoModalProps = {
  formattedFee: string
  onClose(): void
}

const detailList: [string, ReactNode][] = [
  ['Fracciona tu pago solo con un coste fijo por cuota.', <GrMoney size={25} />],
  ['Ahora solo pagas la primera cuota.', <TbPigMoney size={25} />],
  ['El resto de pagos se cargarán automáticamente a tu tarjeta.', <FaRegCreditCard size={25} />],
]

export const InstalmentsInfoModal: React.FC<InstalmentsInfoModalProps> = ({ formattedFee, onClose }) => {
  return createPortal(
    <>
      <div className="fixed w-full h-full left-0 top-0 bg-white opacity-80 z-10"></div>
      <div onClick={() => onClose()} className="fixed w-full h-full left-0 top-0 grid place-items-center z-20 ">
        <div
          onClick={ev => ev.stopPropagation()}
          className="w-full max-w-96 bg-white border-2 border-blue-950 rounded-lg pt-5 pb-8 px-7"
        >
          <div className="text-center text-sm font-medium mb-1">seQura</div>
          <div className="text-center text-lg font-semibold mb-8">Fracciona tu pago</div>

          <div className="grid grid-rows-3 grid-cols-[1fr_auto] items-center gap-6 mb-8">
            {detailList.map(([text, icon]) => (
              <Fragment key={text}>
                <div className="flex items-start">
                  <span className="text-3xl font-medium mr-1">
                    <BsDot size={20} />
                  </span>
                  <span className="text-[13px] font-medium">{text}</span>
                </div>
                <div className="border border-black rounded-sm py-2 px-6">{icon}</div>
              </Fragment>
            ))}
          </div>

          <div className="text-center text-xs">
            Además en el importe mostrado ya se incluye la cuota única mensual de {formattedFee}, por lo que no tendrás
            ninguna sorpresa.
          </div>
        </div>
      </div>
    </>,
    document.body,
  )
}
