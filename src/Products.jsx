import React from "react";
import watch from "/src/assets/watch.jpg";
import shoes from "/src/assets/shoes.jpg";
import tshirt from "/src/assets/tshirt.jpg";
import tracksuit from "/src/assets/tracksuit.jpg";

const products = [
  { id: 1, name: "ساعة فخمة", price: 250, image: watch },
  { id: 2, name: "حذاء رياضي", price: 180, image: shoes },
  { id: 3, name: "تيشيرت رياضي", price: 90, image: tshirt },
  { id: 4, name: "طقم رياضي", price: 220, image: tracksuit },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛍️ منتجاتنا</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-700 mb-3">{product.price} درهم</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              أضف إلى السلة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
