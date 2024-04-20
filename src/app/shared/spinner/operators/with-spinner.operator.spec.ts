import {Store} from '@ngrx/store'
import {withSpinner} from './with-spinner.operator'
import {spinnerActions} from '../store/actions'
import {of} from 'rxjs'

describe('withSpinner operator', () => {
  let storeMock: jest.Mocked<Store>

  beforeEach(() => {
    storeMock = {
      dispatch: jest.fn(),
      select: jest.fn(),
    } as unknown as jest.Mocked<Store>
  })

  it('should dispatch start and stop spinner actions', () => {
    const source = of('test value')

    const result = withSpinner('testSpinner', storeMock)(source)
    result.subscribe()

    expect(storeMock.dispatch).toHaveBeenCalledWith(
      spinnerActions.startSpinner({spinnerName: 'testSpinner'})
    )
    expect(storeMock.dispatch).toHaveBeenCalledWith(
      spinnerActions.stopSpinner({spinnerName: 'testSpinner'})
    )
  })
})
