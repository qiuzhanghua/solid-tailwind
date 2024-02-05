import type { Component } from 'solid-js';
import {Button} from "@opentj/solid";

const App: Component = () => {
  return (
      <>
      <h1 class="text-3xl font-bold underline text-purple-600">
        Hello world!
      </h1>
      <Button class={"border-solid"}></Button>
      </>
  );
};

export default App;
