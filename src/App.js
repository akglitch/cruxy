import './App.css';
import { Hero } from './components/hero';
import { Nav} from './components/navbar';
import { Product } from './components/products';




function App() {
  return (
    <div>
    <Nav/>
    <Hero />
    <Product />
    </div>
  );
}

export default App;
