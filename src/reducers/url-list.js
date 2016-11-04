/**
 * Created by gongy on 4/11/16.
 */

const urlList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_URL':
      return [...state, action.url];

    default:
      return state;
  }
};

export default urlList;
