import React from 'react'
import { vi } from 'vitest'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getInstalmentsForCreditUseCase } from '../../src/domain/index'
import { InstalmentsSelector } from '../../src/components/InstalmentsSelector/index'
import { instalmentsUseCaseResponse39999 } from '../domain/fixtures/UseCaseResponses'

describe('Testing InstalmentsSelector', () => {
  it('Should render the InstalmentsSelector', async () => {
    const { getByText, getByRole, getByTestId } = render(<InstalmentsSelector credit={399.99} />)
    const labelText = getByText(/págalo en/i)
    const moreInfoBtn = getByRole('button', {
      name: /más info/i,
    })

    expect(labelText).toBeTruthy()
    expect(moreInfoBtn).toBeTruthy()

    const instalmentList = getByTestId('instalment-list')
    expect(instalmentList).toBeTruthy()
  })

  it('Should expand the InstalmentsSelector list on click', async () => {
    const spyInstalmentsUseCase = vi.spyOn(getInstalmentsForCreditUseCase, 'execute')
    const { getByText, getByTestId } = render(<InstalmentsSelector credit={399.99} />)

    const instalmentList = getByTestId('instalment-list')

    const { instalment_count, instalment_total } = instalmentsUseCaseResponse39999[0]
    const firstItemText = await waitFor(() =>
      getByText(new RegExp(`${instalment_count} cuotas de ${instalment_total.string}/mes`, 'i')),
    )

    expect(spyInstalmentsUseCase).toHaveBeenCalledTimes(1)
    expect(firstItemText).toBeTruthy()
    expect(instalmentList.childNodes.length).toBe(1)

    const firstItem = firstItemText.closest('div')
    userEvent.click(firstItem!)

    await waitFor(() => expect(instalmentList.childNodes.length).toBe(3))
  })
})
