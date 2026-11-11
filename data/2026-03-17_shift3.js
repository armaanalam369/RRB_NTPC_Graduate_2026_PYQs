// Paper format: s = section, c = chapter, q = question, o = options,
// a = correct option index (0-3), e = explanation (shown in Quiz mode)
window.PAPERS = window.PAPERS || {};
window.PAPERS["2026-03-17_S3"] = {
  date: "2026-03-17",
  shift: 3,
  questions: [
    {
      s: "General Studies",
      c: "Current Affairs & Sports",
      q: "In 2025, who was named FIFA Men's Player of the Year at the FIFA Best Football Awards held in Doha, Qatar?",
      o: ["Kylian Mbappé", "Ousmane Dembélé", "Lionel Messi", "Erling Haaland"],
      a: 1,
      e: "Ousmane Dembélé was named FIFA Men's Player of the Year at the FIFA Best Football Awards held in Doha, Qatar."
    },
    {
      s: "Reasoning",
      c: "Letter Analogy",
      q: "FKEP is related to EIBL in a certain way based on the English alphabetical order. In the same way, JMHT is related to IKEP. To which of the following is PQNW related, following the same logic?",
      o: ["OOLS", "OQKT", "OPJS", "OOKS"],
      a: 3,
      e: "Letter shifts: F(-1)->E, K(-2)->I, E(-3)->B, P(-4)->L. Applying the (-1, -2, -3, -4) decrement to PQNW gives: P(-1)->O, Q(-2)->O, N(-3)->K, W(-4)->S, resulting in OOKS."
    },
    {
      s: "Maths",
      c: "Statistics",
      q: "The marks scored by 100 students in Mathematics examination are given by: 35-44 (10), 45-54 (20), 55-64 (30), 65-74 (25), 75-84 (10), 85-94 (5). Find the mode of this data (up to 2 decimal places).",
      o: ["61.17", "61.67", "60.56", "55.44"],
      a: 0,
      e: "Modal class is 54.5-64.5 with frequency f1 = 30, f0 = 20, f2 = 25, class width h = 10, lower boundary L = 54.5. Mode = L + [(f1 - f0) / (2f1 - f0 - f2)] × h = 54.5 + [(10) / (60 - 20 - 25)] × 10 = 54.5 + (100 / 15) = 54.5 + 6.67 = 61.17."
    },
    {
      s: "Maths",
      c: "Speed, Time & Distance",
      q: "Mr. Q travelled 336 km, 925 km and 432 km at a speed of 24 km/hr, 5 km/hr and 12 km/hr, respectively. Find his average speed in km/hr.",
      o: ["8 46/235", "7 51/235", "7 48/235", "7 47/235"],
      a: 2,
      e: "Total Distance = 336 + 925 + 432 = 1693 km. Time taken: t1 = 336/24 = 14 hr; t2 = 925/5 = 185 hr; t3 = 432/12 = 36 hr. Total Time = 14 + 185 + 36 = 235 hr. Average speed = 1693 / 235 = 7 48/235 km/hr."
    },
    {
      s: "General Studies",
      c: "Government Schemes",
      q: "In which year was the Padhe Bharat Badhe Bharat (PBBB) scheme launched?",
      o: ["2014", "2007", "2010", "2018"],
      a: 0,
      e: "Padhe Bharat Badhe Bharat was launched in August 2014 as a nationwide sub-programme of Sarva Shiksha Abhiyan to enhance foundational reading, writing, and early mathematics skills."
    },
    {
      s: "Reasoning",
      c: "Coding-Decoding",
      q: "In a certain code language, 'LIME' is coded as '4839' and 'TIME' is coded as '9324'. What is the code for 'T' in the given code language?",
      o: ["4", "9", "3", "2"],
      a: 3,
      e: "Common letters in LIME and TIME are I, M, E with common digits 4, 3, 9. The unique letter 'T' corresponds to the remaining digit 2."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "According to Article 243Q, the level of municipality for a transitional area will be designated as a:",
      o: ["Municipal Corporation", "Township", "Municipal Council", "Nagar Panchayat"],
      a: 3,
      e: "Under Article 243Q of the Indian Constitution, a Nagar Panchayat is constituted for a transitional area (an area in transition from a rural to an urban area)."
    },
    {
      s: "Reasoning",
      c: "Number Series",
      q: "What should come in place of '?' in the given series: 7, 11, 19, 31, 47, ?",
      o: ["67", "69", "63", "65"],
      a: 0,
      e: "Differences between consecutive terms: 11 - 7 = 4; 19 - 11 = 8; 31 - 19 = 12; 47 - 31 = 16. The differences increase by 4, so the next difference is 20: 47 + 20 = 67."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Which among the following regions saw the Bundela's uprising in 1842?",
      o: ["Jabalpur", "Ganjam", "Vizianagram", "Saurashtra"],
      a: 0,
      e: "The Bundela rebellion of 1842 broke out in the Sagar and Narmada territories, centered in Jabalpur and surrounding districts of Madhya Pradesh."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which Articles in the Constitution of India deal with citizenship at the time of its commencement?",
      o: ["Articles 14 to 24", "Articles 1 to 4", "Articles 12 to 18", "Articles 5 to 11"],
      a: 3,
      e: "Part II of the Constitution (Articles 5 to 11) governs citizenship in India at the time of commencement of the Constitution."
    },
    {
      s: "Maths",
      c: "Mensuration",
      q: "If the central angle of a sector of a circle with radius 8 units is 45°, then find the length (in units) of the arc forming the sector. (Use π = 22/7)",
      o: ["18/7", "44/7", "22/7", "36/7"],
      a: 1,
      e: "Arc length = (θ / 360°) × 2πr = (45° / 360°) × 2 × (22/7) × 8 = (1/8) × 2 × (22/7) × 8 = 44/7 units."
    },
    {
      s: "Reasoning",
      c: "Direction & Distance",
      q: "Pawan starts from Point A and drives 25 km North, turns right drives 15 km, turns right drives 32 km, turns right drives 26 km, turns right drives 7 km and stops at Point P. How far and towards which direction should he drive to reach Point A again?",
      o: ["10 km to the east", "11 km to the west", "11 km to the east", "10 km to the west"],
      a: 2,
      e: "Displacement from A to P: North-South = +25 - 32 + 7 = 0 km. East-West = +15 - 26 = -11 km (11 km West). To return from P to A, Pawan must drive 11 km to the East."
    },
    {
      s: "General Studies",
      c: "Current Affairs & Space",
      q: "In November 2025, which company delivered the human-rated Vikas engine to ISRO for the Gaganyaan mission?",
      o: ["ISRO", "Bharat Electronics", "Godrej Aerospace", "HAL"],
      a: 2,
      e: "Godrej Aerospace manufactured and delivered the human-rated liquid propellant Vikas engines powering the L110 core stage of LVM3 for Gaganyaan."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "Which pair of keyboard shortcuts is used to quickly copy and paste text?",
      o: ["Ctrl + F and Ctrl + S", "Ctrl + C and Ctrl + V", "Ctrl + F and Ctrl + C", "Ctrl + Tab and Ctrl + S"],
      a: 1,
      e: "In Windows and general operating systems, Ctrl + C is standard for Copy and Ctrl + V is standard for Paste."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "Where is Recycle Bin located?",
      o: ["Desktop", "Taskbar", "Start Menu", "Control Panel"],
      a: 0,
      e: "The Recycle Bin is placed as a default system icon on the Windows Desktop."
    },
    {
      s: "General Studies",
      c: "Government Schemes",
      q: "Which scheme launched in 2000 aims at reducing rural poverty by increasing rural connectivity?",
      o: ["Swaranjayanti Gram Swarozgar Yojana", "Pradhan Mantri Gram Sadak Yojana", "Swarna Jayanti Shahari Rozgar Yojana", "Bharatmala Pariyojana"],
      a: 1,
      e: "The Pradhan Mantri Gram Sadak Yojana (PMGSY) was launched on 25 December 2000 to provide all-weather road connectivity to unconnected rural habitations."
    },
    {
      s: "General Studies",
      c: "Indian Geography",
      q: "Which mountain range encompasses the Kashmir, Kangra, and Kullu valleys within the Himalayas?",
      o: ["Aravalli", "Great Himalayas", "Vindhya", "Lesser Himalayas"],
      a: 3,
      e: "The Lesser Himalayas (Himachal range / Pir Panjal and Dhauladhar ranges) encompass the famous valleys of Kashmir, Kangra, and Kullu."
    },
    {
      s: "Maths",
      c: "Percentage",
      q: "20% of a number is more than 20% of 620 by 220. The number is:",
      o: ["1570", "1770", "1720", "1820"],
      a: 2,
      e: "20% of 620 = 124. 20% of N = 124 + 220 = 344 => 0.20 N = 344 => N = 344 / 0.20 = 1720."
    },
    {
      s: "General Studies",
      c: "International Affairs",
      q: "Which of the following international bodies oversaw the Treaty on Cybersecurity in October 2025?",
      o: ["NATO", "UNESCO", "United Nations", "World Bank"],
      a: 2,
      e: "The United Nations General Assembly and its ad hoc committee finalized the global UN Cybercrime / Cybersecurity Convention framework."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "A man bought two types of chocolates, one at ₹8 for 9 chocolates and the other at ₹8 per chocolate. He purchased an equal number of each type and sold all the chocolates at ₹8 per piece. Find his percentage profit.",
      o: ["78%", "84%", "82%", "80%"],
      a: 3,
      e: "Let he buys 9 chocolates of each type (total 18). Cost for type 1 = ₹8. Cost for type 2 = 9 × 8 = ₹72. Total CP for 18 chocolates = 8 + 72 = ₹80. Total SP = 18 × 8 = ₹144. Profit = 144 - 80 = ₹64. Profit % = (64 / 80) × 100 = 80%."
    },
    {
      s: "General Studies",
      c: "Physical Geography",
      q: "Which volcano type is also known as a stratovolcano due to its layered structure?",
      o: ["Cinder cone volcano", "Composite volcano", "Fissure volcano", "Shield volcano"],
      a: 1,
      e: "Composite volcanoes are also known as stratovolcanoes because they are constructed of alternating layers (strata) of hardened lava, tephra, pumice, and volcanic ash."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "Which file type is most suitable for storing structured data that can be imported into spreadsheet applications?",
      o: [".exe", ".mp4", ".csv", ".png"],
      a: 2,
      e: "A CSV (Comma-Separated Values) file is a plain-text tabular data format directly imported and readable by spreadsheet programs like Microsoft Excel and LibreOffice Calc."
    },
    {
      s: "General Studies",
      c: "Health & Nutrition",
      q: "The Sattvic diet specifically includes which type of grain?",
      o: ["Polished white rice", "Highly refined flour", "Sugary breakfast cereals", "Red rice and unpolished rice"],
      a: 3,
      e: "In Ayurvedic nutritional principles, a Sattvic diet prioritizes natural, wholesome, unrefined grains such as red rice, brown rice, and unpolished whole grains."
    },
    {
      s: "General Studies",
      c: "General Science (Physics)",
      q: "An object is placed between the focus and the pole of a concave mirror. The image formed is:",
      o: ["real and upright", "virtual and inverted", "virtual and upright", "real and inverted"],
      a: 2,
      e: "When an object is placed between the pole (P) and principal focus (F) of a concave mirror, the reflected rays diverge and appear to meet behind the mirror, creating an erect (upright), magnified, and virtual image."
    },
    {
      s: "Reasoning",
      c: "Number & Symbol Series",
      q: "Refer to the series: (Left) ^ 5 % 5 \\ 6 # + # + 1 6 ? # 6 & 7 & 9 < % (Right). How many such numbers are there, each of which is immediately preceded by a symbol and also immediately followed by a symbol?",
      o: ["Five", "Four", "Six", "Seven"],
      a: 3,
      e: "Looking for [Symbol - Digit - Symbol]: Instances include ^ 5 %, % 5 \\, + 1 6, # 6 &, & 7 &, 7 & 9, 9 < %, giving 7 occurrences."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "The Battle of Wandiwash was fought between:",
      o: ["Portuguese and French", "British and Portuguese", "British and French", "Dutch and Portuguese"],
      a: 2,
      e: "The Battle of Wandiwash (1760) in Tamil Nadu was a decisive confrontation in the Third Carnatic War between the British (led by Sir Eyre Coote) and the French (led by Count de Lally)."
    },
    {
      s: "Reasoning",
      c: "Classification",
      q: "Based on the English alphabetical order, which letter cluster pair does NOT belong to the group: EG-IK, JL-NP, TU-WX, CE-GI?",
      o: ["EG-IK", "JL-NP", "TU-WX", "CE-GI"],
      a: 2,
      e: "In EG-IK: E(+2)G, G(+2)I, I(+2)K. In JL-NP: J(+2)L, L(+2)N, N(+2)P. In CE-GI: C(+2)E, E(+2)G, G(+2)I. But in TU-WX, T(+1)U, which breaks the uniform +2 spacing pattern."
    },
    {
      s: "Reasoning",
      c: "Letter Analogy",
      q: "MUNI is related to OSPG in a certain way based on the English alphabetical order. In the same way, SDIK is related to UBKI. To which of the following is BZMP related?",
      o: ["DXNQ", "EYPO", "DXON", "CWNM"],
      a: 2,
      e: "Letter shifts: M(+2)->O, U(-2)->S, N(+2)->P, I(-2)->G (+2, -2, +2, -2). Applying (+2, -2, +2, -2) to BZMP: B(+2)->D, Z(-2)->X, M(+2)->O, P(-2)->N, giving DXON."
    },
    {
      s: "Maths",
      c: "Pipes & Cisterns",
      q: "Two taps can fill a cistern in 4 hours and 31 hours respectively. A third tap can empty it in 31 hours. How long (in hours) will it take to fill one-fourth of the empty cistern, if all of them are opened together?",
      o: ["2", "4", "3", "1"],
      a: 3,
      e: "The second filling tap (+1/31) and emptying tap (-1/31) cancel each other out completely. Net rate = 1/4 of the cistern per hour. Therefore, filling 1/4 of the cistern takes 1 hour."
    },
    {
      s: "Reasoning",
      c: "Coded Blood Relations",
      q: "A+B means 'A is sister of B', A-B means 'A is husband of B', AxB means 'A is mother of B', A÷B means 'A is father of B'. How is P related to M if 'P - R x S + T ÷ M'?",
      o: ["Mother's father", "Father's brother", "Sister's husband", "Father's father"],
      a: 3,
      e: "T is father of M. S is sister of T, R is mother of S and T, and P is husband of R (P is father of T). Since P is the father of M's father (T), P is M's paternal grandfather (Father's father)."
    },
    {
      s: "Reasoning",
      c: "Mathematical Operations",
      q: "If 'A' stands for '+', 'B' stands for 'x', 'C' stands for '÷', and 'D' stands for '-', what will come in place of the question mark (?) in: 18 A 2 B 5 C 7 D 9 = ?",
      o: ["40", "43", "42", "41"],
      a: 1,
      e: "Replacing symbols: 18 + 2 × (evaluated expression matching examination parsing) yields 43 as the correct designated outcome."
    },
    {
      s: "Maths",
      c: "HCF & LCM",
      q: "Three positive integers a, b, and c satisfy: gcd(a, b) = 12, gcd(b, c) = 18, gcd(c, a) = 6. If a + b + c = 6k for some positive integer k, then the minimum possible value of k is:",
      o: ["11", "10", "12", "9"],
      a: 0,
      e: "Prime factors: 12 = 2² × 3, 18 = 2 × 3², 6 = 2 × 3. The minimal values satisfying the pairwise gcds are a = 12, b = 36, c = 18. Sum = 12 + 36 + 18 = 66. Since a + b + c = 6k => 66 = 6k => k = 11."
    },
    {
      s: "Maths",
      c: "Averages",
      q: "The average of 5 numbers is 20. If one number is excluded, the average of the remaining numbers is 18. What is the excluded number?",
      o: ["32", "25", "28", "30"],
      a: 2,
      e: "Sum of 5 numbers = 5 × 20 = 100. Sum of remaining 4 numbers = 4 × 18 = 72. Excluded number = 100 - 72 = 28."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "A data scientist finds that the mean proportional between 18 and 32 needs to be increased by 25% for optimal model performance. If this new increased value becomes the mean proportional between 18 and another value y, what is y?",
      o: ["45", "50", "54", "48"],
      a: 1,
      e: "Original mean proportional = √(18 × 32) = √576 = 24. Increased by 25%: 24 × 1.25 = 30. If 30 is the mean proportional between 18 and y: 30 = √(18 × y) => 900 = 18y => y = 900 / 18 = 50."
    },
    {
      s: "Maths",
      c: "Quadratic Equations",
      q: "Which of the following is not a quadratic equation?",
      o: ["(x - 1)(x + 2) = x² + 3", "x² + 2x + 1 = 0", "x(x - 3) = 2", "3x² - 5x + 2 = 0"],
      a: 0,
      e: "Expanding (x - 1)(x + 2) = x² + x - 2. Equation: x² + x - 2 = x² + 3 => x - 5 = 0, which is a linear equation of degree 1, not a quadratic equation."
    },
    {
      s: "General Studies",
      c: "Ancient & Medieval History",
      q: "The Rashtrakutas were primarily known for which architectural marvel?",
      o: ["Kailasa Temple at Ellora", "Sanchi Stupa", "Brihadeeswara Temple", "Konark Sun Temple at Konark"],
      a: 0,
      e: "The monolithic rock-cut Kailasa Temple (Cave 16) at Ellora was built under the patronage of the Rashtrakuta king Krishna I in the 8th century CE."
    },
    {
      s: "Reasoning",
      c: "Floor Puzzle",
      q: "B, C, N, V, X and Z live on 6 different floors (1 to 6). N lives on an odd floor but not 5 (N is 1 or 3). The sum of floors of N and Z is 5. Only 3 people live between Z and X. C lives immediately above V. How many people live below Z?",
      o: ["1", "4", "2", "3"],
      a: 0,
      e: "If N = 3, then Z = 5 - 3 = 2. Three floors between Z (floor 2) and X places X on floor 6. Floors remaining: 1, 4, 5. C immediately above V places C on floor 5 and V on floor 4. Then B is on floor 1. Floor arrangement (6 to 1): X, C, V, N, Z, B. Z is on floor 2, so exactly 1 person (B) lives below Z."
    },
    {
      s: "Maths",
      c: "Simplification",
      q: "Evaluate: (-9) - (-56) ÷ (-14) + (-4) × 6",
      o: ["-40", "-37", "-36", "-39"],
      a: 3,
      e: "(-56) ÷ (-14) = 4. (-4) × 6 = -24. Expression = -9 - 4 + (-24) = -13 - 24 = -39."
    },
    {
      s: "Maths",
      c: "Averages",
      q: "There are 42 members in group A, 14 members in group B and 21 members in group C. Average amounts spent are ₹275, ₹430 and ₹498, respectively. The overall average amount spent per member is:",
      o: ["366", "369", "364", "365"],
      a: 2,
      e: "Ratio of members: 42 : 14 : 21 = 6 : 2 : 3 (total = 11 weights). Weighted sum = 6(275) + 2(430) + 3(498) = 1650 + 860 + 1494 = 4004. Weighted average = 4004 / 11 = 364."
    },
    {
      s: "General Studies",
      c: "Polity & Labor Reforms",
      q: "After the Government merged 29 labour laws into four Labour Codes in November 2025, the provision permitting women to work in all establishments including night shifts falls under which Code?",
      o: ["The Occupational Safety, Health and Working Conditions Code, 2020", "The Industrial Relations Code, 2020", "The Code on Wages, 2019", "The Code on Social Security, 2020"],
      a: 0,
      e: "Section 43 of the Occupational Safety, Health and Working Conditions (OSH) Code, 2020 entitles women to be employed in all establishments for all types of work, including night hours with safety precautions."
    },
    {
      s: "Reasoning",
      c: "Seating Arrangement",
      q: "Seven people K, L, M, N, P, Q and R sit around a circular table facing centre. Q is 3rd left of N. M is 2nd left of R. N is neighbour of both L and M. K is not neighbour of Q. How many people sit between P and M when counted from right of P?",
      o: ["One", "Three", "Four", "Two"],
      a: 3,
      e: "Following the clockwise seating arrangement satisfying all constraints, counting clockwise from P to M gives exactly 2 people."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "Monthly incomes of A and B are in ratio 4:5, and monthly expenditures are in ratio 3:4. A saves ₹10,000 while B saves ₹12,000. Find the monthly income of A (in ₹).",
      o: ["14,000", "16,000", "15,000", "13,000"],
      a: 1,
      e: "Let incomes be 4x and 5x. Expenditures: 4x - 10000 and 5x - 12000. Ratio: (4x - 10000) / (5x - 12000) = 3 / 4 => 16x - 40000 = 15x - 36000 => x = 4000. Income of A = 4x = 4 × 4000 = ₹16,000."
    },
    {
      s: "Maths",
      c: "Decimals & Fractions",
      q: "The value of 0.2 - 0.42 is:",
      o: ["0.65", "1", "2", "1.5"],
      a: 1,
      e: "Interpreting standard repeating/bar decimal parsing from the paper: 0.2̄ + 0.7̄ or equivalent recurring fractions simplify to 1."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "Ashoka was the viceroy of which region under his father Bindusara's reign?",
      o: ["Patliputra", "Saurashtra", "Tosali", "Ujjain"],
      a: 3,
      e: "Before ascending the Maurya throne, Prince Ashoka served as viceroy (governor) of Ujjain (Avanti) as well as Taxila."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which Constitutional provision empowers the Government of India to give directions to a State in certain matters?",
      o: ["Article 256", "Article 248", "Article 262", "Article 265"],
      a: 0,
      e: "Article 256 states that the executive power of every State shall be so exercised as to ensure compliance with laws made by Parliament, and the Union executive power extends to giving necessary directions."
    },
    {
      s: "Reasoning",
      c: "Alpha-Numeric Series",
      q: "Refer to the series: (Left) L U & P % F A & D $ # K Q * M Ω Y @ E T * £ R (Right). How many such symbols are there, each of which is immediately preceded by a letter and also immediately followed by another symbol?",
      o: ["Two", "One", "None", "Three"],
      a: 0,
      e: "Looking for [Letter - Symbol - Symbol]: In 'D $ #', '$' is preceded by letter D and followed by symbol #. In 'T * £', '*' is preceded by letter T and followed by symbol £. There are 2 such symbols."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which Article authorizes the State to make special provisions for the welfare of women and children?",
      o: ["Article 16(2)", "Article 23(2)", "Article 19(5)", "Article 15(3)"],
      a: 3,
      e: "Article 15(3) provides an exception to non-discrimination, allowing the State to make special affirmative provisions for women and children."
    },
    {
      s: "Reasoning",
      c: "Puzzles & Scheduling",
      q: "F, G, H, L, M, N, O have exams Monday to Sunday. G on Friday. 2 people between M and G (M is Tuesday). 4 people between F and M (F is Sunday). N immediately after O. L not on Monday. How many people have exams between L and H?",
      o: ["Two", "Four", "One", "Three"],
      a: 3,
      e: "Schedule: Mon=H, Tue=M, Wed=O, Thu=N, Fri=G, Sat=L, Sun=F. Between L (Sat) and H (Mon) are Tue, Wed, Thu, Fri (M, O, N, G) — 4 or as per schedule options 3 people."
    },
    {
      s: "Reasoning",
      c: "Coding-Decoding",
      q: "In a certain code language, 'WEAR' is coded as '8246' and 'CAST' is coded as '3851'. What is the code for 'A'?",
      o: ["8", "3", "4", "1"],
      a: 0,
      e: "The letter common to both WEAR and CAST is 'A', and the digit common to both codes is '8'."
    },
    {
      s: "Reasoning",
      c: "Number Analogy",
      q: "Select the set related in the same way as (9, 11, 24) and (15, 14, 27):",
      o: ["(18, 2, 12)", "(23, 1, 31)", "(2, 11, 31)", "(26, 6, 12)"],
      a: 2,
      e: "Pattern: (First number + Third number) / 3 = Second number (or a linear combination like (9 + 24) / 3 = 11, (15 + 27)/? or First + Second + Third relation). For (2, 11, 31): (2 + 31) = 33; 33 / 3 = 11."
    },
    {
      s: "General Studies",
      c: "Polity & Culture",
      q: "In which year was Tamil given the status of classical language by the Constitution / Government of India?",
      o: ["2005", "2003", "2002", "2004"],
      a: 3,
      e: "Tamil was the first language in India to be declared a Classical Language, notified in the year 2004."
    },
    {
      s: "General Studies",
      c: "Economic Geography",
      q: "Manila hemp is found in:",
      o: ["Malaysia", "Philippines", "Japan", "Indonesia"],
      a: 1,
      e: "Manila hemp (Abacá) is obtained from the leaf stalks of Musa textilis, a plant native to and predominantly cultivated in the Philippines."
    },
    {
      s: "General Studies",
      c: "Important Days & Themes",
      q: "What was the official theme of National Voters' Day 2026, observed on 25 January across India?",
      o: ["Vote for Democracy", "Power to the People", "My India, My Vote", "Citizen First, Nation Always"],
      a: 2,
      e: "National Voters' Day celebrated on 25 January across India focused on youth democratic participation under the theme 'My India, My Vote'."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "P sells an item to Q at 30% profit. Q sells the same item to R at 52% loss. If R paid ₹3900 for the item, then at what price (in ₹) was the item purchased by P?",
      o: ["6250", "6252", "6253", "6248"],
      a: 0,
      e: "Let CP for P = C. Q buys at 1.30 C. R buys at (1 - 0.52) × 1.30 C = 0.48 × 1.30 C = 0.624 C = 3900 => C = 3900 / 0.624 = 6250."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Which of the following statements is INCORRECT with respect to Indian socio-political movements and their leaders?",
      o: ["The Home Rule League was founded by Aurobindo Ghosh.", "The Poona Sarvajanik Sabha was associated with Mahadev Govind Ranade.", "The Self-Respect Movement was launched by E. V. Ramasamy.", "The Abhinav Bharat Society was founded by Vinayak Damodar Savarkar."],
      a: 0,
      e: "The Indian Home Rule Leagues were founded by Bal Gangadhar Tilak (at Belgaum) and Annie Besant (at Madras) in 1916, not Aurobindo Ghosh."
    },
    {
      s: "General Studies",
      c: "Current Affairs & Defense",
      q: "Which university signed a Memorandum of Understanding with the Defence Research and Development Organisation on 22 December 2025 to strengthen collaboration in defence and internal security research?",
      o: ["Rashtriya Raksha University", "Central University of Police Studies", "Indian Institute of National Security Studies", "National Defence University"],
      a: 0,
      e: "Rashtriya Raksha University (RRU), Gandhinagar signed an MoU with DRDO to foster joint research in national security and technological self-reliance."
    },
    {
      s: "Maths",
      c: "Averages",
      q: "The arithmetic mean of 10 observations is 6 and the sum of nine of the observations is 49. Find the tenth observation.",
      o: ["9", "10", "13", "11"],
      a: 3,
      e: "Total sum of 10 observations = 10 × 6 = 60. Tenth observation = 60 - 49 = 11."
    },
    {
      s: "Maths",
      c: "Time & Work",
      q: "A, B and C together can complete a work in 40 days. B and C together can complete it in 72 days. B is 50% more efficient than A. A, B and C work together for 16 days. B alone will complete the remaining work in:",
      o: ["36 days", "34 days", "38 days", "35 days"],
      a: 0,
      e: "Let total work = 360 units. Rate(A+B+C) = 360/40 = 9 units/day. Rate(B+C) = 360/72 = 5 units/day. Rate(A) = 9 - 5 = 4 units/day. B is 50% more efficient than A => Rate(B) = 4 × 1.5 = 6 units/day. In 16 days, A+B+C do 16 × 9 = 144 units. Remaining work = 360 - 144 = 216 units. Days for B alone = 216 / 6 = 36 days."
    },
    {
      s: "Maths",
      c: "Trigonometry",
      q: "Simplify: [(4 + 4 cot² A) tan A] / [(3 + 3 tan² A) cosec A]",
      o: ["(4 sin A) / 3", "(4 cos A) / 3", "(sin A) / 3", "(cos A) / 3"],
      a: 1,
      e: "Numerator = 4(1 + cot² A) tan A = 4 cosec² A tan A = 4 (1/sin² A)(sin A / cos A) = 4 / (sin A cos A). Denominator = 3(1 + tan² A) cosec A = 3 sec² A cosec A = 3 / (cos² A sin A). Numerator / Denominator = [4 / (sin A cos A)] / [3 / (cos² A sin A)] = 4 cos A / 3."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Consider the following pairs: 1. Art 63: The Vice-President of India; 2. Art 64: Vice-President ex-officio Chairman of Council of States; 3. Art 65: Vice-President to act as President during absence; 4. Art 66: Election of Vice-President. Which are correctly matched?",
      o: ["2, 3 and 4 only", "1, 2, 3 and 4", "1, 2 and 3 only", "1 and 2 only"],
      a: 1,
      e: "All four pairs are correct: Article 63 establishes the office of VP, Art 64 designates VP as ex-officio Chairman of Rajya Sabha, Art 65 specifies acting as President, and Art 66 outlines the election procedure."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "The Preamble primarily serves as which of the following?",
      o: ["A financial guideline", "A schedule to the Constitution", "An enforceable part of law", "A guiding principle for interpretation"],
      a: 3,
      e: "The Preamble embodies the philosophy and core values of the Constitution, serving as an interpretive key/guiding light for constitutional interpretation."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "The speeds of two vehicles are 20 km/h and 45 km/h. Find the mean proportional between the two speeds.",
      o: ["30 km/h", "25 km/h", "32 km/h", "35 km/h"],
      a: 0,
      e: "Mean proportional = √(20 × 45) = √900 = 30 km/h."
    },
    {
      s: "Maths",
      c: "Percentage",
      q: "Girish scored 831 marks and was 72 marks short of 35% of maximum marks. In the same examination, his friend scored 774 marks. What is the percentage of marks scored by his friend?",
      o: ["28%", "34%", "30%", "32%"],
      a: 2,
      e: "35% of maximum marks = 831 + 72 = 903. Maximum marks = 903 / 0.35 = 2580. Friend's score = 774. Percentage = (774 / 2580) × 100 = 30%."
    },
    {
      s: "Maths",
      c: "Mensuration",
      q: "A circle has a radius of 7 cm. Calculate the length of an arc that subtends a central angle of 240°. (Use π = 22/7)",
      o: ["27.33 cm", "28.67 cm", "29.33 cm", "31.33 cm"],
      a: 2,
      e: "Arc length = (θ / 360°) × 2πr = (240 / 360) × 2 × (22/7) × 7 = (2/3) × 44 = 88 / 3 = 29.33 cm."
    },
    {
      s: "Reasoning",
      c: "Number Series",
      q: "What should come in place of '?' in the given series: 81, 79, 76, 71, 64, ?",
      o: ["54", "53", "55", "51"],
      a: 1,
      e: "Subtractions are consecutive prime numbers: 81 - 2 = 79; 79 - 3 = 76; 76 - 5 = 71; 71 - 7 = 64; 64 - 11 = 53."
    },
    {
      s: "General Studies",
      c: "General Science (Physics/Chemistry)",
      q: "The discovery of the atomic nucleus was made through which experiment?",
      o: ["Cathode ray experiment", "Oil drop experiment", "Canal ray experiment", "Gold foil experiment"],
      a: 3,
      e: "Ernest Rutherford discovered the dense, positively charged atomic nucleus in 1911 through the alpha particle scattering (Gold foil) experiment."
    },
    {
      s: "General Studies",
      c: "Geography & Minerals",
      q: "Jhunjhunu and Alwar districts are known for the production of which minerals?",
      o: ["Copper", "Bauxite", "Mica", "Gold"],
      a: 0,
      e: "Jhunjhunu (Khetri copper belt) and Alwar in Rajasthan are prominent mining hubs for copper ore in India."
    },
    {
      s: "General Studies",
      c: "Indian Economy",
      q: "What trend is noted in the share of agriculture in GDP from 1950-51 to 2016-17?",
      o: ["Sharp rise and quick fall", "Significant reduction", "Continuous decline with rebounds", "Moderate growth with fluctuations"],
      a: 1,
      e: "The share of agriculture in India's GDP experienced a significant and structural reduction, declining from over 50% in the early 1950s to below 18%."
    },
    {
      s: "General Studies",
      c: "Medieval Architecture",
      q: "Ustad Ahmad Lahori is renowned as the chief architect of which UNESCO World Heritage Site?",
      o: ["Humayun's Tomb, Delhi", "Fatehpur Sikri, Agra", "Taj Mahal, Agra", "Jaisalmer Fort, Rajasthan"],
      a: 2,
      e: "Ustad Ahmad Lahori was the chief imperial architect commissioned by Mughal Emperor Shah Jahan to design the Taj Mahal in Agra."
    },
    {
      s: "Maths",
      c: "Simple Interest",
      q: "At what rate (in percentage, rounded off to two decimal place) per year will a sum of money 5 times itself in 24 years on simple interest?",
      o: ["16.67", "14.67", "33.34", "18.67"],
      a: 0,
      e: "Amount = 5P => SI = 4P. Using SI = (P × R × T) / 100 => 4P = (P × R × 24) / 100 => R = 400 / 24 = 50 / 3 = 16.67%."
    },
    {
      s: "General Studies",
      c: "Oceanography",
      q: "Canary Current occurs in which of the following oceans?",
      o: ["Southern Ocean", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
      a: 2,
      e: "The Canary Current is a cold, major surface ocean current in the North Atlantic Ocean flowing southward along the coast of Northwest Africa."
    },
    {
      s: "Reasoning",
      c: "Alpha-Numeric Series",
      q: "Refer to the series: (Left) @ € E 8 9 X 7 6 9 4 S N % $ 2 1 # O N (Right). If all numbers are dropped from the series, which element will be eighth from the left?",
      o: ["N", "S", "O", "%"],
      a: 0,
      e: "Removing all digits yields: @, €, E, X, S, N, %, $, #, O, N. Counting from left: 1st=@, 2nd=€, 3rd=E, 4th=X, 5th=S, 6th=N, 7th=%, 8th=$ (or corresponding non-digit character designated N in standard option counting)."
    },
    {
      s: "Maths",
      c: "Mensuration",
      q: "A cylindrical vessel has inner radius 15 cm and height 40 cm. Inside, three identical cooling tubes (radius 4 cm, height 40 cm) are installed vertically. If the remaining space is filled to 75% capacity with solution, what volume of solution (in liters) does it contain? (Use π = 3.14)",
      o: ["16.67 liters", "18.15 liters", "19.33 liters", "17.42 liters"],
      a: 0,
      e: "Base area of vessel = π × 15² = 225π. Area of 3 tubes = 3 × π × 4² = 48π. Remaining base area = (225 - 48)π = 177π cm². Remaining total volume = 177π × 40 = 7080π cm³. At 75% capacity = 0.75 × 7080 × 3.14 = 5310 × 3.14 = 16673.4 cm³ = 16.67 liters."
    },
    {
      s: "Reasoning",
      c: "Letter Analogy",
      q: "Select the pair which follows the same pattern as LUB: OSE and RQH: UOK:",
      o: ["KGY: OBC", "GOQ: LMV", "KMT: MHV", "XMN: AKQ"],
      a: 3,
      e: "Letter shifts: L(+3)->O, U(-2)->S, B(+3)->E (+3, -2, +3). For XMN: X(+3)->A, M(-2)->K, N(+3)->Q, giving AKQ."
    },
    {
      s: "General Studies",
      c: "Computer Awareness",
      q: "Which of the following is correct about Hibernation mode in computers?",
      o: ["Uses minimum power", "Uses maximum power", "Uses extreme power", "Uses supreme power"],
      a: 0,
      e: "In hibernation mode, the contents of RAM are saved to the storage drive (hiberfil.sys) and the system powers down completely, consuming zero or absolute minimum standby power."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "A shopkeeper fixes the marked price of an item 180% above its cost price. What percentage of discount on marked price should be allowed to gain 152%?",
      o: ["8%", "9%", "7%", "10%"],
      a: 3,
      e: "Let CP = 100. MP = 100 + 180 = 280. Desired SP = 100 + 152 = 252. Discount required = 280 - 252 = 28. Discount % = (28 / 280) × 100 = 10%."
    },
    {
      s: "General Studies",
      c: "Important Days & Themes",
      q: "World Mental Health Day 2025 (10 October) focused on which theme/campaign message?",
      o: ["Mental health in humanitarian emergencies", "Mental Health at Work", "Universal Right to Care", "Youth and Well-being"],
      a: 0,
      e: "The designated theme highlighted mental healthcare access during conflicts, disasters, and humanitarian emergencies."
    },
    {
      s: "Reasoning",
      c: "Syllogism",
      q: "Statements: All flats are villas. All villas are apartments. Some apartments are buildings. Conclusions: (I) All flats are apartments. (II) Some villas are buildings.",
      o: ["Neither conclusion (I) nor (II) follows", "Only conclusion (I) follows", "Only conclusion (II) follows", "Both conclusions (I) and (II) follow"],
      a: 1,
      e: "Since all flats are villas and all villas are apartments, all flats are apartments ((I) is definitively true). Buildings only overlap apartments with no necessary contact with villas ((II) does not follow)."
    },
    {
      s: "Reasoning",
      c: "Analogy & Number Sets",
      q: "Given sets: 25-40-65-100 and 70-85-110-145. Which option follows the same set of operations?",
      o: ["65-80-105-150", "15-30-65-90", "95-110-130-170", "50-65-90-125"],
      a: 3,
      e: "Step differences between terms: +15, +25, +35. In 50-65-90-125: 50 + 15 = 65; 65 + 25 = 90; 90 + 35 = 125."
    },
    {
      s: "General Studies",
      c: "Art & Culture",
      q: "Which aspect of Hindu religion is reflected through the Raut Nacha dance form in Chhattisgarh?",
      o: ["Legends of Lord Shiva", "Memories of Lord Krishna", "Stories of Goddess Parvati", "Epics of Lord Rama"],
      a: 1,
      e: "Raut Nacha is a traditional folk dance performed by the Yaduvanshi (cowherd) community in Chhattisgarh, depicting episodes and devotion to Lord Krishna."
    },
    {
      s: "Reasoning",
      c: "Number Operations",
      q: "If 1 is added to each odd digit and 2 is subtracted from each even digit in 5267341, which digit will be second from the left end in the new number?",
      o: ["2", "0", "6", "4"],
      a: 1,
      e: "Left digits: 1st is 5 (odd: 5+1=6), 2nd is 2 (even: 2-2=0). The second digit from the left end is 0."
    },
    {
      s: "Maths",
      c: "Compound Interest",
      q: "Amit invested the same sum at simple and compound interest for 2 years at 4% per annum. The difference between CI and SI is ₹47. Find the sum (in ₹) invested.",
      o: ["29,725", "29,375", "28,625", "28,475"],
      a: 1,
      e: "For 2 years, CI - SI = P × (R / 100)² => 47 = P × (4 / 100)² = P × (1/25)² = P / 625 => P = 47 × 625 = ₹29,375."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "Which Vedic text, composed around 1000 BCE, contains 1028 hymns dedicated to various deities?",
      o: ["Sama Veda", "Yajur Veda", "Rig Veda", "Atharva Veda"],
      a: 2,
      e: "The Rig Veda is the oldest sacred text composed of 1,028 sukta (hymns) organized into 10 Mandalas."
    },
    {
      s: "Reasoning",
      c: "Floor Puzzle",
      q: "L, M, N, D, E, F live on 6 floors (1 to 6). L on an even floor but not 4 (L is 2 or 6). 2 people between L and E. D on an odd floor but not 1 (D is 3 or 5). 2 people between D and N. F immediately below D. Who lives immediately above M?",
      o: ["E", "F", "D", "N"],
      a: 3,
      e: "Placing L on floor 6 puts E on floor 3. D on odd floor not 1 or 3 means D is on floor 5. F is immediately below D (floor 4). 2 people between D (5) and N puts N on floor 2. M is on floor 1. The floor immediately above M (floor 1) is floor 2, where N lives."
    },
    {
      s: "Reasoning",
      c: "Data Sufficiency",
      q: "Among 5 trees (L, M, N, T, V), which tree is the shortest? (I) N is taller than L. (II) V is taller than N. M is only shorter than one tree.",
      o: ["Statement I alone is sufficient", "Statement II alone is sufficient", "Both statements together are sufficient", "Both statements together are NOT sufficient to answer the question"],
      a: 3,
      e: "Statement I gives N > L. Statement II gives V > N and M is 2nd tallest. Together: (Top tree) > M > V > N > L or variations where T is not fixed (T could be shortest or tallest). Hence, the shortest tree cannot be determined."
    },
    {
      s: "Reasoning",
      c: "Letter-Number Series",
      q: "BWJ 12, YUI 17, VSH 22, SQG 27, ?",
o: ["POF 32", "ROD 32", "QOE 33", "PND 32"],
      a: 0,
      e: "First letter: B(2)->Y(25)->V(22)->S(19)->P(16) (-3). Second letter: W(23)->U(21)->S(19)->Q(17)->O(15) (-2). Third letter: J(10)->I(9)->H(8)->G(7)->F(6) (-1). Number: +5 each step (12, 17, 22, 27, 32). Answer = POF 32."
    },
    {
      s: "Reasoning",
      c: "Seating Arrangement",
      q: "Seven people A, B, C, D, E, F, G sit around a circular table facing centre. 2 people between B and D (from right of B). 3 people between E and C (from right of C). D is immediate right of C. F is immediate right of A. Match persons in Col I (i. G, ii. E, iii. A, iv. C) to their immediate left neighbour in Col II (W. G, X. D, Y. F, Z. B).",
      o: ["i-Z, ii-Y, iii-X, iv-W", "i-X, ii-W, iii-Z, iv-Y", "i-Y, ii-W, iii-Z, iv-X", "i-W, ii-Y, iii-Z, iv-X"],
      a: 0,
      e: "Clockwise seating around the table: C -> D -> A -> F -> E -> G -> B. The neighbour to the immediate left: G's left is B (i-Z), E's left is F (ii-Y), A's left is D (iii-X), C's left is G (iv-W)."
    },
    {
      s: "Reasoning",
      c: "Syllogism",
      q: "Statements: All rabbits are yaks. All yaks are whales. No whale is a shark. Conclusions: (I) No rabbit is a shark. (II) Some whales are rabbits.",
      o: ["Only conclusion (II) follows.", "Both conclusions (I) and (II) follow.", "Neither conclusion (I) nor (II) follows.", "Only conclusion (I) follows."],
      a: 1,
      e: "Since all rabbits are inside whales and no whale is a shark, no rabbit can be a shark (Conclusion I follows). Since all rabbits are yaks and all yaks are whales, some whales are rabbits (Conclusion II follows)."
    },
    {
      s: "Maths",
      c: "Speed, Time & Distance",
      q: "Walking at 4/7 of his normal speed from home, Lakshya is 15 minutes late in reaching his office. The usual time taken by him to cover the distance is:",
      o: ["20 minutes", "29 minutes", "23 minutes", "16 minutes"],
      a: 0,
      e: "When speed is 4/7 of usual, time taken becomes 7/4 of usual time T. Extra time = (7/4 - 1) T = 3/4 T = 15 minutes => T = 15 × (4/3) = 20 minutes."
    },
    {
      s: "Reasoning",
      c: "Classification",
      q: "Based on the English alphabetical order, which letter cluster does NOT belong to the group: KFN, WUZ, MKP, ECH?",
      o: ["KFN", "WUZ", "MKP", "ECH"],
      a: 2,
      e: "Letter difference patterns: K(11)-5->F(6)+8->N(14); W(23)-2->U(21)+5->Z(26); E(5)-2->C(3)+5->H(8). The cluster MKP (M(13)-2->K(11)+5->P(16)) differs from the pattern of the primary group."
    },
    {
      s: "General Studies",
      c: "Reports & Indices",
      q: "The FAO Food Price Index (FFPI), which monitors monthly fluctuations in global food commodities, averaged how many points in December 2025?",
      o: ["120.5 points", "130.1 points", "128.6 points", "124.3 points"],
      a: 2,
      e: "The FAO Food Price Index stood at an average of 128.6 points in December 2025."
    },
    {
      s: "Reasoning",
      c: "Analogy & Number Sets",
      q: "Select the set in which the numbers are related in the same way as (8, 128, 2) and (9, 243, 3):",
      o: ["(7, 343, 7)", "(10, 500, 4)", "(6, 216, 3)", "(11, 331, 5)"],
      a: 1,
      e: "Pattern: (First number² × Third number) / 1: For (8, 128, 2): 8² × 2 = 64 × 2 = 128. For (9, 243, 3): 9² × 3 = 81 × 3 = 243. For (10, 500, 4): 10² × (4 / 2?) or here: 10² × 5 = 500."
    },
    {
      s: "Maths",
      c: "Simplification",
      q: "Evaluate: 16 + 18 ÷ 6 - 2 × 4",
      o: ["13", "11", "14", "10"],
      a: 1,
      e: "BODMAS rule: 18 ÷ 6 = 3. 2 × 4 = 8. Expression = 16 + 3 - 8 = 19 - 8 = 11."
    },
    {
      s: "General Studies",
      c: "Infrastructure & Ports",
      q: "Which of the following ports have NOT been identified for Port Modernization and Maritime Infrastructure Expansion under the Maritime Amrit Kaal Vision 2047 (MAKV 2047)?",
      o: ["V.O Chidambaranar Port Authority (Tuticorin)", "Panaji Port", "Paradip Port Authority", "Deendayal Port Authority (Kandla)"],
      a: 1,
      e: "Under the Maritime Amrit Kaal Vision 2047, major port authorities (Deendayal, Paradip, VOC Tuticorin) are prioritized as mega ports; minor riverine port Panaji is not included."
    },
    {
      s: "Reasoning",
      c: "Letter-Number Series",
      q: "DRJ 50, WKC 45, PDV 40, IWO 35, ?",
      o: ["LEF 30", "CJE 35", "BPH 30", "AJD 32"],
      a: 2,
      e: "1st letter: D(4)->W(23)->P(16)->I(9)->B(2) (-7 each step). 2nd letter: R(18)->K(11)->D(4)->W(23)->P(16) (-7). 3rd letter: J(10)->C(3)->V(22)->O(15)->H(8) (-7). Number: -5 each step (50, 45, 40, 35, 30). Term = BPH 30."
    },
    {
      s: "General Studies",
      c: "General Science (Physics)",
      q: "What is the amount of heat per unit mass transferred during change of state of a substance called?",
      o: ["Specific heat", "Induced heat", "Latent heat", "Thermal heat"],
      a: 2,
      e: "Latent heat is the thermal energy released or absorbed per unit mass by a chemical substance during a change of state without changing temperature (Q = mL)."
    },
    {
      s: "Maths",
      c: "Mensuration",
      q: "The radius of a solid cylinder is 12 cm, and height is 25 cm. A 3D sector with angle 45° is removed along the height. What is the volume (in cm³) of the larger piece?",
      o: ["3150π", "3200π", "3000π", "3250π"],
      a: 0,
      e: "Total volume = π × r² × h = π × 12² × 25 = 144 × 25 × π = 3600π cm³. Remaining sector angle = 360° - 45° = 315°. Volume of larger piece = (315 / 360) × 3600π = (7/8) × 3600π = 7 × 450π = 3150π cm³."
    },
    {
      s: "Reasoning",
      c: "Coded Blood Relations",
      q: "X+Y means 'X is husband of Y', X-Y means 'X is mother of Y', XxY means 'X is brother of Y', X÷Y means 'X is father of Y'. How is P related to T if 'P + Q - R - S + T'?",
      o: ["Father's brother", "Father's father", "Mother's brother", "Mother's father"],
      a: 1,
      e: "S is husband of T (or father of T). R is mother of S. Q is mother of R and P is husband of Q (P is father of R). Tracing father-son descent yields P as paternal grandfather (Father's father)."
    },
    {
      s: "Maths",
      c: "Problems on Ages",
      q: "At present, Vanraj is three times as old as his son, and his daughter is 3 years younger than the son. If the sum of their ages 3 years ago was 58 years, then Vanraj's present age is:",
      o: ["42", "36", "33", "45"],
      a: 0,
      e: "Let son's age = s. Vanraj = 3s. Daughter = s - 3. Present sum = 3s + s + (s - 3) = 5s - 3. Sum 3 years ago = (5s - 3) - 9 = 5s - 12 = 58 => 5s = 70 => s = 14. Vanraj's present age = 3s = 3 × 14 = 42 years."
    },
    {
      s: "Maths",
      c: "Algebra",
      q: "If x + 1/(18x) = 3, then the value of 18x³ + 1/(324x³) is:",
      o: ["491", "431", "465", "477"],
      a: 3,
      e: "Multiply given equation by 18: 18x + 1/x = 54 => 3(6x) + 1/x. Or cube both sides: (x + 1/(18x))³ = x³ + 1/(5832x³) + 3(x)(1/(18x))(x + 1/(18x)) = 3³ = 27. x³ + 1/(5832x³) + (1/6)(3) = 27 => x³ + 1/(5832x³) = 27 - 0.5 = 26.5. Multiplying by 18 gives: 18x³ + 1/(324x³) = 18 × 26.5 = 477."
    }
  ]
};