// Paper format: s = section, c = chapter, q = question, o = options,
// a = correct option index (0-3), e = explanation (shown in Quiz mode)
window.PAPERS = window.PAPERS || {};
window.PAPERS["2026-03-17_S1"] = {
  date: "2026-03-17",
  shift: 1,
  questions: [
    {
      s: "Maths",
      c: "Problems on Ages",
      q: "Tejasvi, Trishana and Meena are three sisters. Tejasvi and Trishana are twins. The sum of the ages of Tejasvi and Trishana is the same as that of Meena. Four years earlier, the ratio of the ages of Tejasvi and Meena was 1:3. What will be the age of Trishana 4 years from now?",
      o: ["18 years", "16 years", "12 years", "14 years"],
      a: 2,
      e: "Let twin age = x, so Tejasvi = Trishana = x. Meena = 2x. Four years ago: (x - 4)/(2x - 4) = 1/3 => 3x - 12 = 2x - 4 => x = 8. In 4 years, Trishana's age = 8 + 4 = 12 years."
    },
    {
      s: "General Studies",
      c: "Environment & Ecology",
      q: "The revised methodology from 2025 for calculating Green Credit for tree plantation requires certain thresholds before a claim can be submitted. Which is the correct eligibility pair?",
      o: ["7 years of restoration + 40% canopy density", "3 years of restoration + 30% canopy density", "5 years of restoration + 60% canopy density", "5 years of restoration + 40% canopy density"],
      a: 3,
      e: "Under the revised Green Credit rules notified by MoEFCC, tree plantation activities require a minimum threshold of 5 years of restoration along with achieving at least 40% canopy density."
    },
    {
      s: "General Studies",
      c: "Government Schemes",
      q: "As of December 2025, under the Pradhan Mantri Jan-Dhan Yojana (PMJDY), eligible account holders can access an overdraft facility of up to:",
      o: ["₹10,000", "₹8,000", "₹15,000", "₹5,000"],
      a: 0,
      e: "The overdraft limit under the PMJDY scheme for eligible basic savings bank deposit accounts is ₹10,000 (with no conditions applied for overdrafts up to ₹2,000)."
    },
    {
      s: "Maths",
      c: "Simple Interest",
      q: "At what rate (in percentage, rounded off to two decimal place) per year will a sum of money 5 times itself in 15 years on simple interest?",
      o: ["26.67", "53.34", "28.67", "24.67"],
      a: 0,
      e: "If principal = P, amount = 5P, simple interest SI = 4P. Using SI = (P × R × T)/100 => 4P = (P × R × 15)/100 => R = 400/15 = 26.67%."
    },
    {
      s: "Reasoning",
      c: "Alpha-Numeric Series",
      q: "Refer to the following letter and symbol series: (Left) T O @ $ J $ S € M L | * N G O Y & T P £ Y T (Right). How many such symbols are there each of which is immediately preceded by a letter and also immediately followed by a symbol?",
      o: ["4", "2", "1", "3"],
      a: 2,
      e: "Looking for [Letter - Symbol - Symbol]: In 'O @ $', '@' is preceded by letter 'O' and followed by symbol '$'. That gives 1 such instance."
    },
    {
      s: "Maths",
      c: "Speed, Time & Distance",
      q: "A woman travelled at a speed of 20 m/min for 90 min, and at a speed of 72 m/min for 66 min. Her average speed (in m/min) for the entire journey is:",
      o: ["35", "46", "48", "42"],
      a: 3,
      e: "Total Distance = (20 × 90) + (72 × 66) = 1800 + 4752 = 6552 m. Total Time = 90 + 66 = 156 min. Average speed = 6552 / 156 = 42 m/min."
    },
    {
      s: "Maths",
      c: "Statistics",
      q: "If the mean of the following data is 35, find the value of X. Class intervals: 10-20 (freq 42), 20-30 (freq 26), 30-40 (freq 45), 40-50 (freq 46), 50-60 (freq X).",
      o: ["28", "34", "26", "32"],
      a: 3,
      e: "Mid-values (x_i): 15, 25, 35, 45, 55. Σ(f_i × x_i) = 42(15) + 26(25) + 45(35) + 46(45) + 55X = 630 + 650 + 1575 + 2070 + 55X = 4925 + 55X. Total freq = 159 + X. Mean = (4925 + 55X)/(159 + X) = 35 => 4925 + 55X = 5565 + 35X => 20X = 640 => X = 32."
    },
    {
      s: "Maths",
      c: "Simplification",
      q: "Evaluate: (-9) - (-60) ÷ (-6) + (-2) × 8",
      o: ["-37", "-38", "-35", "-34"],
      a: 2,
      e: "(-60) ÷ (-6) = 10. (-2) × 8 = -16. Expression = -9 - 10 + (-16) = -9 - 10 - 16 = -35."
    },
    {
      s: "Maths",
      c: "Geometry",
      q: "In the given figure, lines AO and DE are parallel. Angle CDE = 80°, angle ABO = 135°. What is the value of x (angle BCO)?",
      o: ["145°", "45°", "100°", "35°"],
      a: 3,
      e: "Since AO || DE, alternate interior angle to ∠CDE (80°) at vertex O gives ∠AOC = 80°. In triangle BOC, exterior angle ∠ABO = 135° = ∠BOC + ∠BCO = (180° - 80°) + x => 135° = 100° + x => x = 35°."
    },
    {
      s: "General Studies",
      c: "Ancient & Medieval History",
      q: "Which dynasty ruled over Kannauj during the Tripartite Struggle?",
      o: ["Rashtrakutas", "Chalukyas", "Palas - Cholas", "Gurjara-Pratiharas"],
      a: 3,
      e: "The Tripartite Struggle for control of Kannauj was contested between the Gurjara-Pratiharas, the Palas, and the Rashtrakutas; the Gurjara-Pratiharas ultimately established their rule over Kannauj."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Which of the following methods was characteristically adopted by the Moderates during the early phase of the Indian national movement?",
      o: ["Boycott of foreign goods and institutions", "Swadeshi Movement", "Promotion of Vedic education", "Constitutional reforms"],
      a: 3,
      e: "Moderates (1885–1905) relied on constitutional agitation, prayers, petitions, and legislative reforms (the 3 Ps: Prayer, Petition, and Protest)."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "P sells an item to Q at 70% profit. Q sells the same item to R at 67% loss. If R paid ₹3927 for the item, then at what price (in ₹) is the item purchased by P?",
      o: ["7003", "6998", "6997", "7000"],
      a: 3,
      e: "Cost for P = C. Q buys at 1.70C. R pays (1 - 0.67) × 1.70C = 0.33 × 1.70C = 0.561C = 3927 => C = 3927 / 0.561 = 7000."
    },
    {
      s: "General Studies",
      c: "Geography & Census",
      q: "According to Census 2011, which of the following states showed a negative decadal population growth rate between 2001 and 2011?",
      o: ["Punjab", "Nagaland", "Gujarat", "Kerala"],
      a: 1,
      e: "Nagaland was the only Indian state to record a negative decadal population growth rate of -0.58% in Census 2011."
    },
    {
      s: "Maths",
      c: "Compound Interest",
      q: "Mahesh has ₹1407 with him. He divides this amount between his two sons, Vijay and Ajay, and asks them to invest their respective shares at 10% per annum compound interest. Vijay's investment amounts to the same value after 17 years as Ajay's investment does after 18 years. How much (in ₹) did Mahesh give to Ajay?",
      o: ["837", "670", "737", "520"],
      a: 1,
      e: "V × (1.1)^17 = A × (1.1)^18 => V = 1.1 A => V/A = 11/10. Sum = 11 + 10 = 21 units = 1407 => 1 unit = 67. Ajay's share = 10 × 67 = ₹670."
    },
    {
      s: "Maths",
      c: "Mensuration",
      q: "A copper sphere of diameter 24 cm is melted and drawn into a wire of diameter 4 mm. What is the length (in metres) of the wire?",
      o: ["456", "480", "576", "580"],
      a: 2,
      e: "Sphere radius R = 12 cm. Wire radius r = 0.2 cm. Volume = (4/3)πR³ = πr²L => (4/3)(12)³ = (0.2)²L => (4/3)(1728) = 0.04L => 2304 = 0.04L => L = 57600 cm = 576 m."
    },
    {
      s: "Reasoning",
      c: "Analogy & Number Sets",
      q: "Select the set in which the numbers are related in the same way as (336, 216, 156) and (379, 259, 199):",
      o: ["(432, 332, 252)", "(394, 264, 204)", "(412, 292, 232)", "(449, 329, 249)"],
      a: 2,
      e: "Pattern: First - Second = 120, Second - Third = 60. For (412, 292, 232): 412 - 292 = 120 and 292 - 232 = 60."
    },
    {
      s: "General Studies",
      c: "Current Affairs",
      q: "By November 2025, non-fossil power accounted for what percentage of the total installed electricity capacity in India?",
      o: ["40.2%", "45.8%", "51.5%", "60.0%"],
      a: 2,
      e: "India crossed the major milestone with non-fossil fuel capacity accounting for over 51.5% of total installed generation capacity by late 2025."
    },
    {
      s: "Maths",
      c: "Time & Work",
      q: "A and B, when working alone, can complete a work in 20 days and 25 days, respectively. Each works on alternate days, with A starting on Day 1 and B on Day 2. How long will it take them to complete the work?",
      o: ["22 1/5 days", "23 days", "11 days", "22 days"],
      a: 0,
      e: "LCM of (20, 25) = 100 units. Efficiency of A = 5, B = 4. In 2 days = 9 units. In 22 days (11 cycles) = 99 units. Remaining 1 unit completed by A on Day 23 in 1/5 day. Total time = 22 1/5 days."
    },
    {
      s: "General Studies",
      c: "Art & Culture",
      q: "Which North Indian fair, held every 12 years, is a major Hindu pilgrimage event at Prayagraj?",
      o: ["Hemis Festival", "Kumbh Mela", "Surajkund Mela", "Pushkar Mela"],
      a: 1,
      e: "Kumbh Mela is celebrated every 12 years at Prayagraj at the sacred Triveni Sangam (Ganga, Yamuna, Saraswati)."
    },
    {
      s: "Maths",
      c: "Algebra & Identities",
      q: "Simplify: [(525³ + 321³) / (525² - 525×321 + 321²)] × [1 / (96 - 36)]",
      o: ["12.5", "15.9", "13.1", "14.1"],
      a: 3,
      e: "Using a³ + b³ = (a + b)(a² - ab + b²), the first term simplifies to (525 + 321) = 846. Second factor is 1/60. 846 / 60 = 14.1."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "Which core component of Windows OS is responsible for handling low-level operations such as memory management and process scheduling?",
      o: ["Service Control Manager", "Task Scheduler", "Windows Explorer", "Windows Kernel"],
      a: 3,
      e: "The Windows Kernel resides in kernel mode and provides core operating system services including thread scheduling, process dispatching, and hardware abstraction."
    },
    {
      s: "Maths",
      c: "Mensuration",
      q: "A cube has a lateral surface area of 324 cm². It is fully submerged in a rectangular container of height 18 cm, having a square base and a lateral surface area of 864 cm². If the container was partially filled with water, find the rise in the water level after the cube is submerged (nearest integer).",
      o: ["6 cm", "7 cm", "4 cm", "5 cm"],
      a: 3,
      e: "Cube LSA = 4a² = 324 => a² = 81 => a = 9 cm. Volume of cube = 9³ = 729 cm³. Rectangular container has square base side 's' and h = 18. LSA = 4 × s × 18 = 864 => 72s = 864 => s = 12 cm. Base area = 12 × 12 = 144 cm². Rise in water level = 729 / 144 ≈ 5.06 ≈ 5 cm."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Under the Citizenship Act, 1955, which section governs the grant of citizenship when a new territory becomes part of India?",
      o: ["Section 5", "Section 6", "Section 7", "Section 9"],
      a: 2,
      e: "Section 7 of the Citizenship Act, 1955 deals with citizenship by incorporation of territory."
    },
    {
      s: "Reasoning",
      c: "Number Series & Operations",
      q: "Given sets: 157-162-172-86 and 93-98-108-54. Which of the options follows the same pattern?",
      o: ["98-103-113-133", "112-116-126-63", "185-190-200-100", "65-70-80-160"],
      a: 2,
      e: "Pattern: +5, +10, ÷2. Applying to 185: 185 + 5 = 190; 190 + 10 = 200; 200 / 2 = 100."
    },
    {
      s: "Reasoning",
      c: "Blood Relations",
      q: "A is the wife of B. B is the father of C. D is the brother of C. E is the son of D. How is A related to E?",
      o: ["Father's mother", "Mother's mother", "Husband's wife", "Mother"],
      a: 0,
      e: "B is father and A is mother of C and D. E is son of D. Therefore, A is the paternal grandmother (Father's mother) of E."
    },
    {
      s: "General Studies",
      c: "Current Affairs & Sports",
      q: "Which of the following athletes clinched the women's 100m hurdles gold at the World Athletics Championships Tokyo 2025 on 15 September?",
      o: ["Ditaji Kambundji", "Grace Stark", "Masai Russell", "Tobi Amusan"],
      a: 0,
      e: "Swiss hurdler Ditaji Kambundji clinched the gold medal in the women's 100m hurdles at the Tokyo 2025 World Championships."
    },
    {
      s: "Reasoning",
      c: "Letter & Symbol Series",
      q: "In the series: (Left) O N & # K € S * P # £ * G I & * @ I A * @ © (Right), how many letters are immediately preceded by a letter and immediately followed by a symbol?",
      o: ["5", "4", "3", "2"],
      a: 2,
      e: "Pattern: [Letter - Letter - Symbol]. Instances: (1) O N &, (2) G I &, (3) I A *."
    },
    {
      s: "Reasoning",
      c: "Letter Analogy",
      q: "Which letter-clusters replace # and %: #: NMH :: VUP: %",
      o: ["# = SVC % = OIK", "# = IBM % = QKL", "# = SRO % = ZPK", "# = SRM % = QPK"],
      a: 3,
      e: "Shift pattern between corresponding letters: S(-5)->N, R(-5)->M, M(-5)->H. Applying the same -5 shift to VUP: V(-5)->Q, U(-5)->P, P(-5)->K."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "The ratio of three numbers is 3:5:7. If the sum of the largest and smallest numbers is 60, what is the sum of all the three numbers?",
      o: ["90", "70", "100", "120"],
      a: 0,
      e: "Smallest = 3x, Largest = 7x. 3x + 7x = 10x = 60 => x = 6. Total sum = (3 + 5 + 7)x = 15 × 6 = 90."
    },
    {
      s: "Maths",
      c: "Trigonometry",
      q: "If cot A = 3/4, and A is an acute angle, then find the value of sin 2A - cos 3A.",
      o: ["3/125", "141/125", "237/125", "273/125"],
      a: 2,
      e: "cot A = 3/4 => base = 3, perp = 4, hyp = 5. sin A = 4/5, cos A = 3/5. sin 2A = 2 sin A cos A = 2(4/5)(3/5) = 24/25 = 120/125. cos 3A = 4 cos³ A - 3 cos A = 4(27/125) - 3(3/5) = 108/125 - 225/125 = -117/125. Value = 120/125 - (-117/125) = 237/125."
    },
    {
      s: "Reasoning",
      c: "Coding-Decoding",
      q: "In a certain code language, 'ROAD' is coded as '9416' and 'DORM' is coded as '3691'. What is the code for 'M' in the given code language?",
      o: ["6", "3", "1", "9"],
      a: 1,
      e: "Common letters in ROAD and DORM are R, O, D coded as 9, 1, 6 in some order. The remaining unique letter in DORM is 'M', which corresponds to digit 3."
    },
    {
      s: "Maths",
      c: "Number System",
      q: "If a 7-digit number 54468A0 is completely divisible by 4, what is the minimum value of A?",
      o: ["3", "2", "0", "5"],
      a: 2,
      e: "A number is divisible by 4 if its last two digits form a multiple of 4. Here the last two digits are A0. Possible values for A are 0, 2, 4, 6, 8. The minimum value is 0 (00 is divisible by 4)."
    },
    {
      s: "General Studies",
      c: "International Affairs",
      q: "Which 2025 event by the United Nations highlights that member states continue to ratify a variety of multilateral treaties across human rights, environment, and penal law?",
      o: ["Paris Climate Summit", "2025 Treaty Event", "UN Biodiversity Summit", "UN Ocean Conference"],
      a: 1,
      e: "The annual UN Treaty Event held during the General Assembly encourages wider participation in multilateral treaties deposited with the Secretary-General."
    },
    {
      s: "Reasoning",
      c: "Number Operations",
      q: "If 1 is added to each odd digit and 1 is subtracted from each even digit in the number 21673458, what will be the product of the greatest and smallest digit in the new number?",
      o: ["0", "9", "8", "16"],
      a: 2,
      e: "Original: 2, 1, 6, 7, 3, 4, 5, 8. New digits: 2-1=1, 1+1=2, 6-1=5, 7+1=8, 3+1=4, 4-1=3, 5+1=6, 8-1=7 => {1, 2, 5, 8, 4, 3, 6, 7}. Greatest = 8, Smallest = 1. Product = 8 × 1 = 8."
    },
    {
      s: "Maths",
      c: "Simplification",
      q: "Evaluate: (-9) - (-56) ÷ (-14) + (-3) × 8",
      o: ["-40", "-36", "-39", "-37"],
      a: 3,
      e: "(-56) ÷ (-14) = 4. (-3) × 8 = -24. Expression = -9 - 4 + (-24) = -9 - 4 - 24 = -37."
    },
    {
      s: "Reasoning",
      c: "Coded Blood Relations",
      q: "A@B means 'A is son of B', A#B means 'A is sister of B', A+B means 'A is wife of B', A%B means 'A is father of B'. How is E related to B in 'E % R # D + N @ B'?",
      o: ["Wife's brother", "Wife's father", "Son's wife's father", "Son's wife's brother"],
      a: 2,
      e: "N is son of B. D is wife of N (D is B's son's wife). R is sister of D, and E is father of R and D. Thus, E is B's son's wife's father."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which of the following objectives is mentioned in Article 39 of the Indian Constitution?",
      o: ["To organise agriculture and animal husbandry", "To ensure equal justice and provide free legal aid", "To promote equal pay for equal work for both men and women", "To organise village panchayats"],
      a: 2,
      e: "Article 39(d) of the Constitution directs the State to secure equal pay for equal work for both men and women."
    },
    {
      s: "Reasoning",
      c: "Number Series",
      q: "What should come in place of '?' in the given series: 64, 62, 59, 54, 47, ?",
      o: ["34", "32", "38", "36"],
      a: 3,
      e: "Differences are consecutive prime numbers: 64 - 2 = 62; 62 - 3 = 59; 59 - 5 = 54; 54 - 7 = 47; 47 - 11 = 36."
    },
    {
      s: "Reasoning",
      c: "Data Sufficiency",
      q: "A, B, C, D, E and F sit around a circular table facing centre. Who sits immediate right of C? (I) D sits immediate left of F. C is immediate neighbour of A and E. (II) B sits second to left of F. C sits second to right of F.",
      o: ["Both statements I and II together are not sufficient to answer the question.", "Data in Statement II alone is sufficient to answer the question while data in statement I is not.", "Data in Statement I alone is sufficient to answer the question while data in statement II is not.", "Both statements I and II together are sufficient."],
      a: 0,
      e: "Even when combining both statements, the exact relative positions of A and E flanking C (which one is on the right vs left) cannot be uniquely determined."
    },
    {
      s: "Maths",
      c: "Averages",
      q: "There are 12 members in group A, 73 members in group B and 80 members in group C. Average amounts spent are ₹184, ₹234 and ₹390 respectively. The overall average amount spent per member is:",
      o: ["305", "306", "311", "308"],
      a: 1,
      e: "Total expenditure = (12 × 184) + (73 × 234) + (80 × 390) = 2208 + 17082 + 31200 = 50490. Total people = 12 + 73 + 80 = 165. Average = 50490 / 165 = 306."
    },
    {
      s: "Reasoning",
      c: "Puzzles & Scheduling",
      q: "P, Q, R, S, T, U, V have exams Monday to Sunday. Exactly 2 people before Q (Q is Wednesday). Exactly 3 people after V (V is Thursday). 3 people between S and Q (S is Sunday). P immediately before T (P-T are Friday-Saturday). R not on Tuesday (R is Monday, U is Tuesday). How many people have exams between R (Mon) and T (Sat)?",
      o: ["Three", "Two", "Four", "One"],
      a: 2,
      e: "Schedule: Mon=R, Tue=U, Wed=Q, Thu=V, Fri=P, Sat=T, Sun=S. The people between R (Mon) and T (Sat) are U, Q, V, P — exactly 4 people."
    },
    {
      s: "General Studies",
      c: "Indian Geography",
      q: "Which name is given to the southern stretch of the western coastal plain of India?",
      o: ["Konkan Coast", "Malabar coast", "Coromandel Coast", "Kannad Coast"],
      a: 1,
      e: "The western coastal plain is divided into Konkan (north), Kannad/Canara (central), and Malabar (south). Coromandel is the southern stretch of the eastern coast."
    },
    {
      s: "Reasoning",
      c: "Coding-Decoding",
      q: "In a certain code language, 'WAND' is coded as '1846' and 'GNAW' is coded as '4165'. What is the code for 'G'?",
      o: ["6", "5", "1", "4"],
      a: 1,
      e: "Common letters in WAND and GNAW are W, A, N coded as 1, 4, 6 in some order. The remaining letter G is coded as 5."
    },
    {
      s: "General Studies",
       c: "Defense & Security",
      q: "Which mission, announced in August 2025, aims to provide India with a multi-layered indigenous air and missile defence system?",
      o: ["Mission Shakti", "Agni Defence Initiative", "Mission Sudarshan Chakra", "Integrated Air Defence Mission"],
      a: 2,
      e: "Project Kusha / Mission Sudarshan Chakra is India's long-range multi-tiered indigenous air defence system comparable to Iron Dome / S-400."
    },
    {
      s: "Reasoning",
      c: "Letter Analogy",
      q: "Select the letter-clusters to replace # and %: #: NQW :: LOU: %",
      o: ["# = KKQ, % = RUA", "# = HKQ, % = RUL", "# = HKQ, % = RUA", "# = HKQ, % = RUO"],
      a: 2,
      e: "Letter difference: N(+3)->Q(+6)->W; H(+3)->K(+6)->Q. L(+3)->O(+6)->U; R(+3)->U(+6)->A."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "A file is selected on the desktop. Pressing the Delete key will mainly:",
      o: ["Remove the file", "Rename the file", "Open the file", "Copy the file"],
      a: 0,
      e: "Pressing the Delete key moves the selected file to the Recycle Bin (removes it from the folder/desktop)."
    },
    {
      s: "Reasoning",
      c: "Syllogism",
      q: "Statements: Some ants are lizards. All lizards are spiders. No spider is a rat. Conclusions: (I) Some rats are lizards. (II) Some spiders are ants.",
      o: ["Only conclusion (II) follows", "Neither conclusion (I) nor (II) follows", "Both conclusions (I) and (II) follow", "Only conclusion (I) follows"],
      a: 0,
      e: "Since All lizards are spiders and No spider is a rat, no rat can be a lizard ((I) false). Since Some ants are lizards and All lizards are spiders, Some spiders are definitely ants ((II) follows)."
    },
    {
      s: "Maths",
      c: "Quadratic Equations",
      q: "If α is a root of the equation 2x(2x + 1) = 1, then the other root is:",
      o: ["-α(α + 1)", "2α(α - 1)", "-1 / (4α)", "3α(α + 1)"],
      a: 2,
      e: "Equation: 4x² + 2x - 1 = 0. Product of roots = α × β = -1/4 => β = -1 / (4α)."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "Which of the following is a significant component of the Harappan citadel?",
      o: ["Grand palaces", "The Great Bath", "Dwelling houses", "Huge temples"],
      a: 1,
      e: "The Great Bath at Mohenjo-daro was a prominent public water tank structure situated on the western raised citadel."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "Under which of the following categories do headphones fall?",
      o: ["Output Device", "Calculator Device", "Input Device", "Storage Device"],
      a: 0,
      e: "Headphones produce audible sound from electrical audio signals received from a computer or device, making them an output device."
    },
    {
      s: "General Studies",
      c: "General Science (Chemistry)",
      q: "Which substance is the primary component of the reddish-brown coating formed on iron articles exposed to moist air?",
      o: ["Iron Sulfate (FeSO4)", "Iron (II) Oxide (FeO)", "Iron (III) Hydroxide (Fe(OH)3)", "Hydrated Iron (III) Oxide (Fe2O3·xH2O)"],
      a: 3,
      e: "Rust is chemically hydrated iron(III) oxide with the formula Fe2O3·xH2O, formed through oxidation of iron in the presence of water and oxygen."
    },
    {
      s: "Reasoning",
      c: "Seating Arrangement",
      q: "Seven people B, C, D, O, P, Q and R sit around a circular table facing the center. P is 3rd left of Q. One person between Q and B (counted right of Q). 2 people between O and C (from left of O). D is neighbour of O. Who sits 3rd to the right of R?",
      o: ["D", "P", "C", "O"],
      a: 1,
      e: "Arranging clockwise: Q -> _ -> B -> P -> O -> D -> C -> (R) yields P sitting third to the right of R."
    },
    {
      s: "General Studies",
      c: "General Science (Biology)",
      q: "Which law of Mendel explains the separation of alleles during gamete formation?",
      o: ["Law of Dominance", "Law of Assortment", "Law of Segregation", "Law of Variation"],
      a: 2,
      e: "Mendel's Law of Segregation (First Law) states that allele pairs separate during gamete formation and randomly unite at fertilization."
    },
    {
      s: "Maths",
      c: "Percentage",
      q: "In an election between two candidates, 84% registered voters voted, 20% votes polled were invalid. Winning candidate got 58% of valid votes and won by 336 votes. How many voters were registered?",
      o: ["3125", "3123", "3120", "3124"],
      a: 0,
      e: "Margin = 58% - 42% = 16% of valid votes = 336 => Valid votes = 336 / 0.16 = 2100. Polled votes = 2100 / 0.80 = 2625. Registered voters = 2625 / 0.84 = 3125."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Who was exiled to Rangoon after the First War of Independence in India?",
      o: ["Ahmadullah Shah", "Nana Sahib", "Bahadur Shah Zafar", "Rani Lakshmibai"],
      a: 2,
      e: "The last Mughal Emperor, Bahadur Shah Zafar, was captured by the British in Delhi and exiled to Rangoon (Burma), where he died in 1862."
    },
    {
      s: "Maths",
      c: "HCF & LCM",
      q: "The product of two numbers, X and Y, is 6760, and the HCF of X and Y is 13. Find the number of possible pairs (X, Y), given that X > Y.",
      o: ["1", "2", "4", "3"],
      a: 1,
      e: "Let X = 13a, Y = 13b where gcd(a, b) = 1 and a > b. 13a × 13b = 6760 => 169ab = 6760 => ab = 40. Co-prime pairs (a, b) with a > b: (40, 1) and (8, 5). Total pairs = 2."
    },
    {
      s: "Reasoning",
      c: "Direction & Distance",
      q: "Manan drives 42 km South from A, turns left (East) drives 40 km, turns left (North) drives 54 km, turns left (West) drives 48 km, turns left (South) drives 12 km to P. How far and in which direction should he drive to reach A again?",
      o: ["8 km to the east", "7 km to the east", "6 km to the west", "5 km to the west"],
      a: 0,
      e: "Net displacement from A to P: North-South = -42 + 54 - 12 = 0 km. East-West = +40 - 48 = -8 km (8 km West). To return to A from P, he must travel 8 km East."
    },
    {
      s: "Reasoning",
      c: "Number Series",
      q: "What should come in place of '?' in the series: 19, 20, 28, 55, 119, ?",
      o: ["144", "142", "244", "245"],
      a: 2,
      e: "Differences are cubes of natural numbers: +1³ (1), +2³ (8), +3³ (27), +4³ (64). Next difference = +5³ = 125. 119 + 125 = 244."
    },
    {
      s: "Reasoning",
      c: "Alpha-Numeric Analogy",
      q: "TN 13 : WR 16 :: KE 18 : NI 21 :: VP 26 : ?",
      o: ["XU 28", "YV 29", "YT 29", "XY 28"],
      a: 2,
      e: "T(+3)->W, N(+4)->R, 13(+3)->16. Similarly, V(+3)->Y, P(+4)->T, 26(+3)->29. Thus, YT 29."
    },
    {
      s: "Reasoning",
      c: "Box Puzzle",
      q: "Seven boxes A, B, C, D, E, F, G stacked vertically. Only 2 boxes below A (A is 3rd). 2 boxes between E and A (E is 6th). F immediately above B. D above G but below A (D is 2nd, G is 1st). Remaining boxes are C and (F, B). How many boxes are kept below C but above B?",
      o: ["Five", "Three", "Two", "Four"],
      a: 2,
      e: "Stack from bottom (1) to top (7): 1=G, 2=D, 3=A, 4=B, 5=F, 6=E, 7=C. Between C (7) and B (4) are boxes F (5) and E (6) — exactly 2 boxes."
    },
    {
      s: "Reasoning",
      c: "Letter-Number Series",
      q: "PMO 51, SPR 46, VSU 41, YVX 36, ?",
      o: ["BZZ 31", "BJS 30", "BXZ 30", "BYA 31"],
      a: 3,
      e: "First letter: P(+3)->S(+3)->V(+3)->Y(+3)->B. Second letter: M(+3)->P(+3)->S(+3)->V(+3)->Y. Third letter: O(+3)->R(+3)->U(+3)->X(+3)->A. Number: 51(-5)->46(-5)->41(-5)->36(-5)->31. Answer = BYA 31."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "₹7770 is divided among A, B, C, and D such that A:B = 2:3, B:C = 4:5, and C:D = 6:7. The share of A (in ₹) is:",
      o: ["1224", "1184", "1154", "1124"],
      a: 1,
      e: "A:B:C:D = (2×4×6) : (3×4×6) : (3×5×6) : (3×5×7) = 48 : 72 : 90 : 105. Sum = 315 parts = 7770 => 1 part = 24.666... A's share = 48 × (7770/315) = 48 × 24.6667 = ₹1184."
    },
    {
      s: "General Studies",
      c: "International Relations",
      q: "Which three countries formed the ACITI Partnership announced in November 2025?",
      o: ["India, UK, Australia", "Australia, Japan, Canada", "India, Australia, Canada", "Canada, USA, India"],
      a: 2,
      e: "The ACITI (Australia-Canada-India Technology and Innovation) partnership was established to foster tri-nation tech supply chains and critical minerals."
    },
    {
      s: "General Studies",
      c: "Current Affairs & Defense",
      q: "With reference to the 93rd anniversary celebrations of the Indian Air Force (IAF) in 2025, where was the main ceremonial parade held?",
      o: ["Guwahati", "Bengaluru (HAL Complex)", "Air Force Station Hindan, Ghaziabad", "Delhi Cantonment"],
      a: 2,
      e: "The 93rd IAF Day parade on 8 October 2025 was organized at Air Force Station Hindan in Ghaziabad."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "Which of the following is an example of Customized Software?",
      o: ["LibreOffice Calc", "Mozilla Firefox Application", "Adobe Photoshop Software", "School Management Software"],
      a: 3,
      e: "School Management Software is tailored to the specific administrative workflows and grading systems of a school, unlike general off-the-shelf software."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "According to early Buddhist literature, how many gamas (villages) were said to exist in the kingdom of Magadha during the reign of King Bimbisāra?",
      o: ["1,00,000", "60,000", "80,000", "40,000"],
      a: 2,
      e: "Vinaya Pitaka texts traditionally mention that King Bimbisara ruled over 80,000 gamas (villages) in Magadha."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "How do Centre-State financial relations impact the governance in India?",
      o: ["By eliminating the need for state budgets", "By centralizing all tax revenues at the Centre", "By providing states with unlimited financial resources", "Through mechanisms like the Finance Commission that allocate resources"],
      a: 3,
      e: "The Finance Commission (under Article 280) recommends the devolution of central taxes and grants-in-aid between the Union and the States."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which constitutional amendment to the Indian Constitution added the term 'Socialist' to the Preamble?",
      o: ["42nd Amendment, 1976", "1st Amendment, 1951", "44th Amendment, 1978", "26th Amendment, 1971"],
      a: 0,
      e: "The 42nd Constitutional Amendment Act of 1976 added the three words 'Socialist', 'Secular', and 'Integrity' to the Preamble."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Which of the following principle was most emphasized by Bal Gangadhar Tilak during the Extremist Phase?",
      o: ["Support for communal representation", "Swaraj as the birthright of every Indian", "Exclusive focus on economic reforms", "Complete armed revolution against the British"],
      a: 1,
      e: "Lokmanya Tilak famously proclaimed: 'Swaraj is my birthright, and I shall have it' ('स्वराज्य हा माझा जन्मसिद्ध हक्क आहे आणि तो मी मिळवणारच')."
    },
    {
      s: "General Studies",
      c: "Geography",
      q: "Barren Island, which witnessed two eruptions in 2025, is situated in which Union Territory of India?",
      o: ["Lakshadweep", "Puducherry", "Andaman & Nicobar Islands", "Dadra & Nagar Haveli and Daman & Diu"],
      a: 2,
      e: "Barren Island, South Asia's only active volcano, is located in the Andaman Sea within the Union Territory of Andaman and Nicobar Islands."
    },
    {
      s: "Reasoning",
      c: "Number Operations",
      q: "Given numbers: (Left) 194, 582, 419, 149, 825 (Right). What is the resultant if the third digit of the highest number is added to the second digit of the lowest number?",
      o: ["9", "8", "6", "12"],
      a: 0,
      e: "Highest number = 825 (third digit = 5). Lowest number = 149 (second digit = 4). Sum = 5 + 4 = 9."
    },
    {
      s: "Maths",
      c: "Races & Circular Motion",
      q: "A and B run on a circular track of 900 m. A runs at 225 m/min and B at 180 m/min. Every time A overtakes B, both reduce speeds by 5%. After how many minutes does A overtake B for the 3rd time?",
      o: ["62.11 min", "64.41 min", "64.21 min", "63.21 min"],
      a: 3,
      e: "Initial relative speed = 225 - 180 = 45 m/min. Time for 1st overtake = 900 / 45 = 20 min. After 1st overtake, speeds decrease by 5%, so relative speed becomes 45 × 0.95; time = 20 / 0.95 ≈ 21.0526 min. After 2nd overtake, time = 20 / (0.95)² ≈ 22.1607 min. Total time = 20 + 21.0526 + 22.1607 = 63.21 min."
    },
    {
      s: "General Studies",
      c: "Indian Geography",
      q: "Which of the following States/Union Territories shares a border with Afghanistan?",
      o: ["Ladakh", "Rajasthan", "Jammu and Kashmir", "Punjab"],
      a: 0,
      e: "India shares a 106 km land border with Afghanistan (Wakhan Corridor) in the Union Territory of Ladakh."
    },
    {
      s: "General Studies",
      c: "Indian Economy",
      q: "Why did the share of workers in the rural agriculture sector increase during July-September 2025?",
      o: ["Due to urban migration", "Due to Kharif agricultural operations", "Because of new government schemes", "Because of a decline in manufacturing jobs"],
      a: 1,
      e: "The monsoon season (July–September) coincides with peak sowing and transplanting activities for Kharif crops, leading to increased rural labor participation."
    },
    {
      s: "Maths",
      c: "Averages",
      q: "What is the average of all the natural numbers from 1 to 63?",
      o: ["31.5", "32.5", "32", "33"],
      a: 2,
      e: "Average of first n natural numbers = (n + 1)/2 = (63 + 1)/2 = 32."
    },
    {
      s: "General Studies",
      c: "Government Schemes",
      q: "As of February 1, 2025, what percentage of rural households in India had been provided tap water connections under the Jal Jeevan Mission?",
      o: ["69.34%", "79.74%", "84.15%", "92.67%"],
      a: 1,
      e: "By early 2025, tap water coverage under the Har Ghar Jal / Jal Jeevan Mission achieved approximately 79.74% of rural households."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which of the following statements is true about the role of Cabinet Ministers in India?",
      o: ["They head important ministries like Home, Defence, and Finance.", "They only assist other ministers in their duties.", "They do not attend Cabinet meetings.", "They are not involved in policy decisions."],
      a: 0,
      e: "Cabinet Ministers are top-ranking senior ministers who hold independent charge of crucial portfolios (Home, Defence, External Affairs, Finance) and attend Cabinet meetings."
    },
    {
      s: "Reasoning",
      c: "Number Operations",
      q: "If 1 is added to each odd digit and 2 is subtracted from each even digit in 4813576, what is the difference between the highest and lowest digits in the new number?",
      o: ["7", "8", "5", "6"],
      a: 3,
      e: "4->2, 8->6, 1->2, 3->4, 5->6, 7->8, 6->4. Formed digits: {2, 6, 2, 4, 6, 8, 4}. Highest = 8, Lowest = 2. Difference = 8 - 2 = 6."
    },
    {
      s: "Reasoning",
      c: "Box Puzzle",
      q: "Seven boxes A, C, G, H, J, N, R stacked vertically. 3 boxes below N (N is 4th). 2 boxes between N and J (J is 7th). G immediately above H. C below R and above A. How many boxes are kept above C?",
      o: ["3", "2", "4", "1"],
      a: 2,
      e: "Order from 7 to 1: 7=J, 6=G, 5=H, 4=N, 3=C, 2=R (or R at 5/above C) and 1=A. Placing R at 5, C at 3, A at 1 gives 4 boxes above C."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "As per Article _____ of the Indian Constitution, from the commencement of the 69th Amendment Act, 1991, the Union territory of Delhi shall be called the National Capital Territory of Delhi.",
      o: ["239AC", "239AD", "239AB", "239AA"],
      a: 3,
      e: "Article 239AA was inserted by the 69th Constitutional Amendment Act, 1991, creating special provisions and an elected Legislative Assembly for NCT Delhi."
    },
    {
     s: "General Studies",
      c: "Geography & Climate",
      q: "Which factor causes Ooty to have cooler summers than Coimbatore, even though both are located at nearly the same latitude?",
      o: ["Ooty is influenced by cold desert winds from the north", "Coimbatore receives less solar radiation during the year", "Ooty is located closer to the sea, while Coimbatore is inland", "Ooty is situated at a higher altitude, leading to lower temperatures"],
      a: 3,
      e: "Normal lapse rate dictates that temperature decreases with increasing altitude (approx 6.5°C per 1,000 m). Ooty is situated at ~2,240 m above sea level."
    },
    {
      s: "Reasoning",
      c: "Letter-Number Series",
      q: "EGE 85, DFD 90, CEC 95, BDB 100, ?",
      o: ["ABZ 104", "ABD 104", "ADZ 105", "ACA 105"],
      a: 3,
      e: "Letters: 1st decreases (E->D->C->B->A), 2nd decreases (G->F->E->D->C), 3rd decreases (E->D->C->B->A) => ACA. Number: +5 each time (85, 90, 95, 100, 105). Thus, ACA 105."
    },
    {
      s: "Maths",
      c: "Percentage",
      q: "The population of a village was 2,90,000. It increased by 10% in the first year and by 20% in the second year. Its population after two years is:",
      o: ["3,19,000", "3,48,000", "3,82,800", "3,77,000"],
      a: 2,
      e: "Population = 290000 × 1.10 × 1.20 = 290000 × 1.32 = 3,82,800."
    },
    {
      s: "General Studies",
      c: "Indian Economy",
      q: "During recession, which type of Fiscal Policy should be used?",
      o: ["Stable Fiscal Policy", "Expansionary Fiscal Policy", "Contractionary Fiscal Policy", "Neutral Fiscal Policy"],
      a: 1,
      e: "Expansionary fiscal policy (increasing government spending and/or reducing taxes) is deployed to stimulate aggregate demand during an economic downturn."
    },
    {
      s: "General Studies",
      c: "World Geography",
      q: "Which U.S. state experiences a Mediterranean climate that supports the cultivation of fruits, vegetables, and vineyards?",
      o: ["California", "Florida", "Texas", "Alaska"],
      a: 0,
      e: "California's Central Coast and valleys feature a Mediterranean climate characterized by mild wet winters and dry warm summers ideal for viticulture and citrus fruits."
    },
    {
      s: "Reasoning",
      c: "Syllogism",
      q: "Statements: All oranges are apples. No apple is a banana. No banana is a kiwi. Conclusions: (I) No orange is a banana. (II) No apple is a kiwi.",
      o: ["Both conclusions (I) and (II) follow", "Neither conclusion (I) nor (II) follows", "Only conclusion (I) follows", "Only conclusion (II) follows"],
      a: 2,
      e: "Since all oranges are inside apples and disjoint from bananas, no orange can be a banana ((I) follows). Kiwi is disjoint from banana, but may or may not overlap with apples ((II) does not follow)."
    },
    {
      s: "Maths",
      c: "Geometry",
      q: "In the figure with parallel lines u || v and transversal lines t1 || t2, if ∠A = 92°, find ∠D.",
      o: ["88°", "82°", "78°", "92°"],
      a: 0,
      e: "Consecutive interior angles on the same side of parallel lines sum to 180°. Since ∠A = 92°, corresponding / supplementary relationships give ∠D = 180° - 92° = 88°."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "A shopkeeper professes to sell his goods at a 25% loss but uses a false balance and gains 70%. The actual weight (rounded off to one decimal place) that he uses instead of 1 kg is:",
      o: ["443.3 gm", "441.2 gm", "438.1 gm", "436.4 gm"],
      a: 1,
      e: "Selling price per nominal kg = 0.75 of CP. Profit = 70% => SP = 1.70 × (cost of actual weight w) => 0.75 = 1.70 × (w / 1000) => w = (750 / 1.70) = 441.17 ≈ 441.2 gm."
    },
    {
      s: "General Studies",
      c: "Ancient & Medieval History",
      q: "Who is the author of the historical work 'Rajatarangini', which records the history of Kashmir?",
      o: ["Bana", "Bilhana", "Kalhana", "Kalidasa"],
      a: 2,
      e: "Kalhana composed the Sanskrit metrical chronicle 'Rajatarangini' (River of Kings) in the 12th century CE."
    },
    {
      s: "Reasoning",
      c: "Analogy & Number Sets",
      q: "Given sets: 15-225-235-195 and 9-81-91-51. Which option follows the same pattern?",
      o: ["10-100-110-90", "8-64-74-104", "18-324-334-294", "16-256-276-246"],
      a: 2,
      e: "Pattern: x, x², x² + 10, (x² + 10) - 40. For 18: 18, 18²=324, 324+10=334, 334-40=294."
    },
    {
      s: "Maths",
      c: "Pipes & Cisterns",
      q: "Two taps can fill a cistern in 4 hours and 27 hours respectively. A third tap can empty it in 27 hours. How long (in hours) will it take to fill one-fourth of the empty cistern, if all of them are opened together?",
      o: ["4", "2", "1", "3"],
      a: 2,
      e: "The second filling tap (+1/27) and emptying tap (-1/27) cancel out completely. Net filling rate = 1/4 cistern per hour. Hence, filling 1/4 of the cistern takes exactly 1 hour."
    },
    {
      s: "General Studies",
      c: "General Science (Physics)",
      q: "Free fall corresponds to which type of motion?",
      o: ["Non-uniform motion", "Uniform motion", "Uniformly accelerated motion", "Periodic motion"],
      a: 2,
      e: "An object falling freely under the sole influence of gravity accelerates at a constant rate (g ≈ 9.8 m/s²), representing uniformly accelerated motion."
    },
    {
      s: "General Studies",
      c: "General Science (Physics)",
      q: "The waves which can propagate in gases are:",
      o: ["Transverse Waves", "Gravity Waves", "Longitudinal Waves", "Stationary Waves"],
      a: 2,
      e: "Gases have bulk modulus but lack shear modulus, meaning transverse mechanical waves cannot travel through gases; only longitudinal waves (like sound) can propagate."
    },
    {
      s: "Maths",
      c: "Statistics",
      q: "The median for the frequency distribution: x = [1, 2, 3, 4, 5, 6, 7, 8, 9] with f = [8, 10, 11, 16, 20, 25, 15, 9, 6] is:",
      o: ["6", "8", "4", "5"],
      a: 3,
      e: "Total frequency N = 8+10+11+16+20+25+15+9+6 = 120. N/2 = 60. Cumulative frequencies: 8, 18, 29, 45, 65... Since 60 falls in the class with cumulative frequency 65 (where x = 5), the median is 5."
    },
    {
      s: "Reasoning",
      c: "Classification",
      q: "Based on the English alphabetical order, which letter cluster pair does NOT belong to the group: JL-MO, BD-EH, NP-QS, LN-OQ?",
      o: ["JL-MO", "BD-EH", "NP-QS", "LN-OQ"],
      a: 1,
      e: "In JL-MO: J(+2)L, L(+1)M, M(+2)O. Same for NP-QS and LN-OQ (+2, +1, +2). In BD-EH: B(+2)D, D(+1)E, E(+3)H (+2, +1, +3), which does not match."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "Which of the following regions was one of the major sources for copper for the Harappan civilisation?",
      o: ["Afghanistan", "Maharashtra", "Rajasthan", "Bihar"],
      a: 2,
      e: "The Harappans obtained copper primarily from the Khetri mines located in Rajasthan."
    },
    {
      s: "Reasoning",
      c: "Classification",
      q: "Find the odd one out among the letter cluster pairs: DF-GJ, PR-SU, HJ-KM, MO-PR.",
      o: ["DF-GJ", "PR-SU", "HJ-KM", "MO-PR"],
      a: 0,
      e: "PR-SU: P(+2)R, R(+1)S, S(+2)U. HJ-KM: H(+2)J, J(+1)K, K(+2)M. MO-PR: M(+2)O, O(+1)P, P(+2)R. However, DF-GJ has G(+3)J (+2, +1, +3), making DF-GJ the odd one."
    },
    {
      s: "Maths",
      c: "Discount & Marked Price",
      q: "A man sold an article for ₹132 by first giving a d% discount on its marked price of ₹880, and then another discount having the same nominal value (in ₹). What is the value of d?",
      o: ["42.5", "46", "39.5", "37.3"],
      a: 0,
      e: "Nominal value of first discount = (d/100) × 880 = 8.8d. Second discount is also ₹8.8d. Total discount = 17.6d. Selling Price = 880 - 17.6d = 132 => 17.6d = 748 => d = 748 / 17.6 = 42.5%."
    },
    {
      s: "Reasoning",
      c: "Seating Arrangement",
      q: "A, B, C, D, E, F and G sit around a circular table facing centre. D is immediate right of A. 3 people between D and G (from left of D). 3 people between A and F (from right of F). E sits immediate right of B. How many people sit between D and E when counted from right of D?",
      o: ["3", "2", "1", "4"],
      a: 3,
      e: "Arranging positions clockwise from A (1): A(1), D(2), C(3), B(4), E(5), G(6), F(7). Counting right (clockwise) from D to E passes C, B, then reaches E, giving 4 people across the remaining circle."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "If a:b:c = 3:4:5 and 2a - 3b + 4c = 56, then the value of c is:",
      o: ["20", "22", "21", "24"],
      a: 0,
      e: "Let a = 3k, b = 4k, c = 5k. 2(3k) - 3(4k) + 4(5k) = 6k - 12k + 20k = 14k = 56 => k = 4. Therefore, c = 5k = 5 × 4 = 20."
    }
  ]
};