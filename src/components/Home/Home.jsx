import { React, useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { BsFillPlayFill } from "react-icons/bs";
import { MdOutlineAdd } from "react-icons/md";
const url = " https://api.themoviedb.org/3";
const ApiKey = "48673323335e5b73fc3e4732030dba79";
const defaultImgUrl = "https://image.tmdb.org/t/p/w500/";
export const Card = ({ imgUrl }) => (
  <img className="card" src={imgUrl} alt="cover"></img>
);

export const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div className="cardsContainer">
      {arr.map((item, index) => (
        <Card key={index} imgUrl={`${defaultImgUrl}/${item.poster_path}`} />
      ))}
      ;
    </div>
  </div>
);
export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/popular?api_key=${ApiKey}`);
      setPopularMovies(results);
      //console.log(results);
    };
    fetchPopular();
  }, []);

  const [topratedmovies, settoprated] = useState([]);
  useEffect(() => {
    const fetchtoprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/top_rated?api_key=${ApiKey}`);
      settoprated(results);
      //console.log(results);
    };
    fetchtoprated();
  }, []);
  const [upcomingMovies, setupcomingMovies] = useState([]);

  useEffect(() => {
    const fetchupcomingMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/upcoming?api_key=${ApiKey}&page=5`);
      setupcomingMovies(results);
      // console.log(results);
    };
    fetchupcomingMovies();
  }, []);
  // const [genre, setGenres] = useState([]);

  // useEffect(() => {
  //   const fetchGenres = async () => {
  //     const {
  //       data: { genres },
  //     } = await axios.get(`${url}/genre/movie/list?api_key=${ApiKey}`);
  //     setGenres(genres);
  //     console.log(genres);

  //   };
  //   fetchGenres();
  // }, []);
  return (
    <div>
      <section className="home">
        <div className="banner">
          <div className="titleBox">
            <h1>STRANGER THINGS</h1>
            <div className="info">
              2016 | U/A 16+ | 4 Seasons | Horror TV Serials
            </div>
            <p className="description">
              When a young boy vanishes, a small town uncovers a mystery
              involving secret experiments, terrifying supernatural forces and
              one strange little girl.
            </p>
            <div className="btnContainer">
            <button className="play">
              <BsFillPlayFill></BsFillPlayFill>{" "}
              <p>Play</p>
            </button>
            <button className="mylist">
              <p>My List </p> <MdOutlineAdd></MdOutlineAdd>
            </button>
            </div>
          </div>
        </div>
        <Row title={"Trending Now"} arr={popularMovies} />
        <Row title={"Upcoming"} arr={upcomingMovies} />
        <Row title={"Top Rated"} arr={topratedmovies} />
      </section>
    </div>
  );
};
