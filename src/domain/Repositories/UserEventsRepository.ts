import { UserEventValueObject } from '../Models/UserEventValueObject'

export interface UserEventsRepository {
  saveUserEvent(userEvent: UserEventValueObject): Promise<boolean>
}
