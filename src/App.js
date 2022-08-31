import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import MainLayout from '~/layouts';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = MainLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
