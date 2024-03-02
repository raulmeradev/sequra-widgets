import { HttpResponse, http } from 'msw'
import { Config } from '../../../src/domain/Config'
import { instalmentsAPIResponse39999, instalmentsAPIResponse45000 } from './APIResponses'

const config = Config.create()
const API_BASE_URL = config.get('API_BASE_URL')

export const handlers = [
  http.get(API_BASE_URL + '/credit_agreements', ({ request }) => {
    const url = new URL(request.url)
    const totalWithTax = url.searchParams.get('totalWithTax')
    const response =
      (totalWithTax === '39999' && instalmentsAPIResponse39999) ||
      (totalWithTax === '45000' && instalmentsAPIResponse45000) ||
      null

    return HttpResponse.json(response)
  }),

  http.post(API_BASE_URL + '/events', () => {
    return HttpResponse.json({})
  }),
]
