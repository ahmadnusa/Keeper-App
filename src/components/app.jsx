import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";

const note = notes.map((noteItem) => (
  <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
));

function App() {
  return (
    <div>
      <Header />
      {note}
      <Footer />
    </div>
  );
}

export default App;
