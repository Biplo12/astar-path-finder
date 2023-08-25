import { Toaster } from "react-hot-toast";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Toaster />
      <div className="bg-background text-white text-center w-full h-[100vh] gap-4 flex flex-col justify-center items-center">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
