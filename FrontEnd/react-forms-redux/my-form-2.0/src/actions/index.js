export const addElement = (target) => {
  return {
    type: 'ADD_ELEMENT',
    [target.name]: target.value
  }
}