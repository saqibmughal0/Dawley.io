"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";


export default function CartPage() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Your Courses</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={`${item.id || "item"}-${index}`}
              className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow"
            >
              {/* Left: Image + Name + Duration */}
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 rounded overflow-hidden">
                  <Image
                    src={item.image || "/images/default-course.webp"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  {item.price?.discounted && (
                    <p className="text-red-600 font-bold text-lg">
                      {item.price.discounted}
                    </p>
                  )}
                  {item.price?.original && (
                    <p className="text-gray-400 line-through text-sm">
                      {item.price.original}
                    </p>
                  )}
                  {item.price?.duration && (
                    <p className="text-gray-500 text-sm mt-1">
                      ⏱ Duration: {item.price.duration}
                    </p>
                  )}
                </div>
              </div>

              {/* Right: Remove button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="mt-3 md:mt-0 cursor-pointer text-red-600 hover:underline"
              >
               <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-6 flex justify-end">
          <Link href="/checkout">
            <button className="bg-green-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
