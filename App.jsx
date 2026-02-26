import Linkkilista from "./Linkkilista";

const linkit = [
  { id: 1, nimi: "Google", url: "https://google.com" },
  { id: 2, nimi: "React", url: "https://react.dev" }
];

function App() {
  return (
    <div>
      <Linkkilista lista={linkit} />
    </div>
  );
}

export default App;