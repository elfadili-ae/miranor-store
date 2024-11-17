import { wixClientType } from '@/context/WixContext'
import { currentCart } from '@wix/ecom'
import { create } from 'zustand'

type CartStoreType = {
    cart: currentCart.Cart,
    counter: number,
    isLoading: boolean,
    getCart: (wixClient: wixClientType) => void,
    addItem: (wixClient: wixClientType, productId: string, quantity: number, variantId?: string) => void,
    removeItem: (wixClient: wixClientType, itemId: string) => void,
    clearCart: (wixClient: wixClientType) => void,
}

export const useStore = create<CartStoreType>((set) => ({
    //@ts-ignore
    cart: [],
    counter: 0,
    isloading: true,
    getCart: async (wixClient) => {
        try {
            const cart = await wixClient.currentCart.getCurrentCart();
            set({ cart: cart || [], counter: cart?.lineItems.length || 0, isLoading: false });
        } catch (error) {
            set((prev) => ({ ...prev, isLoading: false }));
        }
    },
    addItem: async (wixClient, productId, quantity, variantId) => {
        set((prev) => ({ ...prev, isLoading: true }));
        const response = await wixClient.currentCart.addToCurrentCart({
            lineItems: [
                {
                    catalogReference: {
                        appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
                        catalogItemId: productId,
                        ...(variantId && { options: { variantId } }),
                    },
                    quantity: quantity,
                },
            ]
        });
        set({ cart: response.cart, counter: response.cart?.lineItems.length, isLoading: false });

    },
    removeItem: async (wixClient, itemId) => {
        set((prev) => ({ ...prev, isLoading: true }));
        const response = await wixClient.currentCart.removeLineItemsFromCurrentCart([itemId]);
        set({ cart: response.cart, counter: response.cart?.lineItems.length, isLoading: false });
    },
    clearCart: async (wixClient) => {
        set(prev => ({ ...prev, isLoading: true }));
        try {
            const response = await wixClient.currentCart.deleteCurrentCart();
            //@ts-ignore
            set({ cart: [], counter: 0, isLoading: false });
        } catch (error) {

        }
    }
}))
