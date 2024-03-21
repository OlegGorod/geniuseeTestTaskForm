import "./App.css";
import CardFrom from "./components/PaymentForm/CardForm";
import AppProvider from "./store/AppProvider";

function App() {
  return (
    <>
      <AppProvider>
        <CardFrom />
      </AppProvider>
    </>
  );
}

export default App;
