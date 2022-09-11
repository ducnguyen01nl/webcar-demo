import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './components/Layout/componetns/DefaultLayout';
import ScrollToTop from './ScrollToTop';
function App() {
    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset > 200) {
    //         console.log('hello');
    //     }
    // });

    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
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
                </Routes>
            </div>
        </Router>
    );
}

export default App;
