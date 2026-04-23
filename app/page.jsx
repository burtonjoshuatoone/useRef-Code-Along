"use client";

import Chat from "./latest.jsx";
import Dashboard from "./degausser.jsx";
import Toggle from "./re-render.jsx";
import Chat1 from "./brokenchat.jsx";
import Page from "./SearchField/App.jsx";
import CatFriends from "./LaVidaEsUnCarousel.jsx";
import Page1 from "./FocusSearch.jsx";
import VideoPlayer from "./PausePlay.jsx";

export default function UseRef() {
  return (
    <>
      <div>
        <div>
          <Chat />
        </div>
      </div>
      <div>
        <div>
          <Dashboard />
        </div>
      </div>
      <div>
        <div>
          <Toggle />
        </div>
      </div>
      <div>
        <div>
          <Chat1 />
        </div>
      </div>
      <div>
        <Page />
      </div>
      <div>
        <CatFriends />
      </div>
      <div>
        <Page1 />
      </div>
      <div>
        <VideoPlayer />
      </div>
    </>
  );
}
