export interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  publishedAt: string;
  author: string;
  readingTimeMinutes: number;
  imageUrl: string;
  excerpt: string;
  category: string;
}

export interface Category {
  id: number;
  icon: string;
  name: string;
  slug: string;
  description: string;
}

export const STATIC_POSTS: Post[] = [
  {
    id: 8,
    title: "Tech Week — Is Hafte Ki Sabse Badi Tech News India Mein",
    slug: "tech-week-india-march-2026",
    category: "Tips",
    author: "OmniSphere Desk",
    publishedAt: "2026-03-12",
    readingTimeMinutes: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    excerpt:
      "Is hafte India mein kya hua tech duniya mein? Naye mobile launches, laptop updates, AI news, gaming updates, aur best deals — sab kuch ek jagah Hinglish mein.",
    tags: ["Tech Week", "Weekly Update", "India Tech News", "2026"],
    content: `<p><em>Meta Description: India ki sabse badi tech news is hafte — naye mobile launches, AI updates, gaming deals aur agle hafte ke upcoming launches. Sab kuch Hinglish mein. (157 characters)</em></p>

<p>Yaar, tech duniya kabhi rukti nahi — aur India ka tech scene toh aur bhi fast-paced ho gaya hai. Is hafte phones launch hue, AI mein kuch bada hua, gaming scene mein ek dhakka laga, aur kuch deals aisi aayi jo miss karna bada ghata hoga. Chill karo, chai lo, aur padho is hafte ka poora Tech Roundup — OmniSphere ke saath.</p>

<h2>📱 Naye Mobile Launches Is Hafte</h2>

<p>Is hafte ka sabse bada launch tha <strong>OnePlus 13R 5G</strong> — jo officially India mein ₹39,999 mein aaya. Snapdragon 8 Gen 2, 50MP triple camera, aur 100W SuperVOOC charging ke saath ye phone mid-premium segment mein ek strong option ban gaya hai. Pre-orders already start ho gaye hain Amazon aur OnePlus.in par.</p>

<p>Dusra important launch tha <strong>Redmi 14C 5G</strong> — budget segment mein ₹9,999 ki starting price ke saath. Dimensity 6300 chip, 5160mAh battery, aur 50MP camera is price par genuinely impressive hai. Pehli baar 5G milna is budget mein ek game changer hai.</p>

<p>Aur haan — <strong>Samsung Galaxy A56 5G</strong> ka teaser officially India mein aaya. Launch date abhi confirm nahi hui, par leaks ke hisab se ₹28,000–₹32,000 range expected hai. Exynos 1580 chip aur 50MP OIS camera ke hints mil rahe hain.</p>

<p><strong>Quick Summary:</strong></p>
<ul>
  <li>OnePlus 13R 5G — ₹39,999 — Available Now</li>
  <li>Redmi 14C 5G — ₹9,999 — Available Now</li>
  <li>Samsung Galaxy A56 5G — Coming Soon</li>
</ul>

<h2>💻 Laptop &amp; Gadget Updates</h2>

<p>Laptop world mein bhi is hafte kuch interesting hua. <strong>ASUS ROG Zephyrus G14 (2026 Edition)</strong> India mein list ho gaya hai — AMD Ryzen AI 9 HX 370 aur RTX 4070 ke combination ke saath. Price ₹1,69,990 se start hogi. Ye laptop gaming aur content creation dono ke liye powerhouse hai.</p>

<p>Agar budget laptops ki baat karein, toh <strong>Lenovo IdeaPad Slim 5i (Intel Core Ultra 7)</strong> ka price drop hua — ab ₹62,990 mein mil raha hai Flipkart par, jo pehle ₹72,990 tha. Students ke liye ye ek solid deal hai.</p>

<p>Gadget news mein — <strong>boAt Wave Ultima Pro smartwatch</strong> launch hui ₹2,499 mein. AMOLED display, blood oxygen monitoring, aur 7-day battery life — value-for-money smartwatch market mein ye ek strong contender hai.</p>

<h2>🤖 AI &amp; Software News</h2>

<p>AI front par is hafte ka sabse bada news tha <strong>Google Gemini 2.0 Flash</strong> ka India mein rollout. Android phones mein ab Gemini Assistant default ho sakta hai — Google Assistant ki jagah. Ye feature Android 10+ ke phones par available hoga. Agar aap chahte hain toh Settings mein jaake enable kar sakte hain abhi.</p>

<p><strong>Microsoft Copilot</strong> bhi India mein zyada aggressive ho gaya hai — Windows 11 ke latest update mein Copilot ab taskbar mein directly aa gaya hai. Iske saath PDF summarization, image generation, aur browser integration sab kuch ek click par milta hai.</p>

<p>Indian startup world se news: <strong>Sarvam AI</strong> ne apna latest Hindi language model release kiya jo reportedly GPT-4 se bhi better hai pure Hindi tasks mein. Ye India-first AI story genuinely exciting hai.</p>

<p>App update news — <strong>WhatsApp</strong> ne India mein ek naya feature test karna shuru kiya hai: <em>Voice Note Transcription</em> — matlab aapka voice message automatically text mein convert ho jaayega. Beta users ko abhi mil raha hai, baaki ko jald milega.</p>

<h2>🎮 Gaming Updates</h2>

<p>Gaming scene mein is hafte ka biggest update aaya <strong>BGMI (Battlegrounds Mobile India)</strong> se — Season 4 officially launch ho gaya naye map "Highlands" ke saath. Naye weapons, vehicles, aur limited edition skins ke saath ye season clearly best season lagta hai abhi tak.</p>

<p><strong>Free Fire MAX</strong> ne bhi apna OB49 update release kiya jisme ek naya battle royale mode aaya hai — "Lone Wolf" — jisme sirf solo play hota hai, no squads. Competitive players ke liye ye ek refreshing change hai.</p>

<p>Console news mein — <strong>PlayStation 5 Slim</strong> ab India mein officially ₹44,990 mein available hai Sony Centers aur major retailers par. Pehle ye import karna padta tha bahut zyada price par — ab official price bahut reasonable hai.</p>

<p>PC gaming mein — <strong>Valorant</strong> ne apna new agent "Iso" ko finally India server par optimize kiya hai — ping issues ab kafi reduce hue hain Mumbai server ke baad.</p>

<h2>💰 Best Deals &amp; Offers Is Hafte</h2>

<p>Deals ki baat karein toh is hafte Flipkart aur Amazon dono par kuch solid offers chale:</p>

<ul>
  <li><strong>iPhone 15 (128GB)</strong> — ₹69,999 se ₹59,999 — Amazon Sale (Limited Stock)</li>
  <li><strong>Samsung Galaxy S23 FE</strong> — ₹34,999 se ₹26,999 — Flipkart Weekend Deal</li>
  <li><strong>Redmi Note 13 Pro 5G</strong> — ₹26,999 se ₹22,999 — Bank offer + exchange combo</li>
  <li><strong>Sony WH-1000XM5 Headphones</strong> — ₹29,990 se ₹22,490 — Amazon Lightning Deal</li>
  <li><strong>boAt Rockerz 550 Pro</strong> — ₹2,999 se ₹1,499 — Flipkart Big Saving Days</li>
</ul>

<p>Pro tip: Koi bhi deal lene se pehle PriceSpy ya CamelCamelCamel par price history check karo — kabhi kabhi "discount" fake hoti hai. Aur bank cashback offers hamesha final checkout par apply karna mat bhoolo.</p>

<h2>Agle Hafte Kya Aane Wala Hai</h2>

<p>Agle hafte tech enthusiasts ke liye quite exciting hone wala hai. Yahan hai upcoming launches ki list:</p>

<ul>
  <li><strong>Realme GT 7 Pro India Launch</strong> — March 18 confirm. Snapdragon 8 Elite expected.</li>
  <li><strong>Motorola Edge 50 Neo India Price Cut</strong> — ₹24,999 se ₹19,999 expected — leaks ke hisab se.</li>
  <li><strong>Apple iPad Air M3 India Availability</strong> — March 19 se shipping start hogi.</li>
  <li><strong>Xiaomi 15 India Launch Event</strong> — March 20 — Snapdragon 8 Elite, Leica cameras.</li>
  <li><strong>JBL Tune Flex 2 TWS Earbuds</strong> — India launch expected next week ₹5,999 mein.</li>
</ul>

<p>OmniSphere har launch ka detailed coverage aur honest review layega — toh subscribe karte rehna.</p>

<h2>Conclusion: Is Hafte Ka Verdict</h2>

<p>Is hafte ka tech scene genuinely busy raha — budget 5G phones ka expansion, AI ka daily life mein aur ghusna, gaming updates, aur kuch solid deals. India ka tech ecosystem clearly mature ho raha hai aur hum Indians ke paas ab world-class options hain har budget mein.</p>

<p>Agle hafte aur bhi bada hoga — Realme GT 7 Pro aur Xiaomi 15 dono India mein aane wale hain. OmniSphere par najar rakho, hum sabse pehle review laayenge.</p>

<div style="background:linear-gradient(135deg,#E63946,#c1121f);color:#fff;padding:24px;border-radius:12px;margin:24px 0;text-align:center;">
  <h3 style="color:#fff;margin:0 0 8px 0;font-size:1.3rem;">OmniSphere Newsletter Subscribe Karo!</h3>
  <p style="margin:0 0 16px 0;opacity:0.9;">Har hafte ki sabse important tech news seedhi inbox mein — koi spam nahi, sirf value.</p>
  <a href="#newsletter" style="display:inline-block;background:#fff;color:#E63946;padding:10px 28px;border-radius:8px;font-weight:700;text-decoration:none;font-size:1rem;">Subscribe Karo — Free Hai!</a>
</div>`,
  },
  {
    id: 7,
    title: "Best Smartphones Under \u20b915000 in 2026 \u2014 Top 5 Picks",
    slug: "best-smartphones-under-15000-2026",
    category: "Phones",
    author: "Rahul Sharma",
    publishedAt: "2026-03-12",
    readingTimeMinutes: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    excerpt:
      "\u20b915,000 ke andar best smartphones 2026 mein? Haan possible hai! Redmi Note 13, Realme Narzo 70, Samsung M15 5G \u2014 top 5 picks jo performance, camera aur battery mein best hain.",
    tags: [
      "Budget Phones",
      "Best Smartphones Under 15000",
      "2026",
      "Buying Guide",
    ],
    content: `<p><strong>Short Answer:</strong> 2026 mein \u20b915,000 ke andar best smartphones hain \u2014 Redmi Note 13, Realme Narzo 70, Samsung Galaxy M15 5G, Poco M6 Pro, aur iQOO Z9 Lite. Ye sabhi great camera, long battery life, aur smooth performance dete hain daily use ke liye.</p>

<h2>Top 5 Smartphones Under \u20b915000 in 2026</h2>

<h3>1. Redmi Note 13 (4G) \u2014 Overall Best Pick</h3>
<p>Redmi Note 13 is sal bhi \u20b915,000 ke andar ek dominant force hai. AMOLED display, solid camera, aur Snapdragon processor isse is segment ka king banata hai.</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <thead><tr style="background:var(--muted);"><th style="padding:8px;text-align:left;border:1px solid var(--border);">Specification</th><th style="padding:8px;text-align:left;border:1px solid var(--border);">Details</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid var(--border);">Display</td><td style="padding:8px;border:1px solid var(--border);">6.67\u201d FHD+ AMOLED, 120Hz</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Processor</td><td style="padding:8px;border:1px solid var(--border);">Snapdragon 685</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">RAM / Storage</td><td style="padding:8px;border:1px solid var(--border);">6GB / 128GB</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Main Camera</td><td style="padding:8px;border:1px solid var(--border);">108MP + 8MP + 2MP</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Battery</td><td style="padding:8px;border:1px solid var(--border);">5000mAh, 33W Fast Charging</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Price</td><td style="padding:8px;border:1px solid var(--border);">\u20b913,999</td></tr>
  </tbody>
</table>
<p><strong>Pros:</strong></p>
<ul>
  <li>Gorgeous AMOLED display jo sunlight mein bhi clearly dikhta hai</li>
  <li>108MP camera \u20b915k budget mein outstanding hai</li>
  <li>Snapdragon chip reliable aur fast hai</li>
  <li>Premium glass finish, dekhne mein expensive lagta hai</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
  <li>33W charging thodi slow hai compared to competitors</li>
  <li>MIUI mein ads aate hain jo thoda irritate karte hain</li>
  <li>No 5G support</li>
</ul>
<p><a href="https://www.amazon.in/s?k=Redmi+Note+13" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#E63946;color:#fff;padding:10px 20px;border-radius:6px;font-weight:600;text-decoration:none;margin:8px 0;">BUY NOW ON AMAZON</a></p>

<h3>2. Realme Narzo 70 \u2014 Best for Gaming</h3>
<p>Agar aap gaming aur heavy usage ke liye phone chahte ho, toh Realme Narzo 70 ek solid choice hai. MediaTek Dimensity chipset ke saath smooth multitasking aur gaming experience milta hai.</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <thead><tr style="background:var(--muted);"><th style="padding:8px;text-align:left;border:1px solid var(--border);">Specification</th><th style="padding:8px;text-align:left;border:1px solid var(--border);">Details</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid var(--border);">Display</td><td style="padding:8px;border:1px solid var(--border);">6.67\u201d FHD+ AMOLED, 120Hz</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Processor</td><td style="padding:8px;border:1px solid var(--border);">MediaTek Dimensity 7050</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">RAM / Storage</td><td style="padding:8px;border:1px solid var(--border);">8GB / 128GB</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Main Camera</td><td style="padding:8px;border:1px solid var(--border);">50MP + 2MP</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Battery</td><td style="padding:8px;border:1px solid var(--border);">5000mAh, 45W Fast Charging</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Price</td><td style="padding:8px;border:1px solid var(--border);">\u20b914,499</td></tr>
  </tbody>
</table>
<p><strong>Pros:</strong></p>
<ul>
  <li>Dimensity 7050 chipset gaming ke liye excellent hai</li>
  <li>45W fast charging \u2014 1 ghante mein full charge</li>
  <li>Android 14 out-of-the-box</li>
  <li>Slim aur lightweight design</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
  <li>Camera performance average hai low light mein</li>
  <li>Realme UI mein bloatware thoda zyada hai</li>
  <li>No expandable storage</li>
</ul>
<p><a href="https://www.amazon.in/s?k=Realme+Narzo+70" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#E63946;color:#fff;padding:10px 20px;border-radius:6px;font-weight:600;text-decoration:none;margin:8px 0;">BUY NOW ON AMAZON</a></p>

<h3>3. Samsung Galaxy M15 5G \u2014 Best 5G Option</h3>
<p>Future-proof phone chahte hain 5G ke saath? Samsung Galaxy M15 is budget mein sabse reliable 5G phone hai.</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <thead><tr style="background:var(--muted);"><th style="padding:8px;text-align:left;border:1px solid var(--border);">Specification</th><th style="padding:8px;text-align:left;border:1px solid var(--border);">Details</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid var(--border);">Display</td><td style="padding:8px;border:1px solid var(--border);">6.5\u201d FHD+ Super AMOLED, 90Hz</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Processor</td><td style="padding:8px;border:1px solid var(--border);">MediaTek Dimensity 6100+</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">RAM / Storage</td><td style="padding:8px;border:1px solid var(--border);">4GB / 128GB</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Main Camera</td><td style="padding:8px;border:1px solid var(--border);">50MP + 5MP + 2MP</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Battery</td><td style="padding:8px;border:1px solid var(--border);">6000mAh, 25W Charging</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Price</td><td style="padding:8px;border:1px solid var(--border);">\u20b913,499</td></tr>
  </tbody>
</table>
<p><strong>Pros:</strong></p>
<ul>
  <li>5G connectivity at this price \u2014 future-ready</li>
  <li>6000mAh massive battery \u2014 2 din easily chalta hai</li>
  <li>Samsung ka 4 years OS update promise</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
  <li>25W charging bahut slow hai</li>
  <li>Processor mid-range gaming ke liye thoda weak hai</li>
</ul>
<p><a href="https://www.amazon.in/s?k=Samsung+Galaxy+M15+5G" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#E63946;color:#fff;padding:10px 20px;border-radius:6px;font-weight:600;text-decoration:none;margin:8px 0;">BUY NOW ON AMAZON</a></p>

<h3>4. Poco M6 Pro \u2014 Best Performance Value</h3>
<p>Poco M6 Pro performance-per-rupee ke mamle mein iss list ka champion hai. Helio G99 ke saath \u20b914,000 mein flagship-level daily experience milta hai.</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <thead><tr style="background:var(--muted);"><th style="padding:8px;text-align:left;border:1px solid var(--border);">Specification</th><th style="padding:8px;text-align:left;border:1px solid var(--border);">Details</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid var(--border);">Display</td><td style="padding:8px;border:1px solid var(--border);">6.67\u201d FHD+ AMOLED, 120Hz</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Processor</td><td style="padding:8px;border:1px solid var(--border);">MediaTek Helio G99</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">RAM / Storage</td><td style="padding:8px;border:1px solid var(--border);">8GB / 256GB</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Main Camera</td><td style="padding:8px;border:1px solid var(--border);">64MP + 8MP + 2MP</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Battery</td><td style="padding:8px;border:1px solid var(--border);">5000mAh, 67W Fast Charging</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Price</td><td style="padding:8px;border:1px solid var(--border);">\u20b914,999</td></tr>
  </tbody>
</table>
<p><strong>Pros:</strong></p>
<ul>
  <li>67W ultra-fast charging \u2014 sirf 45 minutes mein full</li>
  <li>256GB storage is price range mein ek bada plus</li>
  <li>Helio G99 ek powerhouse chipset hai</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
  <li>MIUI ads wali problem yahan bhi hai</li>
  <li>No 5G</li>
</ul>
<p><a href="https://www.amazon.in/s?k=Poco+M6+Pro" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#E63946;color:#fff;padding:10px 20px;border-radius:6px;font-weight:600;text-decoration:none;margin:8px 0;">BUY NOW ON AMAZON</a></p>

<h3>5. iQOO Z9 Lite \u2014 Best Display &amp; Design</h3>
<p>iQOO Z9 Lite premium feel deta hai bina premium price ke. Design aur display quality \u20b915,000 mein best-in-class hai.</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <thead><tr style="background:var(--muted);"><th style="padding:8px;text-align:left;border:1px solid var(--border);">Specification</th><th style="padding:8px;text-align:left;border:1px solid var(--border);">Details</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid var(--border);">Display</td><td style="padding:8px;border:1px solid var(--border);">6.56\u201d FHD+ AMOLED, 120Hz</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Processor</td><td style="padding:8px;border:1px solid var(--border);">Snapdragon 695 5G</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">RAM / Storage</td><td style="padding:8px;border:1px solid var(--border);">6GB / 128GB</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Main Camera</td><td style="padding:8px;border:1px solid var(--border);">50MP + 2MP</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Battery</td><td style="padding:8px;border:1px solid var(--border);">5000mAh, 44W Fast Charging</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border);">Price</td><td style="padding:8px;border:1px solid var(--border);">\u20b913,999</td></tr>
  </tbody>
</table>
<p><strong>Pros:</strong></p>
<ul>
  <li>Snapdragon 695 ke saath 5G bhi milta hai</li>
  <li>Premium curved-edge design, feel expensive hai</li>
  <li>44W fast charging decent speed hai</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
  <li>Front camera 8MP thoda weak hai selfie lovers ke liye</li>
  <li>Storage expandable nahi hai</li>
</ul>
<p><a href="https://www.amazon.in/s?k=iQOO+Z9+Lite" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#E63946;color:#fff;padding:10px 20px;border-radius:6px;font-weight:600;text-decoration:none;margin:8px 0;">BUY NOW ON AMAZON</a></p>

<h2>Kaunsa Phone Lena Chahiye? \u2014 Buying Guide</h2>
<ul>
  <li><strong>Overall best:</strong> Redmi Note 13</li>
  <li><strong>Gaming:</strong> Realme Narzo 70</li>
  <li><strong>5G + long battery:</strong> Samsung Galaxy M15 5G</li>
  <li><strong>Max storage + fastest charging:</strong> Poco M6 Pro</li>
  <li><strong>Premium feel + 5G:</strong> iQOO Z9 Lite</li>
</ul>

<h2>Frequently Asked Questions</h2>
<p><strong>Q1. \u20b915,000 mein 5G phone milta hai kya?</strong><br/>Haan! Samsung Galaxy M15 5G aur iQOO Z9 Lite dono is budget mein available hain.</p>
<p><strong>Q2. Is budget mein camera ke liye best phone?</strong><br/>Redmi Note 13 — 108MP sensor ke saath daylight shots mein unbeatable.</p>
<p><strong>Q3. Kya \u20b915,000 mein gaming phone milta hai?</strong><br/>Haan! Realme Narzo 70 aur Poco M6 Pro dono excellent gaming phones hain.</p>
<p><strong>Q4. Samsung aur Redmi mein kaunsa better?</strong><br/>Long-term ke liye Samsung, features ke liye Redmi.</p>
<p><strong>Q5. AMOLED display is budget mein milta hai?</strong><br/>Haan! Redmi Note 13, Realme Narzo 70, Poco M6 Pro, aur iQOO Z9 Lite — charon AMOLED ke saath hain.</p>

<h2>Conclusion</h2>
<p>2026 mein \u20b915,000 ke andar bohot kuch aacha hai. Apni priority clear karo aur choose karo. Agar still confused ho toh OmniSphere ka <strong>\u201cFind My Phone\u201d</strong> quiz try karo!</p>`,
  },
  {
    id: 1,
    title: "iPhone 15 Pro Max Review: Kya Ye Sach Mein Worth It Hai?",
    slug: "iphone-15-pro-max-review",
    category: "Reviews",
    author: "Rahul Sharma",
    publishedAt: "2026-02-15",
    readingTimeMinutes: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    excerpt:
      "iPhone 15 Pro Max ek premium flagship hai — par kya iska daam justify hota hai? Hum iske camera, performance, aur battery life ka ek honest Hinglish review lekar aaye hain.",
    tags: ["iPhone", "Apple", "Flagship", "Review"],
    content: `<h2>Introduction: Pehli Nazar Mein</h2>
<p>iPhone 15 Pro Max launch hone ke baad se sab yehi pooch rahe hain — kya ye phone actually ₹1,60,000 ki value deta hai? Main khud bhi ye sawal pooch raha tha jab maine ye haath mein liya. Aaj hum is phone ka honest review karenge — na sirf good parts, balki bad parts bhi.</p>

<h2>Design aur Build Quality</h2>
<p>Pehli baar jab aap iPhone 15 Pro Max ko haath mein lete hain, toh ek alag hi feel aata hai. Titanium frame ne steel ki jagah li hai aur ye phone clearly lighter aur more premium lagta hai.</p>
<ul>
<li>Weight: 221g — previous year se thoda kam</li>
<li>Titanium Grade 5 frame — industrial grade material</li>
<li>Textured matte back glass — fingerprints kam lagate hain</li>
<li>Action Button — ek customizable button jo bahut kaam ka hai</li>
</ul>

<h2>Camera: Duniya Ka Best Mobile Camera?</h2>
<p>Camera ke mamle mein iPhone 15 Pro Max ne ek naya standard set kiya hai. 5x optical zoom — jo pehle sirf iPad Pro mein tha — ab is phone mein bhi hai.</p>

<h2>Performance: A17 Pro Chip</h2>
<p>A17 Pro chip ke baare mein kya bolun — ye monster hai. Gaming ho, video editing ho, ya multitasking — ye phone kabhi sweat nahi karta.</p>

<h2>Battery Life</h2>
<p>Full day easily nikal jaata hai moderate use se. Heavy use mein 5-6 ghante screen-on time milta hai. 30W fast charging support nahi hai — ek drawback.</p>

<h2>Final Verdict</h2>
<p>Future-proof phone chahte ho jo 4-5 saal kaam aaye? iPhone 15 Pro Max excellent choice hai. <strong>Rating: 9/10</strong></p>`,
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra vs iPhone 15 Pro: Kaun Jeeta?",
    slug: "samsung-s24-ultra-vs-iphone-15-pro",
    category: "Comparisons",
    author: "Priya Singh",
    publishedAt: "2026-02-10",
    readingTimeMinutes: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    excerpt:
      "Android vs iOS ki ye eternal jang aaj bhi jaari hai. Samsung Galaxy S24 Ultra aur iPhone 15 Pro — dono premium flagships hain. Lekin winner kaun hai?",
    tags: ["Samsung", "iPhone", "Comparison", "Flagship"],
    content: `<h2>The Ultimate Flagship Battle</h2>
<p>Ye comparison sirf phones ki nahin, balki do different philosophies ki baat hai — Samsung ka Android ecosystem aur Apple ka iOS.</p>

<h2>Design Comparison</h2>
<p>Samsung S24 Ultra ek boxy, angular design ke saath aata hai — S Pen ke saath — jo productivity ke liye game changer hai. iPhone 15 Pro ka titanium frame aur compact size alag hi premium feel deta hai.</p>

<h2>Camera Round-Up</h2>
<p>Samsung ne 200MP main camera diya hai. Par Apple ki image processing itni best hai ki real-world photos mein aksar iPhone ahead rehta hai. Video quality ke liye iPhone clearly better hai.</p>

<h2>S Pen Advantage</h2>
<p>S Pen ek aisa feature hai jo S24 Ultra ko unique banata hai. Student ya creative professional ho toh S24 Ultra win karta hai.</p>

<h2>Final Verdict</h2>
<p>Productivity chahiye? Samsung S24 Ultra. Photography aur seamless experience? iPhone 15 Pro. Draw hai — dono apni jagah best hain.</p>`,
  },
  {
    id: 3,
    title: "OnePlus 12 Tips & Tricks: 10 Hidden Features Jo Aap Nahi Jante",
    slug: "oneplus-12-tips-tricks",
    category: "Tips",
    author: "Arjun Mehta",
    publishedAt: "2026-01-28",
    readingTimeMinutes: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    excerpt:
      "OnePlus 12 ek powerful phone hai, par iske saare features use karna seedha nahi hai. Yahan hain 10 hidden tips jo aapke experience ko next level par le jayenge.",
    tags: ["OnePlus", "Tips", "Tricks", "Android"],
    content: `<h2>OnePlus 12 ke Hidden Gems</h2>
<p>OnePlus 12 pe OxygenOS 14 hai — aur ye OS bohot saare hidden features lekar aaya hai.</p>

<h2>Tip 1: Alert Slider Customize Karo</h2>
<p>Settings > Alert Slider mein jaao aur har position par custom shortcuts set karo.</p>

<h2>Tip 2: Off-Screen Gestures Enable Karo</h2>
<p>Settings > Buttons & Gestures > Off-Screen Gestures mein double tap to wake aur letter gestures enable karo.</p>

<h2>Tip 3: Pro Mode Mein RAW Photos Lo</h2>
<p>Camera > Pro Mode > Format RAW. Adobe Lightroom pe ye photos wow look denge.</p>

<h2>Tip 4: Battery Health Guard</h2>
<p>Settings > Battery > Battery Health Guard enable karo. Battery lifespan badh jaati hai.</p>

<h2>Tip 5: Parallel Apps Feature</h2>
<p>Settings > Utilities > Parallel Apps — ek phone mein 2 accounts chala sakte hain!</p>

<h2>Conclusion</h2>
<p>Ye tips try karo aur neeche comments mein batao kaun sa tip sabse useful laga!</p>`,
  },
  {
    id: 4,
    title: "Best Budget Smartphones Under 15000 in 2026",
    slug: "best-budget-phones-under-15000",
    category: "Phones",
    author: "Rahul Sharma",
    publishedAt: "2026-01-20",
    readingTimeMinutes: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    excerpt:
      "₹15,000 ke andar best smartphones 2026 mein? Haan possible hai! Ye list aapko sabse value-for-money phones batayegi.",
    tags: ["Budget", "Phones", "Buying Guide", "2026"],
    content: `<h2>Budget Phones in 2026: Kitna Change Hua?</h2>
<p>2026 mein budget segment bohot competitive ho gaya hai. Redmi, Realme, aur Motorola ne ₹15,000 ke andar aisi phones di hain jo 3 saal pehle ₹25,000 mein milti thi.</p>

<h2>#1 Redmi Note 14 — Best Overall</h2>
<p>Snapdragon 7s Gen 3, 108MP camera, 5000mAh battery, 67W fast charging — ₹14,999 mein. Clear winner.</p>

<h2>#2 Realme 13 Pro — Best Camera</h2>
<p>Sony IMX890 sensor ke saath low-light photography mein budget segment ka king hai.</p>

<h2>#3 Motorola Edge 50 Neo — Best Software</h2>
<p>Stock Android 14 ke saath 3 saal ke OS updates. Reliable long-lasting choice.</p>

<h2>Which One Should You Buy?</h2>
<p>Overall: Redmi Note 14. Camera: Realme 13 Pro. Clean software: Motorola Edge 50 Neo.</p>`,
  },
  {
    id: 5,
    title: "Gaming Phone Test: ASUS ROG Phone 8 vs Poco F6 Pro",
    slug: "rog-phone-8-vs-poco-f6-pro",
    category: "Gaming",
    author: "Vikash Kumar",
    publishedAt: "2026-01-15",
    readingTimeMinutes: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=800&q=80",
    excerpt:
      "Mobile gaming ke liye best phone kaun sa hai? ASUS ROG Phone 8 aur Poco F6 Pro dono gaming ke liye bane hain — par kaun jeeta?",
    tags: ["Gaming", "ASUS ROG", "Poco", "Comparison"],
    content: `<h2>India Ka Mobile Gaming Scene</h2>
<p>BGMI, Free Fire, Genshin Impact — India mein mobile gaming boom aa chuka hai.</p>

<h2>ASUS ROG Phone 8: The Beast</h2>
<p>Snapdragon 8 Gen 3, AeroActive Cooler 6, AirTrigger buttons, 165Hz display — genuine gaming powerhouse.</p>

<h2>Poco F6 Pro: Value King</h2>
<p>Snapdragon 8 Gen 2 ke saath ₹29,999 mein incredible value. Dedicated gaming features nahi hain par performance mein peeche nahi.</p>

<h2>Verdict</h2>
<p>Serious gamer? ROG Phone 8. Budget mein great gaming? Poco F6 Pro unbeatable value hai.</p>`,
  },
  {
    id: 6,
    title: "Laptop Buying Guide 2026: Student ke liye Best Options",
    slug: "laptop-buying-guide-2026",
    category: "Laptops",
    author: "Priya Singh",
    publishedAt: "2026-01-08",
    readingTimeMinutes: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    excerpt:
      "College student ho ya professional — 2026 mein laptop kharidna confusing ho sakta hai. Is guide mein best laptops batayenge budget ke hisab se.",
    tags: ["Laptops", "Buying Guide", "Students", "2026"],
    content: `<h2>Laptop Kharidne Se Pehle Ye Socho</h2>
<p>Kya kaam karoge? Budget kya hai? Portability matter karta hai? In sawaalon ke jawaab hi aapka ideal laptop decide karenge.</p>

<h2>Under ₹40,000</h2>
<p>Lenovo IdeaPad Slim 3 aur HP 15s best value. Intel Core i5 12th gen ke saath daily tasks, coding, light editing handle hoti hai.</p>

<h2>₹40,000–₹70,000</h2>
<p>ASUS VivoBook 16X aur Acer Swift Go — OLED displays, faster processors, better build. Best value range.</p>

<h2>Premium: ₹70,000+</h2>
<p>MacBook Air M3 aur Dell XPS 15 — 5+ saal ke liye invest karna worth it hai.</p>

<h2>Final Recommendation</h2>
<p>Student: Lenovo IdeaPad Slim 3. Coding + Design: ASUS VivoBook 16X. Gaming: ASUS TUF A15. Premium: MacBook Air M3.</p>`,
  },
];

export const STATIC_CATEGORIES: Category[] = [
  {
    id: 1,
    icon: "\ud83d\udcf1",
    name: "Phones",
    slug: "phones",
    description: "Latest smartphone reviews aur news",
  },
  {
    id: 2,
    icon: "\ud83d\udcbb",
    name: "Laptops",
    slug: "laptops",
    description: "Laptop reviews, comparisons aur guides",
  },
  {
    id: 3,
    icon: "\ud83d\udca1",
    name: "Tips",
    slug: "tips",
    description: "Useful tips aur tricks aapke devices ke liye",
  },
  {
    id: 4,
    icon: "\u2b50",
    name: "Reviews",
    slug: "reviews",
    description: "Honest aur detailed gadget reviews",
  },
  {
    id: 5,
    icon: "\ud83c\udfae",
    name: "Gaming",
    slug: "gaming",
    description: "Gaming phones, reviews aur tips",
  },
  {
    id: 6,
    icon: "\u2696\ufe0f",
    name: "Comparisons",
    slug: "comparisons",
    description: "Head-to-head gadget comparisons",
  },
];

export const CATEGORY_COLOR_MAP: Record<string, string> = {
  Reviews: "bg-primary text-primary-foreground",
  Comparisons: "bg-blue-600 text-white",
  Tips: "bg-green-600 text-white",
  Phones: "bg-purple-600 text-white",
  Gaming: "bg-orange-600 text-white",
  Laptops: "bg-teal-600 text-white",
};
