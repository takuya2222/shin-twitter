import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widgets from "./components/widget/Widgets";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />

      {/* timeline */}
      <Timeline />

      {/* widget */}
      <Widgets />
    </div>
  );
}

export default App;
