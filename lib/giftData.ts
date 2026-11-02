// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `كل سنة وانت طيب يا حبيبي، وكل سنة وانت أجمل وأحنّ وألطف شخص في عيني. يا رب تكون سنة جديدة من عمرك مليانة فرحة ونجاح وحاجات حلوة على قد قلبك💕

كل سنة وانت مميز، مش بس في كل حاجة بتعملها، لكن في وجودك نفسه. كل سنة وانت شاطر وناجح ومختلف عن أي حد، وكل سنة وانت الشخص اللي عيوني شايفاه أحسن وأجمل من أي حد في الدنيا

أتمنى أفضل أشوفك بتكبر وتنجح وتحقق كل حاجة نفسك فيها، وأفضل فخورة بيك وبكل خطوة بتاخدها. نفسي أشوفك أنجح راجل في الدنيا، وفي المكانة اللي تستحقها، وسط صحابك وأهلك وكل الناس اللي بتحبك.

وكل سنة وأنا جنبك، بشاركك أيامك الحلوة، وبشوف معاك كل نجاح جديد، ويا رب نفضل مع بعض ونحتفل بأعياد ميلاد كتير جاية، وتكون كل سنة أحلى من اللي قبلها.

أتمنى لك عمر كله سعادة وراحة بال ونجاح، وتفضل دايمًا مبسوط وراضي عن نفسك.

كل سنة وانت حبيبي، وكل سنة وانت من أجمل الحاجات اللي في حياتي. ❤️🤴🏻
`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;