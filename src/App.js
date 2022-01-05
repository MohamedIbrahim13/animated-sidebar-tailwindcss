import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Sidebar />
	  <p className="font-bold text-4xl">Main Content</p>
    </div>
  );
}

export default App;

