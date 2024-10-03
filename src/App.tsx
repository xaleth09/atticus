import './App.css';
import {PageWithSidebar} from "./components/PageWithSidebar";

function App() {
    return (
        <PageWithSidebar>
            <PageWithSidebar.Sidebar>

            </PageWithSidebar.Sidebar>
            <PageWithSidebar.MainContent>
            </PageWithSidebar.MainContent>
        </PageWithSidebar>
    );
}

export default App;
