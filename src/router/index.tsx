import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Aboutapi } from '../pages/AboutApi';
import { AboutMovie } from '../pages/AboutMovie';
import { AboutSerie } from '../pages/AboutSerie';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import { Series } from '../pages/Series';

export const Router = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about/:id">
            <AboutMovie />
          </Route>
          <Route path="/api">
            <Aboutapi />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/about-series/:id">
            <AboutSerie />
          </Route>          
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
      <Footer />   
    </BrowserRouter>
  )
}
