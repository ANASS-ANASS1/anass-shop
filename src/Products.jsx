import React from "react";

const products = [
  { id: 1, name: "ساعة فاخرة", price: "250 درهم", image: "/watch.jpg" },
  { id: 2, name: "حذاء رجالي", price: "180 درهم", image: "/shoes.jpg" },
  { id: 3, name: "تيشيرت رجالي", price: "90 درهم", image: "/tshirt.jpg" },
  { id: 4, name: "بدلة رياضية", price: "220 درهم", image: "/tracksuit.jpg" },
];

export default function Products() {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        منتجاتنا المميزة 🛍️
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
              {product.name}
            </h3>
            <p className="text-center text-green-600 font-bold mb-4">
              {product.price}
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
              أضف إلى السلة 🛒
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
