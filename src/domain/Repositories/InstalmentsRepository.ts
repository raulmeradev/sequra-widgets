import { ListInstalmentValueObject } from '../Models/ListInstalmentValueObject'

export interface InstalmentsRepository {
  getCreditAgreements({ credit }: { credit: number }): Promise<ListInstalmentValueObject | null>
}
