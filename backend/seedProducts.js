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
// PRODUCTS
// =====================================================

const products = [

  // ===================================================
  // MAKEUP - FOUNDATION
  // ===================================================

  {
    id: 11011,
    name: "Fit Me Foundation",
    brand: "Maybelline",
    category: "Makeup",
    price: 699,
    image: "/images/products/maybelline-fit-me-foundation.jpg",
    description:
      "Maybelline Fit Me Foundation provides natural-looking coverage with a smooth finish."
  },

  {
    id: 11012,
    name: "Infallible Foundation",
    brand: "L'Oréal",
    category: "Makeup",
    price: 899,
    image: "/images/products/loreal-infallible-foundation.jpg",
    description:
      "L'Oréal Infallible Foundation provides long-lasting coverage with a smooth finish."
  },

  {
    id: 11013,
    name: "9to5 Foundation",
    brand: "Lakme",
    category: "Makeup",
    price: 599,
    image: "/images/products/lakme-9to5-foundation.jpg",
    description:
      "Lakme 9to5 Foundation provides smooth coverage for a flawless everyday look."
  },

  {
    id: 11014,
    name: "HD Foundation",
    brand: "Swiss Beauty",
    category: "Makeup",
    price: 499,
    image: "/images/products/swiss-beauty-hd-foundation.jpg",
    description:
      "Swiss Beauty HD Foundation provides buildable coverage with a natural finish."
  },

  {
    id: 11015,
    name: "Studio Fix Fluid",
    brand: "M.A.C",
    category: "Makeup",
    price: 2999,
    image: "/images/products/mac-studio-fix.jpg",
    description:
      "M.A.C Studio Fix Fluid provides buildable coverage with a smooth matte finish."
  },

  {
    id: 11016,
    name: "Hydrating Foundation",
    brand: "Kay Beauty",
    category: "Makeup",
    price: 1200,
    image: "/images/products/kay-beauty-foundation.jpg",
    description:
      "Kay Beauty Hydrating Foundation provides comfortable coverage with a fresh finish."
  },

  // ===================================================
  // MAKEUP - MASCARA
  // ===================================================

  {
    id: 11031,
    name: "Sky High Mascara",
    brand: "Maybelline",
    category: "Makeup",
    price: 799,
    image: "/images/products/maybelline-sky-high.jpg",
    description:
      "Maybelline Sky High Mascara gives lashes impressive length and volume."
  },

  {
    id: 11032,
    name: "Lash Paradise Mascara",
    brand: "L'Oréal",
    category: "Makeup",
    price: 899,
    image: "/images/products/loreal-lash-paradise.jpg",
    description:
      "L'Oréal Lash Paradise Mascara adds dramatic volume and length to lashes."
  },

  {
    id: 11033,
    name: "Eyeconic Curl Mascara",
    brand: "Lakme",
    category: "Makeup",
    price: 499,
    image: "/images/products/lakme-eyeconic-mascara.jpg",
    description:
      "Lakme Eyeconic Curl Mascara gives lashes curl, definition and volume."
  },

  {
    id: 11034,
    name: "Volume Mascara",
    brand: "Swiss Beauty",
    category: "Makeup",
    price: 399,
    image: "/images/products/swiss-beauty-mascara.jpg",
    description:
      "Swiss Beauty Volume Mascara adds definition and fuller-looking volume to lashes."
  },

  {
    id: 11035,
    name: "Magic Extension Mascara",
    brand: "M.A.C",
    category: "Makeup",
    price: 2299,
    image: "/images/products/mac-magic-extension.jpg",
    description:
      "M.A.C Magic Extension Mascara gives lashes enhanced length and definition."
  },

  {
    id: 11036,
    name: "Magneteyes Mascara",
    brand: "Faces Canada",
    category: "Makeup",
    price: 599,
    image: "/images/products/faces-magneteyes.jpg",
    description:
      "Faces Canada Magneteyes Mascara provides defined and voluminous lashes."
  },

  // ===================================================
  // MAKEUP - COMPACT
  // ===================================================

  {
    id: 11041,
    name: "Fit Me Compact Powder",
    brand: "Maybelline",
    category: "Makeup",
    price: 299,
    image: "/images/products/maybelline-compact.jpg",
    description:
      "Maybelline Fit Me Compact Powder controls shine and gives a smooth matte finish."
  },

  {
    id: 11042,
    name: "Radiance Compact Powder",
    brand: "Lakme",
    category: "Makeup",
    price: 250,
    image: "/images/products/lakme-compact.jpg",
    description:
      "Lakme Radiance Compact Powder gives a natural bright look with lightweight coverage."
  },

  {
    id: 11043,
    name: "HD Compact Powder",
    brand: "Swiss Beauty",
    category: "Makeup",
    price: 399,
    image: "/images/products/hd-compact.jpg",
    description:
      "Swiss Beauty HD Compact Powder provides a flawless finish with oil control."
  },

  {
    id: 11044,
    name: "Studio Fix Compact",
    brand: "M.A.C",
    category: "Makeup",
    price: 3200,
    image: "/images/products/mac-compact.jpg",
    description:
      "M.A.C Studio Fix Compact provides professional coverage with a smooth matte finish."
  },

  {
    id: 11045,
    name: "Weightless Matte Compact",
    brand: "Faces Canada",
    category: "Makeup",
    price: 599,
    image: "/images/products/faces-compact.jpg",
    description:
      "Lightweight matte compact powder that keeps makeup fresh throughout the day."
  },

  {
    id: 11046,
    name: "All Day Matte Compact",
    brand: "Nykaa",
    category: "Makeup",
    price: 499,
    image: "/images/products/nykaa-compact.jpg",
    description:
      "Nykaa compact powder gives a smooth matte look and controls excess oil."
  },

  // ===================================================
  // MAKEUP - CONCEALER
  // ===================================================

  {
    id: 11051,
    name: "Instant Age Rewind Concealer",
    brand: "Maybelline",
    category: "Makeup",
    price: 699,
    image: "/images/products/maybelline-concealer.jpg",
    description:
      "Maybelline Instant Age Rewind Concealer provides high coverage for dark circles and imperfections."
  },

  {
    id: 11052,
    name: "Infallible Concealer",
    brand: "L'Oréal",
    category: "Makeup",
    price: 899,
    image: "/images/products/loreal-concealer.jpg",
    description:
      "L'Oréal Infallible Concealer offers full coverage with a lightweight texture."
  },

  {
    id: 11053,
    name: "Full Coverage Concealer",
    brand: "Swiss Beauty",
    category: "Makeup",
    price: 499,
    image: "/images/products/swiss-concealer.jpg",
    description:
      "Swiss Beauty Full Coverage Concealer blends easily to cover imperfections."
  },

  {
    id: 11054,
    name: "Absolute Concealer",
    brand: "Lakme",
    category: "Makeup",
    price: 599,
    image: "/images/products/lakme-concealer.jpg",
    description:
      "Lakme Absolute Concealer provides lightweight coverage with a natural finish."
  },

  // ===================================================
  // MAKEUP - LIPSTICK
  // ===================================================

  {
    id: 12001,
    name: "Matte Lipstick",
    brand: "M.A.C",
    category: "Makeup",
    price: 1999,
    image: "/images/products/mac-matte-lipstick.jpg",
    description:
      "M.A.C Matte Lipstick provides rich color with a smooth matte finish."
  },

  {
    id: 12002,
    name: "Super Stay Matte Ink",
    brand: "Maybelline",
    category: "Makeup",
    price: 699,
    image: "/images/products/maybelline-matte-ink.jpg",
    description:
      "Maybelline Super Stay Matte Ink provides long-lasting color with a comfortable matte finish."
  },

  {
    id: 12003,
    name: "9to5 Primer + Matte Lipstick",
    brand: "Lakme",
    category: "Makeup",
    price: 499,
    image: "/images/products/lakme-9to5-lipstick.jpg",
    description:
      "Lakme 9to5 Primer + Matte Lipstick delivers rich color with a smooth matte finish."
  },

  {
    id: 12004,
    name: "So Matte Lipstick",
    brand: "Nykaa",
    category: "Makeup",
    price: 399,
    image: "/images/products/nykaa-so-matte-lipstick.jpg",
    description:
      "Nykaa So Matte Lipstick gives intense color with a lightweight matte finish."
  },

  {
    id: 12005,
    name: "Non Transfer Lipstick",
    brand: "Swiss Beauty",
    category: "Makeup",
    price: 349,
    image: "/images/products/swiss-beauty-lipstick.jpg",
    description:
      "Swiss Beauty Non Transfer Lipstick provides rich color with a comfortable finish."
  },

  {
    id: 12006,
    name: "Color Riche Lipstick",
    brand: "L'Oréal",
    category: "Makeup",
    price: 899,
    image: "/images/products/loreal-color-riche-lipstick.jpg",
    description:
      "L'Oréal Color Riche Lipstick delivers rich color with a creamy finish."
  },

  // ===================================================
  // MAKEUP - BLUSH
  // ===================================================

  {
    id: 11061,
    name: "Soft Pinch Liquid Blush",
    brand: "Rare Beauty",
    category: "Makeup",
    price: 1999,
    image: "/images/products/pink-blush.jpg",
    description:
      "Highly pigmented liquid blush that blends beautifully to give a natural rosy glow."
  },

  {
    id: 11062,
    name: "Absolute Blush",
    brand: "Lakme",
    category: "Makeup",
    price: 650,
    image: "/images/products/peach-blush.jpg",
    description:
      "Soft powder blush that gives a fresh and natural flush of colour."
  },

  {
    id: 11063,
    name: "Fit Me Blush",
    brand: "Maybelline",
    category: "Makeup",
    price: 599,
    image: "/images/products/matte-blush.jpg",
    description:
      "Lightweight blush with buildable colour for a smooth matte finish."
  },

  {
    id: 11064,
    name: "Matte To Last Blush",
    brand: "Nykaa",
    category: "Makeup",
    price: 799,
    image: "/images/products/liquid-blush.jpg",
    description:
      "Long-lasting blush that provides a beautiful natural cheek tint."
  },

  // ===================================================
  // HAIRCARE - SHAMPOO
  // ===================================================
  // IMPORTANT:
  // 12001-12006 are already used by lipstick.
  // Therefore these IDs must NOT be reused.
  // ===================================================

  {
    id: 12101,
    name: "Total Repair 5 Shampoo",
    brand: "L'Oréal Paris",
    category: "Haircare",
    price: 499,
    image: "/images/products/loreal-shampoo.jpg",
    description:
      "L'Oréal Paris Total Repair 5 Shampoo helps repair damaged hair and leaves it soft, shiny, and healthy."
  },

  {
    id: 12102,
    name: "Daily Shine Shampoo",
    brand: "Dove",
    category: "Haircare",
    price: 399,
    image: "/images/products/dove-shampoo.jpg",
    description:
      "Dove Daily Shine Shampoo gently cleanses hair while nourishing it and leaving it soft and shiny."
  },

  {
    id: 12103,
    name: "Keratin Smooth Shampoo",
    brand: "Tresemmé",
    category: "Haircare",
    price: 699,
    image: "/images/products/tresemme-shampoo.jpg",
    description:
      "Tresemmé Keratin Smooth Shampoo helps control frizz and provides silky smooth hair."
  },

  {
    id: 12104,
    name: "Onion Shampoo",
    brand: "Mamaearth",
    category: "Haircare",
    price: 549,
    image: "/images/products/mamaearth-shampoo.jpg",
    description:
      "Mamaearth Onion Shampoo helps strengthen hair and promotes healthy-looking hair."
  },

  // ===================================================
  // HAIRCARE - CONDITIONER
  // ===================================================

  {
    id: 12011,
    name: "Intense Repair Conditioner",
    brand: "Dove",
    category: "Haircare",
    price: 399,
    image: "/images/products/dove-conditioner.jpg",
    description:
      "Dove Intense Repair Conditioner nourishes damaged hair and leaves it soft and manageable."
  },

  {
    id: 12012,
    name: "Dream Lengths Conditioner",
    brand: "L'Oréal Paris",
    category: "Haircare",
    price: 499,
    image: "/images/products/loreal-conditioner.jpg",
    description:
      "L'Oréal Paris Dream Lengths Conditioner helps repair damaged hair and provides silky smooth hair."
  },

  {
    id: 12013,
    name: "Keratin Smooth Conditioner",
    brand: "Tresemmé",
    category: "Haircare",
    price: 699,
    image: "/images/products/tresemme-conditioner.jpg",
    description:
      "Tresemmé Keratin Smooth Conditioner controls frizz and makes hair smooth and shiny."
  },

  {
    id: 12014,
    name: "Onion Conditioner",
    brand: "Mamaearth",
    category: "Haircare",
    price: 549,
    image: "/images/products/mamaearth-conditioner.jpg",
    description:
      "Mamaearth Onion Conditioner deeply nourishes hair and helps strengthen hair."
  },

  // ===================================================
  // HAIRCARE - HAIR OIL
  // ===================================================

  {
    id: 12021,
    name: "Bringha Hair Oil",
    brand: "Indulekha",
    category: "Haircare",
    price: 399,
    image: "/images/products/indulekha-hair-oil.jpg",
    description:
      "Indulekha Bringha Hair Oil nourishes the scalp and supports healthy-looking hair."
  },

  {
    id: 12022,
    name: "Onion Hair Oil",
    brand: "Mamaearth",
    category: "Haircare",
    price: 499,
    image: "/images/products/mamaearth-hair-oil.jpg",
    description:
      "Mamaearth Onion Hair Oil nourishes hair and helps improve hair texture."
  },

  {
    id: 12023,
    name: "Advanced Coconut Hair Oil",
    brand: "Parachute",
    category: "Haircare",
    price: 299,
    image: "/images/products/parachute-hair-oil.jpg",
    description:
      "Parachute Advanced Coconut Hair Oil deeply nourishes hair and helps prevent dryness."
  },

  {
    id: 12024,
    name: "Onion Black Seed Hair Oil",
    brand: "WOW Skin Science",
    category: "Haircare",
    price: 699,
    image: "/images/products/wow-hair-oil.jpg",
    description:
      "WOW Skin Science Onion Black Seed Hair Oil supports stronger and healthier-looking hair."
  },

  // ===================================================
  // HAIRCARE - HAIR SERUM
  // ===================================================

  {
    id: 12031,
    name: "Extraordinary Oil Hair Serum",
    brand: "L'Oréal Paris",
    category: "Haircare",
    price: 599,
    image: "/images/products/loreal-hair-serum.jpg",
    description:
      "L'Oréal Paris Extraordinary Oil Hair Serum nourishes dry hair, reduces frizz, and provides shine."
  },

  {
    id: 12032,
    name: "Anti-Frizz Hair Serum",
    brand: "Livon",
    category: "Haircare",
    price: 299,
    image: "/images/products/livon-hair-serum.jpg",
    description:
      "Livon Anti-Frizz Hair Serum smooths rough hair and controls frizz."
  },

  {
    id: 12033,
    name: "Professional Hair Serum",
    brand: "Streax",
    category: "Haircare",
    price: 399,
    image: "/images/products/streax-hair-serum.jpg",
    description:
      "Streax Professional Hair Serum provides smoothness and enhances hair shine."
  },

  {
    id: 12034,
    name: "Onion Hair Serum",
    brand: "Mamaearth",
    category: "Haircare",
    price: 499,
    image: "/images/products/mamaearth-hair-serum.jpg",
    description:
      "Mamaearth Onion Hair Serum helps reduce frizz and gives hair a smoother appearance."
  },

  // ===================================================
  // HAIRCARE - HAIR MASK
  // ===================================================

  {
    id: 12041,
    name: "Total Repair 5 Hair Mask",
    brand: "L'Oréal Paris",
    category: "Haircare",
    price: 699,
    image: "/images/products/loreal-hair-mask.jpg",
    description:
      "L'Oréal Paris Total Repair 5 Hair Mask deeply nourishes damaged hair and leaves it smooth and soft."
  },

  {
    id: 12042,
    name: "Argan Hair Mask",
    brand: "Mamaearth",
    category: "Haircare",
    price: 599,
    image: "/images/products/mamaearth-hair-mask.jpg",
    description:
      "Mamaearth Argan Hair Mask deeply nourishes dry and damaged hair."
  },

  {
    id: 12043,
    name: "Keratin Smooth Hair Mask",
    brand: "Tresemmé",
    category: "Haircare",
    price: 799,
    image: "/images/products/tresemme-hair-mask.jpg",
    description:
      "Tresemmé Keratin Smooth Hair Mask controls frizz and provides smooth-looking hair."
  },

  {
    id: 12044,
    name: "Intense Repair Hair Mask",
    brand: "Dove",
    category: "Haircare",
    price: 649,
    image: "/images/products/dove-hair-mask.jpg",
    description:
      "Dove Intense Repair Hair Mask nourishes damaged hair and leaves it silky and manageable."
  },

  // ===================================================
  // HAIRCARE - HAIR SPRAY
  // ===================================================

  {
    id: 12051,
    name: "Completely Invisible Hair Spray",
    brand: "Tresemmé",
    category: "Haircare",
    price: 699,
    image: "/images/products/tresemme-hair-spray.jpg",
    description:
      "Tresemmé Completely Invisible Hair Spray provides flexible all-day hold without visible residue."
  },

  {
    id: 12052,
    name: "Elnett Satin Hair Spray",
    brand: "L'Oréal Paris",
    category: "Haircare",
    price: 899,
    image: "/images/products/loreal-hair-spray.jpg",
    description:
      "L'Oréal Paris Elnett Satin Hair Spray provides strong, long-lasting hold."
  },

  {
    id: 12053,
    name: "Taft Power Hair Spray",
    brand: "Schwarzkopf",
    category: "Haircare",
    price: 799,
    image: "/images/products/schwarzkopf-hair-spray.jpg",
    description:
      "Schwarzkopf Taft Power Hair Spray offers strong hold and long-lasting styling control."
  },

  {
    id: 12054,
    name: "Hot Shot Hair Spray",
    brand: "BBlunt",
    category: "Haircare",
    price: 650,
    image: "/images/products/bblunt-hair-spray.jpg",
    description:
      "BBlunt Hot Shot Hair Spray keeps hairstyles in place while maintaining natural movement."
  }

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
          50
        ]
      );

      processed++;

      console.log(
        `✅ Seeded: ${product.id} - ${product.name}`
      );
    }

    console.log("");
    console.log("======================================");
    console.log("✅ PRODUCTS SEEDED SUCCESSFULLY!");
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