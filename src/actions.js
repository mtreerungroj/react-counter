export const inc = (by = 1) => {
  return {
    type: 'INCREMENT',
    by
  }
}

export const incWithDalay = by => {
  let action = inc(by)
  action.__delay = 2000
  return action
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
