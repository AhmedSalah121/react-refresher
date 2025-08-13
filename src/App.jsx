import { useState } from "react";
import MainHeader from "./components/MainHeader";
import Posts from "./components/Posts";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <Posts isPosting={modalIsVisible} onStopPost={hideModalHandler}/>
      </main>
    </>
  )
}

export default App;