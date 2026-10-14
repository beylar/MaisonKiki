
import { useState, type FormEvent } from "react";

type Category = "All" | "Handbags" | "Backpacks";

type Product = {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  color: string;
  image: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Black Mini Bag",
    category: "Handbags",
    color: "Black",
    image: "/images/black-mini-bag.JPG",
  },
  {
    id: 2,
    name: "Black Small Bag",
    category: "Handbags",
    color: "Black",
    image: "/images/black-small-bag.JPG",
  },
  {
    id: 3,
    name: "Black Zip Bag",
    category: "Handbags",
    color: "Black",
    image: "/images/black-zip-bag.JPG",
  },
  {
    id: 4,
    name: "Chocolate Taupe Backpack",
    category: "Backpacks",
    color: "Chocolate Taupe",
    image: "/images/chocolate-taupe.JPG",
  },
  {
    id: 5,
    name: "Chocolate Zip Bag",
    category: "Handbags",
    color: "Chocolate",
    image: "/images/chocolate-zip-bag.JPG",
  },
  {
    id: 6,
    name: "Ivory Bag",
    category: "Handbags",
    color: "Ivory",
    image: "/images/ivory-bag.JPG",
  },
  {
    id: 7,
    name: "Burgundy Woven Bag",
    category: "Handbags",
    color: "Burgundy",
    image: "/images/red-bag.JPG",
  },
  {
    id: 8,
    name: "Black Backpack",
    category: "Backpacks",
    color: "Black",
    image: "/images/taupe-bag.JPG",
  },
  {
    id: 9,
    name: "White Zip Bag",
    category: "Handbags",
    color: "White",
    image: "/images/white-zip-bag.JPG",
  },
  {
    id: 10,
    name: "Yellow Bag",
    category: "Handbags",
    color: "Yellow",
    image: "/images/yellow-bag.JPG",
  },
  {
    id: 11,
    name: "Black Mini Zip Bag",
    category: "Handbags",
    color: "Black",
    image: "/images/black-mini-zip-bag.JPG",
  },
  {
    id: 12,
    name: "Canvas Bag",
    category: "Handbags",
    color: "Cream & Tan",
    image: "/images/canvas-bag.JPG",
  },
  {
    id: 13,
    name: "Green Croc Bag",
    category: "Handbags",
    color: "Olive Green",
    image: "/images/green-bag.JPG",
  },
  {
    id: 14,
    name: "Sky Blue Bag",
    category: "Handbags",
    color: "Sky Blue",
    image: "/images/sky-blue-bag.JPG",
  },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function CartIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}

export default function App() {
  const [category, setCategory] =
    useState<Category>("All");

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredProducts = products.filter(
    (product) =>
      category === "All" ||
      product.category === category
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id: number): boolean => {
    return cart.some(
      (item) => item.product.id === id
    );
  };

  // Add or remove a product
  const toggleCart = (product: Product) => {
    setCart((previous) => {
      const exists = previous.some(
        (item) => item.product.id === product.id
      );

      if (exists) {
        return previous.filter(
          (item) => item.product.id !== product.id
        );
      }

      return [
        ...previous,
        { product, quantity: 1 },
      ];
    });
  };

  // Change quantity
  const changeQuantity = (
    id: number,
    amount: number
  ) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.product.id === id
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Contact form
  const handleContact = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    // Replace with your actual business email
    const recipient = "YOUR_EMAIL@example.com";

    const subject = "Maison Kiki Customer Inquiry";

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}`;

    window.location.href =
      `mailto:${recipient}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-cream text-ink">

      {/* ANNOUNCEMENT BAR */}
      <div className="bg-wine px-4 py-3 text-center text-xs tracking-[0.2em] text-white">
        WELCOME TO MAISON KIKI — TIMELESS ELEGANCE
      </div>

      {/* NAVIGATION BAR */}
      
        {/* NAVIGATION BAR */}
        <header className="sticky top-0 z-40 border-b border-stone-200 bg-cream/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">

            {/* LEFT SIDE: MAISON KIKI LOGO */}
            <a
            href="#home"
            className="flex items-center gap-3"
            >
            <img
                src="/images/logo.PNG"
                alt="Maison Kiki Logo"
                className="h-14 w-14 object-contain"
            />

            <span className="hidden font-display text-xl tracking-[0.15em] sm:block">
                MAISON KIKI
            </span>
            </a>

            {/* RIGHT SIDE: MENU AND CART */}
            <div className="flex items-center gap-6">

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-8 md:flex">
                {navigation.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium uppercase tracking-wider transition hover:text-wine"
                >
                    {link.label}
                </a>
                ))}
            </div>

            {/* SHOPPING CART ICON */}
            <button
                type="button"
                onClick={() => setCartOpen(true)}
                aria-label={`Open shopping cart, ${cartCount} items`}
                className="relative p-2 transition hover:text-wine"
            >
                <CartIcon />

                {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-wine px-1 text-xs text-white">
                    {cartCount}
                </span>
                )}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                className="text-sm font-medium md:hidden"
            >
                {menuOpen ? "Close" : "Menu"}
            </button>
            </div>
        </nav>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
            <div className="flex flex-col gap-5 border-t border-stone-200 bg-cream px-6 py-6 md:hidden">
            {navigation.map((link) => (
                <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-wider hover:text-wine"
                >
                {link.label}
                </a>
            ))}
            </div>
        )}
        </header>


      <main>
        {/* HOME / HERO */}
        <section
          id="home"
          className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-12 px-6 py-20 md:grid-cols-2 lg:py-28"
        >
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-wine">
              The Maison Kiki Collection
            </p>

            <h1 className="font-display mb-8 text-5xl leading-tight md:text-7xl">
              Elegance in
              <span className="block italic text-wine">
                Every Detail.
              </span>
            </h1>

            <p className="mb-10 max-w-lg text-lg leading-8 text-stone-600">
              Discover our beautiful collection of
              handbags and backpacks, designed to
              bring timeless elegance and style
              to your everyday life.
            </p>

            <a
              href="#shop"
              className="inline-block bg-wine px-10 py-4 text-sm uppercase tracking-widest text-white transition hover:bg-ink"
            >
              Shop Collection
            </a>
          </div>

          <div className="overflow-hidden bg-white p-6 shadow-sm">
            <img
              src="/images/red-bag.JPG"
              alt="Maison Kiki Featured Burgundy Handbag"
              className="h-[480px] w-full object-contain"
            />
          </div>
        </section>

        {/* SHOP SECTION */}
        <section
          id="shop"
          className="scroll-mt-24 bg-white px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">

            <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-gold">
              Discover Your Favorite
            </p>

            <h2 className="font-display mb-5 text-center text-4xl md:text-5xl">
              Our Collection
            </h2>

            <p className="mb-12 text-center text-stone-500">
              Find the perfect bag for every occasion.
            </p>

            {/* CATEGORY FILTER BUTTONS */}
            <div className="mb-12 flex flex-wrap justify-center gap-6">
              {(
                [
                  "All",
                  "Handbags",
                  "Backpacks",
                ] as Category[]
              ).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`border-b-2 px-4 py-3 text-sm transition ${
                    category === item
                      ? "border-wine font-semibold text-wine"
                      : "border-transparent text-stone-500 hover:text-wine"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* PRODUCT GRID */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => {
                const added = isInCart(product.id);

                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden"
                  >
                    <div className="relative overflow-hidden bg-cream p-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-80 w-full object-contain transition duration-500 group-hover:scale-105"
                      />

                      {/* CART BUTTON ON IMAGE */}
                      <button
                        type="button"
                        onClick={() => toggleCart(product)}
                        aria-label={
                          added
                            ? `Remove ${product.name} from cart`
                            : `Add ${product.name} to cart`
                        }
                        className={`absolute right-4 top-4 rounded-full p-3 shadow-sm transition ${
                          added
                            ? "bg-wine text-white"
                            : "bg-white text-ink hover:text-wine"
                        }`}
                      >
                        <CartIcon />
                      </button>
                    </div>

                    <div className="py-6 text-center">
                      <h3 className="font-display text-xl">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-sm text-stone-500">
                        {product.color} · {product.category}
                      </p>

                      {/* ADD TO CART BUTTON */}
                      <button
                        type="button"
                        onClick={() => toggleCart(product)}
                        className={`mt-5 w-full px-6 py-4 text-sm uppercase tracking-widest transition ${
                          added
                            ? "border border-wine bg-white text-wine hover:bg-cream"
                            : "bg-wine text-white hover:bg-ink"
                        }`}
                      >
                        {added
                          ? "✓ Added to Cart — Remove"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="scroll-mt-24 px-6 py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gold">
              Our Story
            </p>

            <h2 className="font-display mb-8 text-4xl md:text-5xl">
              About Maison Kiki
            </h2>

            <p className="text-lg leading-9 text-stone-600">
              Maison Kiki celebrates timeless elegance,
              beautiful details, and personal style.
              Our collection features handbags and
              backpacks in sophisticated colors,
              textures, and designs.
            </p>

            <p className="mt-6 text-lg leading-9 text-stone-600">
              Whether you are looking for an everyday
              handbag or a beautiful accessory for
              a special occasion, Maison Kiki offers
              something for your wardrobe.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="scroll-mt-24 bg-white px-6 py-24"
        >
          <div className="mx-auto max-w-xl">
            <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-gold">
              Get in Touch
            </p>

            <h2 className="font-display mb-6 text-center text-4xl md:text-5xl">
              Contact Us
            </h2>

            <p className="mb-10 text-center leading-7 text-stone-600">
              Have a question about our collection?
              We would love to hear from you.
            </p>

            <form
              onSubmit={handleContact}
              className="flex flex-col gap-5"
            >
              <label className="flex flex-col gap-2 text-sm">
                Your Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="border border-stone-300 bg-cream px-4 py-4 outline-none focus:border-wine"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                Email Address
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="border border-stone-300 bg-cream px-4 py-4 outline-none focus:border-wine"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                Your Message
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="How can we help?"
                  className="border border-stone-300 bg-cream px-4 py-4 outline-none focus:border-wine"
                />
              </label>

              <button
                type="submit"
                className="bg-wine px-8 py-4 text-sm uppercase tracking-widest text-white transition hover:bg-ink"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink px-6 py-16 text-center text-white">
        <h2 className="font-display mb-4 text-3xl tracking-[0.2em]">
          MAISON KIKI
        </h2>

        <p className="text-sm text-stone-400">
          Timeless Elegance. Modern Style.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {navigation.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider text-stone-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-stone-500">
          © {new Date().getFullYear()} Maison Kiki.
          All rights reserved.
        </p>
      </footer>

      {/* SHOPPING CART OVERLAY */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">

          {/* DARK BACKGROUND */}
          <button
            type="button"
            aria-label="Close shopping cart"
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/50"
          />

          {/* CART SIDE PANEL */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-xl"
          >

            {/* CART HEADER */}
            <div className="flex items-center justify-between border-b border-stone-200 px-6 py-6">
              <div>
                <h2 className="font-display text-2xl">
                  Your Shopping Bag
                </h2>

                <p className="mt-1 text-sm text-stone-500">
                  {cartCount} items selected
                </p>
              </div>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close shopping cart"
                className="p-2 text-2xl"
              >
                ×
              </button>
            </div>

            {/* CART ITEMS */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <CartIcon />

                  <h3 className="font-display mt-5 text-2xl">
                    Your bag is empty
                  </h3>

                  <p className="mt-3 text-stone-500">
                    Discover our collection and
                    select your favorite bags.
                  </p>

                  <button
                    type="button"
                    onClick={() => setCartOpen(false)}
                    className="mt-8 bg-wine px-8 py-3 text-white"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 border-b border-stone-200 pb-6"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-28 w-24 bg-white object-contain"
                      />

                      <div className="flex-1">
                        <h3 className="font-display text-lg">
                          {item.product.name}
                        </h3>

                        <p className="mt-1 text-sm text-stone-500">
                          {item.product.color}
                        </p>

                        {/* QUANTITY CONTROLS */}
                        <div className="mt-4 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              changeQuantity(
                                item.product.id,
                                -1
                              )
                            }
                            aria-label={`Decrease ${item.product.name} quantity`}
                            className="border border-stone-300 px-3 py-1"
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() =>
                              changeQuantity(
                                item.product.id,
                                1
                              )
                            }
                            aria-label={`Increase ${item.product.name} quantity`}
                            className="border border-stone-300 px-3 py-1"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            toggleCart(item.product)
                          }
                          className="mt-3 text-xs text-wine underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CART FOOTER */}
            {cart.length > 0 && (
              <div className="border-t border-stone-200 p-6">
                <div className="mb-5 flex justify-between font-medium">
                  <span>Total Items</span>
                  <span>{cartCount}</span>
                </div>

                <p className="mb-4 text-sm text-stone-500">
                  Product prices and online checkout
                  are not configured yet.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setCartOpen(false);

                    document
                      .getElementById("contact")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="w-full bg-wine p-4 text-sm uppercase tracking-widest text-white hover:bg-ink"
                >
                  Contact Us About Your Order
                </button>

                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="mt-4 w-full p-3 text-sm text-wine"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
