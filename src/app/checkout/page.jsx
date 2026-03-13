"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

export default function CheckoutPage() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Checkout</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={`${item.id || "item"}-${index}`}
              className="flex justify-between items-center border p-4 rounded-lg shadow"
            >
              {/* Left: Image + Name */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded overflow-hidden">
                  <Image
                    src={item.image || "/images/default-course.webp"}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  {item.price?.discounted && (
                    <p className="text-red-600 font-bold">
                      {item.price.discounted}
                    </p>
                  )}
                </div>
              </div>

              {/* Right: Remove button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 cursor-pointer hover:underline"
              >
                  <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => router.push("/payment")}
            className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}
