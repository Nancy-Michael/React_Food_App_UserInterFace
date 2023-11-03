import Categories from "./Components/Categories";
import Delivery from "./Components/Delivery";
import Featured from "./Components/Featured";
import Meal from "./Components/Meal";
import NewsLetter from "./Components/NewsLetter";
import TopNav from "./Components/TopNav";
import TopPicks from "./Components/TopPicks";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter />
    </div>
  );
}

export default App;
