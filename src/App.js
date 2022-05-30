import "./App.css";
import "antd/dist/antd.css";
import Header from "./components/Navigation";
import SearchBox from "./components/SearchBox";
import Desc from "./components/Desc";
import Reward from "./components/Reward";
import Tabs from "./components/Tabs";
export default function App() {
  return (
    <div className="app">
      <Header />
      <SearchBox />
      <Desc />
      <Reward />
      <Tabs />
    </div>
  );
}
