const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) { // order
        const record = state.stocks.find(element => element.id == stockId);
        let quantityToBuy = quantity;
        if (quantity * stockPrice >= state.funds) {
            quantityToBuy =  Math.floor(state.funds/stockPrice);
        }   

        if (record) {
            record.quantity += quantityToBuy;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantityToBuy
            });
        }
        state.funds -= stockPrice * quantityToBuy;
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id == stockId);
        let quantityToSell = quantity;
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
            quantityToSell = record.quantity;
        }
        state.funds += stockPrice * quantityToSell;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio: (state, getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    },
    funds: (state) => {
        return state.funds;
    }
};

export default {
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
};