let reducer = (state = { val: 0 }, action = {}) => {
  // ถ้า action ไม่มี ให้ค่าเริ่มต้นเป็น {} หรือจะใช้วิธีเช็ค if(action) แล้วค่อยทำก็ได้
  // if (action) {
  if (action.type === 'INCREMENT') {
    return { val: state.val + action.by }
  } else if (action.type === 'RESET') {
    return { val: 0 }
  }
  // }
  return state
}

export default reducer
