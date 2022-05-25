import { writable } from 'svelte/store';

const PURCHASES_KEY = "PURCHASES";

function createPurchaseStore() {
    let initialPurchaseList = JSON.parse(localStorage.getItem(PURCHASES_KEY)) || [];
    const { subscribe, set, update } = writable(initialPurchaseList);

    return {
        subscribe,
        addPurchase: (purchase) => {
            return update(purchaseList => {
                purchaseList.push(purchase);
                localStorage.setItem(PURCHASES_KEY, JSON.stringify(purchaseList));
                return purchaseList;
            })
        }
    };
}

export const purchaseStore = createPurchaseStore();