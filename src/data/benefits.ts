export type BenefitItem = {
  // slug: string;
  question: string;
  answer: string;
  evidence?: string;
  url: string;
};

export const benefits = [
  {
    slug: "muscle-recovery",
    question: "Does Wheatgrass Speed Up Muscle Recovery?",
    answer:
      "Fresh wheatgrass speeds up muscle recovery by reducing oxidative stress caused by intense exercise. It contains high levels of Superoxide Dismutase (SOD) and other antioxidants that neutralize free radicals, effectively minimizing Delayed Onset Muscle Soreness (DOMS) and allowing athletes to maintain a more consistent and frequent training schedule.",
    evidence:
      "MDPI Pharmaceutical research explains the role of wheatgrass antioxidants in reducing cellular damage and inflammation.",
    url: "https://www.mdpi.com/1424-8247/13/6/129",
  },

  {
    slug: "natural-pre-workout",
    question: "Wheatgrass as a Natural Pre-Workout for Endurance",
    answer:
      "As a natural pre-workout, wheatgrass enhances endurance through its high chlorophyll content, which improves oxygen transport to working muscles. By mimicking the function of hemoglobin, it ensures a steady supply of oxygen during high-intensity interval training (HIIT) or long-distance cardio, delaying the onset of lactic acid buildup and fatigue.",
    evidence:
      "A study on ClinicalTrials.gov monitored the effect of wheatgrass on oxygen-carrying capacity in the blood.",
    url: "https://clinicaltrials.gov/study/NCT01215448",
  },

  {
    slug: "muscle-protein-synthesis",
    question: "Role of Wheatgrass in Muscle Protein Synthesis",
    answer:
      "Wheatgrass supports muscle protein synthesis by providing all nine essential amino acids, the building blocks of muscle tissue. Its alkaline nature also helps maintain a balanced internal pH, preventing the acidic environment that can lead to muscle breakdown (catabolism), thereby protecting lean muscle mass during strenuous bodybuilding or weight-loss phases.",
    evidence:
      "The National Cancer Institute (NCI) defines wheatgrass juice as a rich source of amino acids and minerals necessary for tissue repair.",
    url: "https://www.cancer.gov/publications/dictionaries/cancer-drug/def/wheatgrass-juice",
  },

  {
    slug: "electrolyte-drinks",
    question: "Can Wheatgrass Replace Synthetic Electrolyte Drinks?",
    answer:
      "Fresh wheatgrass is an effective natural alternative to synthetic electrolyte drinks because it is naturally rich in magnesium, potassium, and calcium. These essential minerals regulate muscle contractions and nerve signaling, preventing painful cramps and ensuring optimal hydration levels during and after heavy sweating sessions without the added sugars found in commercial sports drinks.",
    evidence:
      "WebMD health reviews confirm wheatgrass contains high levels of potassium and magnesium, essential for nerve and muscle function.",
    url: "https://www.webmd.com/diet/health-benefits-wheatgrass",
  },

  {
    slug: "atp-metabolic-energy",
    question: "How Wheatgrass Boosts ATP and Metabolic Energy",
    answer:
      "Wheatgrass boosts cellular energy by providing the B-complex vitamins (B12, B6, and Thiamine) required for the production of ATP (Adenosine Triphosphate). This increases the body’s metabolic efficiency, allowing gym users to convert nutrients into usable energy more effectively, which leads to improved strength output and better performance during heavy lifting.",
    evidence:
      "Research in Exploration of Medicine highlights how the nutrient profile of wheatgrass supports metabolic pathways.",
    url: "https://www.explorationpub.com/Journals/em/Article/1001104",
  },

  {
    slug: "post-workout-detoxification",
    question: "Benefits of Wheatgrass for Post-Workout Detoxification",
    answer:
      "Post-workout, wheatgrass aids in detoxification by helping the liver process metabolic waste products like urea and uric acid generated during intense physical exertion. Its high concentration of enzymes and chlorophyll purifies the blood, ensuring that nutrients are delivered more efficiently to depleted tissues for faster total-body rejuvenation after a session.",
    evidence:
      "Detailed chemical analysis in the Drug Discovery and Therapeutics journal supports the detoxifying and hepatoprotective properties of wheatgrass.",
    url: "https://ddtjournal.net/docs/abstract/c6bc03cd9dbbae5acc650dfe95a78962.html",
  },

  {
    slug: "skin-benefits",
    question: "How Fresh Wheatgrass Benefits Skin",
    answer:
      "Fresh wheatgrass benefits the skin by providing high concentrations of Vitamins A, C, and E, which act as potent antioxidants to neutralize free radicals and stimulate collagen production. Its high chlorophyll content detoxifies the blood, reducing inflammatory conditions like acne and eczema while promoting a natural, oxygenated glow from within. harvested on the 7th Day at peak enzyme activity.",
    evidence:
      "Research in the Journal of Pharmacy and BioAllied Sciences highlights wheatgrass's ability to treat skin conditions like psoriasis and acne due to its anti-inflammatory properties.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3509179/",
  },

  {
    slug: "natural-energy",
    question: "Does Wheatgrass Help with Natural Energy?",
    answer:
      "Wheatgrass provides a natural energy boost because its chlorophyll molecule is structurally similar to human hemoglobin, enhancing oxygen transport in the blood. This increased oxygenation, combined with B-complex vitamins and magnesium, supports cellular metabolism (ATP production), offering sustained vitality without the crash associated with caffeine or sugar.",
    evidence:
      "The Memorial Sloan Kettering Cancer Center acknowledges wheatgrass's use in increasing hemoglobin levels and improving energy in patients.",
    url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/wheat-grass",
  },

  {
    slug: "digestion-bloating",
    question: "Benefits of Wheatgrass for Digestion and Bloating",
    answer:
      "Wheatgrass supports digestion through its rich supply of living enzymes (like amylase and lipase) and magnesium, which help break down food and relax the GI tract. Its alkaline nature neutralizes excess stomach acid, while its natural fibers and chlorophyll act as a gentle internal cleanser to reduce bloating and support healthy gut flora.",
    evidence:
      "A randomized double-blind study showed that wheatgrass juice significantly reduced disease activity and severity in patients with Ulcerative Colitis.",
    url: "https://pubmed.ncbi.nlm.nih.gov/11989541/",
  },

  {
    slug: "immune-system",
    question: "How Wheatgrass Boosts the Immune System",
    answer:
      "Wheatgrass strengthens the immune system by stimulating white blood cell production through high doses of Vitamin C and bioflavonoids. The dense nutrient profile—including 17 amino acids and essential minerals—provides the biological building blocks necessary for the body to mount a rapid defense against oxidative stress and environmental pathogens.",
    evidence:
      "Clinical research suggests wheatgrass has immunostimulatory effects, potentially increasing the activity of macrophages.",
    url: "https://www.sciencedirect.com/science/article/pii/S2772566924000375",
  },

  {
    slug: "women-hormonal-health",
    question: "Wheatgrass Benefits for Women’s Hormonal Health",
    answer:
      "For women, wheatgrass is particularly beneficial for hormonal balance due to its high iron and folic acid content, which helps replenish blood nutrients lost during menstruation. The zinc in wheatgrass supports the endocrine system, while its detoxifying properties help the liver process excess estrogen, potentially reducing symptoms of PCOS and PMS.",
    evidence:
      "A clinical study published in JPTCP examines the efficacy of wheatgrass in managing hormone-related conditions like PCOS.",
    url: "http://jptcp.com/index.php/jptcp/article/view/8820",
  },

  {
    slug: "hair-graying",
    question: "Can Wheatgrass Prevent Premature Hair Graying?",
    answer:
      "Wheatgrass may help slow premature hair graying because it contains catalase, an enzyme that breaks down hydrogen peroxide—a metabolic byproduct that bleaches hair from the inside out. Additionally, the zinc and protein in fresh wheatgrass strengthen hair follicles at the root, promoting thicker growth and maintaining natural pigment.",
    evidence:
      "ScienceDirect documentation details how antioxidants like catalase in wheatgrass neutralize oxidative stress linked to hair aging.",
    url: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/wheatgrass",
  },
];
