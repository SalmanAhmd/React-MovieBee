let initialState = {
  movie: [],
  show: [],
  page: 1,
  detail: null,

}

export default function movie(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  const { type, payload } = action;
  switch (type) {

    case 'addMovie':
      stateCopy.movie = [...stateCopy.movie, ...payload];
      stateCopy.page = stateCopy.page + 1;
      stateCopy.detail = null;
      return stateCopy;

    case 'addShow':
      stateCopy.show = [...stateCopy.show, ...payload];
      stateCopy.page = stateCopy.page + 1;
      stateCopy.detail = null;
      return stateCopy;

    case 'pageReset':
      stateCopy.page = 1
      stateCopy.detail = null;
      return stateCopy;

    case 'detailMovie':
      stateCopy.detail = payload
      return stateCopy;

    case 'detailShow':
      stateCopy.detail = payload
      return stateCopy;

    default: return stateCopy;
  }
}