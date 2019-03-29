import cuid from 'cuid';
export const cuidFn = cuid

export default function restaurants(state = [], action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return [...state, restaurant]

    case 'DELETE_RESTAURANT':
      return state.filter((restaurant) => {
        return restaurant.id !== action.id
      })

    default:
      return state
  }
}
