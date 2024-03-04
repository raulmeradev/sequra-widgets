import React from 'react'
import { vi } from 'vitest'
import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { saveUserEventUseCase } from '../../src/domain/index'
import { InstalmentsSelector } from '../../src/components/InstalmentsSelector/index'
import { instalmentsUseCaseResponse39999 } from '../domain/fixtures/UseCaseResponses'

describe('Testing InstalmentsInfoModal', () => {
  it('Should render the InstalmentsInfoModal on click "More info"', async () => {
    const spyEventsUseCase = vi.spyOn(saveUserEventUseCase, 'execute')
    const { getByRole } = render(<InstalmentsSelector credit={399.99} />)
    const moreInfoBtn = getByRole('button', {
      name: /más info/i,
    })

    expect(moreInfoBtn).toBeTruthy()
    userEvent.click(moreInfoBtn)

    await waitFor(() => expect(spyEventsUseCase).toHaveBeenCalledTimes(1))
    expect(screen.getByTestId('info-modal')).toBeTruthy()

    const footerRX = new RegExp(
      `además en el importe mostrado ya se incluye la cuota única mensual de ${instalmentsUseCaseResponse39999[0].instalment_fee.string}, por lo que no tendrás ninguna sorpresa.`,
      'i',
    )
    expect(screen.getByText(footerRX)).toBeTruthy()
  })
})
