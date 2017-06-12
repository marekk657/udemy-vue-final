import Home from './components/Home.vue';
import Stocks from './components/stocks/Stocks.vue';
// import Stock from './components/stocks/Stock.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
// import PortfolioStocks from './components/portfolio/PortfolioStocks.vue';

export const routes = [
    { path: '/', component: Home },
    {
        path: '/stocks', component: Stocks
    },
    {
        path: '/portfolio', component: Portfolio
    },
    { path: '*', component: Home },
];