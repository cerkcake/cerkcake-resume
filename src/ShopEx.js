import "./App.css";
import "./App-3.css";
import Product from "./Product";

const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-red-700">Hello World</h1>
      <div className="flex my-4">
        <div className="w-24 h-38 bg-sky-500 text-center">w-24</div>
        <div className="w-1/2 h-38 bg-amber-500 rounded-lg text-center">
          w-1/2
        </div>
      </div>

      <button className="w-24 bg-green-200 hover:bg-green-800 active: rounded-xl">
        Button 1
      </button>
      <button
        className="w-36 bg-red-200 hover:bg-red-300 active:bg-red-500 focus:outline-none
focus:ring focus:ring-red-800 rounded-xl"
      >
        Button 2
      </button>

      <div className="pb-64"></div> */}

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {[0, 1, 2].map(() => (
          <Product />
        ))}
        </div>
        <p>- - - sept fn here - - -</p>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {[...Array(9).keys()].map(() => (
          <Product />
        ))}
      </div>
    </>
  );
};

export default App;
