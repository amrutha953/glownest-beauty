const db = require("./config/db");

const products = [

  // =========================
  // SKINCARE
  // =========================

  {
    id: 1,
    name: "Vitamin C Face Serum Updated",
    brand: "GlowNest",
    category: "Skincare",
    price: 749,
    image: "/images/vitamin-c-face-serum.jpg",
    description:
      "Brightening Vitamin C Face Serum enriched with antioxidants to reduce pigmentation, hydrate the skin, and provide a natural radiant glow.",
    stock: 50
  },

  {
    id: 2,
    name: "Daily Face Cleanser",
    brand: "GlowNest",
    category: "Skincare",
    price: 399,
    image: "/images/daily-face-cleanser.jpg",
    description:
      "Gentle cleanser that removes dirt and excess oil without drying the skin.",
    stock: 50
  },

  {
    id: 3,
    name: "Hydrating Moisturizer",
    brand: "GlowNest",
    category: "Skincare",
    price: 549,
    image: "/images/hydrating moisturizer.jpg",
    description:
      "Lightweight moisturizer for soft, healthy and hydrated skin.",
    stock: 50
  },

  {
    id: 4,
    name: "SPF 50 Sunscreen",
    brand: "GlowNest",
    category: "Skincare",
    price: 599,
    image: "/images/spf 50 sunscreen.jpg",
    description:
      "Broad spectrum SPF 50 sunscreen for everyday UV protection.",
    stock: 50
  },


  // =========================
  // MAKEUP
  // =========================

  {
    id: 101,
    name: "Matte Lipstick",
    brand: "GlowNest",
    category: "Makeup",
    price: 499,
    image: "/images/matte-lipstick.jpg",
    description:
      "A long-lasting matte lipstick with rich color payoff and a comfortable matte finish.",
    stock: 50
  },

  {
    id: 102,
    name: "Liquid Foundation",
    brand: "GlowNest",
    category: "Makeup",
    price: 899,
    image: "/images/liquid-foundation.jpg",
    description:
      "Lightweight liquid foundation that provides full coverage with a smooth natural finish.",
    stock: 50
  },

  {
    id: 103,
    name: "Waterproof Mascara",
    brand: "GlowNest",
    category: "Makeup",
    price: 699,
    image: "/images/waterproof-mascara.jpg",
    description:
      "Smudge-proof waterproof mascara that adds volume, length, and definition for all-day wear.",
    stock: 50
  },

  {
    id: 104,
    name: "Eyeshadow Palette",
    brand: "GlowNest",
    category: "Makeup",
    price: 999,
    image: "/images/eyeshadow-palette.jpg",
    description:
      "Highly pigmented eyeshadow palette with vibrant matte and shimmer shades for every occasion.",
    stock: 50
  },


  // =========================
  // HAIRCARE
  // =========================

  {
    id: 201,
    name: "Nourishing Shampoo",
    brand: "GlowNest",
    category: "Haircare",
    price: 599,
    image: "/images/nourishing-shampoo.jpg",
    description:
      "A nourishing shampoo that gently cleanses the scalp while strengthening and adding shine to your hair.",
    stock: 50
  },

  {
    id: 202,
    name: "Repair Conditioner",
    brand: "GlowNest",
    category: "Haircare",
    price: 649,
    image: "/images/repair-conditioner.jpg",
    description:
      "A rich conditioner that deeply nourishes dry and damaged hair, leaving it smooth and manageable.",
    stock: 50
  },

  {
    id: 203,
    name: "Hair Serum",
    brand: "GlowNest",
    category: "Haircare",
    price: 799,
    image: "/images/hair-serum.jpg",
    description:
      "Lightweight hair serum that controls frizz, adds shine, and protects hair from daily damage.",
    stock: 50
  },

  {
    id: 204,
    name: "Hair Mask",
    brand: "GlowNest",
    category: "Haircare",
    price: 899,
    image: "/images/hair-mask.jpg",
    description:
      "An intensive hair mask that repairs damaged strands and restores softness and moisture.",
    stock: 50
  },


  // =========================
  // BODYCARE
  // =========================

  {
    id: 301,
    name: "Body Lotion",
    brand: "GlowNest",
    category: "Bodycare",
    price: 499,
    image: "/images/body-lotion.jpg",
    description:
      "A deeply nourishing body lotion that provides long-lasting hydration, leaving your skin soft, smooth, and healthy.",
    stock: 50
  },

  {
    id: 302,
    name: "Body Wash",
    brand: "GlowNest",
    category: "Bodycare",
    price: 399,
    image: "/images/body-wash.jpg",
    description:
      "A gentle body wash that cleanses, refreshes, and moisturizes the skin while maintaining its natural softness.",
    stock: 50
  },

  {
    id: 303,
    name: "Body Scrub",
    brand: "GlowNest",
    category: "Bodycare",
    price: 599,
    image: "/images/body-scrub.jpg",
    description:
      "An exfoliating body scrub that removes dead skin cells, smooths rough areas, and reveals naturally glowing skin.",
    stock: 50
  },

  {
    id: 304,
    name: "Hand Cream",
    brand: "GlowNest",
    category: "Bodycare",
    price: 349,
    image: "/images/hand-cream.jpg",
    description:
      "A rich hand cream that deeply moisturizes dry hands, keeping them soft, nourished, and protected throughout the day.",
    stock: 50
  },


  // =========================
  // SERUM
  // =========================

  {
    id: 401,
    name: "Vitamin C Serum",
    brand: "GlowNest",
    category: "Serum",
    price: 699,
    image: "/images/vitamin-c-face-serum.jpg",
    description:
      "A powerful Vitamin C serum that brightens the skin, reduces dark spots, and provides antioxidant protection for a healthy glow.",
    stock: 50
  },

  {
    id: 402,
    name: "Hyaluronic Acid Serum",
    brand: "GlowNest",
    category: "Serum",
    price: 799,
    image: "/images/hyaluronic-serum.jpg",
    description:
      "A deeply hydrating serum enriched with Hyaluronic Acid to lock in moisture and leave your skin soft, plump, and refreshed.",
    stock: 50
  },

  {
    id: 403,
    name: "Niacinamide Serum",
    brand: "GlowNest",
    category: "Serum",
    price: 749,
    image: "/images/niacinamide-glow-serum.jpg",
    description:
      "A lightweight Niacinamide serum that helps reduce pores, control excess oil, and improve overall skin texture.",
    stock: 50
  },

  {
    id: 404,
    name: "Retinol Serum",
    brand: "GlowNest",
    category: "Serum",
    price: 899,
    image: "/images/retinol-serum.jpg",
    description:
      "An advanced Retinol serum that supports skin renewal, smooths fine lines, and promotes a youthful-looking complexion.",
    stock: 50
  },


  // =========================
  // PERFUME
  // =========================

  {
    id: 501,
    name: "Luxury Rose Eau De Parfum",
    brand: "GlowNest",
    category: "Perfume",
    price: 1299,
    image: "/images/luxury-rose-perfume.jpg",
    description:
      "A luxurious rose fragrance with elegant floral notes and a long-lasting scent, perfect for everyday wear and special occasions.",
    stock: 50
  },

  {
    id: 502,
    name: "Midnight Oud Perfume",
    brand: "GlowNest",
    category: "Perfume",
    price: 1499,
    image: "/images/midnight-oud-perfume.jpg",
    description:
      "A rich oud fragrance with warm woody notes that delivers an elegant, bold, and long-lasting aroma.",
    stock: 50
  },

  {
    id: 503,
    name: "Floral Bloom Perfume",
    brand: "GlowNest",
    category: "Perfume",
    price: 1199,
    image: "/images/floral-bloom-perfume.jpg",
    description:
      "A refreshing floral perfume featuring delicate flower notes that create a soft, feminine, and refreshing fragrance.",
    stock: 50
  },

  {
    id: 504,
    name: "Royal Musk Perfume",
    brand: "GlowNest",
    category: "Perfume",
    price: 1599,
    image: "/images/royal-musk-perfume.jpg",
    description:
      "A premium musk perfume with smooth oriental notes that provides a sophisticated and luxurious fragrance throughout the day.",
    stock: 50
  }

];


// ========================================
// SEED PRODUCTS
// ========================================

const seedProducts = async () => {

  try {

    console.log("======================================");
    console.log("Starting original products seeding...");
    console.log("======================================");

    for (const product of products) {

      const sql = `
        INSERT INTO products
        (id, name, brand, category, price, image, description, stock)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          name = VALUES(name),
          brand = VALUES(brand),
          category = VALUES(category),
          price = VALUES(price),
          image = VALUES(image),
          description = VALUES(description),
          stock = VALUES(stock)
      `;

      await new Promise((resolve, reject) => {

        db.query(
          sql,
          [
            product.id,
            product.name,
            product.brand,
            product.category,
            product.price,
            product.image,
            product.description,
            product.stock
          ],
          (err) => {

            if (err) {
              console.error(
                `❌ Failed: ${product.id} - ${product.name}`
              );
              console.error(err.message);
              reject(err);
              return;
            }

            console.log(
              `✅ Seeded: ${product.id} - ${product.name}`
            );

            resolve();

          }
        );

      });

    }

    console.log("");
    console.log("======================================");
    console.log("✅ ORIGINAL PRODUCTS SEEDED!");
    console.log(`Products processed: ${products.length}`);
    console.log("======================================");

    process.exit(0);

  } catch (error) {

    console.error("");
    console.error("❌ SEEDING FAILED");
    console.error(error);

    process.exit(1);

  }

};

seedProducts();