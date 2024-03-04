import { saveUserEventUseCase } from '../../src/domain/index'

describe('Testing SaveUserEventUseCase', () => {
  it('Should return true on save user event', async () => {
    const result = await saveUserEventUseCase.execute({
      eventData: {
        context: 'checkoutWidget',
        type: 'simulatorInstalmentChanged',
        selectedInstalment: 3,
      },
    })

    expect(result).toBe(true)
  })
})
