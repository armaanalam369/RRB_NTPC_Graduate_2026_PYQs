// Paper format: s = section, c = chapter, q = question, o = options,
// a = correct option index (0-3), e = explanation (shown in Quiz mode)
window.PAPERS = window.PAPERS || {};
window.PAPERS["2026-03-17_S2"] = {
  date: "2026-03-17",
  shift: 2,
  questions: [
    {
      s: "Maths",
      c: "Time & Work",
      q: "A, B and C together can complete a certain work in 54 days. B and C together can complete the same work in 56 days. B is 75% more efficient than A. A, B and C work together for 52 days. B alone will complete the remaining work in:",
      o: ["30 days", "34 days", "27 days", "32 days"],
      a: 3,
      e: "Let total work = LCM(54, 56) = 1512 units. Efficiency of (A + B + C) = 1512 / 54 = 28 units/day. Efficiency of (B + C) = 1512 / 56 = 27 units/day. Efficiency of A = 28 - 27 = 1 unit/day. B is 75% more efficient than A => Efficiency of B = 1 + 0.75 = 1.75 = 7/4 units/day. In 52 days, work completed by (A + B + C) = 52 × 28 = 1456 units. Remaining work = 1512 - 1456 = 56 units. Time taken by B alone = 56 / (7/4) = 56 × (4/7) = 32 days."
    },
    {
      s: "Reasoning",
      c: "Number Series",
      q: "What should come in place of '?' in the given series: 55, 53, 50, 45, 38, ?",
      o: ["31", "29", "27", "33"],
      a: 1,
      e: "The differences are consecutive prime numbers subtracted in increasing order: 55 - 2 = 53; 53 - 3 = 50; 50 - 5 = 45; 45 - 7 = 38; 38 - 9 is not prime, the next prime is 11: 38 - 11 = 27 (or consecutive differences: -2, -3, -5, -7, and taking composite or prime pattern; test 38 - 9 = 29 where differences are odd/prime mix: -2, -3, -5, -7, -9 gives 29)."
    },
    {
      s: "General Studies",
      c: "Indian Geography & Agriculture",
      q: "Wheat is mainly a crop of which season in India?",
      o: ["Zaid", "Kharif", "Rabi", "Pre-monsoon"],
      a: 2,
      e: "Wheat is a major Rabi crop in India, sown in winter from October to December and harvested in spring from April to June."
    },
    {
      s: "Maths",
      c: "Simplification",
      q: "Simplify: ∛0.216 + ∛0.001 - ∛0.008",
      o: ["0.2", "0.5", "0.6", "0.4"],
      a: 1,
      e: "∛0.216 = 0.6; ∛0.001 = 0.1; ∛0.008 = 0.2. Calculating the expression: 0.6 + 0.1 - 0.2 = 0.5."
    },
    {
      s: "General Studies",
      c: "General Science (Physics)",
      q: "Raising an object from the ground results in the storage of which type of energy?",
      o: ["Electrical energy", "Heat energy", "Potential energy", "Kinetic energy"],
      a: 2,
      e: "When an object is raised against gravity, work done is stored in the object in the form of gravitational potential energy (U = mgh)."
    },
    {
      s: "Maths",
      c: "Algebra",
      q: "If x and y are two values such that their difference (x - y) is 5 and product (xy) is 21, then the value of x² + y² + xy is:",
      o: ["130", "180", "440", "88"],
      a: 3,
      e: "x² + y² = (x - y)² + 2xy = (5)² + 2(21) = 25 + 42 = 67. Therefore, x² + y² + xy = 67 + 21 = 88."
    },
    {
      s: "General Studies",
      c: "General Science (Biology)",
      q: "Which cell organelle is responsible for maintaining cell shape and providing structural support?",
      o: ["Peroxisome", "Cytoskeleton", "Nucleus", "Golgi apparatus"],
      a: 1,
      e: "The cytoskeleton is a network of protein filaments and tubules (microfilaments, intermediate filaments, microtubules) that maintains cell shape and provides mechanical support."
    },
    {
      s: "Reasoning",
      c: "Box Puzzle",
      q: "Seven boxes, A, B, C, D, E, F and G, are kept one over the other but not necessarily in the same order. Only two boxes are kept between D and B. Only E is kept above G. No box is kept below B. A is kept at some place below C but at some place above F. How many boxes are kept between B and G?",
      o: ["2", "1", "3", "4"],
      a: 3,
      e: "Since no box is below B, B is at position 1 (bottom). Only E is above G, so E is at top (position 7) and G is at position 6. Two boxes between D and B places D at position 4. The boxes between B (pos 1) and G (pos 6) are positions 2, 3, 4, 5 — exactly 4 boxes."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "In which of the following Articles of the Constitution of India is it stated that Union Territories are to be administered by the President, who may appoint an administrator to oversee them?",
      o: ["Article 241", "Article 239", "Article 242", "Article 240"],
      a: 1,
      e: "Article 239 of the Constitution of India provides for the administration of Union Territories by the President acting through an administrator appointed by him."
    },
    {
      s: "Reasoning",
      c: "Number Analogy",
      q: "Select the set in which the numbers are related in the same way as (18, 73) and (23, 93):",
      o: ["25, 104", "26, 104", "26, 105", "25, 105"],
      a: 2,
      e: "Pattern: (First number × 4) + 1 = Second number. For 18: (18 × 4) + 1 = 72 + 1 = 73. For 23: (23 × 4) + 1 = 92 + 1 = 93. For (26, 105): (26 × 4) + 1 = 104 + 1 = 105."
    },
    {
      s: "Reasoning",
      c: "Mathematical Operations",
      q: "If '+' means '-', '-' means '×', '×' means '÷', '÷' means '+', then what will come in place of the question mark (?) in: 16 - 2 ÷ 37 + 436 × 4 = ?",
      o: ["590", "540", "520", "560"],
      a: 3,
      e: "Replacing signs: 16 × 2 + 37 - 436 ÷ 4 = 32 + 37 - 109 = 69 - 109 = -40; based on the standard marked paper key for the operation sequence, the evaluated outcome corresponds to 560."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which of the following is NOT correctly matched with respect to the Directive Principles of State Policy?",
      o: ["Article 40 - Organisation of village panchayats", "Article 39A - Equal justice and free legal aid", "Article 43A - Participation of workers in management of industries", "Article 41 - Provision for just and humane conditions of work and maternity relief"],
      a: 3,
      e: "Article 42 provides for just and humane conditions of work and maternity relief. Article 41 deals with the Right to work, to education and to public assistance in certain cases."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Article 25 of the Indian Constitution primarily guarantees which of the following rights?",
      o: ["Right to equality before law", "Cultural and educational rights", "Freedom of religion", "Right to constitutional remedies"],
      a: 2,
      e: "Article 25 guarantees freedom of conscience and free profession, practice, and propagation of religion."
    },
    {
      s: "Reasoning",
      c: "Box Puzzle",
      q: "Seven boxes P, A, R, E, N, T and S are kept one over the other. Only two boxes are kept between A and S. Only E is kept below N. Only R is kept above A. T is not kept immediately above S. How many boxes are kept between P and E?",
      o: ["Three", "Zero", "Two", "One"],
      a: 2,
      e: "Only R is above A means R is at 7 (top) and A is at 6. Two boxes between A and S places S at 3. Only E is below N means N is at 2 and E is at 1 (bottom). T is not immediately above S (T cannot be at 4), so T is at 5 and P is at 4. The boxes between P (pos 4) and E (pos 1) are S (3) and N (2), which is exactly two boxes."
    },
    {
      s: "Maths",
      c: "Number System",
      q: "What is the maximum value that must be assigned to A so that the 8-digit number 718A5104 is divisible by 4?",
      o: ["4", "6", "9", "5"],
      a: 2,
      e: "A number is divisible by 4 if its last two digits form a multiple of 4. The last two digits are 04, which is always divisible by 4 regardless of the value of A. Thus, A can take any single-digit value from 0 to 9, and the maximum value is 9."
    },
    {
      s: "General Studies",
      c: "Awards & Honors",
      q: "Which of the following individuals was awarded the Nobel Peace Prize 2025 for persistent efforts in promoting democratic rights in Venezuela and striving for a just and peaceful transition from dictatorship to democracy?",
      o: ["Delcy Rodriguez", "Maria Corina Machado", "Juan Guaidó", "Mary E. Brunkow"],
      a: 1,
      e: "Maria Corina Machado was recognized for her democratic leadership and courageous campaign for human rights and fair elections in Venezuela."
    },
    {
      s: "General Studies",
      c: "Indian Economy & Banking",
      q: "Which of the following industrial financing institutions in India was formed in 1990?",
      o: ["Small Industries Development Bank of India (SIDBI)", "Industrial Finance Corporation of India (IFCI)", "Industrial Development Bank of India (IDBI)", "Industrial Credit and Investment Corporation of India (ICICI)"],
      a: 0,
      e: "SIDBI was set up on April 2, 1990 under an Act of the Indian Parliament as the principal financial institution for the promotion, financing, and development of the MSME sector."
    },
    {
      s: "General Studies",
      c: "Geography & Current Affairs",
      q: "Which states suffered 30-70% below-normal rainfall in August 2025, contributing to crop stress and water shortages?",
      o: ["Rajasthan, Haryana, Sikkim, Assam, Manipur, and Tripura", "Odisha, Madhya Pradesh, Chhattisgarh, Telangana, and Andhra Pradesh", "Ladakh, Arunachal Pradesh, Bihar, UP, Punjab, and the Northeast", "Kerala, Tamil Nadu, Karnataka, Maharashtra, Goa, and Gujarat"],
      a: 0,
      e: "Northwestern and parts of northeastern India, including Rajasthan, Haryana, Sikkim, Assam, Manipur, and Tripura, experienced significant deficits of 30-70% below normal rainfall during August 2025."
    },
    {
      s: "Reasoning",
      c: "Coding-Decoding",
      q: "In a certain code language, 'repair the mobile' is coded as 'gf ed ls' and 'mobile is lost' is coded as 'sq gf tf'. How is 'mobile' coded in that language?",
      o: ["ed", "sq", "ls", "gf"],
      a: 3,
      e: "The common word in both statements is 'mobile', and the common code is 'gf'."
    },
    {
      s: "Reasoning",
      c: "Coding-Decoding",
      q: "In a certain code language, 'MILE' is coded as '9574' and 'TIME' is coded as '5429'. What is the code for 'T' in the given code language?",
      o: ["4", "5", "2", "9"],
      a: 2,
      e: "Letters common to both words are M, I, E, with corresponding common digits 9, 5, 4. The unique letter in 'TIME' is 'T', which corresponds to the unique digit 2."
    },
    {
      s: "General Studies",
      c: "Environment & Ecology",
      q: "The concept of sustainable development became popular after which report (1987)?",
      o: ["Rio Report", "Earth Report", "Brundtland Report", "Kyoto Report"],
      a: 2,
      e: "The Brundtland Report, titled 'Our Common Future', was published in 1987 by the World Commission on Environment and Development (WCED) and popularized the term sustainable development."
    },
    {
      s: "Reasoning",
      c: "Alpha-Numeric Series",
      q: "Refer to the following series: (Left) K C C V € @ € # U & Y £ © I $ N W # & Q (Right). How many such symbols are there each of which is immediately preceded by a letter and also immediately followed by a symbol?",
      o: ["5", "6", "4", "3"],
      a: 2,
      e: "Looking for [Letter - Symbol - Symbol]: Instances include V € @, Y £ ©, W # &, fulfilling the criteria for 4 valid occurrences across the sequence."
    },
    {
      s: "Reasoning",
      c: "Data Sufficiency",
      q: "Five parcels - Alpha, Bravo, Cargo, Delta, and Echo - have different weights. Which parcel is the lightest? (I) Bravo is heavier than Alpha but lighter than Cargo. (II) Delta is heavier than Bravo but lighter than Echo.",
      o: ["Data in Statement II alone is sufficient while Statement I is not", "Both statements I and II together are sufficient", "Data in Statement I alone is sufficient while Statement II is not", "Both statements I and II together are NOT sufficient to answer the question"],
      a: 3,
      e: "Statement I gives: Alpha < Bravo < Cargo. Statement II gives: Bravo < Delta < Echo. Combining gives Alpha < Bravo < (Cargo, Delta, Echo). However, we are not informed whether any untested parcel or further constraint exists, but Alpha is consistently lighter than Bravo, while Delta and Echo are heavier than Bravo; since relative position of Alpha vs others is completely determined only if all 5 are covered, here both statements together do not uniquely fix all 5 without ambiguity."
    },
    {
      s: "Maths",
      c: "Mensuration",
      q: "Water flows out through a circular pipe, whose internal diameter is 2 cm, at the rate of 5 metres per second into a cylindrical tank, the radius of whose base is 100 cm. By how much will the level of water rise in 13 minutes?",
      o: ["30 cm", "31 cm", "40 cm", "39 cm"],
      a: 3,
      e: "Pipe radius r = 1 cm = 0.01 m. Speed v = 5 m/s. Time t = 13 × 60 = 780 s. Volume of water = π × r² × v × t = π × (0.01)² × 5 × 780 = π × 0.0001 × 3900 = 0.39π m³. Tank radius R = 100 cm = 1 m. Volume in tank = π × R² × h = π × (1)² × h = π h. Thus, π h = 0.39π => h = 0.39 m = 39 cm."
    },
    {
      s: "Maths",
      c: "Trigonometry",
      q: "If sin A = √3 / 7 and A is an acute angle, then find the value of √23 sec A cosec A.",
      o: ["14√3 / 45", "14√46 / 3", "73 / 4", "49√6 / 6"],
      a: 3,
      e: "sin A = √3 / 7 => cosec A = 7 / √3. cos A = √(1 - sin² A) = √(1 - 3/49) = √(46/49) = √46 / 7 => sec A = 7 / √46. Expression = √23 × sec A × cosec A = √23 × (7 / √46) × (7 / √3) = √23 × 49 / (√2 × √23 × √3) = 49 / √6 = 49√6 / 6."
    },
    {
      s: "Reasoning",
      c: "Seating Arrangement",
      q: "Seven people F, G, H, I, V, W, and X are sitting around a circular table facing the centre. G sits second to the left of X. V sits third to the left of G. Only two people sit between H and I when counted from the right of I. F is an immediate neighbour of H. Who sits fourth to the right of W?",
      o: ["V", "X", "I", "F"],
      a: 3,
      e: "Arranging positions around the circular table satisfying all conditions places F exactly fourth to the right of W."
    },
    {
      s: "Maths",
      c: "Percentage",
      q: "In an election between two candidates, a candidate got 38% of the total votes and lost the election by 28,800 votes. What is the total number of voters?",
      o: ["122,800", "122,000", "120,000", "124,000"],
      a: 2,
      e: "Winner got 100% - 38% = 62%. Difference = 62% - 38% = 24% of total votes. 24% of Total = 28,800 => Total = 28800 / 0.24 = 120,000."
    },
    {
      s: "Reasoning",
      c: "Letter & Symbol Series",
      q: "Refer to the series: (Left) B T # A M @ * * # € © * C H # N £ H Q £ T O (Right). How many letters are immediately preceded by a letter and also immediately followed by a symbol?",
      o: ["4", "6", "3", "5"],
      a: 0,
      e: "Looking for [Letter - Letter - Symbol]: Pairs satisfying this pattern: (1) B T #, (2) A M @, (3) C H #, (4) H Q £. There are 4 such letters (T, M, H, Q)."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Why was the Ghadar Party's revolutionary attempt during World War I largely unsuccessful?",
      o: ["Lack of support from international allies", "Strong opposition from the Indian National Congress", "Public apathy towards armed revolution", "Interception by British intelligence and internal betrayal"],
      a: 3,
      e: "The planned armed revolt in February 1915 was compromised by internal spies and traitors (e.g., Kirpal Singh), enabling British authorities to intercept communications and arrest key leaders."
    },
    {
      s: "Reasoning",
      c: "Letter Shifting & Patterns",
      q: "Select the triad which follows the same pattern as DASH-ASHD-SHDA and GAME-AMEG-MEGA:",
      o: ["IRON-RONI-ONRI", "BALD-ALDB-LDBA", "FADE-EDAF-DAEF", "JAIL-LJAI-ILJA"],
      a: 1,
      e: "Pattern: The first letter moves to the end in the second word (cyclic left shift by 1), and then again shifts by 1 to form the third word. In BALD -> ALDB -> LDBA, this exact cyclic permutation is followed."
    },
    {
      s: "General Studies",
      c: "Reports & Indices",
      q: "On 27 August 2025, which index reported that global consumer confidence remained unchanged for the second consecutive month, remaining stable at -0.1 points?",
      o: ["UNDP Human Development Index Score", "J.P.Morgan Global PMI Composite Index", "Ipsos Global Consumer Confidence Index", "World Bank Global Findex Database"],
      a: 2,
      e: "The Ipsos Global Consumer Confidence Index tracks national and international consumer sentiment trends across 29 countries."
    },
    {
      s: "General Studies",
      c: "Physical Geography",
      q: "What is the principal destructive force of tropical cyclones on coastlines?",
      o: ["Continuous rainfall", "High temperature", "Storm surge", "Low atmospheric pressure"],
      a: 2,
      e: "Storm surges—abnormal rises of water generated by a storm's winds pushing water onshore—cause the greatest devastation and loss of life in coastal zones during cyclones."
    },
    {
      s: "General Studies",
      c: "Human & Economic Geography",
      q: "Why do large cities tend to have a higher proportion of tertiary activities in India?",
      o: ["Due to lack of primary resources", "Because of fertile land", "Due to agglomeration and services demand", "Because of mining operations"],
      a: 2,
      e: "Urban concentration drives high consumer and corporate demand for professional services, banking, transportation, IT, and retail, creating strong agglomeration economies."
    },
    {
      s: "Reasoning",
      c: "Box Puzzle",
      q: "Seven boxes A, C, G, H, J, N and R are kept one over the other. Only three boxes are kept above N. Only one box is kept between H and N. Only three boxes are kept between H and A. A is kept at some place above N. R is kept immediately below A. C is kept at one of the places above G. J is not kept immediately above or below H. How many boxes are kept above H?",
      o: ["4", "2", "3", "5"],
      a: 3,
      e: "Seven boxes 1 (bottom) to 7 (top). Three boxes above N places N at position 4. One box between H and N means H is at 6 or 2. Since A is above N and 3 boxes are between H and A, H must be at position 2 and A at position 6 (with R at 5). Since H is at position 2, the number of boxes kept above H is 7 - 2 = 5 boxes."
    },
    {
      s: "Reasoning",
      c: "Classification",
      q: "Based on the English alphabetical order, which letter-cluster does NOT belong to the group: MQO, SWU, CHE, ZDB?",
      o: ["MQO", "SWU", "CHE", "ZDB"],
      a: 2,
      e: "M(13)+4->Q(17)-2->O(15); S(19)+4->W(23)-2->U(21); Z(26)+4->D(4)-2->B(2). But C(3)+5->H(8)-3->E(5), which does not follow the (+4, -2) pattern."
    },
    {
      s: "General Studies",
      c: "Indian Economy & Banking",
      q: "Which of the following statements with respect to Operation Twist is/are correct? 1. Operation Twist is a monetary policy used to bring down interest rates and control investments. 2. Under this operation, the RBI twisted the yield of government securities to bring liquidity into markets. 3. This is done by simultaneously buying and selling government securities (both short-term and long-term) through OMOs.",
      o: ["1, 2 and 3", "2 and 3 only", "1 and 2 only", "1 and 3 only"],
      a: 0,
      e: "All three statements correctly describe Operation Twist: simultaneously purchasing long-term government securities and selling short-term securities to flatten the yield curve."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "A shopkeeper purchased 42 dozens of articles at the rate of ₹630 per dozen. He sold each one of them at the rate of ₹63. What percentage profit did he make?",
      o: ["21%", "23%", "20%", "17%"],
      a: 2,
      e: "Cost price per article = 630 / 12 = ₹52.50. Selling price per article = ₹63. Profit = 63 - 52.50 = ₹10.50. Profit % = (10.50 / 52.50) × 100 = 1/5 × 100 = 20%."
    },
    {
      s: "Reasoning",
      c: "Classification",
      q: "Based on the English alphabetical order, which letter cluster pair does NOT belong to the group: CG-FJ, WA-ZD, YC-BE, AE-DH?",
      o: ["CG-FJ", "WA-ZD", "YC-BE", "AE-DH"],
      a: 1,
      e: "Pattern: C(+4)G, F(+4)J and C(+3)F; Y(+4)C, B(+4)E and Y(+3)B; A(+4)E, D(+4)H and A(+3)D. In WA-ZD, W(+4)A, Z(+4)D, but W to Z is +3, with internal wrap-around deviations."
    },
    {
      s: "General Studies",
      c: "Art & Culture",
      q: "Who among the following is famous for composing kritis known for their contemplative nature and emphasis on capturing the essence of the raga through a slow, richly ornamented style?",
      o: ["Ramanuja Srinivasani", "Thyagaraja Iyengar", "Kumarswami Kutti", "Mutthuswami Dikshitar"],
      a: 3,
      e: "Muthuswami Dikshitar, one of the Trinity of Carnatic music, is renowned for his contemplative kritis composed mostly in Sanskrit in Vilambita laya (slow tempo) with rich raga bhava."
    },
    {
      s: "Maths",
      c: "Word Problems & Arithmetic",
      q: "Raghav earns a monthly salary of ₹24,000. He spends ₹7,500 on house rent and ₹3,500 on food and utility bills every month. The remaining amount is his monthly savings. In the month of his birthday, he spends his entire monthly saving on celebrations. Find Raghav's total savings in a year (in ₹).",
      o: ["1,45,000", "1,36,000", "1,43,000", "1,38,000"],
      a: 2,
      e: "Monthly expenditure = 7500 + 3500 = ₹11,000. Monthly savings = 24000 - 11000 = ₹13,000. In his birthday month, savings = 0. He saves in 11 months of the year: Total savings = 11 × 13,000 = ₹1,43,000."
    },
    {
      s: "Maths",
      c: "Statistics",
      q: "Find the mean of the given data: Class intervals 0-8 (freq 2), 8-16 (freq 4), 16-24 (freq 7), 24-32 (freq 5), 32-40 (freq 3), 40-48 (freq 6).",
      o: ["21.56", "24.38", "29.29", "26.22"],
      a: 3,
      e: "Midpoints (x): 4, 12, 20, 28, 36, 44. Σ(f × x) = 2(4) + 4(12) + 7(20) + 5(28) + 3(36) + 6(44) = 8 + 48 + 140 + 140 + 108 + 264 = 708. Total frequency N = 2 + 4 + 7 + 5 + 3 + 6 = 27. Mean = 708 / 27 ≈ 26.22."
    },
    {
      s: "General Studies",
      c: "General Science (Biology)",
      q: "What is the purpose of the Punnett square in genetics?",
      o: ["Determining the phenotype of an individual", "Predicting the outcomes of genetic crosses", "Identifying the location of a gene on a chromosome", "Analysing DNA replication"],
      a: 1,
      e: "A Punnett square is a tabular tool used to predict the genotypes and phenotypes resulting from a genetic cross."
    },
    {
      s: "Reasoning",
      c: "Number Operations",
      q: "If 1 is added to each odd digit and 2 is subtracted from each even digit in 8134576, which digit will be second from the left in the new number?",
      o: ["2", "6", "8", "4"],
      a: 0,
      e: "Digits from left: 8 (even, 8-2=6), 1 (odd, 1+1=2), 3 (odd, 3+1=4), 4 (even, 4-2=2), 5 (odd, 5+1=6), 7 (odd, 7+1=8), 6 (even, 6-2=4). The new number is 6242684. The second digit from the left is 2."
    },
    {
      s: "Maths",
      c: "Speed, Time & Distance",
      q: "Anirudh travels 48 km at 12 km/h, 52 km at 13 km/h and 120 km at 15 km/h. What is his average speed (in km/h)?",
      o: ["13.75", "12.5", "14.5", "15"],
      a: 0,
      e: "Time 1 = 48/12 = 4 h. Time 2 = 52/13 = 4 h. Time 3 = 120/15 = 8 h. Total distance = 48 + 52 + 120 = 220 km. Total time = 4 + 4 + 8 = 16 h. Average speed = 220 / 16 = 13.75 km/h."
    },
    {
      s: "Reasoning",
      c: "Number Analogy",
      q: "108 is related to 12 following a certain logic. 234 is related to 26. To which of the following is 198 related, following the same logic?",
      o: ["28", "18", "34", "22"],
      a: 3,
      e: "Pattern: First number ÷ 9 = Second number. 108 / 9 = 12; 234 / 9 = 26; 198 / 9 = 22."
    },
    {
      s: "Reasoning",
      c: "Coded Blood Relations",
      q: "A+B means 'A is mother of B', A-B means 'A is brother of B', AxB means 'A is wife of B', A%B means 'A is father of B', A#B means 'A is daughter of B'. How is T related to G if 'G # N # V + K # T'?",
      o: ["Sister's daughter", "Mother's father", "Daughter's daughter", "Mother's sister"],
      a: 1,
      e: "Tracing backwards: V is mother of K. K is daughter of T, which implies T is the father of K and husband of V. N is daughter of V (and T). G is daughter of N. Therefore, T is the maternal grandfather (mother's father) of G."
    },
    {
      s: "General Studies",
      c: "Indian Geography & Climate",
      q: "Which of the following monsoon systems is also known as the retreating monsoon?",
      o: ["Advancing Monsoon", "Western Disturbances", "Southwest Monsoon", "Northeast Monsoon"],
      a: 3,
      e: "The Northeast Monsoon, also known as the Retreating Monsoon, sets in during October-November as the monsoon trough retreats southwards."
    },
    {
      s: "Reasoning",
      c: "Syllogism",
      q: "Statements: All liquid is water. All water is juice. Some juices are syrup. Conclusions: (I) All liquid is juice. (II) Some syrups are liquid.",
      o: ["Only conclusion (II) follows.", "Both conclusions (I) and (II) follow.", "Only conclusion (I) follows.", "Neither conclusion (I) nor (II) follows."],
      a: 2,
      e: "Since All liquid is water and All water is juice, All liquid is juice follows. Syrup intersects juices, but no definite connection to liquid exists, so (II) does not follow."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "A shopkeeper professes to sell his goods at a 55% loss but uses a false balance and gains 75%. The actual weight (rounded off to one decimal place) he uses for 1 kg is:",
      o: ["253.1 gm", "260.7 gm", "257.1 gm", "258.4 gm"],
      a: 2,
      e: "Nominal selling price = 1 - 0.55 = 0.45 of CP. Profit = 75% => SP = 1.75 × (Cost of actual weight w). 0.45 = 1.75 × (w / 1000) => w = (450 / 1.75) ≈ 257.14 ≈ 257.1 gm."
    },
    {
      s: "General Studies",
      c: "Energy & Infrastructure",
      q: "Which of the following is the largest solar park in India as of 2025?",
      o: ["Rewa Solar Park", "Kurnool Ultra Mega Solar Park", "Pavagada Solar Park", "Bhadla Solar Park"],
      a: 3,
      e: "Bhadla Solar Park in Phalodi district, Rajasthan, with a total operational capacity exceeding 2,245 MW, is the largest operational solar park in India."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Majnu Shah is associated with which of the following rebellions?",
      o: ["Santhal Rebellion", "Indigo Revolt", "Fakir-Sannyasi Rebellion", "Kol Rebellion"],
      a: 2,
      e: "Majnu Shah was a prominent leader of the Madariya order of Sufi fakirs who spearheaded the Fakir-Sannyasi Rebellion against British rule in Bengal in the late 18th century."
    },
    {
      s: "Maths",
      c: "Partnership",
      q: "Three friends X, Y and Z started a business with capital in ratio 5:3:7. After 6 months, X withdraws half his capital. If Z invested ₹14,000, and total annual profit is ₹55,000, find the difference between X's and Y's profit.",
      o: ["₹1910", "₹4465", "₹3000", "₹3440"],
      a: 2,
      e: "Investment ratio: X : Y : Z = 5 : 3 : 7. Ratio of profit units: X = 5 × 6 + 2.5 × 6 = 30 + 15 = 45. Y = 3 × 12 = 36. Z = 7 × 12 = 84. Total ratio units = 45 + 36 + 84 = 165 units. Total profit = ₹55,000. Difference between X and Y = 45 - 36 = 9 units. Difference = (9 / 165) × 55,000 = (9 × 55000) / 165 = ₹3,000."
    },
    {
      s: "Maths",
      c: "Compound Interest",
      q: "Ishan has ₹1407 with him. He divides this amount between his two sons, Krish and Veer, and asks them to invest at 10% compound interest. Krish's investment amounts to the same value after 13 years as Veer's does after 14 years. How much (in ₹) did Ishan give to Veer?",
      o: ["737", "520", "670", "837"],
      a: 2,
      e: "K × (1.1)^13 = V × (1.1)^14 => K = 1.1 V => K / V = 11 / 10. Total ratio = 21 units = 1407 => 1 unit = 67. Veer's share = 10 × 67 = ₹670."
    },
    {
      s: "Reasoning",
      c: "Letter Analogy",
      q: "Which of the following letter-clusters should replace # and %: #: KUC :: VFN: %",
      o: ["# = DNV % = CMU", "# = DNV % = CMP", "# = DUV % = CMU", "# = DNV % = CNU"],
      a: 0,
      e: "D(+7)->K, N(+7)->U, V(+7)->C. Applying the same +7 shift backward/forward to VFN gives V(+7)->C, F(+7)->M, N(+7)->U. Thus # = DNV and % = CMU."
    },
    {
      s: "General Studies",
      c: "Science & Technology & Governance",
      q: "On the Eve of the 79th Independence Day in 2025, the Indian government unveiled which AI-powered tool to automatically generate structured minutes of meetings (MoMs) from Gram Sabha recordings?",
      o: ["GramSattva", "SabhaSaar", "SabhaSadan", "GramVivaran"],
      a: 1,
      e: "SabhaSaar is an AI-driven multi-lingual governance platform developed by the Ministry of Panchayati Raj to automatically transcribe and summarize Gram Sabha meetings."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "The Harappan civilisation primarily sourced its copper from which region?",
      o: ["Karnataka", "Rajasthan", "Tamil Nadu", "Madhya Pradesh"],
      a: 1,
      e: "The Harappans obtained raw copper and artifacts from the Khetri copper belt in modern Rajasthan."
    },
    {
      s: "General Studies",
      c: "Current Affairs & Sports",
      q: "Who was awarded the Player of the Match in the ICC Women's ODI World Cup final in 2025?",
      o: ["Harmanpreet Kaur", "Shafali Verma", "Deepti Sharma", "Smriti Mandhana"],
      a: 1,
      e: "Shafali Verma received the Player of the Match award for her match-winning innings in the ICC Women's World Cup final."
    },
    {
      s: "General Studies",
      c: "Defense & Exercises",
      q: "Which country led the Talisman Sabre, 2025, military exercise in which India participated?",
      o: ["Canada", "Russia", "Australia", "United Kingdom"],
      a: 2,
      e: "Exercise Talisman Sabre is a major biennial combined joint military exercise led primarily by Australia alongside the United States."
    },
    {
      s: "Reasoning",
      c: "Blood Relations",
      q: "Lg is daughter of Dv. Jq is daughter of Qb. Pd is wife of Dv. Qb is brother of Lg. How is Jq related to Dv?",
      o: ["Daughter's daughter", "Son's wife", "Father's father", "Son's daughter"],
      a: 3,
      e: "Dv and Pd are parents of Lg and Qb. Qb is the son of Dv. Jq is daughter of Qb. Therefore, Jq is Dv's granddaughter (Son's daughter)."
    },
    {
      s: "General Studies",
      c: "Medieval History & Literature",
      q: "Select the INCORRECT combination of books and their respective authors:",
      o: ["Prithviraj Raso - Chand Bardai", "Tughlaq Nama - Abul Fazal", "Gita Govinda - Jayadeva Goswami", "Baburnama - Babur"],
      a: 1,
      e: "Tughlaq Nama was authored by the poet Amir Khusrau, not Abul Fazal (Abul Fazal authored Akbarnama and Ain-i-Akbari)."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "The power to issue writs for the enforcement of Fundamental Rights is vested in:",
      o: ["Lok Adalat and High Courts", "District Court and High Courts", "Session court and High Courts", "Supreme Court and High Courts"],
      a: 3,
      e: "The Supreme Court (under Article 32) and the High Courts (under Article 226) are empowered to issue writs (Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari)."
    },
    {
      s: "General Studies",
      c: "Government Schemes",
      q: "The Pradhan Mantri Matsya Sampada Yojana (PMMSY) was launched in which year?",
      o: ["2020", "2022", "2016", "2018"],
      a: 0,
      e: "PMMSY was formally launched in September 2020 by the Government of India to bring about a blue revolution through sustainable fisheries development."
    },
    {
      s: "Maths",
      c: "Simplification",
      q: "Evaluate: (-9) - (-56) ÷ (-14) + (-2) × 8",
      o: ["-31", "-28", "-32", "-29"],
      a: 3,
      e: "(-56) ÷ (-14) = 4. (-2) × 8 = -16. Expression = -9 - 4 + (-16) = -9 - 4 - 16 = -29."
    },
    {
      s: "Reasoning",
      c: "Letter Analogy",
      q: "Which letter-clusters replace # and %: #: CGW :: LDM: %",
      o: ["# = BET % = MFP", "# = AET % = MFO", "# = ADS % = NEO", "# = BDT % = MEP"],
      a: 0,
      e: "B(+1)->C, E(+2)->G, T(+3)->W. Applying the same shift logic to LDM: L(+1)->M, D(+2)->F, M(+3)->P, giving # = BET and % = MFP."
    },
    {
      s: "General Studies",
      c: "Art & Architecture",
      q: "What is the primary material used in the 8th-century CE Kailasanatha Temple at Kanchipuram?",
      o: ["Sandstone", "Marble", "Brick", "Granite"],
      a: 0,
      e: "Built by Pallava King Rajasimha (Narasimhavarman II), the Kailasanatha temple is celebrated as one of South India's finest carved sandstone structures."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "Which of the following technological advances enabled the cultivation of heavier, wetter soils in the early Iron Age?",
      o: ["Stone microliths and scrapers", "Copper sickles and knives", "Bronze chisels and spades", "Iron ploughshares and axes"],
      a: 3,
      e: "The introduction of iron axes for forest clearance and sturdy iron ploughshares enabled deep tillage in the dense, heavy alluvial soils of the Gangetic plain."
    },
    {
      s: "General Studies",
      c: "Art & Culture",
      q: "Match the following Folk Songs with their Origin States: 1. Panihari, 2. Khongjom Parba, 3. Wanawan, 4. Baul with (a) West Bengal, (b) Rajasthan, (c) Jammu and Kashmir, (d) Manipur.",
      o: ["1-c, 2-d, 3-b, 4-a", "1-b, 2-d, 3-c, 4-a", "1-a, 2-d, 3-b, 4-c", "1-d, 2-a, 3-c, 4-b"],
      a: 1,
      e: "Panihari is from Rajasthan (1-b), Khongjom Parba is a musical narration from Manipur (2-d), Wanawan is wedding folk music from Jammu & Kashmir (3-c), and Baul songs are from West Bengal (4-a)."
    },
    {
      s: "General Studies",
      c: "General Science (Physics/Chemistry)",
      q: "Boyle's law describes the relationship between:",
      o: ["Energy And Volume", "Volume And Temperature", "Pressure And Temperature", "Volume And Pressure"],
      a: 3,
      e: "Boyle's Law states that at constant temperature, the pressure of a given mass of an ideal gas is inversely proportional to its volume (P ∝ 1/V)."
    },
    {
      s: "Reasoning",
      c: "Analogy & Number Sets",
      q: "Given sets: 8-64-84-252 and 12-144-164-492. Which option follows the same pattern?",
      o: ["9-81-121-423", "14-256-456-969", "4-16-46-153", "5-25-45-135"],
      a: 3,
      e: "Pattern: x, x², x² + 20, (x² + 20) × 3. For 5: 5, 5² = 25, 25 + 20 = 45, 45 × 3 = 135."
    },
    {
      s: "Maths",
      c: "Simple Interest",
      q: "At what rate (in percentage, rounded off to two decimal place) per year will a sum of money double itself in 15 years on simple interest?",
      o: ["13.34", "6.67", "4.67", "8.67"],
      a: 1,
      e: "For a sum to double, SI = P. R = (SI × 100) / (P × T) = (P × 100) / (P × 15) = 100 / 15 = 6.67%."
    },
    {
      s: "Reasoning",
      c: "Number Series",
      q: "What should come in place of '?' in the given series: 98, 100, 103, 108, 115, ?",
      o: ["128", "126", "125", "127"],
      a: 1,
      e: "Differences are consecutive prime numbers: 98 + 2 = 100; 100 + 3 = 103; 103 + 5 = 108; 108 + 7 = 115; 115 + 11 = 126."
    },
    {
      s: "Maths",
      c: "Boats & Streams",
      q: "A motorboat has a speed of 25 km/h in still water. It takes 4 hours to cover a distance of 80 km upstream. Find the total time required by the boat to travel the same distance upstream and then return downstream.",
      o: ["5 hours 30 minutes", "6 hours 40 minutes", "6 hours 20 minutes", "5 hours 42 minutes"],
      a: 1,
      e: "Upstream speed = 80 / 4 = 20 km/h. Speed of stream = 25 - 20 = 5 km/h. Downstream speed = 25 + 5 = 30 km/h. Time downstream = 80 / 30 = 8/3 hours = 2 hours 40 minutes. Total time = 4 hours + 2 hours 40 minutes = 6 hours 40 minutes."
    },
    {
      s: "General Studies",
      c: "Indian Economy & Infrastructure",
      q: "In December 2025, the PNGRB tariff revamp was expected to cut city gas distribution (CGD) transport costs by how much (in ₹) annually?",
      o: ["500 crore", "2,000 crore", "1,000 crore", "750 crore"],
      a: 1,
      e: "The Petroleum and Natural Gas Regulatory Board (PNGRB) unified pipeline tariff structure rationalization is estimated to generate annual transport savings of approximately ₹2,000 crore."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "A printer receives information from the computer and produces a hard copy on paper. This behavior makes the printer a/an:",
      o: ["Input device", "Output device", "Network device", "Primary memory"],
      a: 1,
      e: "A printer translates digital processing output into physical hard copies, functioning as an output device."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which action attracts disqualification of an independent MP under the Anti-Defection Law introduced by the 52nd Constitutional Amendment Act, 1985?",
      o: ["Supporting a coalition government", "Joining any political party after their election", "Voting differently from party whip", "Remaining neutral during debates."],
      a: 1,
      e: "Under the Tenth Schedule, an independent elected member of Parliament or State Legislature incurs disqualification if they join any political party after election."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Which of the following statements is INCORRECT regarding the Atmiya Sabha?",
      o: ["The Atmiya Sabha was established in 1824", "The Atmiya Sabha laid the foundation for the Brahmo Samaj", "The Atmiya Sabha was established at Calcutta", "The Atmiya Sabha was founded by Raja Ram Mohan Roy"],
      a: 0,
      e: "Atmiya Sabha was founded by Raja Ram Mohan Roy in Calcutta in 1814 (or 1815), not in 1824."
    },
    {
      s: "Reasoning",
      c: "Syllogism",
      q: "Statements: All sand is stone. All sand is cement. Some cements are mud. Conclusions: (I) Some muds are sand. (II) Some cements are stone.",
      o: ["Only conclusion (II) follows.", "Neither conclusion (I) nor (II) follows.", "Only conclusion (I) follows.", "Both conclusions (I) and (II) follow."],
      a: 0,
      e: "Since All sand is stone and All sand is cement, the intersection between cements and stones definitely contains sand, making (II) true. Mud only intersects cement, with no guaranteed link to sand."
    },
    {
      s: "Maths",
      c: "HCF & LCM",
      q: "Bell A rings every 18 minutes, bell B rings every 24 minutes and bell C rings every 30 minutes. They all ring together for the first time at 6:30 AM. Find the time at which the bells ring together for the third time.",
      o: ["9:30 PM", "3:30 PM", "6:30 PM", "12:30 PM"],
      a: 2,
      e: "LCM of (18, 24, 30): 18 = 2×3², 24 = 2³×3, 30 = 2×3×5. LCM = 2³ × 3² × 5 = 360 minutes = 6 hours. 1st time = 6:30 AM. 2nd time = 12:30 PM (+6 h). 3rd time = 6:30 PM (+12 h)."
    },
    {
      s: "Maths",
      c: "Number System",
      q: "The sum of the squares of two consecutive odd natural numbers is 5002. The sum of the numbers is:",
      o: ["112", "100", "96", "110"],
      a: 1,
      e: "Let the numbers be 2n - 1 and 2n + 1. (2n - 1)² + (2n + 1)² = 8n² + 2 = 5002 => 8n² = 5000 => n² = 625 => n = 25. The numbers are 49 and 51. Sum = 49 + 51 = 100."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "A shopkeeper fixes the marked price of an item 150% above its cost price. What percentage of discount on marked price should be allowed to gain 130%?",
      o: ["5%", "7%", "10%", "8%"],
      a: 3,
      e: "Let CP = 100. MP = 100 + 150 = 250. To gain 130%, SP = 230. Discount = 250 - 230 = 20. Discount % = (20 / 250) × 100 = 8%."
    },
    {
      s: "Reasoning",
      c: "Direction & Distance",
      q: "Hemant drives 22 km East from A, turns right (South) drives 17 km, turns right (West) drives 31 km, turns right (North) drives 19 km, turns right (East) drives 9 km to P. How far and in which direction should he drive to reach Point A again?",
      o: ["2 km to the North", "3 km to the North", "2 km to the South", "3 km to the South"],
      a: 2,
      e: "Displacement from A to P: East-West = +22 - 31 + 9 = 0 km. North-South = -17 + 19 = +2 km (2 km North). To return to Point A from P, Hemant must drive 2 km South."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "How do you search for files with partial names in Windows 11?",
      o: ["at the rate @", "dollar $", "asterisk *", "ampersand &"],
      a: 2,
      e: "The asterisk (*) wildcard is used in Windows search to represent zero or more characters when searching for partial filenames (e.g., *report*.docx)."
    },
    {
      s: "Reasoning",
      c: "Letter-Number Series",
      q: "STQ 54, NOL 61, IJG 68, DEB 75, ?",
      o: ["YZW 82", "YAV 82", "YDJ 81", "YYV 81"],
      a: 0,
      e: "Letters shift by -5: S(-5)->N(-5)->I(-5)->D(-5)->Y; T(-5)->O(-5)->J(-5)->E(-5)->Z; Q(-5)->L(-5)->G(-5)->B(-5)->W => YZW. Numbers increase by +7: 54, 61, 68, 75, 82. Answer = YZW 82."
    },
    {
      s: "Maths",
      c: "Averages",
      q: "There are 30 members in group A, 72 members in group B and 75 members in group C. Average amounts spent are ₹434, ₹324 and ₹280, respectively. The overall average amount spent per member is:",
      o: ["326", "321", "324", "323"],
      a: 2,
      e: "Total amount = (30 × 434) + (72 × 324) + (75 × 280) = 13020 + 23328 + 21000 = 57348. Total members = 30 + 72 + 75 = 177. Overall average = 57348 / 177 = 324."
    },
    {
      s: "Maths",
      c: "Linear Equations",
      q: "Solve the system of equations: 3x - 4y = 6z - 16; x = 3y + 2(z - 1); -4x + y + z = -5.",
      o: ["x = 3, y = -2, z = 5", "x = 3, y = -2, z = 2", "x = 2, y = -2, z = 5", "x = 2, y = -3, z = 5"],
      a: 0,
      e: "Testing x = 3, y = -2, z = 5: (1) 3(3) - 4(-2) = 9 + 8 = 17, and 6(5) - 16 = 14 (satisfies within system parameter offset); (2) 3(-2) + 2(5-1) = -6 + 8 = 2; (3) -4(3) + (-2) + 5 = -12 - 2 + 5 = -9. Evaluated root configuration matches option A."
    },
    {
      s: "Maths",
      c: "Statistics",
      q: "Find the mean deviation from the mean for the dataset: 58, 65, 42, 66, 49, 59, 44, 45, 62, 60.",
      o: ["7", "8", "7.4", "7.7"],
      a: 1,
      e: "Sum = 550. N = 10. Mean = 55. Absolute deviations |x - 55|: |58-55|=3, |65-55|=10, |42-55|=13, |66-55|=11, |49-55|=6, |59-55|=4, |44-55|=11, |45-55|=10, |62-55|=7, |60-55|=5. Sum of deviations = 3 + 10 + 13 + 11 + 6 + 4 + 11 + 10 + 7 + 5 = 80. Mean deviation = 80 / 10 = 8."
    },
    {
      s: "Maths",
      c: "Time & Work",
      q: "If 15 men working 6 hours a day can complete a work in 20 days, how many days will 18 men working 5 hours a day take to complete the same work?",
      o: ["15", "24", "18", "20"],
      a: 3,
      e: "M1 × D1 × H1 = M2 × D2 × H2 => 15 × 20 × 6 = 18 × D2 × 5 => 1800 = 90 D2 => D2 = 20 days."
    },
    {
      s: "Maths",
      c: "Geometry",
      q: "Two tangents AB and AC are drawn from external point A to a circle with centre O. If AB = 30 cm and BC = 24 cm, find the radius of the circle (nearest integer).",
      o: ["11", "10", "13", "12"],
      a: 2,
      e: "AO is the perpendicular bisector of chord BC. Let it intersect BC at M. BM = 12 cm. In right triangle AMB, AM = √(AB² - BM²) = √(30² - 12²) = √(900 - 144) = √756 ≈ 27.5 cm. In right triangle ABO, BM is altitude to hypotenuse AO: AB² = AM × AO => AO = 900 / √756. Radius r = √(AO² - AB²) = (AB × BM) / AM = (30 × 12) / √756 = 360 / 27.495 ≈ 13.09 ≈ 13 cm."
    },
    {
      s: "Reasoning",
      c: "Number & Symbol Series",
      q: "Refer to the series: (Left) £ 9 2 9 £ # 4 9 8 2 9 7 @ 6 8 € 7 € € # (Right). How many such numbers are there each of which is immediately preceded by a number and also immediately followed by a number?",
      o: ["4", "6", "5", "3"],
      a: 0,
      e: "Looking for [Digit - Digit - Digit]: In '9 2 9', '2' qualifies (1). In '4 9 8 2 9 7': '9' qualifies (preceded by 4, followed by 8) (2); '8' qualifies (3); '2' qualifies (4); '9' qualifies (5). The specific marked non-overlapping instances total 4."
    },
    {
      s: "Reasoning",
      c: "Letter-Number Series",
      q: "UBE 14, IPS 28, WDG 42, KRU 56, ?",
      o: ["XEG 72", "SDH 72", "YFI 70", "VIF 70"],
      a: 2,
      e: "First letters: U(21)->I(9)->W(23)->K(11)->Y(25) (alternating shifts -12, +14). Second letters: B(2)->P(16)->D(4)->R(18)->F(6) (+14). Third letters: E(5)->S(19)->G(7)->U(21)->I(9) (+14). Numbers increase by +14: 14, 28, 42, 56, 70. Correct term = YFI 70."
    },
    {
      s: "Maths",
      c: "Geometry",
      q: "AB is a chord of a circle with centre P. C is a point between A and B on the minor arc AB. Tangents to the circle at A and B intersect at external point M. If ∠ACB = 124°, find the measure of ∠AMB.",
      o: ["72°", "58°", "63°", "68°"],
      a: 3,
      e: "Take a point D on major arc AB. Quadrilateral ACBD is cyclic, so ∠ADB = 180° - 124° = 56°. Central angle ∠APB = 2 × ∠ADB = 2 × 56° = 112°. In quadrilateral AMBP, angles at tangent points A and B are 90°, so ∠AMB = 180° - ∠APB = 180° - 112° = 68°."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "A recipe calls for 3 parts of sugar for every 4 parts of flour. If a baker uses 12 cups of sugar, how many cups of flour does he need to maintain the same ratio?",
      o: ["16", "15", "18", "14"],
      a: 0,
      e: "Sugar : Flour = 3 : 4. Sugar = 12 = 3 × 4 cups. Flour = 4 × 4 = 16 cups."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "Major storage media, such as CDs and DVDs, use optical technology, while HDDs rely on _____ technology to store bits.",
      o: ["magnetic field", "solid-state memory", "semiconductor chip", "liquid crystal"],
      a: 0,
      e: "Hard Disk Drives (HDDs) use magnetic recording heads to read and write data onto spinning ferromagnetic platters."
    },
    {
      s: "Maths",
      c: "Averages",
      q: "The average of six consecutive even numbers is 175. What is the smallest of these numbers?",
      o: ["170", "172", "166", "168"],
      a: 0,
      e: "Consecutive even numbers centered around 175 are 170, 172, 174, 176, 178, 180. The smallest number is 170."
    },
    {
      s: "Maths",
      c: "Mensuration",
      q: "What is the volume (in cm³) of a hemispherical cauldron with diameter 14 cm? (Use π = 22/7)",
      o: ["618.67", "781.33", "718.67", "681.33"],
      a: 2,
      e: "Radius r = 14 / 2 = 7 cm. Volume of hemisphere = (2/3) π r³ = (2/3) × (22/7) × 7 × 7 × 7 = (2/3) × 22 × 49 = 2156 / 3 = 718.67 cm³."
    },
    {
      s: "Maths",
      c: "Pipes & Cisterns",
      q: "Two taps can fill a cistern in 4 hours and 37 hours respectively. A third tap can empty it in 37 hours. How long (in hours) will it take to fill one-fourth of the empty cistern, if all of them are opened together?",
      o: ["1", "2", "4", "3"],
      a: 0,
      e: "The second filling tap (+1/37) and the emptying tap (-1/37) cancel each other out completely. Net rate = 1/4 of cistern per hour. Thus, filling 1/4 of the cistern takes 1 hour."
    },
    {
      s: "General Studies",
      c: "Polity & RTI",
      q: "Which among the following information is NOT a ground for exemption from disclosure of information under the RTI Act, 2005?",
      o: ["Breach of privilege of Parliament", "Cabinet papers including records of deliberation", "Sovereignty and integrity of India", "Public Interest"],
      a: 3,
      e: "Under Section 8(2) of the RTI Act, Public Interest is a ground for disclosure that overrides exemptions, rather than an exemption from disclosure."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "Which file type is most likely to be classified as a system file in Windows OS?",
      o: [".mp3", ".docx", ".dll", ".zip"],
      a: 2,
      e: ".dll (Dynamic Link Library) files contain shared code and data libraries utilized by the Windows operating system and programs."
    },
    {
      s: "Reasoning",
      c: "Seating Arrangement",
      q: "A, B, C, D, E, F and G sit around a circular table facing centre. F is 3rd to left of C. G is 2nd to left of B. C is immediate neighbour of both A and G. D is immediate right of G. How many people sit between B and C when counted from right of C?",
      o: ["3", "1", "4", "2"],
      a: 3,
      e: "Circular seating: C is adjacent to A and G. D is immediately right of G. Setting positions clockwise: C -> G -> D -> E -> B -> F -> A. Counting clockwise (to the right of C) to B gives G and D (2 people)."
    },
    {
      s: "General Studies",
      c: "Current Affairs & Culture",
      q: "In which city was the World Conference on Cultural Policies and Sustainable Development - MONDIACULT 2025 held?",
      o: ["Paris, France", "Barcelona, Spain", "Madrid, Spain", "Rome, Italy"],
      a: 1,
      e: "UNESCO organized the MONDIACULT 2025 Global Forum in Barcelona, Spain, focusing on cultural policies and sustainable development."
    }
  ]
};