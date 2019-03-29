import cuid from 'cuid';

export default function reviews(state = [], action) {
  switch (action.type) {

    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return [...state, review]

    case 'DELETE_REVIEW':
      return state.filter((review) => {
        return review.id !== action.id
      })

    case 'DELETE_RESTAURANT':
      return state.filter((review) => {
        return review.restaurantId !== action.id
      })

    default:
      return state
  }
}
