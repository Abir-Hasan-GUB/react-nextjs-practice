import Header from "./components/Header";
import WeatherApp from "./components/WeatherApp";
import body_bg from "./assets/images/body-bg.png";

function App() {
  return (
    <>
      <div className="min-h-screen bg-body bg-no-repeat bg-cover"
      style={{backgroundImage: `url(${body_bg})`}}
      >
        <Header></Header>

        <main className="min-h-screen grid place-items-center">
          <WeatherApp></WeatherApp>
        </main>
      </div>
    </>
  );
}

export default App;
