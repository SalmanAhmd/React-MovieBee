import React from 'react';
import { connect } from "react-redux";
import '../Css/loading.css';

function Detail(props) {
  let { data } = props;
  if (data) {
    return (
      <section class="row m-5 text-center ">
        <div class=" col-md-3 mb-2 text-center">
          <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} class=" card-img-top shadow-lg rounded"
            alt="movie poster" />
        </div>
        <article class="col-md-7 text-left mx-auto ">
          <h1 class="font-weight-bold">{data.original_title}</h1>
          <p class="text-right">{data.tagline}</p>
          <h3>Overview</h3>
          <p class="text-justify">{data.overview}</p>
          <p><b>Runtime</b> : {data.runtime} minutes</p>
          <p><b>Revenue</b> : ${data.revenue}</p>
          <div> <b>Production</b> :
        {data.production_companies.map((img) => {
            return (<img src={`https://image.tmdb.org/t/p/w500/${img.logo_path}`} class="m-3" width="80px" />)
          })}
          </div>
        </article>
      </section>
    )
  }
  else
    return (
      <div class="loading">
        <div class="bigSqr">
          <div class="square first"></div>
          <div class="square second"></div>
          <div class="square third"></div>
          <div class="square fourth"></div>
        </div>
        <div class="text1">loading</div>
      </div>)
}

const take = (state) => {
  return {
    data: state.movie.detail,
  }
}



export default connect(take)(Detail);