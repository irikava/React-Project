import { Route } from 'react-router-dom';
import Welcome from './Welcome';
import Product from './Product';
import MainHeader from './MainHeader';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <MainHeader/>
      <main >
      <Route path = "/welcome" >
       <Welcome />
      </Route>

      <Route path = "/Product" >
        <Product />
      </Route>
      </main>
      
    </div>
  );
}

export default App;
