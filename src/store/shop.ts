import { create } from 'zustand';

export type Product = {
	name: string;
	price: number;
};

export type CartProduct = Product & {
	amount: number;
};

type CartStore = {
	cart: number;
	products: CartProduct[];
	totalPrice: number;
	add: (product: Product) => void;
	remove: (name: string) => void;
	removeAll: () => void;
};

const initData: Omit<CartStore, 'add' | 'remove' | 'removeAll'> = {
	cart: 0,
	products: [],
	totalPrice: 0,
};

export const useCartStore = create<CartStore>((set) => ({
	cart: initData.cart,
	products: initData.products,

	totalPrice: initData.totalPrice,
	add: (product) =>
		set((state) => {
			const existingProductIndex = state.products.findIndex((p) => p.name === product.name);

			const updatedProducts = [...state.products];

			if (existingProductIndex !== -1) {
				updatedProducts[existingProductIndex].amount += 1;
			} else {
				updatedProducts.push({ ...product, amount: 1 });
			}

			const totalPrice = updatedProducts.reduce((sum, prev) => sum + prev.amount * prev.price, 0);

			return {
				cart: state.cart + 1,
				totalPrice: totalPrice,
				products: updatedProducts,
			};
		}),

	remove: (name: string) => {
		return set((state) => {
			const restProduct = [...state.products];
			const existingProductIndex = [...restProduct].findIndex((p) => {
				return p.name === name && p.amount > 1;
			});
			if (existingProductIndex !== -1) {
				restProduct[existingProductIndex].amount -= 1;
				return { cart: state.cart - 1, products: restProduct };
			}

			return {
				cart: state.cart - 1,
				products: restProduct.filter((p) => p.name !== name),
			};
		});
	},
	removeAll: () => set(() => ({ cart: 0 })),
}));
