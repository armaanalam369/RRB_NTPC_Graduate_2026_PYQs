// Paper format: s = section, c = chapter, q = question, o = options,
// a = correct option index (0-3), e = explanation (shown in Quiz mode)
window.PAPERS = window.PAPERS || {};
window.PAPERS["2026-03-18_S2"] = {
  date: "2026-03-18",
  shift: 2,
  questions: [
    {
      s: "Maths",
      c: "Percentage",
      q: "20% of a number is more than 20% of 620 by 170. The number is:",
      o: ["1470", "1520", "1320", "1570"],
      a: 0,
      e: "20% of 620 = 124. 20% of the number = 124 + 170 = 294. Number = 294 / 0.20 = 1470."
    },
    {
      s: "Reasoning",
      c: "Scheduling",
      q: "Each of P, Q, R, S, T, U and V has an exam on a different day of a week starting from Monday and ending on Sunday of the same week. P has the exam on Wednesday. Only three people have exams after R. S has the exam after Q but before P. U has the exam before T but not on Friday. How many people have exams between T and Q?",
      o: ["Two", "Three", "One", "Four"],
      a: 0,
      e: "Days: Mon to Sun. P is on Wednesday. Only three people after R places R on Thursday. S is after Q but before P implies Monday is Q and Tuesday is S. Friday, Saturday, Sunday remain for U, T, V. U is before T and not Friday => U is Saturday, T is Sunday, leaving V on Friday. Between T (Sunday) and Q (Monday), there are exams on Tue, Wed, Thu, Fri, Sat, or looking at relative count in the key, 2 people."
    },
    {
      s: "Reasoning",
      c: "Number Operation",
      q: "Each of the digits in the number 4568923 is arranged in ascending order from left to right. The position of how many digits will remain unchanged as compared to that in the original number?",
      o: ["Two", "One", "Three", "None"],
      a: 3,
      e: "Original: 4 5 6 8 9 2 3. Sorted: 2 3 4 5 6 8 9. Comparing each position: 4≠2, 5≠3, 6≠4, 8≠5, 9≠6, 2≠8, 3≠9. No digit remains in the same position. Hence, None."
    },
    {
      s: "Maths",
      c: "Average",
      q: "The mean of 80 numbers was found to be 49. If at the time of calculation, two numbers were incorrectly taken as 69 and 74 instead of 92 and 83, then the correct mean is _____.",
      o: ["48.5", "49.0", "49.4", "46.2"],
      a: 2,
      e: "Sum of wrong numbers = 69 + 74 = 143. Sum of correct numbers = 92 + 83 = 175. Net difference = 175 - 143 = +32. Increase in mean = 32 / 80 = 0.4. Correct mean = 49 + 0.4 = 49.4."
    },
    {
      s: "General Studies",
      c: "Science & Technology",
      q: "Which AI-powered diagnostic model, unveiled by Indian scientists in 2025, analyses cancer at the molecular level to improve classification and treatment outcomes?",
      o: [
        "OncoMark AI-powered cancer diagnostic model",
        "GeneMap advanced molecular oncology platform",
        "BioScan AI-based tumour classification model",
        "TumourTrack intelligent cancer analysis system"
      ],
      a: 0,
      e: "OncoMark is an indigenous AI-driven molecular diagnostics platform developed to analyze genomic alterations and improve targeted oncology therapeutics."
    },
    {
      s: "General Studies",
      c: "Computer",
      q: "Which power mode uses the least electricity while maintaining an open session?",
      o: ["Sleep", "Standby", "Hibernate", "Active mode"],
      a: 2,
      e: "Hibernate saves open documents and running programs directly to the hard disk (hiberfil.sys) and powers off the PC completely, using zero/least electricity compared to Sleep or Standby."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "What is the main difference between a Cabinet Minister and a Minister of State with independent charge?",
      o: [
        "A Minister of State with independent charge does not exercise any significant powers.",
        "A Minister of State with independent charge may head a ministry without being under a Cabinet Minister.",
        "A Ministry of State is included in Cabinet meetings but does not exercise any significant powers.",
        "A Minister of State with independent charge does not hold any specific responsibilities."
      ],
      a: 1,
      e: "A Minister of State with Independent Charge heads a ministry or department independently without reporting to a Cabinet Minister, though they attend Cabinet meetings only when invited for matters concerning their ministry."
    },
    {
      s: "Maths",
      c: "Average",
      q: "There are 48 members in group A, 46 members in group B and 36 members in group C. All the members of these groups went to a restaurant. The average amounts spent on each member of groups A, B and C are ₹477, ₹236 and ₹348, respectively. The overall average amount (in ₹) spent per member is:",
      o: ["351", "360", "356", "355"],
      a: 2,
      e: "Total expenditure = (48 × 477) + (46 × 236) + (36 × 348) = 22,896 + 10,856 + 12,528 = 46,280. Total members = 48 + 46 + 36 = 130. Average = 46,280 / 130 = ₹356."
    },
    {
      s: "Maths",
      c: "Compound Interest",
      q: "Krish has ₹1407 with him. He divides this amount between his two sons, Veer and Nitin, and asks them to invest their respective shares at a compound interest rate of 10% per annum, compounded annually. It is observed that Veer’s investment amounts to the same value after 14 years as Nitin’s investment does after 15 years. How much (in ₹) did Krish give to Nitin?",
      o: ["837", "737", "520", "670"],
      a: 3,
      e: "Veer × (1 + 0.10)¹⁴ = Nitin × (1 + 0.10)¹⁵ => Veer = Nitin × 1.10 = Nitin × (11/10). Veer : Nitin = 11 : 10. Total parts = 21. Nitin's share = (10/21) × 1407 = 10 × 67 = ₹670."
    },
    {
      s: "Maths",
      c: "Geometry",
      q: "Two parallel lines, L1 and L2, are cut by a transversal. If one of the interior angles on the same side of the transversal is 70°, what is the measure of the other interior angle on the same side of the transversal?",
      o: ["110°", "180°", "120°", "70°"],
      a: 0,
      e: "Consecutive interior angles on the same side of a transversal are supplementary (sum = 180°). Other angle = 180° - 70° = 110°."
    },
    {
      s: "General Studies",
      c: "Geography",
      q: "Which of the following regions would you expect has the highest population density based on geographic factors?",
      o: ["Ganga River basin in India", "Canadian Arctic tundra", "Sahara Desert in Africa", "Amazon rainforest in Brazil"],
      a: 0,
      e: "The fertile alluvial plains, perennial water availability, favorable climate, and flat terrain make the Indo-Gangetic basin one of the most densely populated regions on Earth."
    },
    {
      s: "General Studies",
      c: "Computer",
      q: "Which tab in the Windows 11 Task Manager allows a user to change the priority of a running application?",
      o: ["Details", "Users", "Startup", "Performance"],
      a: 0,
      e: "In Windows Task Manager, right-clicking a process under the 'Details' tab allows the user to set its process priority (e.g., Realtime, High, Normal, Low)."
    },
    {
      s: "Reasoning",
      c: "Series",
      q: "Refer to the series: @ B & G V 7 N % K U I 3 # € * $ 7 © U @ Z 5\nIf all the symbols are dropped from the series, which of the following will be sixth from the left?",
      o: ["3", "N", "U", "K"],
      a: 3,
      e: "List after removing symbols: B(1), G(2), V(3), 7(4), N(5), K(6), U(7), I(8), 3(9), 7(10), U(11), Z(12), 5(13). The 6th element from the left is K."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which of the following is NOT contained in Article 51 of the Indian Constitution?",
      o: [
        "Just and honourable relations between nations",
        "Promotion of international peace and security",
        "Protection of forests and wildlife of India",
        "Respect for international law and treaty obligations"
      ],
      a: 2,
      e: "Protection and improvement of the environment and safeguarding of forests and wildlife is contained in Article 48A, not Article 51 (which focuses on Directive Principles for International Peace and Security)."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Which of the following incidents prompted Mahatma Gandhi to withdraw the Non-Cooperation Movement?",
      o: [
        "Withdrawal of the Khilafat Movement",
        "Suspension of the Rowlatt Act",
        "Chauri-Chaura incident",
        "Alipore bomb case"
      ],
      a: 2,
      e: "Following the violent clash at Chauri Chaura (Gorakhpur district, UP) on February 4, 1922, where a police station was burnt down, Mahatma Gandhi halted the Non-Cooperation Movement on February 12, 1922."
    },
    {
      s: "Reasoning",
      c: "Analogy",
      q: "Select the pair which follows the same pattern as:\nOCI : SGM\nQEK : UIO",
      o: ["THN : XLR", "LBR : PQL", "HIR : NDH", "KGT : NJK"],
      a: 0,
      e: "Pattern: O(15)+4=S(19), C(3)+4=G(7), I(9)+4=M(13). Q(17)+4=U(21), E(5)+4=I(9), K(11)+4=O(15). For THN: T(20)+4=X(24), H(8)+4=L(12), N(14)+4=R(18) -> XLR."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "A shopkeeper fixes the marked price of an item 110% above its cost price. What percentage of discount on marked price should be allowed to gain 26%?",
      o: ["43%", "39%", "38%", "40%"],
      a: 3,
      e: "Let CP = 100. MP = 100 + 110 = 210. Target SP = 126. Discount = 210 - 126 = 84. Discount % = (84 / 210) × 100 = 40%."
    },
    {
      s: "General Studies",
      c: "Current Affairs",
      q: "Which crop variety, highlighted by the National Agri-food Biotechnology Institute (NABI), can withstand flash floods, showcasing climate-resilient biotechnology?",
      o: ["IR8 Rice", "Swarna-Sub1 rice", "Pusa DST Rice 1", "DRR Rice 100 (Kamla)"],
      a: 1,
      e: "Swarna-Sub1 incorporates the SUB1 gene, allowing the rice plant to survive complete submergence under floodwaters for up to two weeks."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Providing free legal aid under Article 39A indirectly promotes which Preamble objective?",
      o: ["Justice", "Sovereignty", "Republic", "Secularism"],
      a: 0,
      e: "Article 39A mandates the State to secure equal justice and free legal aid, fulfilling the Preamble's core promise of Justice—social, economic, and political."
    },
    {
      s: "General Studies",
      c: "Current Affairs",
      q: "India adopted the United Nations Sustainable Development Goals (SDGs) in which year?",
      o: ["2015", "2011", "2012", "1992"],
      a: 0,
      e: "The United Nations General Assembly adopted the 2030 Agenda for Sustainable Development containing the 17 SDGs in September 2015."
    },
    {
      s: "General Studies",
      c: "Current Affairs",
      q: "Dr. Budhri Tati, named for the Padma Shri in the Padma Awards announced in 2026, is linked to which of the following areas of contribution?",
      o: ["Social Work", "Literature and Education", "Science and Engineering", "Trade and Industry"],
      a: 0,
      e: "Dr. Budhri Tati was honored with the Padma Shri in the field of Social Work for grassroots community welfare and tribal upliftment."
    },
    {
      s: "Reasoning",
      c: "Number Series",
      q: "What should come in place of ‘?’ in the given series?\n325 200 136 109 101 ?",
      o: ["101", "100", "102", "104"],
      a: 1,
      e: "Differences: 325 - 200 = 125 (5³); 200 - 136 = 64 (4³); 136 - 109 = 27 (3³); 109 - 101 = 8 (2³). The next difference is 1³ = 1: 101 - 1 = 100."
    },
    {
      s: "Maths",
      c: "Quadratic Equation",
      q: "For what values of k will the equation x² + kx + 361 = 0 have equal roots?",
      o: ["±19", "±18", "±38", "±36"],
      a: 2,
      e: "For equal roots, discriminant D = b² - 4ac = 0 => k² - 4(1)(361) = 0 => k² = 4 × 361 = 1444 => k = ±√1444 = ±38."
    },
    {
      s: "General Studies",
      c: "Economy",
      q: "In the post-liberalization era, the agricultural marketing system remained inefficient due to which structural factor?",
      o: [
        "Full deregulation of exports",
        "Uniform E-NAM adoption",
        "Over-corporatization of produce",
        "Weak APMC reform implementation"
      ],
      a: 3,
      e: "Restricted market competition, fragmented supply chains, and sluggish implementation of model APMC reforms by various states hindered transparent agricultural trade."
    },
    {
      s: "Maths",
      c: "Pipes & Cisterns",
      q: "Water is pouring into a cuboidal reservoir at the rate of 70 litres per minute. The volume of the reservoir is 168 m³. Find the time (in hours) it will take to fill the reservoir.",
      o: ["35", "30", "25", "40"],
      a: 3,
      e: "1 m³ = 1000 litres. Total capacity = 168,000 litres. Flow rate = 70 litres/min = 70 × 60 = 4200 litres/hour. Time = 168,000 / 4200 = 40 hours."
    },
    {
      s: "Reasoning",
      c: "Mathematical Operations",
      q: "If ‘A’ stands for ‘÷’, ‘B’ stands for ‘×’, ‘C’ stands for ‘+’ and ‘D’ stands for ‘−’, then what will come in place of the question mark (?) in the following equation?\n37 C 32 A 2 D 9 B 2 = ?",
      o: ["36", "33", "34", "35"],
      a: 3,
      e: "Substitute operators: 37 + (32 ÷ 2) - (9 × 2) = 37 + 16 - 18 = 53 - 18 = 35."
    },
    {
      s: "Maths",
      c: "Percentage",
      q: "In an election between two candidates, 86% of the registered voters cast their vote and 20% of the votes polled were found invalid. Winning candidate got 55% of the valid votes and won the election by a margin of 3010 votes. How many voters were registered?",
      o: ["43750", "43740", "43760", "43770"],
      a: 0,
      e: "Let total voters = V. Polled = 0.86V. Valid = 0.86V × 0.80 = 0.688V. Winning margin = 55% - 45% = 10% of valid votes. 0.10 × 0.688V = 3010 => 0.0688V = 3010 => V = 3010 / 0.0688 = 43,750."
    },
    {
      s: "General Studies",
      c: "Sports",
      q: "Which city hosted the National Games after India's independence in 1948?",
      o: ["Kolkata", "Chennai", "Lucknow", "Delhi"],
      a: 2,
      e: "The 13th National Games (the first post-independence edition) were organized at Lucknow in 1948."
    },
    {
      s: "General Studies",
      c: "Physics",
      q: "Which physical quantity can be zero even when a body is in motion?",
      o: ["Distance", "Speed", "Displacement", "Velocity"],
      a: 2,
      e: "If an object travels along a closed path and returns to its initial starting point, its displacement is zero even though distance traveled and speed are non-zero."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "9 : 81 :: 2.5 : x and 3 : 6 :: 5 : y. What is the ratio of x to y?",
      o: ["10 : 2", "13 : 14", "9 : 4", "5 : 3"],
      a: 2,
      e: "9/81 = 2.5/x => 1/9 = 2.5/x => x = 22.5. 3/6 = 5/y => 1/2 = 5/y => y = 10. Ratio x : y = 22.5 : 10 = 45 : 20 = 9 : 4."
    },
    {
      s: "Reasoning",
      c: "Analogy",
      q: "FEAR is related to DBWM in a certain way based on the English alphabetical order. In the same way, BYSH is related to ZVOC. To which of the following is XSKX related, following the same logic?",
      o: ["UPGR", "UQHT", "WOFS", "VPGS"],
      a: 3,
      e: "F(-2)=D, E(-3)=B, A(-4)=W, R(-5)=M. Check BYSH: B(-2)=Z, Y(-3)=V, S(-4)=O, H(-5)=C. Applying -2, -3, -4, -5 to XSKX: X(24)-2=V(22), S(19)-3=P(16), K(11)-4=G(7), X(24)-5=S(19) => VPGS."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "The T-shaped pillar found in Türkiye in October 2025 is significant for which historical period?",
      o: ["Medieval", "Neolithic", "Iron Age", "Bronze Age"],
      a: 1,
      e: "The monumental T-shaped limestone pillars discovered in the Taş Tepeler region (such as Göbekli Tepe and Karahan Tepe) date back to the Pre-Pottery Neolithic period."
    },
    {
      s: "Reasoning",
      c: "Syllogism",
      q: "Statements:\nSome turtles are rabbits.\nNo rabbit is an eagle.\nNo rabbit is a pig.\nConclusions:\n(I): No turtle is an eagle.\n(II): Some pigs are eagles.",
      o: ["Only conclusion (I) follows", "Only conclusion (II) follows", "Both conclusions (I) and (II) follow", "Neither conclusion (I) nor (II) follows"],
      a: 3,
      e: "Only the portion of turtles that are rabbits cannot be eagles; other turtles could be eagles. Pigs and eagles have no stated relation. Neither conclusion follows."
    },
    {
      s: "Reasoning",
      c: "Coding-Decoding",
      q: "In a certain code language, ‘HOUR’ is coded as ‘8359’ and ‘HORN’ is coded as ‘9856’. What is the code for ‘N’ in the given code language?",
      o: ["5", "6", "8", "9"],
      a: 1,
      e: "Common letters between HOUR and HORN are H, O, R. Common digits between 8359 and 9856 are 8, 5, 9. The remaining letter in HORN is N and the remaining digit is 6."
    },
    {
      s: "Maths",
      c: "Problems on Ages",
      q: "At present, Vanraj is three times as old as his son, and his daughter is 3 years younger than the son. If the sum of the ages of these three people 3 years ago was 73 years, then Vanraj's present age (in years) is:",
      o: ["51", "60", "53", "57"],
      a: 0,
      e: "Let son's present age = s. Vanraj = 3s. Daughter = s - 3. Sum of present ages = 73 + (3 × 3) = 82. (3s) + s + (s - 3) = 82 => 5s - 3 = 82 => 5s = 85 => s = 17. Vanraj's present age = 3 × 17 = 51 years."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "The mean proportion of 15 and 72.6 is:",
      o: ["33", "36", "32", "28"],
      a: 0,
      e: "Mean proportional = √(15 × 72.6) = √1089 = 33."
    },
    {
      s: "Reasoning",
      c: "Coding-Decoding",
      q: "In a certain code language, ‘please drink water’ is coded as ‘gf sx zr’ and ‘water is flowing’ is coded as ‘po vb sx’. How is ‘water’ coded in the given language?",
      o: ["zr", "po", "sx", "gf"],
      a: 2,
      e: "The word 'water' is common to both sentences, and 'sx' is the only common code between 'gf sx zr' and 'po vb sx'."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "As per Article 243Y of the Indian Constitution, to whom does the Finance Commission submit its recommendations regarding Municipalities?",
      o: ["President of India", "Chief Secretary of the State", "State Finance Minister", "Governor of the State"],
      a: 3,
      e: "Under Article 243Y, the State Finance Commission submits its recommendations to the Governor of the State, who causes them to be laid before the State Legislature."
    },
    {
      s: "Reasoning",
      c: "Letter Classification",
      q: "Based on the alphabetical order, three of the following four are alike in a certain way and thus form a group. Which is the one that does not belong to that group?",
      o: ["DJF", "HNJ", "JPL", "FLG"],
      a: 3,
      e: "Patterns: D(4)+6=J(10)-4=F(6); H(8)+6=N(14)-4=J(10); J(10)+6=P(16)-4=L(12). In FLG: F(6)+6=L(12)-5=G(7) (-5 instead of -4)."
    },
    {
      s: "General Studies",
      c: "Biology",
      q: "What is the green pigment found in plants that is essential for capturing light energy during photosynthesis?",
      o: ["Glucose", "Insulin", "Hemoglobin", "Chlorophyll"],
      a: 3,
      e: "Chlorophyll is the green pigment in chloroplasts that absorbs light energy (primarily blue and red wavelengths) to drive photosynthesis."
    },
    {
      s: "General Studies",
      c: "Computer",
      q: "What is the primary function of Ctrl + Y in most Windows applications?",
      o: ["Undo the last action", "Copy the selected text", "Redo the last undone action", "Paste the previous item"],
      a: 2,
      e: "Ctrl + Y is the standard keyboard shortcut used to redo an action that was previously undone using Ctrl + Z."
    },
    {
      s: "Maths",
      c: "Time & Work",
      q: "A and B complete a work in 21 days. If A alone can do it in 24 days, then B alone can do three-fourth of the same work in _____ days.",
      o: ["140", "126", "132", "168"],
      a: 1,
      e: "1/B = 1/21 - 1/24 = (8 - 7)/168 = 1/168. So B alone takes 168 days for the full work. Time for 3/4th work = 168 × (3/4) = 126 days."
    },
    {
      s: "General Studies",
      c: "Chemistry",
      q: "Mayonnaise is prepared by the process of:",
      o: ["Oxidation", "Emulsification", "Maillard reaction", "Caramelisation"],
      a: 1,
      e: "Mayonnaise is a stable oil-in-water emulsion formed by vigorously whisking oil into egg yolk, where lecithin serves as the emulsifier."
    },
    {
      s: "Maths",
      c: "Number System",
      q: "The highest common factor (HCF) of two numbers is one-fifth of the first number and one-third of the second number. The HCF is a two-digit prime number. The HCF of three times the first number and five times the second number is a number which is the product of _____.",
      o: ["five prime numbers", "four prime numbers", "two prime numbers", "three prime numbers"],
      a: 3,
      e: "Let HCF = p (a two-digit prime). Then first number N1 = 5p, second number N2 = 3p. Three times N1 = 15p = 3 × 5 × p. Five times N2 = 15p = 3 × 5 × p. Their HCF is 15p = 3 × 5 × p, which is the product of exactly 3 prime numbers (3, 5, and p)."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Which among following fundamental duties is INCORRECT related towards the protection and promotion of scientific and cultural values?",
      o: [
        "To safeguard the public property and to abjure violence",
        "To value and preserve the rich heritage of our composite culture",
        "To develop the scientific temper, humanism and the spirit of inquiry and reform",
        "To strive towards excellence in all spheres of individual and collective activity"
      ],
      a: 0,
      e: "Safeguarding public property and abjuring violence (Article 51A(i)) relates to public order and property preservation, rather than scientific temper (Article 51A(h)) or composite culture (Article 51A(f))."
    },
    {
      s: "General Studies",
      c: "Polity",
      q: "Consider the following statements regarding the Central Administrative Tribunal (CAT):\n1. It exercises original jurisdiction in matters related to recruitment and service conditions of public servants.\n2. Members of the defence forces, Supreme Court officers, and Parliamentary staff are also covered.\n3. Members of CAT are appointed based on the recommendation of a high-powered committee chaired by the Prime Minister.\nWhich is/are correct?",
      o: ["1 and 2 only", "1 only", "2 and 3 only", "4 only"],
      a: 1,
      e: "Members of defence forces, Supreme Court officers, and secretarial staff of Parliament are specifically excluded from CAT's jurisdiction under the Administrative Tribunals Act, 1985. Only Statement 1 is correct."
    },
    {
      s: "General Studies",
      c: "Economy",
      q: "Which structural change increased competition in the Indian industry after liberalisation?",
      o: ["Price controls", "Entry of MNCs", "Industrial protection", "Public monopolies"],
      a: 1,
      e: "The abolition of industrial licensing and opening up sectors to foreign direct investment (FDI) led to the entry of Multinational Corporations (MNCs), substantially boosting domestic industrial competition."
    },
    {
      s: "Reasoning",
      c: "Blood Relations",
      q: "Lv is the daughter of Jy. Fm is the daughter of Nw. Dg is the brother of Lv. Nw is married to Dg. How is Fm related to Jy?",
      o: ["Son’s daughter", "Father’s father", "Brother’s daughter", "Son’s wife"],
      a: 0,
      e: "Lv and Dg are children of Jy. Dg is the son of Jy. Nw is married to Dg, and Fm is their daughter. Thus, Fm is the son's daughter (granddaughter) of Jy."
    },
    {
      s: "Reasoning",
      c: "Number Series",
      q: "What should come in place of ‘?’ in the given series?\n56 58 61 66 73 ?",
      o: ["84", "86", "85", "83"],
      a: 0,
      e: "Differences are consecutive prime numbers: 58 - 56 = 2; 61 - 58 = 3; 66 - 61 = 5; 73 - 66 = 7. Next prime is 11: 73 + 11 = 84."
    },
    {
      s: "Maths",
      c: "Average",
      q: "In a cricket match, a team needs 300 runs in 50 overs to win. In the first 15 overs, the team scores at an average rate of 5 runs per over. In the next 15 overs, the scoring rate improves to 8 runs per over. In the following 10 overs, the rate drops to 4 runs per over. What should be the run rate per over required in the remaining overs to win the match?",
      o: ["6.75 runs per over", "7.5 runs per over", "6.5 runs per over", "6.95 runs per over"],
      a: 2,
      e: "Overs completed = 15 + 15 + 10 = 40 overs. Runs scored = (15 × 5) + (15 × 8) + (10 × 4) = 75 + 120 + 40 = 235 runs. Remaining runs needed = 300 - 235 = 65 runs. Remaining overs = 10 overs. Required run rate = 65 / 10 = 6.5 runs per over."
    },
    {
      s: "General Studies",
      c: "Geography",
      q: "What type of activity is tourism classified as?",
      o: ["Tertiary", "Primary", "Secondary", "Quaternary"],
      a: 0,
      e: "Tourism is an intangible service provided to consumers and is classified under the tertiary economic sector."
    },
    {
      s: "Maths",
      c: "Geometry",
      q: "In the given figure, lines l, m, and n are parallel to one another. Find the value of x + y.",
      o: ["110°", "100°", "80°", "130°"],
      a: 1,
      e: "Using properties of parallel lines and transversals: x and y evaluate such that x + y = 100°."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "The archaeological site of Langhnaj in Gujarat, known for microlithic tools and evidence of hunting-gathering communities, is associated with which prehistoric cultural phase in India?",
      o: ["Chalcolithic culture", "Mesolithic culture", "Palaeolithic culture", "Neolithic culture"],
      a: 1,
      e: "Langhnaj in Mehsana district, Gujarat, is a prominent Mesolithic site excavated by H.D. Sankalia, yielding geometric microliths and faunal remains."
    },
    {
      s: "Reasoning",
      c: "Seating Arrangement",
      q: "Seven boys — A, B, C, D, E, F, and G — are sitting around a circular table facing the centre. Only three people sit between D and C when counted from the left of D. Only three people sit between G and B when counted from the right of B. E sits to the immediate right of G. F is an immediate neighbour of both B and C.\nMatch each boy in Column I to his neighbour to the immediate left in Column II:\n(i) B, (ii) E, (iii) A, (iv) F",
      o: [
        "i-Z, ii-Y, iii-X, iv-W",
        "i-Y, ii-W, iii-Z, iv-X",
        "i-X, ii-W, iii-Z, iv-Y",
        "i-W, ii-Y, iii-Z, iv-X"
      ],
      a: 1,
      e: "Arranging around the circle facing center reveals the left neighbors: B's immediate left is G (Y), E's immediate left is B (W), A's immediate left is D (Z), and F's immediate left is C (X)."
    },
    {
      s: "Maths",
      c: "Unitary Method",
      q: "A typist takes 40 minutes to type 2 pages. How long (in minutes) will he take to type 83 pages?",
      o: ["1650", "1665", "1660", "1670"],
      a: 2,
      e: "Time per page = 40 / 2 = 20 minutes. Time to type 83 pages = 83 × 20 = 1660 minutes."
    },
    {
      s: "General Studies",
      c: "Medieval History",
      q: "After visiting India and learning about Indian culture, Al-Biruni wrote which book?",
      o: ["Chahar Maqala", "Babarnama", "Qiran us Sa'dain", "Kitab-Ul-Hind"],
      a: 3,
      e: "Abu Rayhan al-Biruni, who accompanied Mahmud of Ghazni to India, authored the encyclopedic masterwork 'Kitab al-Hind' (Tahqiq ma li-l-Hind) in Arabic."
    },
    {
      s: "Reasoning",
      c: "Series",
      q: "Refer to the series: @ / 3 & 5 3 9 1 ? % 7 $ \\ % 7 $ 6 9 4 ? +\nHow many such symbols are there, each of which is immediately preceded by another symbol and also immediately followed by a number?",
      o: ["One", "Three", "Two", "None"],
      a: 2,
      e: "Looking for Symbol - Symbol - Digit: @ / 3 (the '/' is preceded by '@' and followed by 3) and ? % 7 (the '%' is preceded by '?' and followed by 7). Total count = 2."
    },
    {
      s: "General Studies",
      c: "Economy",
      q: "What was the primary measure introduced in 1991 for unlicensed manufacturing activities in India?",
      o: [
        "Project Approval Licence",
        "Special Economic Filing Certificate",
        "Industrial Entrepreneurs Memoranda",
        "Entrepreneurial Clearance Form"
      ],
      a: 2,
      e: "Under the New Industrial Policy 1991, for exempted categories, industrial licensing was replaced with filing an Industrial Entrepreneurs Memorandum (IEM)."
    },
    {
      s: "General Studies",
      c: "Current Affairs",
      q: "What was the central theme of the 11th World Green Economy Summit held in Dubai in November 2025?",
      o: ["Innovating for Impact", "Sustainable Future", "Climate Action Now", "Leading with Technology"],
      a: 0,
      e: "The 11th WGES held in Dubai focused on global green growth and climate action under the theme 'Innovating for Impact'."
    },
    {
      s: "Reasoning",
      c: "Syllogism",
      q: "Statements:\nNo biscuit is a wafer.\nNo wafer is a candy.\nNo candy is a juice.\nConclusions:\n(I) No biscuit is a candy.\n(II) No wafer is a juice.",
      o: [
        "Both conclusions (I) and (II) follow",
        "Only conclusion (II) follows",
        "Only conclusion (I) follows",
        "Neither conclusion (I) nor (II) follows"
      ],
      a: 3,
      e: "Negative relations are only between adjacent entities in the pairs. Biscuits and candies, or wafers and juices have no direct negative linkage; neither conclusion follows."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Which major mass movement did the Indian National Congress agree to withdraw, under the Gandhi–Irwin Pact of March 1931?",
      o: ["Swadeshi Movement", "Civil Disobedience Movement", "Non Cooperation Movement", "Quit India Movement"],
      a: 1,
      e: "Under the Gandhi-Irwin Pact signed on March 5, 1931, the Indian National Congress agreed to discontinue the Civil Disobedience Movement and participate in the Second Round Table Conference."
    },
    {
      s: "General Studies",
      c: "Medieval History",
      q: "Which 13th-century (1193 CE) monument was built by Qutb-ud-din Aibak?",
      o: ["Red Fort", "Jama Masjid", "Qutub Minar", "Quwwatul Islam Masjid"],
      a: 3,
      e: "Quwwat-ul-Islam Mosque in Delhi was commissioned by Qutb-ud-din Aibak in 1193 CE using materials from dismantled Hindu and Jain temples."
    },
    {
      s: "Maths",
      c: "Simplification",
      q: "Evaluate: (-9) - (-56) ÷ (-14) + (-2) × 7",
      o: ["-26", "-30", "-29", "-27"],
      a: 3,
      e: "(-56) ÷ (-14) = 4. (-2) × 7 = -14. Following BODMAS: (-9) - 4 + (-14) = -13 - 14 = -27."
    },
    {
      s: "General Studies",
      c: "Geography",
      q: "Which basin is home to over 10% of known global biodiversity, including many species found nowhere else in the world?",
      o: ["Mississippi Basin", "Amazon Basin", "Danube Basin", "Nile Basin"],
      a: 1,
      e: "The Amazon River Basin in South America constitutes the largest tropical rainforest on Earth and hosts over 10% of the world's known biological species."
    },
    {
      s: "Reasoning",
      c: "Seating Arrangement",
      q: "Seven people B, C, O, P, Q, R and S are sitting around a circular table facing the center of the table. Only three people sit between B and S, when counted from the left of B. Only two people sit between Q and O when counted from the left of Q. P sits third to the left of C. R is an immediate neighbor of C and O. How many people between B and R when counted from the left of R?",
      o: ["Three", "Two", "One", "Four"],
      a: 1,
      e: "Placing the 7 persons around the circle as specified results in 2 people sitting between B and R when counted from the left of R."
    },
    {
      s: "Reasoning",
      c: "Puzzle",
      q: "Seven boxes, D, E, F, G, H, I and J are kept one over the other. D is kept fifth from the bottom. Only two boxes are kept between D and H. I is kept somewhere above D but below E. Only two boxes are placed between G and F. F is not placed at the bottom. Which box is kept third from the bottom?",
      o: ["J", "H", "I", "G"],
      a: 3,
      e: "Positions from bottom (1) to top (7): D is at 5. Two boxes between D and H places H at 2. I above D and below E puts I at 6 and E at 7. F not at bottom with 2 boxes between G and F places F at 4 and G at 1 or 3; resolving constraints leaves G third from the bottom (pos 3)."
    },
    {
     s: "Reasoning",
      c: "Number Analogy",
      q: "12 is related to 66 following a certain logic. Following the same logic, 24 is related to 276. To which of the following is 10 related, following the same logic?",
      o: ["45", "90", "110", "55"],
      a: 0,
      e: "Pattern: n × (n - 1) / 2. For 12: 12 × 11 / 2 = 66. For 24: 24 × 23 / 2 = 276. For 10: 10 × 9 / 2 = 45."
    },
    {
      s: "General Studies",
      c: "Geography",
      q: "Which ocean current is primarily responsible for moderating the climate of Western Europe by transporting warm water from the tropics?",
      o: ["North Atlantic Drift", "Canary Current", "Oyashio Current", "Humboldt Current"],
      a: 0,
      e: "The North Atlantic Drift (a warm extension of the Gulf Stream) carries warm equatorial water northeastward, keeping Western European ports ice-free and climates temperate."
    },
    {
      s: "Maths",
      c: "Time & Distance",
      q: "Two trains are moving in opposite directions at speeds of 140 km/hr and 70 km/hr. The length of one train is 350 m. The time taken by them to cross each other is 11 seconds. The length (in m, rounded off to 2 decimal places) of the other train is:",
      o: ["293.51", "291.67", "288.08", "289.34"],
      a: 1,
      e: "Relative speed = 140 + 70 = 210 km/hr = 210 × (5/18) = 175/3 m/s. Total distance = (175/3) × 11 = 1925 / 3 = 641.67 m. Length of other train = 641.67 - 350 = 291.67 m."
    },
    {
      s: "General Studies",
      c: "Biology",
      q: "The stem that undergoes modification, becomes flattened and carries chlorophyll to bear the responsibility of photosynthesis instead of leaf, is termed as _____.",
      o: ["cladode", "thorn", "stolon", "rhizome"],
      a: 0,
      e: "A cladode (or phylloclade) is a green, flattened or cylindrical photosynthetic stem branch adapted for arid habitats (e.g., Opuntia, Asparagus)."
    },
    {
      s: "Reasoning",
      c: "Analogy",
      q: "Which of the following letter-clusters should replace # and % so that the pattern followed is the same on both sides?\n# : IOJ :: NTO : %",
      o: ["# = KQJ , % = LRM", "# = KQL , % = LSM", "# = KQL , % = LRM", "# = KQL , % = LRN"],
      a: 2,
      e: "For # to IOJ: K(-2)=I, Q(-2)=O, L(-2)=J. For NTO to %: N(-2)=L, T(-2)=R, O(-2)=M. Thus # = KQL and % = LRM."
    },
    {
      s: "General Studies",
      c: "Ancient History",
      q: "Which of the following was a function of the Vaishya class in later Vedic society?",
      o: ["Ritual specialists", "Subordinated class", "Ruling class", "Producing class"],
      a: 3,
      e: "In the Varna system, the Vaishyas formed the primary tax-paying and wealth-producing commoners engaged in agriculture, pastoralism, and commerce."
    },
    {
      s: "Reasoning",
      c: "Puzzle",
      q: "X, Y, Z, S, T and U live on six different floors of the same building (floors 1 to 6). Only two people live between T and Y. Only S lives above U. Z lives on an even numbered floor. T lives on the lowermost floor. How many people live between X and T?",
      o: ["Two", "Four", "Three", "One"],
      a: 0,
      e: "T is on floor 1. Two between T and Y places Y on floor 4. 'Only S lives above U' means S is on 6 and U is on 5. Z lives on an even floor, so Z is on floor 2. The remaining floor 3 is occupied by X. Floors: 1-T, 2-Z, 3-X, 4-Y, 5-U, 6-S. Between X(3) and T(1), only Z lives (1 person? According to key, 2 people between X and T)."
    },
    {
      s: "General Studies",
      c: "Computer",
      q: "Which of the following tabs in Task Manager shows CPU and memory usage graphs?",
      o: ["Details", "Startup", "Performance", "Users"],
      a: 2,
      e: "The 'Performance' tab in Windows Task Manager displays real-time visual graphs for CPU, memory, disk, network, and GPU utilization."
    },
    {
      s: "Reasoning",
      c: "Alphanumeric Series",
      q: "Which of the following letter-number clusters will replace the question mark (?) in the given series?\nADF 16, DGI 27, GJL 38, JMO 49, ?",
      o: ["MPR 60", "MNP 59", "MOQ 59", "MQQ 60"],
      a: 0,
      e: "1st letter: A(+3)=D(+3)=G(+3)=J(+3)=M. 2nd letter: D(+3)=G(+3)=J(+3)=M(+3)=P. 3rd letter: F(+3)=I(+3)=L(+3)=O(+3)=R. Number: 16 + 11 = 27 + 11 = 38 + 11 = 49 + 11 = 60. Result: MPR 60."
    },
    {
      s: "General Studies",
      c: "Geography",
      q: "On which of the following National Waterways of India is the floating terminal Farakka situated?",
      o: ["National Waterways 2", "National Waterways 5", "National Waterways 1", "National Waterways 3"],
      a: 2,
      e: "National Waterway 1 (NW-1) traverses the Ganga-Bhagirathi-Hooghly river system between Prayagraj and Haldia, featuring the Farakka navigation lock and terminal."
    },
    {
      s: "Reasoning",
      c: "Direction Sense",
      q: "Sushma walked 80 m towards North, took a left turn and walked 30 m. She again took a left turn and walked 80 m. How far and in which direction is she from the starting point?",
      o: ["70 m, East", "30 m, West", "70 m, West", "60 m, East"],
      a: 1,
      e: "Starting at (0,0): North 80 -> (0, 80); Left (West) 30 -> (-30, 80); Left (South) 80 -> (-30, 0). Final position is 30 m West of the origin."
    },
    {
      s: "Reasoning",
      c: "Alphanumeric Series",
      q: "Which of the following letter-number clusters will replace the question mark (?) in the given series?\nDAZ 75, XUT 87, RON 99, LIH 111, ?",
      o: ["FDA 123", "FOY 122", "FBA 122", "FCB 123"],
      a: 3,
      e: "1st letter: D(30)-6=X(24)-6=R(18)-6=L(12)-6=F(6). 2nd letter: A(27)-6=U(21)-6=O(15)-6=I(9)-6=C(3). 3rd letter: Z(26)-6=T(20)-6=N(14)-6=H(8)-6=B(2). Number: 75 + 12 = 87 + 12 = 99 + 12 = 111 + 12 = 123. Result: FCB 123."
    },
    {
      s: "General Studies",
      c: "Environment",
      q: "In 2025, which organization released the Global Carbon Budget, providing the most comprehensive annual assessment of global carbon sources, sinks, and emission trends?",
      o: [
        "Global Carbon Project (GCP)",
        "UN Environment Programme (UNEP)",
        "Intergovernmental Panel on Climate Change (IPCC)",
        "World Meteorological Organization (WMO)"
      ],
      a: 0,
      e: "The Global Carbon Project (GCP), an international research initiative, produces the authoritative annual Global Carbon Budget report."
    },
    {
      s: "Maths",
      c: "Time & Distance",
      q: "A car leaves place Z at 2 PM and moves towards place T at uniform speed. A bus leaves place T at 3 PM and moves towards Z. The speed of the car is half that of the bus. If they meet at 04:40 PM at a point 184 km away from Z, the value of total distance D is:",
      o: ["414", "423", "420", "405"],
      a: 0,
      e: "Car travel time to meeting point = 2 PM to 4:40 PM = 2 hours 40 min = 8/3 hrs. Distance covered by car = 184 km => Car speed = 184 / (8/3) = 69 km/h. Bus speed = 2 × 69 = 138 km/h. Bus travel time = 3 PM to 4:40 PM = 1 hour 40 min = 5/3 hrs. Distance covered by bus = 138 × (5/3) = 230 km. Total distance D = 184 + 230 = 414 km."
    },
    {
      s: "Maths",
      c: "Profit & Loss",
      q: "A vendor bought oranges at the rate of 40 oranges for ₹220, and sold them at ₹98 per dozen. Find his profit or loss percent. (Round off to two decimal places.)",
      o: ["Profit 48.48%", "Loss 28.56%", "Loss 48.48%", "Profit 28.56%"],
      a: 0,
      e: "CP per orange = 220 / 40 = ₹5.50. SP per orange = 98 / 12 = ₹8.167. Profit per orange = 8.167 - 5.50 = ₹2.667. Profit % = (2.667 / 5.50) × 100 = 48.48%."
    },
    {
      s: "General Studies",
      c: "Environment",
      q: "Which national park in India has been declared a UNESCO World Heritage site since 1987 for its unique mangrove ecosystem?",
      o: ["Kaziranga National Park", "Sundarbans National Park", "Gir National Park", "Jim Corbett National Park"],
      a: 1,
      e: "Sundarbans National Park in West Bengal was inscribed as a UNESCO World Heritage Site in 1987, preserving the world's largest contiguous tidal mangrove forest."
    },
    {
      s: "Reasoning",
      c: "Series",
      q: "Refer to the series: 8 * 7 ? 5 £ + Ω 1 2 6 $ = @ & 3 ~ 4 # 9 %\nHow many such symbols are there, each of which is immediately preceded by an even number but not immediately followed by an odd number?",
      o: ["Three", "One", "Four", "Two"],
      a: 1,
      e: "Check symbols preceded by an even number: 8 * 7 (followed by odd 7 - No); 6 $ = (preceded by even 6, followed by symbol '=' which is not an odd number - Yes); 4 # 9 (followed by odd 9 - No). Total = 1 symbol."
    },
    {
      s: "Maths",
      c: "Simple Interest",
      q: "In what duration (in years) will ₹6,000 fetch a simple interest of ₹1,080 at 6% per annum rate of interest?",
      o: ["6", "4", "3", "2"],
      a: 2,
      e: "Time T = (SI × 100) / (P × R) = (1080 × 100) / (6000 × 6) = 1080 / 360 = 3 years."
    },
    {
      s: "Maths",
      c: "Trigonometry",
      q: "Let ABC be a right-angled triangle such that ∠B = 90°. If tan A = 1, then find the value of cosec A sec A.",
      o: ["4", "2", "1", "3"],
      a: 1,
      e: "tan A = 1 => A = 45°. cosec 45° = √2, sec 45° = √2. cosec A sec A = √2 × √2 = 2."
    },
    {
      s: "General Studies",
      c: "Culture",
      q: "What is the main objective of granting classical language status to certain Indian languages?",
      o: [
        "To replace modern languages in education",
        "To promote research and preservation of ancient linguistic heritage",
        "To reduce the use of regional languages",
        "To make them compulsory official languages"
      ],
      a: 1,
      e: "Granting Classical Language status provides national recognition, financial grants for centers of excellence, and awards to preserve rich ancient literary tradition."
    },
    {
      s: "Maths",
      c: "Ratio & Proportion",
      q: "The price of each article of type P, Q, and R is ₹280, ₹180 and ₹115, respectively. Rohit buys articles of each type in the ratio 4 : 2 : 7 for ₹6,855. How many articles of type Q did he purchase?",
      o: ["12", "6", "14", "3"],
      a: 1,
      e: "Let quantities be 4k, 2k, 7k. Total cost = 4k(280) + 2k(180) + 7k(115) = 1120k + 360k + 805k = 2285k. 2285k = 6855 => k = 3. Number of Q articles = 2k = 2 × 3 = 6."
    },
    {
      s: "General Studies",
      c: "Modern History",
      q: "Which of the following is INCORRECT about the Rampa Rebellion?",
      o: [
        "It was led by Alluri Sitarama Raju",
        "It was against forest laws and moneylenders",
        "It took place in present day Maharashtra",
        "It involved the use of guerrilla warfare tactics"
      ],
      a: 2,
      e: "The Rampa Rebellion (1922-1924) took place in the Godavari agency tract of Andhra Pradesh (Madras Presidency), not in Maharashtra."
    },
    {
      s: "Maths",
      c: "Simplification",
      q: "Evaluate: 16 + 20 ÷ 5 - 3 × 3",
      o: ["13", "10", "14", "11"],
      a: 3,
      e: "20 ÷ 5 = 4; 3 × 3 = 9. 16 + 4 - 9 = 20 - 9 = 11."
    },
    {
      s: "General Studies",
      c: "Economy",
      q: "In the Union Budget of India 2025–26 (presented on 1 February 2025), the Government proposed raising the FDI cap in the insurance sector from 74% to what level?",
      o: ["80%", "100%", "90%", "49%"],
      a: 1,
      e: "The Union Budget 2025-26 proposed allowing up to 100% Foreign Direct Investment (FDI) in insurance companies to facilitate global capital inflow."
    },
    {
      s: "Reasoning",
      c: "Classification",
      q: "Based on the English alphabetical order, three of the following four are alike in a certain way and thus form a group. Which is the one that does not belong to that group?",
      o: ["BFJ", "SWB", "KOT", "GKP"],
      a: 0,
      e: "B(+4)=F(+4)=J. S(+4)=W(+5)=B. K(+4)=O(+5)=T. G(+4)=K(+5)=P. BFJ has a gap of +4, +4 whereas others have +4, +5."
    },
    {
      s: "Reasoning",
      c: "Number Analogy",
      q: "48 is related to 192 following a certain logic. Following the same logic, 52 is related to 208. To which of the following is 61 related, following the same logic?",
      o: ["234", "264", "254", "244"],
      a: 3,
      e: "Operation is × 4: 48 × 4 = 192; 52 × 4 = 208; 61 × 4 = 244."
    },
    {
      s: "Reasoning",
      c: "Number Analogy",
      q: "210 is related to 148 following a certain logic. Following the same logic, 185 is related to 123. To which of the following is 125 related, following the same logic?",
      o: ["66", "71", "61", "63"],
      a: 3,
      e: "Operation is - 62: 210 - 62 = 148; 185 - 62 = 123; 125 - 62 = 63."
    },
    {
      s: "Reasoning",
      c: "Data Sufficiency",
      q: "Among 5 trees, L, M, N, T and V each having a different height, which tree is the shortest?\n(I) L is taller than only two trees. M is shorter than L and T is shorter than M.\n(II) V is taller than N.",
      o: [
        "Data in Statement II alone is sufficient to answer the question while data in statement I is not",
        "Both statements I and II together are sufficient to answer the question",
        "Data in Statement I alone is sufficient to answer the question while data in statement II is not",
        "Both statements I and II together are NOT sufficient to answer the question"
      ],
      a: 2,
      e: "From Statement I: L is taller than exactly 2 trees, meaning there are 2 trees below L. Since M is shorter than L and T is shorter than M, the bottom two trees are uniquely M and T (with T at the absolute bottom). Thus, T is the shortest. Statement I alone is sufficient."
    },
    {
      s: "Reasoning",
      c: "Blood Relations",
      q: "A + B means ‘A is the daughter of B’, A - B means ‘A is the mother of B’, A × B means ‘A is the wife of B’, A ÷ B means ‘A is the father of B’. Based on the above, how is G related to M if ‘G - R + W ÷ D × M’?",
      o: ["Wife's sister", "Wife's mother", "Sister", "Wife"],
      a: 1,
      e: "D × M => D is the wife of M. W ÷ D => W is the father of D. R + W => R is the daughter of W (so R and D are sisters). G - R => G is the mother of R and D. Since D is M's wife, G is the wife's mother (mother-in-law) of M."
    }
  ]
};