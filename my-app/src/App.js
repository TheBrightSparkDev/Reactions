import css from './App.module.css';
import { SideBarLinks } from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <SideBarLinks />
    </div>
  );
}

export default App;