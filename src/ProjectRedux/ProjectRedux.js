import "./style.css";
import React from 'react';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import { useDispatch } from "react-redux";
import { reset } from "./store";

function ProjectRedux() {
  const dispatch = useDispatch();
    const handleResetClick = () => {
        dispatch(reset());
      };
  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  )
}

export default ProjectRedux