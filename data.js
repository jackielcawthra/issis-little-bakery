// =====================================================
//  ISSI'S LITTLE BAKERY — Uppdatera här! 🧁
// =====================================================
//  Ändra bara den här filen för att uppdatera hemsidan.
//  Spara filen och ladda om sidan i webbläsaren!
// =====================================================

const BAKERY = {

  // --- KONTAKTINFO ---
  contact: {
    address:   "",
    phone:     "076 795 33 67",
    swish:     "076 795 33 67",
    instagram: "",          // Lägg till @användarnamn om ni har Instagram
    facebook:  "",          // Lägg till länk om ni har Facebook
  },

  // --- ÖPPETTIDER ---
  // Sätt open: false för dagar som är stängda
  openingTimes: [
    { day: "Måndag",   time: "Stängt",        open: false },
    { day: "Tisdag",   time: "Stängt",        open: false },
    { day: "Onsdag",   time: "Stängt",        open: false },
    { day: "Torsdag",  time: "10:00 – 18:00", open: true  },
    { day: "Fredag",   time: "Stängt",        open: false },
    { day: "Lördag",   time: "Stängt",        open: false },
    { day: "Söndag",   time: "Stängt",        open: false },
  ],

  // --- POP-UP DATUM ---
  // Lägg till kommande evenemang, marknader eller specialdagar.
  // Ta bort gamla datum och lägg till nya!
  // Sätt active: false för att dölja ett datum utan att ta bort det.
  popups: [
    {
      active:   true,
      date:     "18 juni 2026",
      location: "Lidingö centrum eller hemleverans inom 1 km av Lidingö centrum",
      info:     "📞 076 795 33 67 · Swish: 076 795 33 67",
    },
  ],

  // --- VECKANS SPECIAL ---
  // Ändra varje vecka! Sätt active: false för att dölja.
  weeklySpecial: {
    active: true,
    text:   "Chokladbollar med ekologiskt smör och kakao",
    price:  "12 kr/2 st eller 15 kr/3 st",
    emoji:  "🍫",
  },

  // --- MENY ---
  // Lägg till eller ta bort rader. Lämna desc tom ("") om du inte vill ha beskrivning.
  menu: [
    { name: "Chokladbollar",  emoji: "🍫", price: "12 kr/2 st eller 15 kr/3 st", desc: "" },
    { name: "Lemonad",        emoji: "🍹", price: "8 kr",                          desc: "" },
    { name: "Kaffe",          emoji: "☕", price: "15 kr",                         desc: "" },
    { name: "Schackrutor",    emoji: "🎂", price: "12 kr/2 st eller 15 kr/3 st",  desc: "Veckans special" },
  ],

  // --- ALLERGENER ---
  // Skriv vilka allergener som kan förekomma i dina bakverk
  allergenNote: "Mina bakverk kan innehålla: gluten, ägg, mjölk, nötter och soja. Fråga mig om du är allergisk mot något! 🌾",

  // --- OM ISSI ---
  about: "Hej! Jag heter Issi och jag är 8 år. Jag älskar att baka och gör allt hemma med kärlek och färska ingredienser. Kom och smaka — jag lovar att du inte blir besviken! 😊",

};
