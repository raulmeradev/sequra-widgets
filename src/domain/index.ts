import { Config } from './Config'
import { GetInstalmentsForCreditUseCase } from './UseCases/GetInstalmentsForCreditUseCase'

const config = Config.create()
const getInstalmentsForCreditUseCase = GetInstalmentsForCreditUseCase.create({ config })

export { getInstalmentsForCreditUseCase }
