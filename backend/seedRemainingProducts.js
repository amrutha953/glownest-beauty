const db = require("./config/db");

// =====================================================
// PROMISE WRAPPER
// =====================================================

function query(sql, values) {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// =====================================================
// REMAINING PRODUCTS
// BODYCARE + SERUM + PERFUME
// =====================================================

const products = [

  // ===================================================
  // BODYCARE - BODY WASH
  // ===================================================

  {
    id: 13001,
    brand: "Dove",
    name: "Deeply Nourishing Body Wash",
    category: "Body Wash",
    price: 399,
    description:
      "Dove Deeply Nourishing Body Wash gently cleanses while nourishing your skin with MicroMoisture technology for soft, smooth and healthy-looking skin.",
    image: "/images/products/dove-body-wash.jpg",
  },

  {
    id: 13002,
    brand: "Nivea",
    name: "Creme Soft Body Wash",
    category: "Body Wash",
    price: 349,
    description:
      "Nivea Creme Soft Body Wash with Almond Oil provides deep nourishment, gentle cleansing and long-lasting freshness for everyday use.",
    image: "/images/products/nivea-body-wash.jpg",
  },

  {
    id: 13003,
    brand: "Palmolive",
    name: "Aroma Morning Tonic Body Wash",
    category: "Body Wash",
    price: 299,
    description:
      "Palmolive Aroma Morning Tonic Body Wash is enriched with natural botanical extracts that leave your skin refreshed and energized.",
    image: "/images/products/palmolive-body-wash.jpg",
  },

  {
    id: 13004,
    brand: "Fiama",
    name: "Blackcurrant Body Wash",
    category: "Body Wash",
    price: 275,
    description:
      "Fiama Blackcurrant Body Wash creates a rich creamy lather that deeply cleanses while keeping your skin moisturized and fresh.",
    image: "/images/products/fiama-body-wash.jpg",
  },

  // ===================================================
  // BODYCARE - BODY LOTION
  // ===================================================

  {
    id: 13101,
    brand: "Nivea",
    name: "Cocoa Nourish Body Lotion",
    category: "Bodycare",
    price: 399,
    description:
      "Nivea Cocoa Nourish Body Lotion is enriched with cocoa butter and Vitamin E to provide 48-hour deep moisture, leaving your skin soft, smooth, and healthy.",
    image: "/images/products/nivea-body-lotion.jpg",
  },

  {
    id: 13102,
    brand: "Vaseline",
    name: "Intensive Care Deep Moisture Lotion",
    category: "Bodycare",
    price: 349,
    description:
      "Vaseline Intensive Care Deep Moisture Lotion deeply hydrates dry skin and helps restore its natural moisture barrier for long-lasting softness.",
    image: "/images/products/vaseline-body-lotion.jpg",
  },

  {
    id: 13103,
    brand: "Dove",
    name: "Deeply Nourishing Body Lotion",
    category: "Bodycare",
    price: 425,
    description:
      "Dove Deeply Nourishing Body Lotion provides deep nourishment with its lightweight formula, keeping skin moisturized and silky smooth all day.",
    image: "/images/products/dove-body-lotion.jpg",
  },

  {
    id: 13104,
    brand: "Cetaphil",
    name: "Moisturizing Body Lotion",
    category: "Bodycare",
    price: 799,
    description:
      "Cetaphil Moisturizing Body Lotion is dermatologist recommended and specially formulated for dry and sensitive skin, providing long-lasting hydration without irritation.",
    image: "/images/products/cetaphil-body-lotion.jpg",
  },

  // ===================================================
  // BODYCARE - BODY BUTTER
  // ===================================================

  {
    id: 13201,
    brand: "The Body Shop",
    name: "Shea Body Butter",
    category: "Bodycare",
    price: 999,
    description:
      "Rich shea butter formula that deeply nourishes dry skin and provides up to 96 hours of moisture.",
    image: "/images/products/shea-body-butter.jpg",
  },

  {
    id: 13202,
    brand: "Plum",
    name: "Vanilla Body Butter",
    category: "Bodycare",
    price: 649,
    description:
      "Creamy vanilla body butter enriched with shea butter to soften and smooth dry skin.",
    image: "/images/products/plum-body-butter.jpg",
  },

  {
    id: 13203,
    brand: "MCaffeine",
    name: "Coffee Body Butter",
    category: "Bodycare",
    price: 599,
    description:
      "Coffee-infused body butter that hydrates deeply while improving skin texture and softness.",
    image: "/images/products/mcaffeine-body-butter.jpg",
  },

  {
    id: 13204,
    brand: "WOW Skin Science",
    name: "Cocoa Body Butter",
    category: "Bodycare",
    price: 549,
    description:
      "Cocoa butter enriched formula that locks in moisture and leaves skin soft, smooth, and nourished.",
    image: "/images/products/wow-body-butter.jpg",
  },

  // ===================================================
  // BODYCARE - BODY SCRUB
  // ===================================================

  {
    id: 13301,
    brand: "MCaffeine",
    name: "Coffee Body Scrub",
    category: "Bodycare",
    price: 449,
    description:
      "Coffee body scrub gently exfoliates dead skin, removes tan, and leaves your skin soft and glowing.",
    image: "/images/products/mcaffeine-body-scrub.jpg",
  },

  {
    id: 13302,
    brand: "Plum",
    name: "BodyLovin Sugar Scrub",
    category: "Bodycare",
    price: 599,
    description:
      "Plum sugar scrub exfoliates rough skin and provides long-lasting hydration with natural oils.",
    image: "/images/products/plum-body-scrub.jpg",
  },

  {
    id: 13303,
    brand: "Dove",
    name: "Exfoliating Body Polish",
    category: "Bodycare",
    price: 499,
    description:
      "Dove body polish gently buffs away dull skin while deeply moisturizing for a silky finish.",
    image: "/images/products/dove-body-scrub.jpg",
  },

  {
    id: 13304,
    brand: "The Body Shop",
    name: "British Rose Body Scrub",
    category: "Bodycare",
    price: 999,
    description:
      "A luxurious rose-infused body scrub that smooths, refreshes, and brightens your skin.",
    image: "/images/products/bodyshop-body-scrub.jpg",
  },

  // ===================================================
  // BODYCARE - HAND CREAM
  // ===================================================

  {
    id: 13401,
    brand: "Neutrogena",
    name: "Norwegian Formula Hand Cream",
    category: "Bodycare",
    price: 299,
    description:
      "A concentrated hand cream that provides instant relief and long-lasting hydration for dry hands.",
    image: "/images/products/neutrogena-hand-cream.jpg",
  },

  {
    id: 13402,
    brand: "The Body Shop",
    name: "Shea Hand Cream",
    category: "Bodycare",
    price: 595,
    description:
      "Enriched with shea butter to deeply nourish and soften rough, dry hands.",
    image: "/images/products/bodyshop-hand-cream.jpg",
  },

  {
    id: 13403,
    brand: "Nivea",
    name: "Soft Hand Cream",
    category: "Bodycare",
    price: 249,
    description:
      "A lightweight hand cream that moisturizes and keeps hands soft without feeling greasy.",
    image: "/images/products/nivea-hand-cream.jpg",
  },

  {
    id: 13404,
    brand: "Vaseline",
    name: "Healthy Hands Cream",
    category: "Bodycare",
    price: 199,
    description:
      "Daily moisturizing hand cream that helps repair dry skin and protects against moisture loss.",
    image: "/images/products/vaseline-hand-cream.jpg",
  },

  // ===================================================
  // BODYCARE - SOAP
  // ===================================================

  {
    id: 13601,
    brand: "Dove",
    name: "Beauty Bathing Bar",
    category: "Bodycare",
    price: 299,
    description:
      "Dove Beauty Bathing Bar gently cleanses while moisturizing your skin for a soft and smooth feel.",
    image: "/images/products/dove-soap.jpg",
  },

  {
    id: 13602,
    brand: "Pears",
    name: "Pure & Gentle Soap",
    category: "Bodycare",
    price: 199,
    description:
      "Pears Pure & Gentle Soap is enriched with glycerin to keep your skin hydrated and healthy.",
    image: "/images/products/pears-soap.jpg",
  },

  {
    id: 13603,
    brand: "Medimix",
    name: "Ayurvedic Classic Soap",
    category: "Bodycare",
    price: 149,
    description:
      "Medimix Ayurvedic Soap is made with natural herbs that help protect and nourish your skin.",
    image: "/images/products/medimix-soap.jpg",
  },

  {
    id: 13604,
    brand: "Dettol",
    name: "Original Bath Soap",
    category: "Bodycare",
    price: 179,
    description:
      "Dettol Original Soap provides trusted germ protection while keeping your skin fresh and clean.",
    image: "/images/products/dettol-soap.jpg",
  },

  // ===================================================
  // SERUM - VITAMIN C
  // ===================================================

  {
    id: 14001,
    brand: "Minimalist",
    name: "10% Vitamin C Face Serum",
    category: "Serum",
    price: 699,
    description:
      "Minimalist 10% Vitamin C Face Serum helps brighten dull skin, improve glow and protect skin from environmental damage.",
    image: "/images/products/minimalist-vitamin-c.jpg",
  },

  {
    id: 14002,
    brand: "Plum",
    name: "Vitamin C Face Serum",
    category: "Serum",
    price: 649,
    description:
      "Plum Vitamin C Face Serum helps improve skin brightness and gives a healthy natural glow.",
    image: "/images/products/plum-vitamin-c.jpg",
  },

  {
    id: 14003,
    brand: "Dot & Key",
    name: "Cica + Vitamin C Serum",
    category: "Serum",
    price: 749,
    description:
      "Dot & Key Cica + Vitamin C Serum calms skin, reduces dullness and enhances radiance.",
    image: "/images/products/dotkey-vitamin-c.jpg",
  },

  {
    id: 14004,
    brand: "Mamaearth",
    name: "Skin Illuminate Vitamin C Serum",
    category: "Serum",
    price: 599,
    description:
      "Mamaearth Vitamin C Serum helps brighten skin and provides a fresh illuminated look.",
    image: "/images/products/mamaearth-vitamin-c.jpg",
  },

  // ===================================================
  // SERUM - NIACINAMIDE
  // ===================================================

  {
    id: 14011,
    brand: "Minimalist",
    name: "10% Niacinamide Face Serum",
    category: "Serum",
    price: 599,
    description:
      "Minimalist 10% Niacinamide Serum helps control oil, reduce pores and improve skin texture.",
    image: "/images/products/minimalist-niacinamide.jpg",
  },

  {
    id: 14012,
    brand: "The Ordinary",
    name: "Niacinamide 10% + Zinc 1% Serum",
    category: "Serum",
    price: 699,
    description:
      "The Ordinary Niacinamide Serum helps reduce excess oil and supports clearer looking skin.",
    image: "/images/products/ordinary-niacinamide.jpg",
  },

  {
    id: 14013,
    brand: "Plum",
    name: "Plum Niacinamide Serum",
    category: "Serum",
    price: 575,
    description:
      "Plum Niacinamide Serum strengthens skin barrier and gives a smooth healthy glow.",
    image: "/images/products/plum-niacinamide.jpg",
  },

  {
    id: 14014,
    brand: "Dot & Key",
    name: "Barrier Repair Niacinamide Serum",
    category: "Serum",
    price: 645,
    description:
      "Dot & Key Niacinamide Serum helps repair skin barrier and maintain hydration.",
    image: "/images/products/dotkey-niacinamide.jpg",
  },

  // ===================================================
  // SERUM - RETINOL
  // ===================================================

  {
    id: 14021,
    brand: "Minimalist",
    name: "0.3% Retinol Face Serum",
    category: "Serum",
    price: 599,
    description:
      "Minimalist 0.3% Retinol Serum helps improve skin texture, reduce fine lines and support youthful looking skin.",
    image: "/images/products/minimalist-retinol.jpg",
  },

  {
    id: 14022,
    brand: "The Ordinary",
    name: "Retinol 1% in Squalane Serum",
    category: "Serum",
    price: 899,
    description:
      "The Ordinary Retinol Serum helps target signs of aging and improves skin appearance.",
    image: "/images/products/ordinary-retinol.jpg",
  },

  {
    id: 14023,
    brand: "Dot & Key",
    name: "Night Reset Retinol Serum",
    category: "Serum",
    price: 795,
    description:
      "Dot & Key Retinol Serum works overnight to improve skin texture and restore glow.",
    image: "/images/products/dotkey-retinol.jpg",
  },

  {
    id: 14024,
    brand: "Mamaearth",
    name: "Retinol Face Serum",
    category: "Serum",
    price: 649,
    description:
      "Mamaearth Retinol Serum helps improve skin firmness and gives a smoother appearance.",
    image: "/images/products/mamaearth-retinol.jpg",
  },

  // ===================================================
  // SERUM - HYALURONIC ACID
  // ===================================================

  {
    id: 14031,
    brand: "Minimalist",
    name: "2% Hyaluronic Acid Face Serum",
    category: "Serum",
    price: 599,
    description:
      "Minimalist 2% Hyaluronic Acid Serum provides deep hydration and helps maintain soft, plump skin.",
    image: "/images/products/minimalist-hyaluronic.jpg",
  },

  {
    id: 14032,
    brand: "The Ordinary",
    name: "Hyaluronic Acid 2% + B5 Serum",
    category: "Serum",
    price: 899,
    description:
      "The Ordinary Hyaluronic Acid Serum helps hydrate skin and improve moisture retention.",
    image: "/images/products/ordinary-hyaluronic.jpg",
  },

  {
    id: 14033,
    brand: "Dot & Key",
    name: "Hydrating Hyaluronic Acid Serum",
    category: "Serum",
    price: 695,
    description:
      "Dot & Key Hyaluronic Acid Serum delivers lightweight hydration and gives a healthy glow.",
    image: "/images/products/dotkey-hyaluronic.jpg",
  },

  {
    id: 14034,
    brand: "Plum",
    name: "Plum Hyaluronic Acid Serum",
    category: "Serum",
    price: 575,
    description:
      "Plum Hyaluronic Acid Serum keeps skin hydrated, smooth and refreshed.",
    image: "/images/products/plum-hyaluronic.jpg",
  },

  // ===================================================
  // SERUM - BRIGHTENING
  // ===================================================

  {
    id: 14041,
    brand: "Minimalist",
    name: "Alpha Arbutin Brightening Serum",
    category: "Serum",
    price: 599,
    description:
      "Minimalist Alpha Arbutin Brightening Serum helps reduce dullness and improves skin radiance.",
    image: "/images/products/minimalist-brightening.jpg",
  },

  {
    id: 14042,
    brand: "Plum",
    name: "15% Vitamin C Brightening Serum",
    category: "Serum",
    price: 649,
    description:
      "Plum Brightening Serum helps improve skin glow and gives a fresh radiant appearance.",
    image: "/images/products/plum-brightening.jpg",
  },

  {
    id: 14043,
    brand: "Dot & Key",
    name: "Glow Revealing Brightening Serum",
    category: "Serum",
    price: 695,
    description:
      "Dot & Key Brightening Serum helps reveal glowing skin and improves uneven skin tone.",
    image: "/images/products/dotkey-brightening.jpg",
  },

  {
    id: 14044,
    brand: "Mamaearth",
    name: "Natural Radiance Brightening Serum",
    category: "Serum",
    price: 599,
    description:
      "Mamaearth Brightening Serum helps nourish skin and provides a natural radiant glow.",
    image: "/images/products/mamaearth-brightening.jpg",
  },

  // ===================================================
  // SERUM - ANTI AGING
  // ===================================================

  {
    id: 14051,
    brand: "Minimalist",
    name: "Multi Peptide Anti Aging Serum",
    category: "Serum",
    price: 799,
    description:
      "Minimalist Multi Peptide Anti Aging Serum helps improve skin firmness, reduce fine lines and support youthful looking skin.",
    image: "/images/products/minimalist-antiaging.jpg",
  },

  {
    id: 14052,
    brand: "The Ordinary",
    name: "Buffet Anti Aging Serum",
    category: "Serum",
    price: 999,
    description:
      "The Ordinary Buffet Serum helps target signs of aging and improves skin texture for a smoother appearance.",
    image: "/images/products/ordinary-antiaging.jpg",
  },

  {
    id: 14053,
    brand: "Dot & Key",
    name: "Retinol + Peptide Anti Aging Serum",
    category: "Serum",
    price: 895,
    description:
      "Dot & Key Retinol + Peptide Serum helps improve firmness and gives skin a youthful glow.",
    image: "/images/products/dotkey-antiaging.jpg",
  },

  // ===================================================
  // PERFUME - WOMEN
  // ===================================================

  {
    id: 15001,
    category: "Perfume",
    brand: "Bella Vita",
    name: "Women's Floral Eau De Parfum",
    price: 699,
    description:
      "A fresh floral perfume crafted for women with elegant and long-lasting fragrance notes.",
    image: "/images/products/women-floral.jpg",
  },

  {
    id: 15002,
    category: "Perfume",
    brand: "Yves Rocher",
    name: "Elegant Rose Women's Perfume",
    price: 899,
    description:
      "A beautiful rose-based fragrance that gives a soft, romantic and refreshing feel.",
    image: "/images/products/women-rose.jpg",
  },

  {
    id: 15003,
    category: "Perfume",
    brand: "Plum",
    name: "Vanilla Vibes Women's Perfume",
    price: 799,
    description:
      "A sweet vanilla fragrance with warm and comforting notes for a beautiful everyday scent.",
    image: "/images/products/women-vanilla.jpg",
  },

  {
    id: 15004,
    category: "Perfume",
    brand: "The Body Shop",
    name: "White Musk Women's Fragrance",
    price: 999,
    description:
      "A luxurious white musk fragrance with a soft and sophisticated aroma.",
    image: "/images/products/women-musk.jpg",
  },

  // ===================================================
  // PERFUME - MEN
  // ===================================================

  {
    id: 15005,
    category: "Perfume",
    brand: "Wild Stone",
    name: "Edge Men's Eau De Parfum",
    price: 599,
    description:
      "A refreshing masculine fragrance with long lasting notes.",
    image: "/images/products/wildstone-men-perfume.jpg",
  },

  {
    id: 15006,
    category: "Perfume",
    brand: "Denver",
    name: "Hamilton Men's Perfume",
    price: 499,
    description:
      "A classy fragrance for confident men.",
    image: "/images/products/denver-men-perfume.jpg",
  },

  {
    id: 15007,
    category: "Perfume",
    brand: "Park Avenue",
    name: "Voyage Men's Fragrance",
    price: 699,
    description:
      "A sophisticated fragrance with a refreshing feel.",
    image: "/images/products/parkavenue-men-perfume.jpg",
  },

  {
    id: 15008,
    category: "Perfume",
    brand: "Fogg",
    name: "Fogg Impressio Men's Perfume",
    price: 399,
    description:
      "A stylish fragrance made for everyday confidence.",
    image: "/images/products/fogg-men-perfume.jpg",
  },

  // ===================================================
  // PERFUME - LUXURY
  // ===================================================

  {
    id: 15009,
    category: "Perfume",
    brand: "Bella Vita",
    name: "Luxury Oud Eau De Parfum",
    price: 1299,
    description:
      "A premium oud fragrance with rich and elegant notes.",
    image: "/images/products/luxury-oud-perfume.jpg",
  },

  {
    id: 15010,
    category: "Perfume",
    brand: "Ajmal",
    name: "Amber Wood Luxury Perfume",
    price: 2499,
    description:
      "A sophisticated woody fragrance designed for elegance.",
    image: "/images/products/ajmal-luxury-perfume.jpg",
  },

  {
    id: 15011,
    category: "Perfume",
    brand: "Yardley",
    name: "London Premium Fragrance",
    price: 899,
    description:
      "A classic premium fragrance with a refreshing feel.",
    image: "/images/products/yardley-luxury-perfume.jpg",
  },

  {
    id: 15012,
    category: "Perfume",
    brand: "The Man Company",
    name: "Luxury Signature Perfume",
    price: 1499,
    description:
      "A signature luxury scent created for modern men.",
    image: "/images/products/man-company-luxury-perfume.jpg",
  },

  // ===================================================
  // PERFUME - FLORAL
  // ===================================================

  {
    id: 15013,
    category: "Perfume",
    brand: "Engage",
    name: "Bloom Floral Eau De Parfum",
    price: 499,
    description:
      "A refreshing floral perfume with beautiful flower-inspired notes.",
    image: "/images/products/engage-floral-perfume.jpg",
  },

  {
    id: 15014,
    category: "Perfume",
    brand: "Yardley",
    name: "English Rose Floral Perfume",
    price: 599,
    description:
      "A romantic rose fragrance with a soft elegant aroma.",
    image: "/images/products/yardley-floral-perfume.jpg",
  },

  {
    id: 15015,
    category: "Perfume",
    brand: "Plum",
    name: "BodyLovin' Hawaiian Rumba Perfume",
    price: 699,
    description:
      "A tropical floral fragrance with fresh fruity notes.",
    image: "/images/products/plum-floral-perfume.jpg",
  },

  {
    id: 15016,
    category: "Perfume",
    brand: "The Body Shop",
    name: "Floral Musk Fragrance",
    price: 1299,
    description:
      "A premium floral musk fragrance for a graceful feel.",
    image: "/images/products/bodyshop-floral-perfume.jpg",
  },

  // ===================================================
  // PERFUME - WOODY
  // ===================================================

  {
    id: 15017,
    category: "Perfume",
    brand: "Ustraa",
    name: "Base Camp Woody Perfume",
    price: 699,
    description:
      "A warm woody fragrance with a bold masculine character.",
    image: "/images/products/ustraa-woody-perfume.jpg",
  },

  {
    id: 15018,
    category: "Perfume",
    brand: "Skinn",
    name: "Raw Instinct Woody Fragrance",
    price: 1199,
    description:
      "A sophisticated woody perfume with premium fragrance notes.",
    image: "/images/products/skinn-woody-perfume.jpg",
  },

  {
    id: 15019,
    category: "Perfume",
    brand: "Ajmal",
    name: "Silver Shade Woody Perfume",
    price: 1599,
    description:
      "A rich woody fragrance crafted for confident personalities.",
    image: "/images/products/ajmal-woody-perfume.jpg",
  },

  {
    id: 15020,
    category: "Perfume",
    brand: "Denver",
    name: "Hamilton Woody Edition Perfume",
    price: 599,
    description:
      "A stylish woody fragrance for everyday confidence.",
    image: "/images/products/denver-woody-edition.jpg",
  },

  // ===================================================
  // PERFUME - FRESH
  // ===================================================

  {
    id: 15021,
    category: "Perfume",
    brand: "Fogg",
    name: "Fresh Aqua Men's Perfume",
    price: 399,
    description:
      "A refreshing aqua fragrance that keeps you fresh throughout the day.",
    image: "/images/products/fogg-fresh-perfume.jpg",
  },

  {
    id: 15022,
    category: "Perfume",
    brand: "Engage",
    name: "Fresh Citrus Eau De Parfum",
    price: 499,
    description:
      "A bright citrus fragrance with a refreshing feel.",
    image: "/images/products/engage-fresh-perfume.jpg",
  },

  {
    id: 15023,
    category: "Perfume",
    brand: "Nivea",
    name: "Fresh Active Perfume",
    price: 599,
    description:
      "A clean and refreshing fragrance for an active lifestyle.",
    image: "/images/products/nivea-fresh-perfume.jpg",
  },

  {
    id: 15024,
    category: "Perfume",
    brand: "Wild Stone",
    name: "Fresh Ocean Fragrance",
    price: 699,
    description:
      "A cool ocean-inspired fragrance with refreshing notes.",
    image: "/images/products/wildstone-fresh-perfume.jpg",
  },
];

// =====================================================
// SEED PRODUCTS
// =====================================================

async function seedProducts() {
  try {
    console.log("✅ MySQL Connected");

    let processed = 0;

    for (const product of products) {
      await query(
        `
        INSERT INTO products
        (
          id,
          name,
          brand,
          category,
          price,
          image,
          description,
          stock
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)

        ON DUPLICATE KEY UPDATE
          name = VALUES(name),
          brand = VALUES(brand),
          category = VALUES(category),
          price = VALUES(price),
          image = VALUES(image),
          description = VALUES(description),
          stock = VALUES(stock)
        `,
        [
          product.id,
          product.name,
          product.brand,
          product.category,
          product.price,
          product.image,
          product.description,
          50,
        ]
      );

      processed++;

      console.log(
        `✅ Seeded: ${product.id} - ${product.name}`
      );
    }

    console.log("");
    console.log("======================================");
    console.log("✅ REMAINING PRODUCTS SEEDED!");
    console.log(`Products processed: ${processed}`);
    console.log("======================================");

    process.exit(0);

  } catch (error) {
    console.error("");
    console.error("❌ ERROR SEEDING PRODUCTS:");
    console.error(error);

    process.exit(1);
  }
}

// =====================================================
// START
// =====================================================

seedProducts();