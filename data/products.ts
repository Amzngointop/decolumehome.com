export interface Product {
  id: string;
  slug: string;
  category: string;
  name: string;
  imageUrl: string;
  affiliateUrl: string;
  rating: number;
  bestFor: string;
  keyFeature: string;
  control: string;
  pros: string[];
  cons: string[];
  summary: string;
  featured?: boolean;
}

export const products: Product[] = [
  // --- RGB & SMART FLOOR LAMPS ---
  {
    id: "rgb-fl-1",
    slug: "govee-rgbic-floor-lamp",
    category: "rgb-smart-floor-lamps",
    name: "Govee RGBIC Floor Lamp",
    imageUrl: "https://m.media-amazon.com/images/I/61CWTaNyTDL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BLSGHRXB?tag=YOURTAG-20",
    rating: 4.7,
    bestFor: "Smart home setups & music sync",
    keyFeature: "RGBIC multi-zone color",
    control: "App + Voice",
    pros: [
      "RGBIC technology lets different segments glow in different colors simultaneously",
      "Govee Home app integrates with Alexa and Google Assistant for voice control",
      "Music sync mode pulses lighting to audio in real time",
      "Broad scene library with dozens of preset ambiance modes",
    ],
    cons: [
      "Full feature set requires the Govee app",
      "Cool-tone color accuracy is weaker than warm tones",
    ],
    summary:
      "The Govee RGBIC delivers the kind of dynamic, segmented lighting that transforms a living room into a personal light show. RGBIC multi-zone color is genuinely more impressive than single-color RGB — different sections of the lamp glow in different hues simultaneously.",
    featured: true,
  },
  {
    id: "rgb-fl-2",
    slug: "ambimall-smart-rgb-floor-lamp-white-black",
    category: "rgb-smart-floor-lamps",
    name: "Ambimall Floor Lamp with Smart RGB Bulb",
    imageUrl: "https://m.media-amazon.com/images/I/81OcNDO2oAL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0F9WHC7F1?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Bedroom ambiance & reading",
    keyFeature: "Stepless dimming + color temp",
    control: "Remote + App",
    pros: [
      "Stepless dimming gives precise control from candlelight to full brightness",
      "Adjustable color temperature from warm 2700K to daylight 6500K",
      "Clean modern design available in white and black finishes",
      "Remote control included for easy couch-side operation",
    ],
    cons: [
      "RGB saturation is less vivid than dedicated RGB-only lamps",
      "Shade diffuses color — effect is subtle rather than bold",
    ],
    summary:
      "A smart floor lamp bridging the gap between a functional white-light reading lamp and a color-capable accent piece. The stepless dimming is genuinely useful for bedrooms where harsh brightness transitions are disruptive.",
  },
  {
    id: "rgb-fl-3",
    slug: "ambimall-64-rgb-floor-lamp-remote",
    category: "rgb-smart-floor-lamps",
    name: "Ambimall 64'' RGB Floor Lamp with Remote",
    imageUrl: "https://m.media-amazon.com/images/I/710Pw3flN6L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0F9WL7X6G?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Taller rooms needing height & color",
    keyFeature: "64'' height with full RGB spectrum",
    control: "Remote",
    pros: [
      "64-inch height makes a proportional statement in rooms with taller ceilings",
      "Full RGB color wheel plus multiple white light modes",
      "Physical remote controls all key functions without needing an app",
      "Stable base handles the additional height reliably",
    ],
    cons: [
      "No app control — remote-only limits smart home integration",
      "Color transitions between presets can be slow",
    ],
    summary:
      "The taller 64-inch profile stands out in rooms with high ceilings. Full RGB with a physical remote — no app dependency — makes it the straightforward choice for users who want color without complexity.",
  },
  {
    id: "rgb-fl-4",
    slug: "ambimall-smart-rgb-floor-lamp-color-temp",
    category: "rgb-smart-floor-lamps",
    name: "Ambimall Smart RGB Floor Lamp (Color Temp)",
    imageUrl: "https://m.media-amazon.com/images/I/81yVV2ipC5L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0F9WJSZPJ?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Dual-mode smart & functional use",
    keyFeature: "Multiple CCT + RGB in one lamp",
    control: "App + Remote",
    pros: [
      "Switches between color temperature modes and full RGB color modes",
      "App and remote offer two flexible control options",
      "Brightness and warmth tunable for time-of-day lighting routines",
      "Slim profile fits narrow corners without dominating the space",
    ],
    cons: [
      "Not RGBIC — whole lamp shows one color at a time",
      "App setup requires stable Wi-Fi for initial pairing",
    ],
    summary:
      "A versatile smart floor lamp handling both functional task lighting and ambient color modes. Switching between warm white for work and colored ambiance for evening is smooth and intuitive.",
  },
  {
    id: "rgb-fl-5",
    slug: "sunmory-32w-smart-rgb-torchiere",
    category: "rgb-smart-floor-lamps",
    name: "SUNMORY 32W Smart RGB Torchiere Floor Lamp",
    imageUrl: "https://m.media-amazon.com/images/I/61AeoIPlwAL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0D9LWPWWJ?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Living rooms needing bright uplighting + RGB",
    keyFeature: "32W torchiere + RGB accent LEDs",
    control: "App + Remote",
    pros: [
      "32W main output provides substantial ambient uplighting through the torchiere shade",
      "RGB LEDs along the pole add colored accent lighting below the main light",
      "Stepless dimming on both the main lamp and accent LED strip",
      "Works with Alexa and Google for voice control",
    ],
    cons: [
      "Two separate light zones can look mismatched if not set intentionally",
      "Torchiere shade material could be more premium at this price point",
    ],
    summary:
      "A torchiere that goes beyond basic uplighting by adding RGB accent LEDs along its pole. The dual-zone design lets you run bright white from above and a color wash from below — a smart layering approach for living rooms.",
  },
  {
    id: "rgb-fl-6",
    slug: "oiyn-smart-rgbicw-corner-floor-lamp-2-pack",
    category: "rgb-smart-floor-lamps",
    name: "OIYN Smart RGBICW Corner Floor Lamp 2 Pack",
    imageUrl: "https://m.media-amazon.com/images/I/61CXshZMGPL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DRFP3463?tag=YOURTAG-20",
    rating: 4.4,
    bestFor: "Matching corner setups & gaming rooms",
    keyFeature: "RGBICW 2-pack + music sync",
    control: "App + Remote",
    pros: [
      "Two matching lamps create symmetrical corner lighting at strong combined value",
      "RGBICW adds warm white segments alongside independent color zones",
      "Music sync mode operates across both lamps simultaneously",
      "Compatible with popular smart home ecosystems",
    ],
    cons: [
      "Two-lamp setup requires two well-positioned outlets",
      "App can occasionally drop connection when both units are active",
    ],
    summary:
      "Buying a matched pair upfront is smarter than sourcing singles and hoping to match later. The OIYN 2-pack delivers coordinated RGBICW color and music sync across both lamps — ideal for gaming setups or symmetrical living room corners.",
  },

  // --- FLOOR LAMPS FOR LIVING ROOM & BEDROOM ---
  {
    id: "fl-lr-1",
    slug: "modern-floor-lamp-white-shade-foot-pedal",
    category: "floor-lamps-living-room",
    name: "Modern Floor Lamp with White Shade & Foot Pedal",
    imageUrl: "https://m.media-amazon.com/images/I/41SBc9K-1QL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07Z5NQPDS?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Budget-conscious rooms & rentals",
    keyFeature: "Classic white shade with foot pedal",
    control: "Foot Pedal",
    pros: [
      "Clean minimalist design with white shade diffuses light evenly",
      "Foot pedal switch is effortless to operate from any seating position",
      "Lightweight and easy to reposition around the room",
      "Works with any standard E26 LED bulb — easy to control brightness by bulb choice",
    ],
    cons: [
      "No built-in dimming without adding an inline dimmer",
      "Shade fabric shows dust relatively quickly on light surfaces",
    ],
    summary:
      "The classic floor lamp done right. A clean white shade, foot pedal convenience, and a design that suits any living room or bedroom without calling attention to itself. The accessible price makes it the easy first choice for furnished rentals or starter setups.",
    featured: true,
  },
  {
    id: "fl-lr-2",
    slug: "ambimall-60-modern-floor-lamp-beige-gold",
    category: "floor-lamps-living-room",
    name: "Ambimall 60'' Modern Floor Lamp, Beige/Gold",
    imageUrl: "https://m.media-amazon.com/images/I/71uFxCoka2L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CZP14T7B?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Living room style upgrade on a budget",
    keyFeature: "Beige linen shade + gold hardware",
    control: "Inline Switch",
    pros: [
      "Beige linen shade and gold-toned hardware elevate the aesthetic above basic lamp designs",
      "Warm diffused light from linen shade flatters neutral living room palettes",
      "60-inch height is proportionally right for standard 8–9 foot ceiling rooms",
      "Stable base handles both carpet and hardwood floors well",
    ],
    cons: [
      "No dimming — requires a separate inline dimmer for brightness control",
      "Gold hardware is powder-coated rather than solid metal",
    ],
    summary:
      "Proof that a stylish floor lamp does not require a high budget. The beige linen shade and gold accents nail the current warm-neutrals aesthetic trend without the premium price tag attached to designer equivalents.",
  },
  {
    id: "fl-lr-3",
    slug: "floor-lamp-with-shelves-3-cct-led",
    category: "floor-lamps-living-room",
    name: "Floor Lamp with Shelves & 3 CCT LED Bulb",
    imageUrl: "https://m.media-amazon.com/images/I/71u3LMKkWEL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BVFX154J?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Small spaces needing light and storage",
    keyFeature: "3-tier shelves + 3-mode CCT light",
    control: "Remote",
    pros: [
      "Three integrated shelves create functional display space alongside the light",
      "3 CCT modes adapt from warm evening ambiance to cool task lighting",
      "Remote control covers the light without requiring movement",
      "Replaces both a floor lamp and a side table in tight rooms",
    ],
    cons: [
      "Shelves suit lightweight decor only — not designed for heavy items",
      "Taller combined design needs clearance from nearby furniture",
    ],
    summary:
      "A genuinely clever two-in-one design for small apartments where every square foot counts. The three shelves handle photo frames, plants, and small decor while CCT LED overhead adapts to different tasks and times of day.",
  },
  {
    id: "fl-lr-4",
    slug: "ambimall-64-dimmable-floor-lamp-remote",
    category: "floor-lamps-living-room",
    name: "Ambimall 64'' Dimmable Floor Lamp with Remote",
    imageUrl: "https://m.media-amazon.com/images/I/71vFHAa06DL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BPLWBPM6?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Dimmable living room ambient lighting",
    keyFeature: "Stepless dimming + CCT remote",
    control: "Remote",
    pros: [
      "Stepless dimming lets you dial in exactly the brightness you need",
      "Remote control makes brightness and color temp adjustment effortless from the sofa",
      "64-inch height provides broad room coverage for living rooms",
      "Multiple color temperature settings for day-to-evening lighting transitions",
    ],
    cons: [
      "Shade has a slight warm cast that shifts perceived CCT",
      "Remote requires line-of-sight to the sensor",
    ],
    summary:
      "Stepless dimming with remote control is the right feature set for a living room primary lamp — you want to adjust brightness from your sofa, not walk across the room. This Ambimall gets that right at a reasonable price.",
  },
  {
    id: "fl-lr-5",
    slug: "ambimall-60-tall-linen-shade-floor-lamp",
    category: "floor-lamps-living-room",
    name: "Ambimall 60'' Tall Linen Shade Floor Lamp",
    imageUrl: "https://m.media-amazon.com/images/I/81OkUcWhMvL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0C4DGFFCM?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Home offices, classrooms & living rooms",
    keyFeature: "Linen shade, multiple CCT settings",
    control: "Inline Dimmer",
    pros: [
      "Linen shade provides soft, eye-friendly diffused light across a broad area",
      "Multiple color temperature options suit task and ambient use equally",
      "Adjustable height accommodates different room configurations",
      "Slim pole leaves a minimal floor footprint",
    ],
    cons: [
      "Linen shade can arrive with shipping creases — steam carefully to remove",
      "Inline dimmer placement on cord can be awkward depending on outlet position",
    ],
    summary:
      "A versatile tall floor lamp that performs as well in a home office as a living room. The linen shade is a quality choice that diffuses harsh LED output into something warmer and more livable throughout the day.",
  },
  {
    id: "fl-lr-6",
    slug: "sunmory-32w-3000lm-torchiere",
    category: "floor-lamps-living-room",
    name: "SUNMORY 32W/3000LM Super Bright Torchiere",
    imageUrl: "https://m.media-amazon.com/images/I/61W7wZE50CL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CQY5RK52?tag=YOURTAG-20",
    rating: 4.7,
    bestFor: "Large rooms needing strong ambient light",
    keyFeature: "3000 lumens torchiere uplighting",
    control: "Touch + Dimmer",
    pros: [
      "3000 lumens is genuinely bright enough to serve as a room's primary light source",
      "Torchiere design bounces light off the ceiling for even, shadow-free coverage",
      "Touch control and stepless dimming built into the pole",
      "32W LED runs cool and efficiently even at full brightness",
    ],
    cons: [
      "Torchiere uplighting is less effective in rooms with dark or highly textured ceilings",
      "Pole diameter is visible in the room — not the slimmest profile",
    ],
    summary:
      "For a living room or bedroom that needs a single powerful ambient light source, 3000 lumens of torchiere uplighting is hard to beat. Bounced ceiling light eliminates harsh shadows and creates a naturally lit feel that most overhead fixtures cannot match.",
  },

  // --- BEDSIDE TABLE LAMPS ---
  {
    id: "btl-1",
    slug: "fenmzee-bedside-touch-lamp-usb-c",
    category: "bedside-table-lamps",
    name: "Fenmzee Bedside Touch Lamp with USB-C & AC Outlet",
    imageUrl: "https://m.media-amazon.com/images/I/71zreHoOzVL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BZXNSW5K?tag=YOURTAG-20",
    rating: 4.7,
    bestFor: "Bedside charging + sleep-friendly lighting",
    keyFeature: "USB-C + AC outlet built in",
    control: "Touch",
    pros: [
      "Built-in USB-C and AC outlet charges devices without a separate power strip",
      "Three-way touch dimming cycles through brightness levels intuitively",
      "Warm 2700K color temperature is easy on eyes during wind-down",
      "Compact base fits most nightstands without dominating the surface",
    ],
    cons: [
      "USB-C port is standard-speed — not fast-charge compatible for all devices",
      "Shade is fixed with no directional adjustment",
    ],
    summary:
      "Consolidating your phone charger and bedside lamp into one unit is a genuine quality-of-life upgrade. The Fenmzee handles it cleanly — touch dimming, built-in USB-C, and a warm color temperature that supports rather than fights your wind-down routine.",
    featured: true,
  },
  {
    id: "btl-2",
    slug: "kakanuo-cordless-rechargeable-table-lamp-2-pack",
    category: "bedside-table-lamps",
    name: "Kakanuo Cordless Rechargeable Table Lamp 2 Pack",
    imageUrl: "https://m.media-amazon.com/images/I/51hGSTESgyL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DJYBF17N?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Cord-free nightstand setups",
    keyFeature: "Cordless rechargeable 2-pack",
    control: "Touch",
    pros: [
      "Cordless design eliminates nightstand cable clutter entirely",
      "Two-pack provides matching lamps for both sides of the bed in one purchase",
      "Rechargeable battery holds charge through several evenings of typical use",
      "Touch base dims silently through multiple levels",
    ],
    cons: [
      "Battery capacity decreases over many charge cycles over time",
      "Light output suits accent and reading — not primary room illumination",
    ],
    summary:
      "Cordless table lamps are the right solution for nightstands already crowded with outlets. The Kakanuo pair eliminates the wire entirely and gives you matching lamps on both sides of the bed without a cord in sight.",
  },
  {
    id: "btl-3",
    slug: "kdg-2-pack-portable-led-desk-lamp-5000mah",
    category: "bedside-table-lamps",
    name: "KDG 2 Pack Portable LED Desk Lamp 5000mAh",
    imageUrl: "https://m.media-amazon.com/images/I/61N+Cn7-R2L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BR3R7GHN?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Extended cordless use & matching setups",
    keyFeature: "5000mAh battery, strong run time",
    control: "Touch",
    pros: [
      "5000mAh battery provides substantial run time per charge cycle",
      "Two-pack value works well for matching bedside or desk-plus-nightstand pairing",
      "Compact form factor suits small nightstands and floating shelves",
      "Stepless touch dimming from very dim to adequately bright for reading",
    ],
    cons: [
      "Charging port cover can feel flimsy after repeated use",
      "Color temperature is fixed — no warm/cool toggle",
    ],
    summary:
      "A practical cordless lamp with a larger-than-average 5000mAh battery that meaningfully extends run time between charges. The two-pack makes it a smart buy for matching bedside setups or pairing desk and nightstand.",
  },
  {
    id: "btl-4",
    slug: "aooshine-small-minimalist-bedside-table-lamp",
    category: "bedside-table-lamps",
    name: "aooshine Small Minimalist Bedside Table Lamp",
    imageUrl: "https://m.media-amazon.com/images/I/61xxhaeUKIL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B074XPNS3Z?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Minimalist decor & small nightstands",
    keyFeature: "Minimal footprint, fabric diffused glow",
    control: "Rotary Switch",
    pros: [
      "Genuinely compact — leaves room for books and other items on crowded nightstands",
      "Fabric shade softens light output into a warm ambient glow",
      "Simple rotary switch is reliable over years of daily use",
      "Pairs well with modern, Scandinavian, and neutral-tone interiors",
    ],
    cons: [
      "On/off only — no dimming capability",
      "Light output is accent-level, not bright enough for extended reading",
    ],
    summary:
      "Not every bedside lamp needs features. If you want a small, handsome lamp that creates warm ambiance without USB ports or touch sensors, the aooshine delivers clean simplicity at a price that leaves nothing to complain about.",
  },
  {
    id: "btl-5",
    slug: "fenmzee-small-bedside-lamp-wood-base",
    category: "bedside-table-lamps",
    name: "Fenmzee Small Bedside Lamp with Wood Base",
    imageUrl: "https://m.media-amazon.com/images/I/71HckKKPVML._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DZD1X83N?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Warm-toned bedrooms & natural material decor",
    keyFeature: "Real wood base construction",
    control: "Touch",
    pros: [
      "Real wood base adds organic warmth that plastic and metal bases cannot replicate",
      "Touch control with multiple dimming levels for a smooth bedtime wind-down",
      "Warm white color temperature complements wood tones naturally",
      "Proportions are well-considered — useful height without overwhelming small surfaces",
    ],
    cons: [
      "Wood base finish can show scratches on hard nightstand surfaces",
      "No charging ports — purely a light source",
    ],
    summary:
      "A bedside lamp that prioritizes materials over feature count. The real wood base brings genuine warmth to any nightstand and pairs naturally with linen, cotton, and other natural textures. Touch dimming keeps the bedtime routine smooth.",
  },
  {
    id: "btl-6",
    slug: "small-table-lamp-usb-c-pull-chain-ac",
    category: "bedside-table-lamps",
    name: "Small Table Lamp with USB-C, Pull Chain & AC Outlet",
    imageUrl: "https://m.media-amazon.com/images/I/71C-9a3M-jL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BHVP949X?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Versatile bedside use with multiple CCT modes",
    keyFeature: "USB-C, AC outlet + 3 CCT modes",
    control: "Pull Chain",
    pros: [
      "Pull chain cycles through three color temperature modes without needing an app",
      "Built-in USB-C and AC outlet handles device charging from the lamp base",
      "Three CCT settings cover warm, neutral, and cool for different tasks",
      "Compact enough for nightstands but bright enough for light reading",
    ],
    cons: [
      "Pull chain aesthetic may not suit modern minimalist decor",
      "AC outlet placement on the base is not accessible in all nightstand configurations",
    ],
    summary:
      "A feature-dense small lamp packing USB-C, AC outlet, and three color temperature modes into a compact form. The pull chain is a tactile, reliable way to cycle through CCT modes without needing an app, remote, or touch sensor.",
  },

  // --- CANDLE WARMER LAMPS ---
  {
    id: "cwl-1",
    slug: "innqoo-dimmable-candle-warmer-lamp-timer",
    category: "candle-warmer-lamps",
    name: "Innqoo Dimmable Candle Warmer Lamp with Timer",
    imageUrl: "https://m.media-amazon.com/images/I/71t96oyL+UL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DZFGTCLR?tag=YOURTAG-20",
    rating: 4.7,
    bestFor: "Scented candle lovers wanting flameless warmth",
    keyFeature: "Dimmable + auto-off timer",
    control: "Manual + Timer",
    pros: [
      "Auto-off timer eliminates the worry of leaving a warmer running overnight",
      "Dimmable bulb controls melt rate and warmth intensity for different wax types",
      "Elegant lamp design looks as good as the candles it warms",
      "Compatible with most standard-sized jar candles",
    ],
    cons: [
      "Timer increments are fixed presets — no fully custom interval",
      "Bulb wattage may limit effectiveness on very large thick-walled jars",
    ],
    summary:
      "The Innqoo is the candle warmer for people who love scent but are tired of worrying about open flames. The timer ensures automatic shutoff and the dimmable bulb gives real control over how hard it works on your candle.",
    featured: true,
  },
  {
    id: "cwl-2",
    slug: "godonlif-candle-warmer-lamp-cycle-timer",
    category: "candle-warmer-lamps",
    name: "GODONLIF Candle Warmer Lamp with Cycle Timer",
    imageUrl: "https://m.media-amazon.com/images/I/810vcJJDrkL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CTJGJL2T?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Long scent sessions with candle life in mind",
    keyFeature: "Cycle timer extends candle life",
    control: "Manual + Cycle Timer",
    pros: [
      "Cycle timer runs on/off alternately — extends candle life significantly over continuous use",
      "Adjustable height arm reaches jar candles of different heights",
      "Warm lamp glow doubles as accent lighting when candles are not in use",
      "Dimmer allows fine-tuned heat output for different wax formulas",
    ],
    cons: [
      "Timer display could be brighter in well-lit environments",
      "Arm adjustment mechanism requires two hands to reposition",
    ],
    summary:
      "The cycle timer is the standout feature — alternating on/off extends candle life while maintaining consistent scent throw. Thoughtful for regular candle users who want efficiency alongside flameless safety.",
  },
  {
    id: "cwl-3",
    slug: "candle-warmer-lamp-timer-dimmer-gift-box",
    category: "candle-warmer-lamps",
    name: "Candle Warmer Lamp with Timer & Dimmer (Gift Box)",
    imageUrl: "https://m.media-amazon.com/images/I/71DK1D8roLL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0FRLWC6X9?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Gifting & first-time candle warmer buyers",
    keyFeature: "Gift-ready box + timer + dimmer",
    control: "Manual + Timer",
    pros: [
      "Gift box packaging makes this immediately presentable without extra wrapping",
      "Timer and dimmer features included — not stripped down to hit a price point",
      "Neutral design suits a wide range of home decor styles",
      "Works with both jar candles and wax melts",
    ],
    cons: [
      "Included bulb is minimum wattage — may need upgrading for large candles",
      "Gift box adds shipping bulk — inspect for packaging damage on arrival",
    ],
    summary:
      "The gift-ready packaging is the decisive feature. For housewarmings, birthdays, and candle enthusiast gifts, this arrives looking polished without extra effort. The timer and dimmer are solid inclusions at the price.",
  },
  {
    id: "cwl-4",
    slug: "seenlast-vintage-candle-warmer-adjustable-height",
    category: "candle-warmer-lamps",
    name: "seenlast Vintage Candle Warmer Lamp Adjustable Height",
    imageUrl: "https://m.media-amazon.com/images/I/71lTyTayb4L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CDRDK6MR?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Various jar heights & vintage-style decor",
    keyFeature: "Adjustable height arm for any jar",
    control: "Manual Dimmer",
    pros: [
      "Adjustable height arm adapts to shallow tins, tall pillars, and standard jar candles",
      "Vintage aesthetic complements farmhouse, bohemian, and cottagecore interiors",
      "Solid arm mechanism feels durable rather than flimsy",
      "Dimmable bulb included to manage heat output",
    ],
    cons: [
      "No timer — requires manual switch-off",
      "Vintage finish is specific and won't suit all decor styles",
    ],
    summary:
      "The adjustable height mechanism is more useful than it sounds — accommodating different candle jar heights without improvised shimming. The vintage styling is a bonus for farmhouse and cottage-style rooms.",
  },
  {
    id: "cwl-5",
    slug: "marycele-candle-warmer-timer-dimmer-2-bulbs",
    category: "candle-warmer-lamps",
    name: "Marycele Candle Warmer with Timer & Dimmer, 2 Bulbs",
    imageUrl: "https://m.media-amazon.com/images/I/71p2KeF+u5L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BWJRJYS7?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Reliable everyday candle warming",
    keyFeature: "2 replacement bulbs + touch control",
    control: "Touch + Timer",
    pros: [
      "Two spare bulbs included — saves the urgency of sourcing a replacement when one burns out",
      "Touch control makes operation clean without a physical switch to fumble for",
      "Timer settings cover common use scenarios from 1 to 8 hours",
      "Dimmer works smoothly without flickering at any level",
    ],
    cons: [
      "Base design is less distinctive than some competitors",
      "Timer uses preset durations only — no custom interval",
    ],
    summary:
      "A pragmatic choice that bundles the essentials — timer, dimmer, touch control — with the practical bonus of two replacement bulbs. No surprises and a spec list that covers everything a regular candle warmer user actually needs.",
  },
  {
    id: "cwl-6",
    slug: "candle-warmer-lamp-3-bulbs-gift-box-ribbon",
    category: "candle-warmer-lamps",
    name: "Candle Warmer Lamp with 3 Bulbs & Gift Box Ribbon",
    imageUrl: "https://m.media-amazon.com/images/I/71wcW25KSkL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CCYCBRSK?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Premium gifting with accessories included",
    keyFeature: "3 bulbs + ribbon gift presentation",
    control: "Manual Dimmer",
    pros: [
      "Three bulbs provide years of use without sourcing replacements",
      "Ribbon-wrapped gift box creates a premium unboxing experience",
      "Compatible with most standard jar candle sizes",
      "Height-adjustable arm for versatile jar compatibility",
    ],
    cons: [
      "No timer — requires mindful manual switch-off",
      "Ribbon and gift box packaging adds cost that non-gift buyers are effectively paying for",
    ],
    summary:
      "Three included bulbs and ribbon gift packaging make this the strongest gifting option in the candle warmer category. For personal use, you are paying for the presentation — but if it is going to someone who matters, that presentation is worth the premium.",
  },

  // --- NIGHT LIGHTS FOR HOME ---
  {
    id: "nl-1",
    slug: "l-lohas-led-night-light-2-pack-dusk-to-dawn",
    category: "night-lights-for-home",
    name: "L LOHAS LED Night Light Plug-in 2 Pack, Dusk to Dawn",
    imageUrl: "https://m.media-amazon.com/images/I/71l0nW4WZfL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0BLCD42J7?tag=YOURTAG-20",
    rating: 4.7,
    bestFor: "Hallways, bathrooms & stairwells",
    keyFeature: "Dusk-to-dawn auto sensor, 2-pack",
    control: "Dusk-to-Dawn Auto",
    pros: [
      "Automatic dusk-to-dawn sensor activates at night with zero manual effort",
      "Two-pack covers the most common two-location setup in one purchase",
      "Warm white glow is navigable without disrupting sleep patterns",
      "Very low energy consumption — negligible running cost year-round",
    ],
    cons: [
      "Sensor can activate in rooms with dramatic natural light fluctuations",
      "Fixed orientation — no angle adjustment",
    ],
    summary:
      "The set-and-forget night light done properly. Dusk-to-dawn activation means you never need to think about it — it turns on when it is dark, off when it is light. Two units at an accessible price is the right starting point for any home.",
    featured: true,
  },
  {
    id: "nl-2",
    slug: "sujeet-night-light-8-pack-warm-white",
    category: "night-lights-for-home",
    name: "Sujeet Night Light Plug-in 8 Pack Warm White",
    imageUrl: "https://m.media-amazon.com/images/I/71Ht2kShseL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0D6GJ9222?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Whole-home coverage on a single budget",
    keyFeature: "8-pack for full home coverage",
    control: "Manual On/Off",
    pros: [
      "Eight-pack covers every dark hallway, bathroom, and bedroom doorway in one order",
      "Consistent warm white tone across all units in the pack",
      "Ultra-compact profile does not block the second outlet on double outlets",
      "LED longevity means years of use before any unit needs replacing",
    ],
    cons: [
      "No automatic sensor — manual on/off only",
      "No dimming capability",
    ],
    summary:
      "For whole-home night light coverage, buying singles adds up quickly. The eight-pack solves that immediately — covering every relevant location in one purchase at a cost that makes sense per unit.",
  },
  {
    id: "nl-3",
    slug: "doresshop-3-level-brightness-night-light-2-pack",
    category: "night-lights-for-home",
    name: "DORESshop 3-Level Brightness Night Light 2 Pack",
    imageUrl: "https://m.media-amazon.com/images/I/81c7120HyeL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0DHZ4TF77?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Adjustable brightness for different rooms",
    keyFeature: "3 brightness levels, rotating plug",
    control: "Manual 3-Level",
    pros: [
      "Three brightness settings calibrate output for bedroom, hallway, or bathroom differently",
      "Rotating plug allows outlet positioning with flexible orientation",
      "Low setting is dim enough for bedrooms without disrupting sleep",
      "Two-pack covers standard first-purchase needs",
    ],
    cons: [
      "No automatic sensor — requires manual setting per location",
      "The gap between mid and high brightness is narrower than between low and mid",
    ],
    summary:
      "Three brightness levels give you meaningful control that a fixed-output night light cannot offer. The low setting genuinely works in bedrooms without disrupting sleep; the high setting provides real hallway illumination.",
  },
  {
    id: "nl-4",
    slug: "l-lohas-dimmable-night-light-dawn-sensor-2-pack",
    category: "night-lights-for-home",
    name: "L LOHAS Dimmable Night Light with Dawn Sensor 2 Pack",
    imageUrl: "https://m.media-amazon.com/images/I/61BZMkuj85L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0B3XMTRHN?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Customizable brightness + auto activation",
    keyFeature: "Stepless dimming + dusk-to-dawn auto",
    control: "Dimmable + Auto Sensor",
    pros: [
      "Combines dusk-to-dawn automation with stepless manual brightness control",
      "Dial in the exact output per room and let the sensor handle on/off",
      "Two-pack with consistent settings for paired hallway-bathroom configurations",
      "Sensor response time is quick with no noticeable lag on activation",
    ],
    cons: [
      "Dimmer wheel is small — precise adjustment takes a moment to get right",
      "Dimmable range is more useful in the lower half of its travel",
    ],
    summary:
      "The best-of-both-worlds night light — dusk-to-dawn automation combined with stepless dimming. Set your preferred brightness once, let the sensor handle the rest. This eliminates all routine interaction with your night lights.",
  },
  {
    id: "nl-5",
    slug: "doresshop-dimmable-night-light-dusk-to-dawn-2-pack",
    category: "night-lights-for-home",
    name: "DORESshop Dimmable Night Light with Dusk-to-Dawn 2 Pack",
    imageUrl: "https://m.media-amazon.com/images/I/71Y0SEq9m4L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B096XYXY5H?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Automated + adjustable night lighting",
    keyFeature: "Dimmable + auto sensor + rotating plug",
    control: "Dimmable + Auto Sensor",
    pros: [
      "Dusk-to-dawn sensor handles on/off automatically",
      "Rotary dimmer adjusts brightness from very dim to adequately bright",
      "180-degree rotating plug accommodates different outlet orientations",
      "Two-pack covers the most common two-location installation",
    ],
    cons: [
      "Dimmer ring can feel stiff initially — loosens with use",
      "Sensor placement can occasionally read ambient light inconsistently",
    ],
    summary:
      "A DORESshop design adding stepless dimming and dusk-to-dawn automation to their proven platform. For users who want full automation plus brightness customization, this covers the complete night light feature set.",
  },
  {
    id: "nl-6",
    slug: "briignite-led-projector-night-light-dusk-to-dawn",
    category: "night-lights-for-home",
    name: "Briignite LED Projector Night Light, Dusk to Dawn",
    imageUrl: "https://m.media-amazon.com/images/I/71iheSLN57L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0F3C5JXP2?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Children's rooms & decorative hallways",
    keyFeature: "Projection pattern + dusk-to-dawn auto",
    control: "Dusk-to-Dawn Auto",
    pros: [
      "Projects a soft decorative pattern rather than plain white light",
      "Dusk-to-dawn sensor automates nightly activation without manual effort",
      "Gentle projection is visually interesting for children's rooms and nurseries",
      "Low-energy LED maintains the projection indefinitely without heat concerns",
    ],
    cons: [
      "Projection pattern is fixed — no rotation or angle adjustment",
      "Pattern effect diminishes in rooms with very dark walls",
    ],
    summary:
      "A night light that adds a visual dimension plain plug-in units cannot offer. The projected pattern gives nurseries and children's rooms something to look at — gentle enough not to stimulate, distinctive enough to feel considered.",
  },

  // --- GALAXY & AURORA PROJECTORS ---
  {
    id: "gap-1",
    slug: "northern-galaxy-light-aurora-projector-33-effects",
    category: "galaxy-aurora-projectors",
    name: "Northern Galaxy Light Aurora Projector, 33 Effects",
    imageUrl: "https://m.media-amazon.com/images/I/81ASRJlhl3L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0B4518KC2?tag=YOURTAG-20",
    rating: 4.7,
    bestFor: "Immersive aurora bedroom atmosphere",
    keyFeature: "33 effects + Bluetooth speaker + rotation",
    control: "App + Remote",
    pros: [
      "33 distinct effects cover aurora, nebula, galaxy, and ocean wave patterns",
      "Built-in Bluetooth speaker pairs with your device for music-synced light effects",
      "Rotation motor creates organic, flowing movement in the projected patterns",
      "App control handles timer, brightness, and effect selection",
    ],
    cons: [
      "Speaker audio quality is functional rather than audiophile-grade",
      "Effects are most impactful in a completely dark room",
    ],
    summary:
      "The combination of 33 effects, Bluetooth speaker, and motor-driven projection movement makes this the most complete aurora projector experience in the category. The moving light patterns have a genuinely calming effect for wind-down routines.",
    featured: true,
  },
  {
    id: "gap-2",
    slug: "mooyran-astronaut-galaxy-projector-special-edition",
    category: "galaxy-aurora-projectors",
    name: "Mooyran Astronaut Galaxy Projector Special Edition",
    imageUrl: "https://m.media-amazon.com/images/I/61O3JonTVpL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0D3VS78SJ?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Astronaut aesthetic rooms & gifting",
    keyFeature: "Astronaut housing + galaxy projection",
    control: "Remote",
    pros: [
      "Astronaut sculpted housing is a desk display piece even when the projector is off",
      "Special Edition colorway elevates the visual quality above the standard design",
      "Galaxy and nebula projection is sharp and color-accurate",
      "Remote control with timer for automated nightly shutdown",
    ],
    cons: [
      "Astronaut design is distinctive but limits versatility for some decor styles",
      "No built-in Bluetooth speaker in this model",
    ],
    summary:
      "The astronaut housing makes this projector a room decoration as much as a lighting device. When off it is a statement desk piece; when on it fills the ceiling with galaxy projections that are genuinely high quality for the price.",
  },
  {
    id: "gap-3",
    slug: "planetarium-projector-pro-13-in-1",
    category: "galaxy-aurora-projectors",
    name: "Planetarium Projector Pro 13-in-1 Star Projector",
    imageUrl: "https://m.media-amazon.com/images/I/91ZmVBtLI1L._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0D6W3K8C9?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Star-gazing enthusiasts & educational rooms",
    keyFeature: "13 projection modes + star mapping",
    control: "Remote + App",
    pros: [
      "13 modes include constellation mapping alongside aurora and nebula effects",
      "Higher-precision optics produce sharper star points than entry-level projectors",
      "Covers a large ceiling area suitable for medium to large bedrooms",
      "Timer and brightness settings accessible via both remote and app",
    ],
    cons: [
      "Constellation accuracy is approximate rather than scientifically precise",
      "Bluetooth app pairing can be finicky on initial setup",
    ],
    summary:
      "The 13-in-1 mode range makes this the projector for users who want variety. Beyond typical aurora and nebula modes, the star map projections add an educational dimension that simpler projectors cannot match.",
  },
  {
    id: "gap-4",
    slug: "herhoter-galaxy-star-projector-timer-remote",
    category: "galaxy-aurora-projectors",
    name: "HERHOTER Galaxy Star Projector with Timer & Remote",
    imageUrl: "https://m.media-amazon.com/images/I/71rCCZdJ2ML._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CQSJRPXF?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Bedroom night sky ambiance & gifting",
    keyFeature: "Timer + remote, no app required",
    control: "Remote + Timer",
    pros: [
      "Multiple timer settings handle automatic shutoff without any app dependency",
      "Remote control covers all main functions from across the room",
      "Star and nebula projection quality is solid for bedroom use",
      "Multiple color combinations for customized night sky appearance",
    ],
    cons: [
      "No rotation motor — projection pattern is static",
      "Color combinations are preset rather than fully custom",
    ],
    summary:
      "A reliable galaxy projector covering the essential features — timer, remote, multiple color modes — without requiring an app. For users who want a night sky effect without tech complexity, this delivers consistently.",
  },
  {
    id: "gap-5",
    slug: "rossetta-dual-lens-galaxy-projector-58-effects",
    category: "galaxy-aurora-projectors",
    name: "Rossetta Dual Lens Galaxy Projector, 58 Effects",
    imageUrl: "https://m.media-amazon.com/images/I/71q0-SPtUXL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0CZD1JTZK?tag=YOURTAG-20",
    rating: 4.6,
    bestFor: "Power users wanting maximum effect variety",
    keyFeature: "Dual lens + 58 effects + Bluetooth speaker",
    control: "App + Remote",
    pros: [
      "Dual lens system creates layered projections that single-lens units cannot match",
      "58 distinct effects cover aurora, galaxy, ocean, and seasonal themes",
      "Built-in Bluetooth speaker with music sync creates multi-sensory ambiance",
      "App scheduling, dimming, and effect transitions are all well-implemented",
    ],
    cons: [
      "Premium pricing reflects the dual lens and speaker hardware combination",
      "58 effects can be overwhelming to navigate without spending time in the app",
    ],
    summary:
      "The dual lens architecture separates this from standard projectors — two overlapping projections create depth and complexity that single-lens designs cannot produce. Combined with 58 effects and a Bluetooth speaker, this is the feature-maximum option in the category.",
  },
  {
    id: "gap-6",
    slug: "jiwyjot-astronaut-galaxy-projector-bedroom",
    category: "galaxy-aurora-projectors",
    name: "JIWYJOT Astronaut Galaxy Projector for Bedroom",
    imageUrl: "https://m.media-amazon.com/images/I/71mldUX2ELL._AC_SL1500_.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0G3VW2724?tag=YOURTAG-20",
    rating: 4.5,
    bestFor: "Bedroom decor + projection atmosphere",
    keyFeature: "Astronaut design + star/nebula projection",
    control: "Remote",
    pros: [
      "Astronaut housing design is charming without being juvenile",
      "Star and nebula projection covers a wide ceiling area effectively",
      "Remote control with timer for hands-free nightly operation",
      "Works well as a space-enthusiast gift or bedroom atmosphere upgrade",
    ],
    cons: [
      "No built-in speaker or app connectivity",
      "Projection focus is fixed — no adjustable lens",
    ],
    summary:
      "A well-executed astronaut projector that delivers on its visual promise. The ceiling projection quality justifies the form factor — this is not just a novelty piece but a functional bedroom atmosphere light.",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
