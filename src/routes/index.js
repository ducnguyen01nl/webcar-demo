import Home from '~/pages/Home';
import About from '~/pages/About';
import Offers from '~/pages/Offers';
import News from '~/pages/News';
import Contact from '~/pages/Contact';
import AboutPage from '~/components/Layout/componetns/AboutPage';
import ContactPage from '~/components/Layout/componetns/ContactPage';
import OffersPage from '~/components/Layout/componetns/OffersPage';
import NewsPage from '~/components/Layout/componetns/NewsPage';
//k cần đăng nhập vẫn xem dc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About, layout: AboutPage },
    { path: '/offers', component: Offers, layout: OffersPage },
    { path: '/news', component: News, layout: NewsPage },
    { path: '/contact', component: Contact, layout: ContactPage },
];

//cần đăng nhập
const privateRoutes = [];

export { privateRoutes, publicRoutes };
