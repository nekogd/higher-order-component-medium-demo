import React from "react";
import { List } from "./components";
import WithLoading from "./hoc/WithLoading.js";
import { useFetch } from "./hooks";
const ListWithLoading = WithLoading(List);

function App() {
  /**
   * just some data fetching from hook
   */
  const { isLoading, response } = useFetch(
    "https://api.github.com/users/nekogd/repos"
  );
  /**
   * with HOC
   */
  return (
    <>
      <h2>NekoGd's GitHub repositories</h2>
      <p>
        This is the app{" "}
        <a href="https://medium.com/@tymekluczko/real-life-react-higher-order-component-use-case-withloading-ff0a4027089a">
          for my Medium article regarding Higher Order Components
        </a>
      </p>
      <ListWithLoading isLoading={isLoading} data={response} />
    </>
  );
  /**
   * without HOC
   * pls import <Loader /> from components first
   * Note we need conditional statement
   */
  // return isLoading ? <Loader /> : <List data={response} />
}

export default App;
