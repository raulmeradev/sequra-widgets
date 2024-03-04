import { getInstalmentsForCreditUseCase } from '../../src/domain/index'
import { instalmentsUseCaseResponse39999, instalmentsUseCaseResponse45000 } from './fixtures/UseCaseResponses'

describe('Testing GetInstalmentsForCreditUseCase', () => {
  it('Should return installments for credit of 399,99 €', async () => {
    const result = await getInstalmentsForCreditUseCase.execute({ credit: 399.99 })
    expect(result).toEqual(instalmentsUseCaseResponse39999)
  })

  it('Should return installments for credit of 450,00 €', async () => {
    const result = await getInstalmentsForCreditUseCase.execute({ credit: 450.0 })
    expect(result).toEqual(instalmentsUseCaseResponse45000)
  })

  it('Should return empty array for an invalid credit', async () => {
    const result = await getInstalmentsForCreditUseCase.execute({ credit: 0 })
    expect(result).toEqual([])
  })
})
