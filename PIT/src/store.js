import { writable } from 'svelte/store';
import { PURCHASE } from './transactions';

const TRANSACTIONS_KEY = "TRANSACTIONS";

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