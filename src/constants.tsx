import { Category, Language, TranslationStrings } from './types.ts';

export interface GuideSection {
  title: string;
  points: string[];
}

export interface CultivationGuide {
  title: string;
  nursery?: GuideSection;
  landPrep?: GuideSection;
  section1?: GuideSection;
  section2?: GuideSection;
  section3?: GuideSection;
  section4?: GuideSection;
  section5?: GuideSection;
  section6?: GuideSection;
  section7?: GuideSection;
  directSowing?: GuideSection;
}

export const CULTIVATION_GUIDES: Record<string, CultivationGuide> = {
  onion: {
    title: "Onion Cultivation Guide",
    nursery: {
      title: "Seeds and Nursery Preparation",
      points: [
        "Seed Rate: 5–7 kg/ha.",
        "Nursery Beds: Raised beds (10-15cm high) with 30cm spacing for drainage.",
        "Soil Mix: 1:1 ratio of soil and well-decomposed manure.",
        "Sowing: Line sowing 5-7.5cm apart, 1cm deep.",
        "Treatment: Fungicide (Thiram 2g/kg) to prevent damping off.",
        "Transplanting: Ready at 6-9 weeks (4-7 leaves)."
      ]
    },
    landPrep: {
      title: "Land Preparation for Main Field",
      points: [
        "Ploughing: 3-4 times for fine tilth.",
        "Soil: Deep loamy or sandy loam, pH 6.0-7.5.",
        "Manure: 15-20 tons FYM/ha during last ploughing.",
        "Fertilizers: Full P & K basal, half N at transplanting.",
        "Irrigation: Immediate irrigation after transplanting."
      ]
    }
  },


  tomato: {
    title: "Tomato Cultivation Guide",
    nursery: {
      title: "1. Site Selection and Soil Type",
      points: [
        "Soil: Deep, well-drained sandy loam or clay loam is ideal.",
        "pH: The soil should be slightly acidic to neutral, with a pH of 5.5 to 7.0.",
        "Sunlight: Requires full, direct sunlight (at least 5-6 hours daily)."
      ]
    },
    landPrep: {
      title: "2. Land Preparation Steps",
      points: [
        "Ploughing: Plow the field 3-4 times to break up clods and create a fine, loose soil structure for good root development.",
        "Manure Incorporation: Mix well-decomposed Farm Yard Manure (FYM) or compost at a rate of 20-25 tonnes per hectare (t/ha) during the final ploughing.",
        "Bed Formation: Form ridges and furrows or raised beds (3 x 0.6 m or 1 m width) to prevent waterlogging, which causes diseases like bacterial wilt.",
        "Basal Fertilizer: Apply basal nutrients, typically 60 kg N, 80 kg P, and 60 kg K per hectare.",
        "Soil Amendment: If the soil is too acidic, apply lime to prevent calcium deficiency (blossom end rot)."
      ]
    },
    section3: {
      title: "3. Nursery Preparation (For Transplants)",
      points: [
        "Bed Setup: Create raised nursery beds, roughly 10-15 cm high, to ensure good drainage.",
        "Soil Treatment: Treat the nursery soil with fungicides (e.g., Trichoderma viride or Bavistin) to prevent damping-off disease.",
        "Sowing: Sow seeds in rows 10 cm apart and cover with a thin layer of sand/FYM and mulch."
      ]
    },
    section4: {
      title: "4. Pre-Planting and Spacing",
      points: [
        "Spacing: Depending on the variety, maintain a spacing of 60 x 45 cm or 75 x 60 cm.",
        "Weed Control: Use pre-emergence herbicides like Pendimethalin 1.0 kg a.i./ha, if necessary.",
        "Irrigation Setup: Set up drip lines for efficient water management."
      ]
    },
    section5: {
      title: "5. Crop Rotation",
      points: [
        "To avoid soil-borne diseases, do not plant tomatoes in the same spot consecutively. Rotate with crops like maize, cabbage, or cowpea."
      ]
    }
  },




  'hot-pepper': {
    title: "Detailed Land and Soil Preparation:",

    section2: {
      title: "Detailed Land and Soil Preparation",
      points: [
        "Site Selection & Soil Type: Choose a sunny location with well-drained soil, preferably sandy loam.",
        "Land Preparation: Deep plow the field to break up hardpan, followed by harrowing to achieve a fine tilth.",
        "Bed Construction: Construct raised beds or ridges to facilitate good drainage, especially in high rainfall areas. Beds should be about 1 meter wide, 30 cm high, and spaced 0.5 meters apart.",
        "Soil Amendments: Incorporate well-decomposed manure or compost to improve soil structure.",
        "Liming: If soil pH is below 5.5, apply agricultural lime (1–3 tons/ha) one month before planting.",
        "Fertilizer Application: Apply basal fertilizer (e.g., NPK) during bed preparation.",
        "Mulching: Cover beds with plastic mulch to retain moisture, suppress weeds, and regulate soil temperature.",
        "Soil Disinfection: If necessary, treat the soil to control soil-borne diseases and pests before planting."
      ]
    },

  },





  'beet-root': {
    title: "Beet Root Cultivation Guide",

    landPrep: {
      title: "Key Land and Soil Preparation Steps",
      points: [
        "Soil Type & pH: Loam or sandy loam is ideal; heavy clay should be avoided as it causes small, cracked roots.",
        "Tillage: Thoroughly plow and harrow the land 3–4 times to create a fine, loose tilth, removing all stones, clods, and weeds.",
        "Organic Matter: Incorporate well-decomposed Farmyard Manure (FYM) or compost during final land preparation to ensure proper soil structure.",
        "Soil Amendments: If the soil is deficient, apply borax (3–4 kg/acre) to prevent internal black rot.",
        "Bed Preparation: Raise beds or create ridges and furrows 30–45 cm apart to ensure proper water management and drainage.",
        "Spacing: Target a spacing of 45–60 cm between rows and 10 cm between plants, which requires a plant population of approximately 40,000 per acre.",
        "Soil Moisture: Ensure the soil is moist but not waterlogged at the time of planting for optimal germination.",
        "Fertilizer Basal Application: Apply full P (phosphorus) and K (potash) along with half of the N (nitrogen) as a basal dose before sowing."
      ]
    },

    section3: {
      title: "Pre-planting Considerations",
      points: [
        "Crop Rotation: Avoid planting where root crops were recently grown to reduce pests.",
        "Seed Treatment: Treat seeds with fungicides like Thiram or Carbendazim (2g/kg) to prevent damping-off.",
        "Pre-soaking: Soaking seed balls in water for 12 hours before sowing can enhance germination."
      ]
    }
  },


  cowpea: {
    title: "Cowpea Cultivation Guide",

    section1: {
      title: "1. Site Selection",
      points: [
        "Drainage: Choose well-drained fields as cowpea does not tolerate waterlogging.",
        "Soil Type: Ideal soils are sandy loam, loam, or slightly heavy soil.",
        "pH: The optimal soil pH is between 5.5 and 6.5, but it can tolerate slightly acidic soils.",
        "Climate: As a warm-season crop, cowpea grows best at temperatures between 21–35°C.",
        "Rotation: Avoid planting in fields previously used for cowpeas in the last season to prevent pest and disease buildup."
      ]
    },

    section2: {
      title: "2. Land Preparation",
      points: [
        "Tillage: Plough the land thoroughly 2–3 times to a depth of 15–20 cm, followed by 2–3 harrowings and planking to achieve a fine tilth.",
        "Weed Removal: Remove all weeds and stubble from the previous crop to reduce initial weed competition.",
        "Drainage Channels: In high rainfall areas, form raised beds of 90 cm width or construct drainage channels of 30 cm width and 15 cm depth every 2 meters to avoid waterlogging.",
        "Ridges and Furrows: Construct ridges and furrows (45–60 cm apart) for improved aeration and water management."
      ]
    },

    section3: {
      title: "3. Soil Amendments and Fertilization",
      points: [
        "Organic Manure: Apply 5–10 tonnes/hectare of Farm Yard Manure (FYM) or compost during the last plowing to improve soil structure and fertility.",
        "Lime Application: In highly acidic soils, apply 250 kg lime or 400 kg dolomite per hectare during land preparation.",
        "Basal Fertilizer: Apply a starter dose of 15–20 kg Nitrogen/ha, 50–60 kg Phosphorus/ha, and 50–60 kg Potassium/ha based on soil test results.",
        "Zinc: Apply 25 kg Zinc/hectare in zinc-deficient irrigated soils."
      ]
    },

    section4: {
      title: "4. Soil Preparation for Sowing",
      points: [
        "Timing: Prepare the seedbed when soil temperatures are above 18°C.",
        "Seedbed Type: A fine, clod-free bed is required for uniform growth.",
        "Spacing: Bushy/Erect types – 30 x 15 cm or 45 x 15 cm; Semi-trailing – 45 x 30 cm; Trailing/Vining – 2 m x 2 m.",
        "Sowing Depth: Sow seeds at a depth of 3–5 cm."
      ]
    },

    section5: {
      title: "5. Seed Treatment (Soil-Seed Interaction)",
      points: [
        "Rhizobium Inoculation: Inoculate seeds with Rhizobium culture (600 g/ha) to enhance nitrogen fixation, especially if planting cowpea for the first time.",
        "Seed Treatment: Treat seeds with fungicides like Carbendazim or Thiram (2g/kg of seed) to protect against soil-borne diseases."
      ]
    }
  },





  cucumber: {
    title: "Cucumber Cultivation Guide",

    section1: {
      title: "1. Soil Preparation Steps",
      points: [
        "Soil Requirements: Cucumbers thrive in loose, fertile, and well-drained soil. They are sensitive to waterlogging.",
        "Land Preparation: Plough 3-4 times to a fine tilth, breaking up clods. Mix in well-rotted FYM or compost to improve soil structure and nutrient content.",
        "pH Adjustment: Maintain a pH between 5.5 and 6.8. If the soil is too acidic, add lime, or add sulfur if too alkaline.",
        "Fertilizer Application: Apply a basal dose of NPK (typically around 100:60:60 kg/ha) at planting.",
        "Raised Beds/Mounds: Create raised beds (1-1.5 m wide) to avoid waterlogging and improve drainage.",
        "Mulching: Use black plastic mulch or organic mulch (straw) to keep the soil warm, conserve moisture, suppress weeds, and prevent fruit rot.",
        "Pest Control: Incorporate insecticides like BHC @ 15–20 kg/ha during land preparation to control soil-borne insects like termites."
      ]
    },

    section2: {
      title: "2. Sowing and Planting",
      points: [
        "Sowing Method: Sow 2–3 seeds per hole directly in the field on beds or mounds.",
        "Spacing: Maintain 1.5 to 2.5 m between rows and 60 to 90 cm between plants.",
        "Planting Time: January–February for summer crops and June–July for rainy season crops.",
        "Staking: Provide bamboo sticks or trellises for trailing, especially during the rainy season, to prevent fruit rotting."
      ]
    },

    section3: {
      title: "3. Soil Moisture Management",
      points: [
        "Moisture: Keep the soil consistently moist but not waterlogged.",
        "Watering: Consistent moisture is required to avoid bitter, misshapen fruits."
      ]
    }
  },


  coriander: {
    title: "Coriander Cultivation Guide",

    section1: {
      title: "1. Land and Soil Preparation",
      points: [
        "Soil Type: Well-drained loamy soil is ideal for good growth, though it can adapt to other soil types. For rainfed cultivation, clay-based heavy soil is considered better.",
        "Ploughing: Prepare the land with 2–3 deep ploughings to remove stubbles and weeds, followed by planking to create uniform and leveled beds.",
        "Organic Amendment: Before the last ploughing, incorporate 40 quintals/acre (or 10–15 tonnes/ha) of well-decomposed cow dung or FYM to improve soil fertility.",
        "Bed Formation: For irrigated crops, create raised beds and channels for proper water management, as waterlogging should be avoided.",
        "Soil Disinfection: Treat the soil with Trichoderma viride or apply neem cake @ 60 kg/acre to prevent soil-borne diseases like wilt and root rot."
      ]
    },

    section2: {
      title: "2. Seed Treatment and Sowing",
      points: [
        "Seed Preparation: Before sowing, lightly crush or split the seeds into two parts to ensure faster germination.",
        "Soaking: Soak the seeds in water for 8–12 hours to improve germination.",
        "Seed Treatment: Treat seeds with Trichoderma viride or Pseudomonas fluorescens @ 4 g/kg seed to prevent soil-borne diseases.",
        "Sowing Method: Use the Pora method with row-to-row spacing of 20–30 cm and plant-to-plant spacing of 15 cm.",
        "Depth: Sow seeds at a shallow depth not exceeding 3 cm.",
        "Sowing Time: For green leaves, October–November is ideal, while for seed production late October is preferred."
      ]
    },

    section3: {
      title: "3. Aftercare and Maintenance",
      points: [
        "Irrigation: Apply the first irrigation immediately after sowing, then irrigate at 10–12 day intervals depending on soil moisture.",
        "Weeding: Perform weeding at 15 and 30 days after sowing to reduce competition from weeds.",
        "Fertilizer Application: Apply about 40 kg Nitrogen per acre in three split doses for better growth and higher yield."
      ]
    }
  },


  peas: {
    title: "Peas Cultivation Guide",

    section1: {
      title: "1. Land Selection and Soil Type",
      points: [
        "Ideal Soil: Well-drained sandy loam to light loam soil is best for good drainage, although heavier clay soils can also be used if properly managed.",
        "Soil pH: The optimal soil pH range is 6.0 to 7.5. For acidic soils (pH below 6.0), applying lime is recommended.",
        "Drainage: Peas cannot tolerate waterlogged conditions, so proper drainage is essential to prevent root rot.",
        "Location: Select a field with full sunlight for better growth and yield."
      ]
    },

    section2: {
      title: "2. Soil Preparation and Tillage",
      points: [
        "Deep Ploughing: Perform one deep ploughing during summer to destroy weeds and insect eggs.",
        "Fine Tilth: Prepare the field to a fine tilth with 2–3 harrowings followed by planking so the soil becomes loose and friable.",
        "Levelling: Level the land properly to ensure even irrigation and avoid waterlogging.",
        "Raised Beds: In areas with heavy rainfall or poor drainage, prepare raised beds (1–1.2 meters wide) to improve drainage and air circulation."
      ]
    },

    section3: {
      title: "3. Soil Enrichment and Fertilizer Application",
      points: [
        "Organic Matter: Apply well-decomposed farmyard manure (FYM) or compost at 20–25 tons per hectare during land preparation.",
        "Fertilizer Requirement: Apply about 20–30 kg/ha Nitrogen, 40–60 kg/ha Phosphorus, and 20–30 kg/ha Potash as a basal dose.",
        "Placement: Place fertilizers 4–5 cm away from the seed rows and slightly deeper than the seeds to prevent seed damage.",
        "Micronutrients: In zinc-deficient soils, apply zinc sulfate at 15 kg/ha."
      ]
    },

    section4: {
      title: "4. Pre-Sowing Measures",
      points: [
        "Seed Treatment: Treat seeds with Rhizobium culture (200–250 g for 10 kg seeds) to enhance nitrogen fixation.",
        "Disease Protection: Seeds can also be treated with Thiram, Captan (3 g/kg seed), or Trichoderma (4 g/kg seed) to prevent seed-borne diseases.",
        "Pre-Sowing Irrigation: If soil moisture is low, apply light irrigation before sowing to ensure uniform germination."
      ]
    },

    section5: {
      title: "5. Sowing and Planting",
      points: [
        "Spacing - Dwarf Varieties: Maintain 22.5–30 cm between rows and 5–10 cm between plants.",
        "Spacing - Tall/Climbing Varieties: Maintain 30–45 cm between rows or 120–150 cm spacing for trellising support.",
        "Depth: Sow seeds at a depth of 4–5 cm.",
        "Timing: In plains, sowing is usually done from October to mid-November."
      ]
    },

    section6: {
      title: "6. Weed and Water Management",
      points: [
        "Weed Control: Keep the field weed-free during the first 40–50 days. Perform 1–2 hand weedings at 3 and 6 weeks after sowing.",
        "Herbicide Option: Pendimethalin (0.75–1 kg a.i./ha) can be used as a pre-emergence herbicide.",
        "Irrigation: Provide 1–2 irrigations, first at about 45 days after sowing and another during the pod-filling stage if required.",
        "Water Management: Avoid heavy and frequent irrigation to prevent yellowing and diseases."
      ]
    },

    section7: {
      title: "7. Staking / Trellising",
      points: [
        "Support: For tall or vine-type varieties, provide support using bamboo sticks or twigs.",
        "Timing: Install staking when plants reach about 15 cm height (around 30 days after sowing) to prevent lodging and improve airflow."
      ]
    }
  },

  'french-beans': {
    title: "French Beans Cultivation Guide",

    section1: {
      title: "1. Soil Requirements",
      points: [
        "Drainage: Well-drained soil is essential, as French beans are highly susceptible to waterlogging which can cause root rot.",
        "Soil Type: Ideal soils are sandy loam to clay loam, rich in organic matter.",
        "Soil Preparation Depth: The land should be tilled to a depth of 15–25 cm for proper root penetration."
      ]
    },

    section2: {
      title: "2. Land Preparation Steps",
      points: [
        "Clearing and Ploughing: Clear the field of weeds and debris. Perform deep ploughing (6–7 inches) followed by 2–3 harrowings to achieve a fine tilth.",
        "Ridges and Furrows: To prevent waterlogging, create ridges and furrows. In plains maintain 45–60 cm spacing; in hilly areas prepare raised beds.",
        "Soil Amendment: Apply 10–25 tonnes per hectare of well-decomposed Farm Yard Manure (FYM) or compost during the last ploughing to improve soil structure and fertility.",
        "Basal Fertilizer Application: Incorporate phosphorus-rich fertilizers (DAP or Superphosphate) at 50–125 kg/ha along with a basal NPK dose based on soil tests.",
        "Neem Cake: Apply neem cake at 250 kg/ha during ridge formation to help control soil-borne pests.",
        "Pre-irrigation: Irrigate the field 2–3 days before sowing to ensure proper soil moisture for germination."
      ]
    },

    section3: {
      title: "3. Key Considerations",
      points: [
        "Crop Rotation: Avoid planting beans in the same soil as the previous year; rotate with cereals like maize or sorghum.",
        "Soil Testing: Conduct soil tests to identify nutrient deficiencies and adjust pH if required.",
        "Sterilization: For organic farming, apply Trichoderma and Pseudomonas at 5 kg/ha to control soil-borne diseases.",
        "Seed Treatment: Treat seeds with Rhizobium culture (600 g/ha) for better nitrogen fixation, especially if planting for the first time."
      ]
    }
  },




  watermelon: {
    title: "Watermelon Cultivation Guide",

    section1: {
      title: "1. Soil Requirements and Preparation",
      points: [
        "Soil Type: Ideal soil is sandy loam, well-drained to avoid water logging, as watermelons are susceptible to root rot.",
        "pH Level: Optimal pH range is 6.0–7.5, with 6.5–7.5 being ideal.",
        "Tillage: Plough the land 2–3 times to achieve a fine tilth for deep root development.",
        "Soil Amendments: Incorporate 20–25 tons of Farm Yard Manure (FYM) per hectare before the final ploughing to improve soil fertility and structure.",
        "Nutrient Management: Add bio-fertilizers like 5 kg/ha of Azospirillum, Phosphobacteria, and Pseudomonas along with 100 kg of neem cake to enhance soil health."
      ]
    },

    landPrep: {
      title: "2. Land Preparation Techniques",
      points: [
        "Raised Beds: Form raised beds 1.2 meters wide and 30 cm high to improve drainage and soil temperature.",
        "Row Spacing: Maintain 2.5 meters between rows for adequate vine growth.",
        "Drip System Setup: Install lateral tubes in the center of each bed for efficient water management; run for 8–12 hours to moisten the soil before planting.",
        "Weed Control: Apply pre-emergence weedicides like Pendimethalin @ 1 kg a.i/ha if necessary."
      ]
    },

    section3: {
      title: "3. Planting Preparation",
      points: [
        "Timing: Plant after the last frost when soil temperatures reach at least 70°F (21°C).",
        "Plant Spacing: Space plants 60–90 cm apart within the rows.",
        "Direct Sowing/Transplanting: Seeds can be planted directly 2–3 cm deep or transplanted as 12-day-old seedlings from bags (1:1:1 mix of red soil, sand, and FYM)."
      ]
    }
  },


  'bitter-gourd': {
    title: "Bitter Gourd Cultivation Guide",

    section1: {
      title: "1. Detailed Land and Soil Preparation",
      points: [
        "Soil Type & pH: Ideally sandy loam to sandy soils, though it can grow in various soil types provided they are rich in organic matter. The ideal pH range is 6.5–7.5.",
        "Land Preparation - Tillage: Perform 2–3 rounds of plowing and harrowing to achieve a fine tilth and remove weeds.",
        "Organic Matter: Incorporate 20–25 tonnes of well-decomposed Farm Yard Manure (FYM) per hectare into the soil.",
        "Soil Amendment: If the soil is heavy, add organic matter or sandy soil to improve drainage."
      ]
    },

    section2: {
      title: "2. Bed Preparation & Spacing",
      points: [
        "Raised Beds/Furrows: Open furrows 1.5–2.5 m apart. In heavy soil areas, raised beds are preferred to avoid waterlogging.",
        "Pits: Create pits of 60 cm diameter and 30–40 cm depth for sowing.",
        "Planting Density: Maintain spacing of 1.5–2.5 m between rows, with plants spaced 45 cm to 1 m apart.",
        "Seed Preparation: Soak seeds in water for 24 hours to improve germination. Seed treatment with Trichoderma viride (4 g/kg) or Pseudomonas fluorescens (10 g/kg) is recommended for disease resistance.",
        "Support System: Install a trellis or bower system about 3 m high for higher yields and better quality fruits."
      ]
    },

    section3: {
      title: "3. Season and Sowing",
      points: [
        "Time: February–March (summer) and June–July (rainy) are ideal.",
        "Method: Direct sowing of 2–3 seeds per pit at a depth of 2.5–3 cm."
      ]
    }
  },



  pumpkin: {
    title: "Pumpkin Cultivation Guide",

    section1: {
      title: "1. Soil Requirements and Preparation",
      points: [
        "Soil Type & pH: Ideal soil is deep loam or sandy loam with excellent drainage, as waterlogging causes root rot. Maintain pH 6.5–7.5.",
        "Clearing & Tillage: Remove weeds, rocks, and debris. Plough the land 1–2 times to a depth of 20–25 cm (8–10 inches).",
        "Organic Matter Incorporation: Mix in 10–15 tons/ha of farmyard manure or compost during land preparation to improve soil structure and nutrient content.",
        "Mound/Pit Formation: Create raised mounds or pits to plant 3–4 seeds, spaced 4–10 feet apart depending on the variety (vine vs. bush).",
        "Soil Amendments: If the soil is heavy, add sand or organic matter to improve aeration. Apply lime if soil is too acidic.",
        "Pre-sowing Weed Control: Irrigate the plot to germinate weed seeds, then work the soil again to remove them before planting."
      ]
    },

    section2: {
      title: "2. Planting Preparation",
      points: [
        "Seed Treatment: Treat seeds with Azospirillum or other biofertilizers before sowing to improve germination.",
        "Spacing: Space rows 6–12 feet apart for vining types, and 4–6 feet for bush types.",
        "Basin Creation: Create a shallow basin around each mound or plant spot to aid in water retention and direct irrigation to the root zone."
      ]
    },

    section3: {
      title: "3. Fertilizer Application",
      points: [
        "Basal Dose: Apply a balanced N-P-K fertilizer (e.g., 5-10-5 or 12-12-12) during soil preparation.",
        "Side Dressing: When vines begin to run, add nitrogen-based fertilizer for healthy growth."
      ]
    },

    section4: {
      title: "4. Land Preparation Tips",
      points: [
        "Do not burn: Avoid burning bushes during clearing to prevent loss of soil nutrients.",
        "Weed Management: Use black plastic mulch or organic mulch to conserve moisture and control weeds."
      ]
    }
  },


  tinda: {
    title: "Tinda Cultivation Guide",

    section1: {
      title: "1. Soil Requirements",
      points: [
        "Soil Type: Tinda grows best in well-drained sandy loam soil. It also thrives in fertile soils where roots can penetrate easily.",
        "pH Level: Ideal pH range is 6.5 to 7.5 (neutral to slightly alkaline).",
        "Temperature: Soil temperature should be at least 25–32°C for successful seed germination."
      ]
    },

    section2: {
      title: "2. Land Preparation Steps",
      points: [
        "Ploughing: Plough the field thoroughly 2–3 times to achieve a fine tilth. The first ploughing should ideally be 20–25 cm deep to loosen the soil.",
        "Harrowing & Planking: Use a harrow and plank to level the land, ensuring it is pulverized and free of large clods or weeds.",
        "Bed & Channel Formation: Form long channels approximately 1.5 m apart, or prepare raised beds to improve drainage.",
        "Weed Removal: Ensure the ground is completely clear of weeds before sowing to prevent competition for nutrients."
      ]
    },

    section3: {
      title: "3. Basal Fertilization",
      points: [
        "Organic Manure: Add 8–10 tonnes of well-decomposed cow dung (FYM) per acre during final land preparation.",
        "Nutrients: Apply a standard basal dose including Nitrogen (one-third of total, 20 kg/ha), full dose of Phosphorus and Potash at sowing.",
        "Bio-fertilizers: Apply Azospirillum and Phosphobacteria (2 kg/ha each) along with neem cake (100 kg/ha) before the last ploughing to enhance soil health."
      ]
    }
  },

  knolkhol: {
    title: "Knol Khol Cultivation Guide",

    section1: {
      title: "1. Soil Preparation Steps",
      points: [
        "Soil Type & pH: Thrives in rich, well-drained sandy loam (early crop) or clay/silt loam (late crop) with a pH between 5.5 and 6.8.",
        "Field Preparation: Deep ploughing followed by 3–4 harrowings to achieve a fine tilth.",
        "Organic Matter: Incorporate well-rotted Farm Yard Manure (FYM) or compost during the final ploughing to improve structure, aeration, and fertility.",
        "Bed Preparation: Prepare raised beds for better drainage, especially in heavy soils.",
        "Spacing & Transplanting: Transplant seedlings at appropriate spacing depending on variety and soil fertility, often in the evening.",
        "Moisture Management: Ensure consistent moisture; ridges are ideal for early or rainy season crops, while flat beds work for drier conditions.",
        "Nutrient Management: Apply a basal dose of nitrogen, phosphorus, and potassium (NPK) at planting."
      ]
    },

    section2: {
      title: "2. Nursery Bed Preparation",
      points: [
        "Create raised nursery beds.",
        "Mix 15 kg/m² of well-rotted FYM into the topsoil.",
        "Drench with a 0.2% Captan solution to prevent soil-borne diseases.",
        "Sow seeds in lines 1 cm deep and cover with a thin layer of soil and mulch."
      ]
    }
  },


  cabbage: {
    title: "Cabbage Cultivation Guide",

    section1: {
      title: "1. Soil and Land Preparation Steps",
      points: [
        "Soil Requirements: Optimal soil is rich in organic matter, sandy loam, and has good moisture-holding capacity.",
        "pH Management: Ideal pH is 5.5–6.8. Apply lime to increase pH if the soil is too acidic, as highly acidic soil hinders growth.",
        "Tillage: Plough the land 3–4 times to achieve a fine, well-leveled tilth.",
        "Nutrient Amendment: Incorporate large amounts of well-rotted farmyard manure and organic compost to improve soil fertility.",
        "Raised Beds: In rainy or high-moisture areas, construct raised beds (1 m wide, 15 cm high) to prevent waterlogging and reduce root rot.",
        "Drainage: Ensure the field is well-drained, as excessive moisture leads to disease.",
        "Spacing & Ridges: Form ridges and furrows 45–60 cm apart. Early crops use closer spacing (45 x 45 cm), while later crops prefer 60 x 45 cm.",
        "Pre-planting Irrigation: Irrigate the field before transplanting to ensure proper soil moisture."
      ]
    },

    section2: {
      title: "2. Nursery Bed Preparation",
      points: [
        "Prepare raised nursery beds with well-decomposed manure.",
        "Sow seeds 1–2 cm deep and cover lightly with soil.",
        "Seedlings are ready for transplanting at 4–6 weeks when they are about 3–4 inches tall."
      ]
    },

    section3: {
      title: "3. Tips for Success",
      points: [
        "Crop Rotation: Avoid planting cabbage in soil previously used for other brassicas to prevent disease buildup such as clubroot.",
        "Sterilization: Treat nursery beds with fungicides like Bavistin to prevent damping-off disease.",
        "Mulching: Use organic mulch (straw, grass clippings) to maintain soil moisture, control weeds, and keep soil cool."
      ]
    }
  },

  broccoli: {
    title: "Broccoli Cultivation Guide",

    section1: {
      title: "1. Land and Soil Preparation Steps",
      points: [
        "Soil Requirements: Thrives in sandy loam to clay loam soils with high water-holding capacity.",
        "Tillage: Deep plowing (20–25 cm) followed by 2–3 harrowings to achieve a fine, weed-free seedbed.",
        "Soil Amendment: Mix 20–30 tonnes of well-decomposed FYM or compost per hectare.",
        "pH Adjustment: If soil is too acidic (pH < 6.0), apply lime to raise it to the 6.0–7.0 range.",
        "Bed Preparation: Prepare raised beds (1 m wide, 30 cm high) for better aeration and drainage.",
        "Spacing: Space plants 12–18 inches apart within rows and 24–36 inches between rows."
      ]
    },

    section2: {
      title: "2. Key Tips",
      points: [
        "Nutrient Management: Incorporate phosphorus and potassium based on soil tests, as broccoli is a heavy feeder.",
        "Pre-moistening: Ensure the soil is moist before planting.",
        "Disease Prevention: Incorporate organic matter to improve soil structure and reduce the risk of soil-borne diseases."
      ]
    }
  },

  bhindi: {
    title: "Bhindi Cultivation Guide",

    section1: {
      title: "Soil Requirements",
      points: [
        "Soil Type: Sandy loam to clay loam soils are best for cultivation.",
        "Drainage: The soil must have excellent internal drainage to avoid root rot.",
        "pH Range: Optimal soil pH is between 6.0 and 6.8.",
        "Preparation: The soil should be tilled to a fine tilth, 8 to 10 inches deep."
      ]
    },

    section2: {
      title: "Land Preparation Steps",
      points: [
        "Ploughing: The field should undergo 2–3 deep ploughings to remove weeds and ensure good soil aeration.",
        "Harrowing & Leveling: Perform 1–2 harrowings to break down soil clods and level the land with planking.",
        "Organic Matter Amendment: Incorporate well-decomposed Farm Yard Manure (FYM) or compost at 25 t/ha during the final ploughing.",
        "Bed Preparation: Prepare ridges and furrows for sowing to ensure proper irrigation and drainage."
      ]
    },

    section3: {
      title: "Sowing Preparation",
      points: [
        "Seed Treatment: To protect against soil-borne pathogens, soak seeds in a Bavistin solution (0.2%) for 6 hours and shade dry before planting.",
        "Pre-soaking Irrigation: Apply a light irrigation 3–4 days before sowing to ensure proper soil moisture for germination.",
        "Spacing: For summer crops use 30x30 cm; for rainy (Kharif) crops use 60x30 cm or 45x30 cm spacing.",
        "Basal Fertilizer Dose: Apply nitrogen, phosphorus, and potassium (NPK) according to soil test results."
      ]
    },

    section4: {
      title: "Key Considerations",
      points: [
        "Season: Sowing is typically done from January–March (summer) and June–August (rainy).",
        "Seed Rate: Approximately 3.5–5.5 kg/ha for summer and 8–10 kg/ha for the rainy season.",
        "Intercropping: Growing okra with legumes like cowpea or vegetables like radish can increase profitability."
      ]
    }
  },



  'sponge-gourd': {
    title: "Sponge Gourd Cultivation Guide",

    section1: {
      title: "1. Key Soil and Land Preparation Details",
      points: [
        "Soil Requirements: The soil should be well-drained and capable of retaining moisture, particularly during the summer. Sandy loam or loamy soil is ideal.",
        "Land Preparation - Plowing: Plow the field 2 to 3 times to achieve a fine tilth and ensure it is free from weeds.",
        "Manuring: Mix well-rotten farmyard manure (FYM) into the soil to improve fertility. About 20–25 tonnes/ha of FYM is recommended.",
        "Bed Preparation: For rainy seasons, raised beds are necessary to prevent waterlogging. For summer, pits can be prepared.",
        "Spacing: Row-to-row spacing of 1.5–2.5 m and hill-to-hill distance of 60–120 cm is generally recommended.",
        "pH Range: Soil pH should be between 5.5 and 7.0.",
        "Drainage: Good drainage is essential, as waterlogging inhibits growth."
      ]
    },

    section2: {
      title: "2. Additional Tips",
      points: [
        "Seed Treatment: Soak seeds in water for 12–24 hours before sowing to improve germination.",
        "Container Gardening: Use a container at least 12 inches deep with proper drainage, filled with a mix of garden soil, compost, and cocopeat.",
        "Weed Management: Pre-sowing application of Basalin (2.0–2.5 liters/hectare) can help control weeds."
      ]
    }
  },


  radish: {
    title: "Radish Cultivation Guide",

    section1: {
      title: "1. Key Land and Soil Preparation Steps",
      points: [
        "Soil Type & pH: Ideal soil is loose, sandy loam, or loam, which allows for straight, long root growth, with a pH of 5.5 to 6.8.",
        "Ploughing: Perform 2–3 deep ploughings to achieve a fine tilth, ensuring the soil is free from clods, rocks, and weeds.",
        "Manure Application: Mix 15–30 tons of well-decomposed FYM or compost per hectare during final land preparation. Avoid fresh manure, as it causes forking (splitting) of roots.",
        "Bed/Ridge Formation: Prepare raised beds or ridges (20–25 cm high) to facilitate easy harvesting, proper root development, and good drainage, particularly in heavy soils.",
        "Spacing - Indian/Tropical types: 45 cm between rows and 6–8 cm between plants.",
        "Spacing - European/Temperate types: 10–15 cm between rows and 3–5 cm between plants.",
        "Fertilizer: Basal application of Nitrogen, Phosphorus, and Potassium is recommended depending on soil fertility."
      ]
    },

    section2: {
      title: "2. Soil Preparation Tips",
      points: [
        "Soil Moisture: Ensure the soil is moist but not waterlogged to encourage germination.",
        "Weed Control: Thoroughly remove weeds, as they compete with the fast-growing radish.",
        "Avoid Compaction: Do not compact the soil after sowing to ensure easy root penetration."
      ]
    }
  },



  carrot: {
    title: "Carrot Cultivation Guide",

    section1: {
      title: "1. Key Steps for Land and Soil Preparation",
      points: [
        "Soil Type & pH: Ideal soil is deep, sandy loam or muck soil with a pH of 5.5 to 8.0.",
        "Deep Tillage: The soil should be tilled or plowed to a depth of 30 cm (12–14 inches) to break up hardpans.",
        "Remove Debris/Clods: All weeds, stones, and previous crop debris must be removed to prevent forked or stunted roots.",
        "Add Organic Matter: Incorporate well-decomposed farmyard manure (FYM) at 25–50 t/ha to enrich the soil.",
        "Raised Beds: Prepare raised beds (about 1m wide, 7 inches high) to facilitate root development, improve aeration, and manage irrigation, especially in heavy soils.",
        "Fertilizer Application: Incorporate basal doses of fertilizer (nitrogen, phosphorus, potassium) based on soil testing.",
        "Bed Leveling: The seedbed must be very fine and leveled to ensure uniform, shallow sowing (1.5 cm depth)."
      ]
    },

    section2: {
      title: "2. Tips for Success",
      points: [
        "Avoid Fresh Manure: Freshly applied manure causes forking and splitting of roots.",
        "Irrigation Setup: Create shallow furrows 30–45 cm apart on the beds for, or prior to, planting.",
        "Soil Amendment: If the soil is too heavy, add sand to improve drainage."
      ]
    }
  },





















  'bottle-gourd': {
    title: "Gourd Cultivation Guide",

    section1: {
      title: "1. Soil Requirements",
      points: [
        "Type: Bottle gourd thrives in sandy loam to loamy soils that are fertile and rich in organic matter. While it can adapt to clay, well-drained soil is critical to prevent waterlogging and root rot.",
        "pH Level: The ideal soil pH range is 6.5 to 7.5.",
        "Drainage: Excellent drainage is essential as the crop is sensitive to water stagnation."
      ]
    },

    section2: {
      title: "2. Land Preparation Steps",
      points: [
        "Ploughing: Begin with 2–3 deep ploughings during the summer to expose the soil to the sun, which helps destroy pests, pathogens, and weeds. Follow this with 6–7 additional ploughings or thorough digging to achieve a fine tilth.",
        "Harrowing & Leveling: Use a harrow to break down clods and improve aeration. Level the field to ensure uniform irrigation and prevent localized waterlogging.",
        "Organic Enrichment: Incorporate 8–10 tons of well-decomposed farmyard manure (FYM) or cow dung per acre during the final ploughing.",
        "Field Layout: Prepare the field based on irrigation method and season.",
        "Furrow Method: Create furrows at a distance of 2.0–3.0 metres.",
        "Pit Method: Dig pits approximately 30 cm x 30 cm x 30 cm (or up to 60 cm diameter) spaced 2.5–3.0 metres between rows and 1.0–2.0 metres between plants.",
        "Bed Method: Form raised beds 2.0–2.5 metres wide, especially during the rainy season to enhance drainage.",
        "Basal Fertilization: Apply about 10 kg FYM and 100 g of NPK (6:12:12 or similar ratio) per pit during land preparation."
      ]
    }
  }
};

export const CATEGORIES: Category[] = [
  {
    id: 'veg',
    name: 'Vegetables',
    crops: [
      {
        id: 'bhindi',
        name: 'Bhindi',
        products: [
          { id: 'mahima-super', name: 'MAHIMA SUPER', badge: 'HIGH YIELD' },
          { id: 'hhs555', name: 'HHS - 555' },
          { id: 'hs8815', name: 'HS - 8815' },
          { id: 'saarika', name: 'SAARIKA' },
          { id: 'hhs8862', name: 'HHS - 8862' }
        ]
      },
      {
        id: 'tomato',
        name: 'Tomato',
        products: [
          { id: 'amar', name: 'AMAR - 1129', badge: 'F1 Hybrid' },
          { id: 'bheema', name: 'BHEEMA - 85', badge: 'F1 Hybrid' },
          { id: 'dhruv', name: 'DHRUV - 1124', badge: 'F1 Hybrid' },
          { id: 'indra', name: 'INDRA - 1125', badge: 'F1 Hybrid' }
        ]
      },
      {
        id: 'hot-pepper',
        name: 'Hot Pepper',
        products: [
          { id: 'hhs7888', name: 'HHS - 7888' },
          { id: 'hhs-supreme', name: 'HHS - SUPREME', badge: 'NEW LAUNCH' },
        ]
      },

      {
        id: 'cucumber',
        name: 'Cucumber',
        products: [
          { id: 'venus', name: 'VENUS', badge: 'F1 Hybrid' },
          { id: 'mitraa', name: 'MITRAA', badge: 'F1 Hybrid' },
          { id: 'pakeeza', name: 'PAKEEZA', badge: 'F1 Hybrid' },
          { id: 'pepino', name: 'PEPINO', badge: 'F1 Hybrid' }
        ]
      },
      {
        id: 'watermelon',
        name: 'Watermelon',
        products: [
          { id: 'noor111', name: 'Noor' },
          { id: 'sultan', name: 'Sultan' },
        ]
      },
      {
        id: 'pumpkin',
        name: 'Pumpkin',
        products: [
          { id: 'virat', name: 'Virat' }
        ]
      },
      {
        id: 'tinda',
        name: 'Tinda',
        products: [
          { id: 'hhs11', name: 'HHS - 111' }
        ]
      },
      {
        id: 'knolkhol',
        name: 'Knol Khol',
        products: [
          { id: 'early111', name: 'EARLY - 111' }
        ]
      },

      {
        id: 'broccoli',
        name: 'Broccoli',
        products: [
          { id: 'grace', name: 'GRACE', badge: 'F1 Hybrid' }
        ]
      },
      {
        id: 'bottle-gourd',
        name: 'Bottle Gourd',
        products: [
          { id: 'esha', name: 'ESHA', badge: 'F1 Hybrid' },
          { id: 'hhs408', name: 'HHS - 408', badge: 'F1 Hybrid' },
          { id: 'surbhi111', name: 'SURBHI - 111', badge: 'F1 Hybrid' }
        ]
      },

      {
        id: 'cabbage',
        name: 'Cabbage',
        products: [
          { id: 'champion45', name: 'CHAMPION - 45', badge: 'F1 Hybrid' },
          { id: 'veera60', name: 'VEERA - 60', badge: 'F1 Hybrid' }
        ]
      },


      {
        id: 'sponge-gourd',
        name: 'Sponge Gourd',
        products: [
          { id: 'rani111', name: 'RANI - 111', badge: 'F1 Hybrid' },
          { id: 'greengold', name: 'GREEN GOLD', badge: 'F1 Hybrid' },
          { id: 'mohini', name: 'MOHINI', badge: 'F1 Hybrid' },
          { id: 'sitara111', name: 'SITARA - 111', badge: 'F1 Hybrid' }
        ]
      },

      {
        id: 'bitter-gourd',
        name: 'Bitter Gourd',
        products: [
          { id: 'maharaja', name: 'Maharaja', badge: 'F1 Hybrid' },
        ]
      },
      {
        id: 'radish',
        name: 'Radish',
        products: [
          { id: 'early40', name: 'Early 40 Days', badge: 'Variety' },
          { id: 'chinese-pink', name: 'Chinese Pink', badge: 'Variety' },
          { id: 'him222', name: 'HIM - 222', badge: 'F1 Hybrid' },
          { id: 'hill-queen', name: 'Hill Queen', badge: 'Variety' },
          { id: 'mino-early', name: 'Mino Early Long', badge: 'Variety' },
          { id: 'japani-white', name: 'Japani White', badge: 'Variety' },
          { id: 'palak-patta', name: 'Palak Patta', badge: 'Variety' },
          { id: 'pusa-chetki', name: 'Pusa Chetki Long', badge: 'Variety' }
        ]
      },
      {
        id: 'carrot',
        name: 'Carrot',
        products: [
          { id: 'super111', name: 'SUPER - 111', badge: 'Seeds' }
        ]
      },
      {
        id: 'beet-root',
        name: 'Beet Root',
        products: [
          { id: 'hdr88', name: 'HDR-88', badge: 'Variety' },
          { id: 'ruby-queen', name: 'Ruby Queen', badge: 'Variety' }
        ]
      },
      {
        id: 'cowpea',
        name: 'Cowpea',
        products: [
          { id: 'tejas4', name: 'Tejas-4', badge: 'Premium Quality' },
          { id: 'nidhi6', name: 'Nidhi-6', badge: 'Premium Quality' },
          { id: 'kranti5', name: 'Kranti-5', badge: 'Premium Quality' }
        ]
      },
      {
        id: 'french-beans',
        name: 'French Beans',
        products: [
          { id: 'lucky111', name: 'LUCKY - 111', badge: 'Variety' },
          { id: 'pencil', name: 'PENCIL', badge: 'Variety' },
          { id: 'ratna-gold', name: 'RATNA GOLD', badge: 'Variety' }
        ]
      },
      {
        id: 'coriander',
        name: 'Coriander',
        products: [
          { id: 'him111', name: 'Him-111', badge: 'Variety' }
        ]
      },

      {
        id: 'peas',
        name: 'Peas',
        products: [
          { id: 'hs10', name: 'HS-10', badge: 'Seeds' },
          { id: 'greenwonder', name: 'Green Wonder', badge: 'Variety' }
        ]
      }
    ]
  }
];

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  en: {
    findCatalog: 'FIND YOUR CROP CATALOG',
    heroSubtitle: 'HIGH YIELDING HYBRID SEEDS FOR PROSPEROUS FARMING',
    selectCategory: 'Select Category:',
    selectCrop: 'Select Crop:',
    selectProduct: 'Select Product:',
    seeDetails: 'See Details',
    contactUs: 'CONTACT US',
    home: 'HOME',
    aboutUs: 'CATALOGUES',
    researchAndDev: 'RESEARCH & DEVELOPMENT',
    salesMarketing: 'SALES & MARKETING',
    products: 'PRODUCTS',
    media: 'MEDIA',
    helpCenter: 'HELP CENTER',
    // allRightsReserved: ''
  },
  hi: {
    findCatalog: 'अपना फसल कैटलॉग खोजें',
    heroSubtitle: 'समृद्ध खेती के लिए उच्च उपज वाले संकर बीज',
    selectCategory: 'श्रेणी चुनें:',
    selectCrop: 'फसल चुनें:',
    selectProduct: 'उत्पाद चुनें:',
    seeDetails: 'विवरण देखें',
    contactUs: 'संपर्क करें',
    home: 'होम',
    aboutUs: 'हमारे बारे में',
    researchAndDev: 'अनुसंधान और विकास',
    salesMarketing: 'बिक्री और विपणन',
    products: 'उत्पाद',
    media: 'मीडिया',
    helpCenter: 'सहायता केंद्र',
    allRightsReserved: 'हिमालय हाइब्रिड सीड्स कंपनी। कॉपीराइट 2025। सर्वाधिकार सुरक्षित।'
  },
  mr: {
    findCatalog: 'तुमचा पीक कॅटलॉग शोधा',
    heroSubtitle: 'समृद्ध शेतीसाठी अधिक उत्पादन देणारे संकरित बियाणे',
    selectCategory: 'श्रेणी निवडा:',
    selectCrop: 'पीक निवडा:',
    selectProduct: 'उत्पाद निवडा:',
    seeDetails: 'तपशील पहा',
    contactUs: 'आमच्याशी संपर्क साधा',
    home: 'मुख्यपृष्ठ',
    aboutUs: 'आमच्याविषयी',
    researchAndDev: 'संशोधन आणि विकास',
    salesMarketing: 'विपणन आणि विक्री',
    products: 'उत्पादने',
    media: 'माध्यम',
    helpCenter: 'मदत केंद्र',
    allRightsReserved: 'हिमालय हायब्रीड सीड्स कंपनी. कॉपीराइट २०२५. सर्व हक्क राखीव.'
  }
};