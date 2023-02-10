const products = [
  {
    id: 1,
    status: "in stock",
    name: "YAMAHA F325D",
    brand: "YAMAHA",
    src: "../img/store/product_1.webp",
    price: 229.99,
    type: "acoustic",
    description: `The F325D acoustic guitar offers the quality, design and sound you'd expect from a Yamaha acoustic and puts it in an affordable price. 
    Dreadnought Body 
    Spruce Top Yamaha 
    Quality in an Affordable Price`,
  },
  {
    id: 2,
    status: "sold",
    name: "FENDER CD-60 DREADNOUGHT V3 BLACK",
    brand: "FENDER",
    src: "../img/store/product_2.webp",
    price: 279.99,
    type: "acoustic",
    description: `If you're a beginning guitar player, the best choice you can make is getting a guitar with a sound and feel that will inspire you to keep playing. The CD-60 is a genuine Fender that is affordable and comes in three great-looking finishes to match your style. It provides nicely balanced tone and plenty of volume thanks to its dreadnought body style and spruce top with scalloped "X"-bracing. The CD-60 is also an excellent choice for veteran players who need an inexpensive second dreadnought model, and it includes a hard-shell case for safe and convenient transport (North America only).`,
  },
  {
    id: 3,
    status: "in stock",
    name: "YAMAHA JR1 3/4",
    brand: "YAMAHA",
    src: "../img/store/product_3.webp",
    price: 219.99,
    type: "acoustic",
    description: `JR1 is a compact-size FG model. Sit back, relax and enjoy this perfect couch guitar.
3/4 Size FG Body
Spruce Top
Original Gigbag Included`,
  },
  {
    id: 4,
    status: "in stock",
    name: "YAMAHA C40",
    brand: "YAMAHA",
    src: "../img/store/product_4.webp",
    price: 219.99,
    type: "acoustic",
    description: `The C40 might be one of Yamaha's most inexpensive full-size classical models, but its quality and tone are outstanding. A real bargain for beginners.
Yamaha CG Shape
Spruce Top
Yamaha Quality in An Affordable Price`,
  },
  {
    id: 5,
    status: "in stock",
    name: "FENDER CC-60S CONCERT PACK V2 Black",
    brand: "FENDER",
    src: "../img/store/product_5.webp",
    price: 319.99,
    type: "acoustic",
    description: `A great choice for the budding singer-songwriter, the all-new CC-60S shines when fingerpicked or strummed. It boasts upgraded features that players of all types are sure to love, including a solid spruce top, comfortable walnut fingerboard with rolled edges and a new, easy-to-play neck shape. The CC-60S features a mahogany back and sides to complement its solid spruce top for a warm sound. The concert-sized body provides intimate, well-balanced tone and a more comfortable feel.`,
  },
  {
    id: 6,
    status: "in stock",
    name: "FENDER CD-60 DREADNOUGHT V3 NATURAL",
    brand: "FENDER",
    src: "../img/store/product_6.webp",
    price: 279.99,
    type: "acoustic",
    description: `If you're a beginning guitar player, the best choice you can make is getting a guitar with a sound and feel that will inspire you to keep playing. The CD-60 is a genuine Fender that is affordable and comes in three great-looking finishes to match your style. It provides nicely balanced tone and plenty of volume thanks to its dreadnought body style and spruce top with scalloped "X"-bracing. The CD-60 is also an excellent choice for veteran players who need an inexpensive second dreadnought model, and it includes a hard-shell case for safe and convenient transport (North America only).`,
  },
  {
    id: 7,
    status: "sold",
    name: "YAMAHA APXT2 DARK RED BURST",
    brand: "YAMAHA",
    src: "../img/store/product_7.webp",
    price: 289.99,
    type: "acoustic",
    description: `APXT2 is a 3/4 size of the world best-selling acoustic-electric guitar, APX500II. This fun, yet well-constructed compact guitar makes a great company when you are on a road. APXT2 features ART-based pickup system and a Yamaha’s proprietary tuner with great sensitivity and accuracy for quick tuning. Accessory includes a gigbag.
Scaled-down APX Body
Spruce Top
Recreate Natural Tone and Dynamics by ART Pickup
Original Gigbag Included`,
  },
  {
    id: 8,
    status: "in stock",
    name: "YAMAHA FG800 BLACK",
    brand: "YAMAHA",
    src: "../img/store/product_8.webp",
    price: 319.99,
    type: "acoustic",
    description: `Yamaha's standard acoustic model, with simple and traditional looks and outstanding quality, at an affordable price. A solid-top guitar with authentic sound that is well balanced without sacrificing its robust strength, thanks to the newly developed scalloped bracing design. Can be confidently recommended to all beginner guitarists.
Traditional Western Body
Solid Spruce Top
Nato/Okume Back & Sides
Newly Developed Scalloped Bracing
Traditional looks and outstanding quality`,
  },
  {
    id: 9,
    status: "in stock",
    name: "YAMAHA APXT2 BLACK",
    brand: "YAMAHA",
    src: "../img/store/product_9.webp",
    price: 289.99,
    type: "acoustic",
    description: `APXT2 is a 3/4 size of the world best-selling acoustic-electric guitar, APX500II. This fun, yet well-constructed compact guitar makes a great company when you are on a road. APXT2 features ART-based pickup system and a Yamaha’s proprietary tuner with great sensitivity and accuracy for quick tuning. Accessory includes a gigbag.
Scaled-down APX Body
Spruce Top
Recreate Natural Tone and Dynamics by ART Pickup
Original Gigbag Included`,
  },
  {
    id: 10,
    status: "in stock",
    name: "SEAGULL S6 CLASSIC BLACK A/E",
    brand: "SEAGULL",
    src: "../img/store/product_10.webp",
    price: 879.99,
    type: "acoustic",
    description: `The S6 Series sees a cool new addition to its lineup with the S6 Classic Black A/E. You can expect great playability and sound like the rest of the S6 Series line, but with a look that will stop you in your tracks!
The S6 Classic Black A/E will surely reel you in with its intense black semi-gloss top and blackwashed back and sides. Strum it for a sound that will resonate to your core, thanks to its vibrant solid cedar top and Wild Cherry body. Plug it in to experience another level of outstanding tone via the onboard Fishman Sonitone preamp system, as it amplifies the natural dynamic sound of your S6. The S6 Classic Black A/E is an acoustic that gives more for those who want more!`,
  },
  {
    id: 10,
    status: "in stock",
    name: "SEAGULL S6 CLASSIC BLACK A/E",
    brand: "SEAGULL",
    src: "../img/store/product_10.webp",
    price: 879.99,
    type: "acoustic",
    description: `The S6 Series sees a cool new addition to its lineup with the S6 Classic Black A/E. You can expect great playability and sound like the rest of the S6 Series line, but with a look that will stop you in your tracks!
The S6 Classic Black A/E will surely reel you in with its intense black semi-gloss top and blackwashed back and sides. Strum it for a sound that will resonate to your core, thanks to its vibrant solid cedar top and Wild Cherry body. Plug it in to experience another level of outstanding tone via the onboard Fishman Sonitone preamp system, as it amplifies the natural dynamic sound of your S6. The S6 Classic Black A/E is an acoustic that gives more for those who want more!`,
  },
  {
    id: 11,
    status: "in stock",
    name: "BEAVER CREEK 601 SERIES GUITAR 3/4",
    brand: "BEAVER CREEK",
    src: "../img/store/product_11.webp",
    price: 174.99,
    type: "acoustic",
    description: `Body: Dreadnought
Top: Spruce
Back & Sides: Agathis
Neck: Nato
Fingerboard|Bridge: Rosewood
Machine Heads: Diecast
Strings: D’Addario Strings
Bag: Included`,
  },
  {
    id: 12,
    status: "sold",
    name: "EPIPHONE SONGMAKER DR-100 VINTAGE SUNBURST",
    brand: "EPIPHONE",
    src: "../img/store/product_12.webp",
    price: 249.99,
    type: "acoustic",
    description: `The DR-100 has long been Epiphone's best selling acoustic guitar. The DR-100 has the look, sound, and build quality that first time players and professionals expect to find when they pick up an Epiphone. The dreadnought is considered the classic go-to shape for bluegrass, folk, rock, country, and everything in-between. The dreadnought sound is commanding when required, but its balanced sound means that at any volume, you can be heard and hear yourself well, too.`,
  },
  {
    id: 13,
    status: "in stock",
    name: "ART AND LUTHERIE ROADHOUSE FADED BLACK",
    brand: "ART AND LUTHERIE",
    src: "../img/store/product_13.webp",
    price: 749.99,
    type: "acoustic",
    description: `Reminiscent of the days of freight train hopping and hitchhiking musicians, these parlor size guitars deliver exceptional string to string balance and well defined articulation. Whether fingerpicking gently or backhanding open chords, the Roadhouse promises excellent playability with a vintage vibe.`,
  },
  {
    id: 14,
    status: "sold",
    name: "YAMAHA FSX800C NATURAL",
    brand: "YAMAHA",
    src: "../img/store/product_14.webp",
    price: 479.99,
    type: "acoustic",
    description: `The first choice in experiencing acoustic-electric music.Derived from FS800 which has the solid spruce top and nato/okume back and sides, FSX800C has a cutaway body and the electric system. Yamaha's proprietary under-saddle piezo pickup and System66 analog preamp ensure the solid plugged-in performance. The small and thin body is perfect not only for female/young players but for intermediate to upper level finger-picking style players.`,
  },
  {
    id: 15,
    status: "sold",
    name: "BEAVER CREEK 601 SERIES ACOUSTIC GUITAR 3/4 BLUE",
    brand: "BEAVER CREEK",
    src: "../img/store/product_15.webp",
    price: 174.99,
    type: "acoustic",
    description: `Body: Dreadnought
Top: Spruce
Back & Sides: Agathis
Neck: Nato
Fingerboard|Bridge: Rosewood
Machine Heads: Diecast
Strings: D’Addario Strings
Bag: Included`,
  },
  {
    id: 16,
    status: "in stock",
    name: "YAMAHA APX600 VINTAGE WHITE",
    brand: "YAMAHA",
    src: "../img/store/product_16.webp",
    price: 469.99,
    type: "acoustic",
    description: `As an electric guitarist in the 1980s, if you wanted to play acoustic on stage there were few options for you that really worked. In 1987, Yamaha made the first acoustic guitar that could be taken from a guitar rack, plugged in and played at volume, problem free; no more howling feedback, misplaced mics or the dreaded extended sound check….`,
  },
  {
    id: 17,
    status: "in stock",
    name: "YAMAHA APX600 ORIENTAL BLUE BURST",
    brand: "YAMAHA",
    src: "../img/store/product_17.webp",
    price: 469.99,
    type: "acoustic",
    description: `As an electric guitarist in the 1980s, if you wanted to play acoustic on stage there were few options for you that really worked. In 1987, Yamaha made the first acoustic guitar that could be taken from a guitar rack, plugged in and played at volume, problem free; no more howling feedback, misplaced mics or the dreaded extended sound check….`,
  },
  {
    id: 18,
    status: "sold",
    name: "PAUL REED SMITH SE SILVER SKY STONE BLUE",
    brand: "PAUL REED SMITH",
    src: "../img/store/product_18.webp",
    price: 1149.99,
    type: "electric",
    description: `The PRS SE Silver Sky is a familiar iteration of the original Silver Sky model that was first introduced with John Mayer in 2018. This workhorse guitar provides ample tone and playability in four distinct colors, delivering looks, feel, and sound.`,
  },
  {
    id: 19,
    status: "in stock",
    name: "JACKSON JS SERIES DINKY JS11 METALLIC BLUE",
    brand: "JACKSON",
    src: "../img/store/product_19.webp",
    price: 219.99,
    type: "electric",
    description: `Swift, deadly and affordable, Jackson® JS Series guitars take an epic leap forward, making it easier than ever to get classic Jackson tone, looks and playability without breaking the bank.
The JS Series Dinky™ JS11 features a poplar body and a bolt-on maple speed neck with graphite reinforcement for rock-solid stability. The flat 12” radius amaranth fingerboard allows for easier chording, feels great for rhythm playing and handles bends well during lead playing.`,
  },
  {
    id: 20,
    status: "in stock",
    name: "SQUIER STRATOCASTER PACK BLACK",
    brand: "SQUIER",
    src: "../img/store/product_20.webp",
    price: 369.99,
    type: "electric",
    description: `A perfect choice for beginners, the Squier Strat Pack has everything you need to begin playing right out of the box. The Stratocaster is ideal for beginning players and provides a comfortable playing feel. It includes a lightweight body, a vintage-style tremolo bridge for classic pitch effects and three single-coil pickups for classic Strat tone. We also included a free 3-month subscription to Fender Play®—the easiest way to learn guitar.`,
  },
  {
    id: 21,
    status: "in stock",
    name: "SQUIER MINI STRAT V2 BLACK",
    brand: "SQUIER",
    src: "../img/store/product_21.webp",
    price: 259.99,
    type: "electric",
    description: `A smaller version of the Bullet® Strat®, the newly redesigned Mini is a great guitar for beginners, travelers and players with smaller hands. Features include a new thinner body and a slimmer neck profile for easy playability.
Equipped with three single-coil Stratocaster® pickups and five-way switching for classic Fender tones, the Mini also features improved tuning machines, a hardtail bridge, smaller strap pins and a side-mounted output jack.`,
  },
  {
    id: 22,
    status: "in stock",
    name: "GIBSON LES PAUL STANDARD '50S HERITAGE",
    brand: "GIBSON",
    src: "../img/store/product_22.webp",
    price: 3799.99,
    type: "electric",
    description: `The new Les Paul Standard returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50's has a solid mahogany body with a maple top, a rounded 50's-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic bridge, aluminum stop bar tailp`,
  },
  {
    id: 23,
    status: "in stock",
    name: "EPIPHONE 1959 LES PAUL STANDARD AGED DARK BURST",
    brand: "EPIPHONE",
    src: "../img/store/product_23.webp",
    price: 1299.99,
    type: "electric",
    description: `The First Collaboration Between Epiphone and the Gibson Custom Shop.
Made in partnership with the Gibson™ Custom Shop, the Limited Edition 1959 Les Paul™ Standard is Epiphone's stunning recreation of the rare vintage classic. Featuring a mahogany body with a maple top with a AAA figured maple veneer, comfortable 1959 hand-rolled neck profile with long neck tenon, aged finish, Gibson USA BurstBucker™ 2 & 3 humbucking pickups, Switchcraft® selector switch and output jack`,
  },
  {
    id: 24,
    status: "sold",
    name: "SQUIER BULLET STRATOCASTER HT FIESTA RED",
    brand: "SQUIER",
    src: "../img/store/product_24.webp",
    price: 1299.99,
    type: "electric",
    description: `Designed for players seeking an affordable, stylish and versatile instrument, the Bullet® Stratocaster® HT sports the classic looks and tone that made the Strat® one of the most popular guitars of all time. Highlights include a thin and lightweight body, an easy-to-play “C”-shaped neck profile, three single-coil pickups with five-way switching for sonic variety, and a hardtail bridge for reliable tuning stability.`,
  },
  {
    id: 25,
    status: "in stock",
    name: "PAUL REED SMITH SE CUSTOM 24-08 VINTAGE SUNBURST",
    brand: "PAUL REED SMITH",
    src: "../img/store/product_25.webp",
    price: 1279.99,
    type: "electric",
    description: `The Custom 24 is the quintessential PRS guitar: the iconic guitar that started it all back in 1985. The Custom 24-08 keeps all the foundational specs of the instrument, while taking the Custom platform to new sonic territories. Like the Core Series instrument, the SE Custom 24-08 features two mini-toggle coil tap switches that individually split the humbuckers into true single coils for a total of eight pickups configurations. `,
  },
  {
    id: 26,
    status: "in stock",
    name: "GODIN STADIUM HT TRANS WHITE RN",
    brand: "GODIN",
    src: "../img/store/product_26.webp",
    price: 1269.99,
    type: "electric",
    description: `Rule the stage with the Stadium HT! This modern single-cut axe sets itself apart with looks and features that call out to the true musician in all of us. Take hold of the silky feel of the Stadium HT Hard Rock Maple Neck and see how quickly your fingers start doing the talking with inspired licks and riffs. The super light Canadian Laurentian Basswood string-through body is balanced, expressive, and smoothly finished.`,
  },
  {
    id: 27,
    status: "sold",
    name: "JACKSON JS SERIES KING V JS32T GLOSS BLACK",
    brand: "JACKSON",
    src: "../img/store/product_27.webp",
    price: 449.99,
    type: "electric",
    description: `The JS Series King V™ JS32T offers one of our most regal shapes and outstanding performers with an affordable price tag.The JS32T King V has a poplar body, bolt-on maple speed neck with graphite reinforcement and a 12”-16” compound radius bound amaranth fingerboard with 24 jumbo frets and pearloid sharkfin inlays.Other features include dual Jackson high-output humbucking pickups with ceramic magnets and three-way toggle switching, adjustable string-through-body compensated bridge, die-cast tuners and standard strap buttons.Swift and deadly, the King V JS32T features all-black hardware and is available in Ferrari Red or Gloss Black.`,
  },
  {
    id: 28,
    status: "in stock",
    name: "SQUIER CLASSIC STRATOCASTER VIBE '60S  BLUE",
    brand: "SQUIER",
    src: "../img/store/product_28.webp",
    price: 589.99,
    type: "electric",
    description: `A tribute to the 1960s evolution of the Strat®, the Classic Vibe ‘60s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable “C”-shaped neck profile with an easy-playing 9.5”-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1960s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.`,
  },
  {
    id: 29,
    status: "in stock",
    name: "PAUL REED SMITH SE STANDARD 24-08 TRANSLUCENT BLUE",
    brand: "PAUL REED SMITH",
    src: "../img/store/product_29.webp",
    price: 999.99,
    type: "electric",
    description: `The PRS SE Standard 24-08 is a mahogany-body workhorse guitar with powerful humbucking and true single-coil tones in one instrument. Its PRS TCI “S” pickups are paired with a 3-way toggle switch and two mini-toggle coil split switches that individually split the humbuckers into true single coils for a total of eight pickup configurations. Players can enjoy two full octaves thanks to the 24-fret, 25” scale length rosewood fretboard and wide thin maple neck, and the PRS patented.`,
  },
  {
    id: 30,
    status: "in stock",
    name: "PAUL REED SMITH SE TREMONTI CHARCOAL BURST",
    brand: "PAUL REED SMITH",
    src: "../img/store/product_30.webp",
    price: 1079.99,
    type: "electric",
    description: `The SE Mark Tremonti provides a powerful voice and classic PRS aesthetic for players ready to rock. Through his solo work and as the lead guitarist of Alter Bridge and Creed, Tremonti has made a name for himself as a heavy rock player with melodic strength. The Tremonti "S" pickups are paired with dual volume and tone controls, offering the articulate aggression needed to cover Tremonti’s tonal demands.`,
  },
  {
    id: 31,
    status: "in stock",
    name: "EPIPHONE INSPIRED BY GIBSON ES-335 CHERRY",
    brand: "EPIPHONE",
    src: "../img/store/product_31.webp",
    price: 869.99,
    type: "electric",
    description: `The ES-335 is Epiphone's version of the historic ES-335 that has been wowing guitar players all over the world for over six decades. From its inaugural appearance in 1958, the Gibson™ ES-335 set an unmatched standard. Our Epiphone ES-335 is no exception. It is simply one of the best deals today for guitar players who want the classic sound of an ES-335 at an accessible price. The ES-335 is crafted with a layered maple top, back, and sides coupled with a solid maple tone block to create the amazing sustain, warmth, and resonant tone that players crave in a semi-hollow instrument.`,
  },
  {
    id: 32,
    status: "in stock",
    name: "Fender Telecaster Black Paisley Limited Edition",
    brand: "FENDER",
    src: "../img/store/product_32.png",
    price: 1448.99,
    type: "electric",
    description: `With only 1000 of these Special Edition Black Paisley Telecasters available we were really excited to get hold of one. Guitars like this always make a great prize because they are unique, limited and above all…seriously cool!
Fender’s renowned ‘Made in Japan’ (MIJ) guitars have an adoring fanbase, with many players preferring their vintage-esque specs and limited edition finishes. This particular MIJ Telecaster fully embraces those qualities with its traditional electronics and hardware – not to mention a glorious black paisley finish to boot!
Equipped with a set of Fender’s American Vintage ’58 single-coils that capture the iconic old-school Tele spank, other noteworthy appointments include an old-school “U”-shaped neck, vintage-style frets, a rounded 7.25″ fingerboard radius and a genuine bone nut.`,
  },
  {
    id: 33,
    status: "in stock",
    name: "Hagstrom Alvar Limited Edition",
    brand: "HAGSTROM",
    src: "../img/store/product_33.png",
    price: 2989.99,
    type: "electric",
    description: `The Hagstrom Alvar is a small-bodied semi-hollow electric guitar, which scales down the highly popular Viking for players who need a more wieldy axe. This Limited Edition Alvar comes in an exclusive Merlot finish with black binding and black pickguard. With a ply maple body, 24.75” scale length and twin Hagstrom HJ-50 AlNiCo-5 Humbuckers, the Alvar produces that classic semi-acoustic fat tone, yet with plenty of sustain. The looks are also to die for, with the deep red Merlot body finish really setting it apart from the crowd. Not only that, but the guitar comes cased in the Hagstrom C54 Hard Case.`,
  },
  {
    id: 34,
    status: "in stock",
    name: "Hagstrom Tremar Viking Deluxe Cloudy Seas",
    brand: "HAGSTROM",
    src: "../img/store/product_34.png",
    price: 1299.99,
    type: "electric",
    description: `This chrome-laden beauty literally screams rockabilly. Blessed with Hagstrom Viking's rich tonal palette, a well-rounded blend of clean and overdrive sounds emerges from the HJ50 humbuckers. Hagstrom's renowned Tremar vibrato system is smooth and musical, with stbility enhanced by the Tune-O-Matic roller bridge.`,
  },
  {
    id: 35,
    status: "sold",
    name: "Gibson Les Paul Standard 60s",
    brand: "GIBSON",
    src: "../img/store/product_35.png",
    price: 3748.99,
    type: "electric",
    description: `The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 60s has a solid mahogany body with an AA figured maple top, and a SlimTaper™ 60s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with a classic-style Tune-O-Matic™ bridge, aluminum Stop Bar tailpiece, Grover® Rotomatic® "Kidney" tuners, and gold Top Hat knobs with silver reflectors. The 60s Burstbucker™ pickups are loaded with Alnico 5 magnets, audio taper potentiometers, and Orange Drop® capacitors.`,
  },
  {
    id: 36,
    status: "in stock",
    name: "Suhr Standard Plus Trans Blue Denim",
    brand: "SUHR",
    src: "../img/store/product_36.png",
    price: 3448.99,
    type: "electric",
    description: `The Suhr Standard Plus is essentially a renamed Standard Pro, with the following changes: The maple neck is now roasted maple, the fretboard is now Pau Ferro, the neck and middle pickups are now V60's instead of ML's, and there is now a Push/Pull pot to split the humbucker.
The Standard Plus uses some of the most common appointments of custom built Suhr Standards. These guitars are light, toneful and perfectly balanced. Utilizing a Basswood body and Maple top, a fat, well-balanced tone can be achieved that produces smooth sounds without any harsh overtones. The finishing process provides an unparalleled combination of protection and beauty, while the thinnest possible coats of finish are applied to allow the wood to resonate freely and still provide ample protection. The neck is now constructed with roasted maple providing more stability and a darker aesthetic.`,
  },
];

export default products;
