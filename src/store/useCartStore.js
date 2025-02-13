import useCart from "@/features/cart/hooks/useCart";
import { toast } from "react-toastify";
import { create } from "zustand";

// Load cart from local storage
const getCartFromStorage = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

// const { getCartFromStorage } = useCart();

const useCartStore = create((set, get) => ({
  cart: getCartFromStorage(),

  addToCart: (product) => {
    if (get().cart.some((item) => item.id === product.id))
      return toast.error("Product Already In Cart");
    const updatedCart = [
      ...get().cart,
      {
        id: product.id,
        images: product.images,
        price: product.price,
        originalPrice: product.price,
        category: product.category,
        title: product.title,
        description: product.description,
        quantity: 1,
      },
    ];
    set({ cart: updatedCart });
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Persist in local storage
    toast.success("Product Added To Cart");
  },

  removeFromCart: (productId) => {
    const updatedCart = get().cart.filter((item) => item.id !== productId);
    set({ cart: updatedCart });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Product Removed From Cart");
  },

  clearCart: () => {
    set({ cart: [] });
    localStorage.removeItem("cart");
    toast.success("Clear all products from Cart")
  },

  addCartQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: item.originalPrice * (item.quantity + 1),
            }
          : item
      ),
    })),
  subCartQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              price: item.originalPrice * (item.quantity - 1),
            }
          : item
      ),
    })),

  buttonText: "Add to cart",
  setButtonText: (buttonText) => set({ buttonText }),
}));

export default useCartStore;
