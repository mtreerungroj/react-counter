export const inc = (by = 1) => {
  return {
    type: 'INCREMENT',
    by
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
