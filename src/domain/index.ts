import { Config } from './Config'
import { GetInstalmentsForCreditUseCase } from './UseCases/GetInstalmentsForCreditUseCase'
import { SaveUserEventUseCase } from './UseCases/SaveUserEventUseCase'

const config = Config.create()
const getInstalmentsForCreditUseCase = GetInstalmentsForCreditUseCase.create({ config })
const saveUserEventUseCase = SaveUserEventUseCase.create({ config })

export { getInstalmentsForCreditUseCase, saveUserEventUseCase }
