let middleware = store => next => action => {
  if (action.__delay && action.__delay > 0) {
    setTimeout(() => {
      delete action.__delay //  ถ้าไม่ delete ออกมันจะ delay ไปเรื่อยๆ ไม่สิ้นสุด
      store.dispatch(action)
    }, action.__delay)
    return
  }
  next(action)
}

export default middleware
