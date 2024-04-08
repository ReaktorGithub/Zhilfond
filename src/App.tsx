import styles from './App.module.scss';
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <MainLayout />
    </div>
  );
}

export default App;
