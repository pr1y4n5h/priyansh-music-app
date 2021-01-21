import React, { useState } from "react";
import "./styles.css";

const artists = {
  RAP: [
    {
      name: "Eminem",
      song: "Lose Yourself"
    },
    {
      name: "MGK",
      song: "Home"
    },
    {
      name: "NF",
      song: "Lie"
    }
  ],

  POP: [
    {
      name: "Marshmello, Bastille",
      song: "Happier"
    },
    {
      name: "Maroon 5",
      song: "One More Night"
    },
    {
      name: "Mark Ronson",
      song: "Uptown Funk"
    }
  ],

  ROCK: [
    {
      name: "Linkin Park",
      song: "Numb"
    },
    {
      name: "Disturbed",
      song: "Decadence"
    },
    {
      name: "Hollywood Undead",
      song: "Undead"
    }
  ]
};

export default function App() {
  const [selectedGenre, serArtist] = useState("RAP");
  function artistClickHandler(artist) {
    serArtist(artist);
  }
  return (
    <div className="App">
      <h1> Music Recommendation App</h1>
      <h2>
        Checkout my favorite songs from each mentioned genres. Select a genre to
        get started...
      </h2>

      <div>
        {Object.keys(artists).map((artist) => (
          <button onClick={() => artistClickHandler(artist)}>{artist}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {artists[selectedGenre].map((art) => (
            <li key={art.name}>
              <div style={{ fontSize: "large" }}> {art.name} </div>
              <div style={{ fontSize: "xx-large" }}> {art.song} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
