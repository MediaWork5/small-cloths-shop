import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={ ProductListing } />
                    <Route path='/product/:productId' component={ ProductDetail }/>
                    <Route>404 Not Found!</Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
