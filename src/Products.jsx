import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "ساعة يد فاخرة",
      price: "1200 درهم",
      image: "/assets/watch.jpg",
    },
    {
      id: 2,
      name: "حذاء رياضي نايك",
      price: "950 درهم",
      image: "/assets/nike-shoes.jpg",
    },
    {
      id: 3,
      name: "قميص رجالي كلاسيكي",
      price: "450 درهم",
      image: "/assets/shirt.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-2xl shadow p-4 hover:shadow-lg transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover rounded-xl"
          />
          <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
          <p className="text-green-600 font-bold">{product.price}</p>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            أضف إلى السلة
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
{
  "name": "anass-shop",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.15",
    "postcss": "^8.4.28",
    "tailwindcss": "^3.3.3",
    "vite": "^5.0.0"
  }
}
