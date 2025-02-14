import HeadComponent from "./components/layouts/HeadComponent/HeadComponent";
import RightSidebar from "./components/layouts/RightSidebar/RightSidebar";
import Slidebar from "./components/layouts/Slidebar/Slidebar";

function App() {
  return (
    <section className="flex">
      <div className="h-screen flex justify-between w-full bg-black text-white">
        <div>
          <Slidebar />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <HeadComponent />
        </div>
        <RightSidebar />
      </div>
    </section>
  );
}

export default App;
