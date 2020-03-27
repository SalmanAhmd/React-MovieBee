import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../ActionCreater/action'

let { movie: movieAction, show: showAction, detailMovie, detailShow } = Action;

function PageNav(props) {
  let value;
  let { movie, show, type, page, movieAction, showAction, detailMovie, detailShow } = props;
  if (type === 'movie')
    value = movie
  else
    value = show
  return (
    <>
      <section className="text-center m-5 d-flex flex-wrap">
        {value.map((data, index) => {
          return (
            <div key={(index).toString()} className="col-md-3 mb-5 rounded">
              <Link to='/detail'
                onClick={() => {
                  if (type === 'movie')
                    detailMovie(data.id)
                  else
                    detailShow(data.id)
                }}>
                <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} className="card-img-top w-75 rounded shadow-lg"
                  alt="movie poster" />
              </Link>
            </div>
          )
        })}
      </section >
      <div class="text-center">
        <button class="btn btn-warning mx-auto mb-5"
          onClick={() => {
            if (type === 'movie')
              movieAction(page)
            else
              showAction(page)
          }}>
          Load More
        </button>
      </div>
    </>
  )
}

const take = (state) => {
  return {
    movie: state.movie.movie,
    show: state.movie.show,
    page: state.movie.page
  };
}

const change = (dispatch) => {
  return bindActionCreators({ movieAction, showAction, detailMovie, detailShow }, dispatch)
}

export default connect(take, change)(PageNav);