let Action = {};
const api = 'api_key=47df963032e8e73047bd6c3d0999c3c0';
const movie = 'https://api.themoviedb.org/3/discover/movie/?';
const show = 'https://api.themoviedb.org/3/discover/tv/?';
const movieDetail = 'https://api.themoviedb.org/3/movie/';
const showDetail = 'https://api.themoviedb.org/3/tv/';
const config = '&sort_by=popularity.desc&region=IN&page=';
Action.movie = page => {
  return (dispatch => {
    fetch(movie + api + config + page)
      .then(list => {
        list.json()
          .then(res => {
            dispatch({
              type: "addMovie", payload: res.results
            })
          })
      })
  })
}

Action.show = page => {
  return (dispatch => {
    fetch(show + api + config + page)
      .then(list => {
        list.json()
          .then(res => {
            dispatch({
              type: "addShow", payload: res.results
            })
          })
      })
  })
}

Action.reset = () => {
  return { type: "resetPage" }
}

Action.detailMovie = id => {
  return (dispatch => {
    fetch(movieDetail + id + '?' + api)
      .then(list => {
        list.json()
          .then(res => {
            dispatch({
              type: "detailMovie", payload: res
            })
          })
      })
  })
}

Action.detailShow = id => {
  return (dispatch => {
    fetch(showDetail + id + '?' + api)
      .then(list => {
        list.json()
          .then(res => {
            dispatch({
              type: "detailMovie", payload: res
            })
          })
      })
  })
}

export default Action;