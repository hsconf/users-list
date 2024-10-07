import './App.css'
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import UsersTool from "./containers/UsersTool/UsersTool.tsx";

const App = () => (
    <>
    <header>
        <ToolBar />
    </header>
    <main className='container'>
    <UsersTool />
    </main>
    </>
);

export default App
