import CodeBar from "components/CodeBar";
import Header from "components/Header";
import Preview from "components/Preview";
import { EditorProvider } from "context";
import styles from "./App.module.css"

function App() {

  return (
    <EditorProvider>
      <CodeBar />
      <main className={styles.main}>
        <Header />
        <Preview />
      </main>
    </EditorProvider>
  );
}

export default App;
