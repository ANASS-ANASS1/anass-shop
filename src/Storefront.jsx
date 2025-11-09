import React, { useState } from "react";

export default function Storefront() {
  const sampleProducts = [
    { id: 1, title: "قميص قطني", price: 199, desc: "قميص مريح بجودة عالية.", stock: 10, category: 'ملابس' },
    { id: 2, title: "سماعات لاسلكية", price: 499, desc: "صوت واضح وعمر بطارية طويل.", stock: 5, category: 'إلكترونيات' },
    { id: 3, title: "حقيبة ظهر", price: 299, desc: "خامة متينة ومناسبة للسفر.", stock: 8, category: 'حقائب' },
    { id: 4, title: "ساعة ذكية", price: 799, desc: "مراقبة اللياقة والإشعارات.", stock: 3, category: 'إلكترونيات' },
    { id: 5, title: "تيشيرت صيفي", price: 149, desc: "خفة وتهوية ممتازة.", stock: 15, category: 'ملابس' },
    { id: 6, title: "حذاء رياضي", price: 399, desc: "مريح للركض والتمارين.", stock: 7, category: 'ملابس' }
  ];

  const [products] = useState(sampleProducts);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [customer, setCustomer] = useState({ name: "", email: "", address: "" });

  const addToCart = (product) => {
    setCart((c) => {
      const exists = c.find((i) => i.id === product.id);
      if (exists) return c.map((i) => i.id === product.id ? { ...i, qty: Math.min(i.qty + 1, product.stock) } : i);
      return [...c, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const updateQty = (id, qty) => setCart((c) => c.map(i => i.id===id?{...i, qty: Math.max(1, Math.min(qty, i.stock))}:i));

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 0 ? 25 : 0;
  const total = subtotal + shipping;

  const placeOrder = () => {
    const order = { customer, items: cart, total, date: new Date().toISOString() };
    console.log("Order placed:", order);
    alert(`تم استلام طلبك! المجموع: ${total} ر.س`);
    setCart([]);
    setShowCheckout(false);
    setCustomer({ name: "", email: "", address: "" });
  };

  const filtered = products.filter(p => {
    const q = query.trim();
    if(!q) return true;
    return p.title.includes(q) || p.desc.includes(q) || p.category.includes(q);
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
      <header className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Anass Shop</h1>
        <div className="flex items-center gap-4">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="ابحث عن منتج..." className="px-3 py-2 border rounded-md" />
          <button onClick={()=>setShowCheckout(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md">
            السلة ({cart.reduce((s,i)=>s+i.qty,0)})
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <section className="md:col-span-3">
          <h2 className="text-xl font-semibold mb-4">المنتجات</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(p => (
              <article key={p.id} className="bg-white p-4 rounded-lg shadow">
                <div className="h-40 bg-gray-100 rounded flex items-center justify-center mb-3">
                  <span className="text-gray-400">صورة منتج</span>
                </div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold">{p.price} ر.س</div>
                    <div className="text-xs text-gray-500">المتوفر: {p.stock}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button onClick={()=>addToCart(p)} className="px-3 py-1 bg-green-600 text-white rounded-md">أضف للسلة</button>
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full text-center text-gray-500">لم يتم العثور على منتجات مطابقة.</div>
            )}
          </div>
        </section>

        <aside className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold">ملخص السلة</h2>
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500 mt-2">السلة فارغة</p>
          ) : (
            <div className="mt-3 space-y-3">
              {cart.map(i => (
                <div key={i.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{i.title}</div>
                    <div className="text-xs text-gray-500">{i.price} ر.س × {i.qty}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="number" value={i.qty} min={1} max={i.stock} onChange={(e)=>updateQty(i.id, Number(e.target.value))} className="w-16 px-2 py-1 border rounded" />
                    <button onClick={()=>removeFromCart(i.id)} className="text-red-500 text-sm">حذف</button>
                  </div>
                </div>
              ))}

              <div className="border-t pt-3">
                <div className="flex justify-between"><span>المجموع الفرعي</span><span>{subtotal} ر.س</span></div>
                <div className="flex justify-between"><span>الشحن</span><span>{shipping} ر.س</span></div>
                <div className="flex justify-between font-bold mt-2"><span>الإجمالي</span><span>{total} ر.س</span></div>
                <button onClick={()=>setShowCheckout(true)} className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded-md">اكمال الشراء</button>
              </div>
            </div>
          )}
        </aside>
      </main>

      {showCheckout && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold">الدفع</h3>
            <div className="mt-3 space-y-3">
              <input placeholder="الاسم" value={customer.name} onChange={(e)=>setCustomer({...customer, name: e.target.value})} className="w-full px-3 py-2 border rounded" />
              <input placeholder="البريد الإلكتروني" value={customer.email} onChange={(e)=>setCustomer({...customer, email: e.target.value})} className="w-full px-3 py-2 border rounded" />
              <input placeholder="العنوان" value={customer.address} onChange={(e)=>setCustomer({...customer, address: e.target.value})} className="w-full px-3 py-2 border rounded" />

              <div className="flex justify-between font-bold">
                <span>الإجمالي</span><span>{total} ر.س</span>
              </div>

              <div className="flex gap-2">
                <button onClick={placeOrder} className="flex-1 px-4 py-2 bg-green-600 text-white rounded">تأكيد الطلب</button>
                <button onClick={()=>setShowCheckout(false)} className="flex-1 px-4 py-2 border rounded">إلغاء</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="max-w-6xl mx-auto mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Anass Shop. جميع الحقوق محفوظة.</footer>
    </div>
  );
}
