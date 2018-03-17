import reducer from './counter'

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(reducer()).toEqual({ val: 0 })
  })
})
