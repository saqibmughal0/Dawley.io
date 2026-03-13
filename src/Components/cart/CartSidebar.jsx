"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleCart, removeFromCart } from "@/store/cartSlice";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Heroicons cross icon

export default function CartSidebar() {
  const { items, isOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 z-10 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Cross Button */}
      <button
        onClick={() => dispatch(toggleCart(false))}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item, index) => (
          <div key={`${item.id || "item"}-${index}`} className="border-b py-2">
            <p>{item.name}</p>
            <button
              className="text-red-600 mt-1"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <Link href="/cart">
        <button className="bg-blue-600 text-white p-2 w-full mt-4">
          Go To Checkout
        </button>
      </Link>
    </div>
  );
}
