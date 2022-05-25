import { writable } from 'svelte/store';

const TRANSACTIONS_KEY = "TRANSACTIONS";
const PURCHASE = "PURCHASE";


function createTransactionStore() {
    let initialTransactionList = JSON.parse(localStorage.getItem(TRANSACTIONS_KEY)) || [];
    const { subscribe, set, update } = writable(initialTransactionList);

    return {
        subscribe,
        addPurchase: (purchase) => {
            return update(transactionList => {
                let transaction = {
                    type: PURCHASE,
                    payload: purchase,
                }
                transactionList.push(transaction);
                localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactionList));
                return transactionList;
            })
        }
    };
}

export const transactionStore = createTransactionStore();