var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("r_id");

let reci = {
  "keto-bread": {
    name: "Keto Bread",
    url: "https://draxe.com/recipes/keto-bread-recipe/",
    image: "https://i.imgur.com/5kb76hR.png",
    ing: [
      "1½ cups almond flour",
      "6 egg whites (NOTE: this recipe does not call for the yolks)",
      "¼ teaspoon cream of tartar",
      "3–4 tablespoons butter, melted",
      "¾ teaspoon baking soda",
      "3 teaspoons apple cider vinegar",
      "2 tablespoons coconut flour",
    ],
    dir: [
      "Preheat the oven to 375 F.",
      "Add the cream of tartar to the egg white mixture and, using a hand mixer, whip the eggs until soft peaks are formed.",
      "Add the almond flour, butter, baking soda, apple cider vinegar and coconut flour to a food processor, blending until well-incorporated.",
      "Place the mix into a bowl and gently fold in the egg white mixture.",
      "Grease an 8x4 loaf pan and pour in the bread mixture.",
      "Bake for 30 minutes.",
    ],
  },
  "kohlrabi-fries": {
    name: "Kohlrabi Fries",
    url: "https://www.kochtrotz.de/rezepte/leckere-kohlrabi-pommes-aus-dem-backofen-low-carb-und-fettarm/",
    image: "https://i.imgur.com/aWsHsEv.jpg",
    ing: [
      "2 big Kohlrabi",
      "1 Tsp mild paprika spice",
      "1.5 Tsp Oil",
      "Pinch of salt",
    ],
    dir: [
      "Preheat the oven to 250 ° C.",
      "Peel kohlrabi and cut into french fries or take them with a french fry cutter.",
      "Put the kohlrabi fries in portions in the dish towel / wrap and rub dry.",
      "Now add the kohlrabi fries with the spices (without salt!) To the bowl. Close the lid and shake well until the spice has spread.",
      "Add oil to the fries, close the lid and shake and shake well again",
      "Line the baking sheet with baking paper. Spread kohlrabi fries so that they are not on top of each other.",
      "Slide the tray into the oven, middle rail. Turn after 5-6 minutes so that they turn brown on both sides. After another 5-6 minutes they are done.",
      "Take out the fries and sprinkle them with salt.",
    ],
  },

  "cauliflower-sandwiches": {
    name: "Cauliflower Sandwiches",
    url: "https://kirbiecravings.com/cauliflower-crusted-grilled-cheese-sandwiches/",
    image: "https://i.imgur.com/v6FaB07.png",
    ing: [
      "1 medium head cauliflower raw, cut into small florets and stem removed",
      "1 large egg",
      "1/2 cup shredded Parmesan cheese",
      "1 tsp Italian herb seasoning",
      "2 thick slices of white cheddar cheese you can also use shredded cheddar cheese",
    ],
    dir: [
      "Preheat oven to 450°F. Place cauliflower into food processor and pulse until crumbs about half the size of a grain of rice.",
      "Place cauliflower into large microwave-safe bowl and microwave for 2 minutes. Your cauliflower should be soft and tender (and hot!). (If you don't want to use the microwave to dry out the cauliflower and prefer to steam and wring with a cloth to dry, check out my wringing instructions here.)",
      "Stir cauliflower to mix up the bottom and top cauliflower. Place back into the microwave and cook for another 3 minutes. Remove and stir again so that all the cauliflower cooks evenly. Place back into microwave and cook for 5 minutes. At this point, you should see the cauliflower is starting to become more dry. Microwave for another 5 minutes. Cauliflower should still be slightly moist to the touch, but should look dry and clumped up (like photo above; similar to as if someone had chewed it up and spit it back out.) If you've made cauliflower pizza or breadsticks with the cloth wringing dry method, it should look the same.",
      "Allow cauliflower to cool for a few minutes. Then add in egg and cheese. Stir to combine until smooth paste forms. Stir in seasoning. Divide dough into 4 equal parts. Place onto large baking sheet lined with parchment paper. Using your knuckles and fingers, shape into square bread slices about 1/3 inch thick. Bake cauliflower bread for about 15-18 minutes or until golden brown. Remove from oven and let cool a few minutes.",
      "Using a good spatula, carefully slide cauliflower bread off of parchment paper. Now you are ready to assemble your sandwiches. You can do this a few different ways. You can either cook on the stove top as you would normally cook a grilled cheese. You can also place sandwiches into toaster oven and broil for several minutes (5-10) until cheese is completely melted and bread is toasty. If you don't own a toaster oven, you can also do this in the oven.",
    ],
  },
  "cauliflower-mash": {
    name: "Cauliflower Mash",
    url: "https://www.ketoconnect.net/creamy-cauliflower-mash/",
    image: "https://i.imgur.com/Nwto9hu.png",
    ing: [
      "5 cups cauliflower chopped",
      "1/4 cup Heavy Whipping Cream",
      "3 tbsp Butter",
      "5 cloves garlic minced",
      "2 tsp Dried Rosemary",
      "3 tbsp parmesan",
      "1/2 tsp pepper",
      "Pink Himalayan Salt (to taste)",
    ],
    dir: [
      "Chop up 5 cups of raw cauliflower.",
      "Bring pot of water to a boil (enough to cover all the cauliflower), add the cauliflower and boil for 15 minutes or until tender.",
      "Drain cauliflower and place in processor.",
      "Cook butter, garlic and rosemary in a saucepan over medium heat until fragrant.",
      "Add melted butter, garlic and rosemary to processor and pulse several times until well combined.",
      "Add cream, parmesan, salt and pepper to processor and process until smooth and creamy.",
      "Taste for salt level. Serve warm and enjoy!",
    ],
  },
  "keto-bagels": {
    name: "Keto Bagels",
    url: "https://peaceloveandlowcarb.com/low-carb-keto-everything-bagels/",
    image: "https://i.imgur.com/byQnAkr.png",
    ing: [
      "2 cups almond flour",
      "1 tablespoon baking powder",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "1 teaspoon dried Italian seasoning",
      "3 large eggs, divided",
      "3 cups shredded low moisture mozzarella cheese",
      "5 tablespoons cream cheese",
      "3 tablespoons Everything Bagel Seasoning",
    ],
    dir: [
      "Preheat oven to 425Â°. Line a rimmed baking sheet with parchment paper or a Silpat.",
      "In a medium mixing bowl, combine the almond flour, baking powder, garlic powder, onion powder, and dried Italian seasoning. Mix until well combined. I like to put the mixture through a flour sifter to ensure that all the baking powder gets mixed in with the rest of the ingredients.",
      "Crack one of the eggs into a small bowl and fork whisk. This will be the egg wash for the top of the bagels. The other two eggs will go in the dough.",
      "In a large microwave safe mixing bowl, combine the mozzarella cheese and cream cheese. Microwave for 1 minute and 30 seconds. Remove from microwave and stir to combine. Return to microwave for 1 additional minute. Mix until well combined.",
      "To the mixing bowl, add the remaining 2 eggs and the almond flour mixture. Mix until all ingredients are well incorporated. If the dough gets too stringy and unworkable, simply put it back in the microwave for 30 seconds to soften and continue mixing.",
      "Divide the dough into 6 equal portions. Roll each portion into a ball.",
      "Gently press your finger into the center of each dough ball to form a ring. Stretch the ring to make a small hole in the center and form it into a bagel shape.",
      "Brush the top of each bagel with the egg wash.",
      "Top each bagel with Everything Bagel Seasoning.",
      "Bake on the middle rack for 12-14 minutes or until golden brown.",
    ],
  },
  "fathead-nachos": {
    name: "Fathead Nachos",
    url: "https://www.ditchthecarbs.com/fat-head-nachos/",
    image: "https://i.imgur.com/KHCDWUX.png",
    ing: [
      "170 g pre-shredded/grated mozzarella",
      "85 g almond meal/flour",
      "2 tbsp cream cheese",
      "1 egg",
      "salt to taste",
      "1 tsp cumin powder",
      "1 tsp coriander/cilantro powder",
      "pinch chilli powder",
    ],
    dir: [
      "1 red onion diced",
      "500 g ground/mince beef",
      "400 g tinned/canned tomatoes diced",
      "1/2 tsp chilli powder, or to taste",
      "1 tbsp tomato paste",
    ],
  },
  "lime-creamsicles": {
    name: "Keto Lime Creamsicles",
    url: "https://elanaspantry.com/keto-lime-popsicles/",
    image: "https://i.imgur.com/R2FlHuv.png",
    ing: [
      "1 can full fat coconut milk",
      "½ cup mashed avocado",
      "½ cup lime juice, freshly squeezed",
      "¼ teaspoon vanilla stevia",
      "⅛ teaspoon vanilla powder",
    ],
    dir: [
      "In a vitamix combine coconut milk, avocado, lime juice, stevia, and vanilla",
      "Blend until smooth",
      "Transfer mixture to a popsicle mold",
      "Insert popsicle sticks",
      "Freeze 4 hours",
    ],
  },
  "baba-ganoush": {
    name: "Baba Ganoush",
    url: "https://draxe.com/recipes/baba-ganoush/",
    image: "https://i.imgur.com/8wmfLRS.png",
    ing: [
      "1 medium eggplant, sliced",
      "¼ cup tahini",
      "3–4 garlic cloves, smashed",
      "1–2 tablespoons avocado oil",
      "1 cup parsley, chopped",
      "Sea salt and pepper to taste",
    ],
    dir: [
      "On a baking sheet lined with parchment paper, lay out the eggplant slices.",
      "Salt the eggplant and allow eggplant to sit for 15–20 minutes to remove moisture.",
      "Use a paper towel to dab eggplant, removing excess water.",
      "Broil eggplant on top oven rack for 5–8 minutes.",
      "Remove skin (optional*).",
      "Place eggplant in a food processor and pulse until broken down.",
      "Place all other ingredients in the food processor and blend on high until well-combined.",
      "Serve with chopped vegetables.",
    ],
  },
  taco: {
    name: "Taco",
    url: "https://www.homemadeinterest.com/low-carb-taco/",
    image: "https://i.imgur.com/LvOwaDa.png",
    ing: [
      "1 pound Ground beef",
      "2 tablespoon Homemade Taco Seasoning",
      "1/4 cup Water",
      "Toppings for taco: Sour cream, avocado, cheese, lettuce, etc., optional",
    ],
    dir: [
      "Preheat oven to 350F.",
      "On a baking sheet lined with parchment paper or a silicone mat place 1/4 cup piles of cheese 2 inches apart. Press the cheese down lightly so it makes one layer.",
      "Place baking sheet in the oven and bake for 5-7 minutes or until the edges of the cheese are brown.",
      "Let the cheese cool for 1-2 minutes until it is firm enough to lift but still bendable. Lift the cheese up and place it over the handle of a spoon or other utensil that is balanced on two cups.",
      "Let cheese cool completely then remove.",
      "While you continue to bake your cheese taco shells place the ground beef in a skillet over medium high heat cooking until it is completely cooked through.",
      "Drain the grease from the meat and then add the homemade taco seasoning. Pour water into skillet and stir everything around mixing it together.",
      "Simmer for 5 minutes or until liquid has cooked away. ",
      "Add meat to taco shells and top with your favorite taco toppings.",
    ],
  },
  "portabella-sliders": {
    name: "Portabella Sliders",
    url: "http://www.modernlowcarb.com/recipes/2015/5/31/low-carb-portabella-sliders-keto-gluten-free",
    image: "https://i.imgur.com/MuUSAME.png",
    ing: [
      "1 pound grass fed beef (I like 80/20 for burgers)",
      "24 baby portabella mushrooms",
      "4 slices sharp cheddar, sliced into quarters",
      "4 tbsp chopped yellow onion",
      "2 dill pickles, sliced",
      "2 tbsp extra virgin olive oil",
      "12 basil leaves",
      "yellow mustard, mayo, sriracha or low carb ketchup (optional)",
      "salt and pepper to taste",
    ],
    dir: [
      "-Remove stems from portabella mushroom caps and wipe with a damp paper towel to remove any dirt or debris.  In a small saucepan, heat 1 tbsp olive oil over medium heat.  Add mushroom caps and cook for 2 minutes on each side, allowing mushrooms to cook through but retain firmness.",
      "-Remove mushrooms from pan and place on paper towels to allow liquid to drain off.",
      "-Divide the ground beef into 12 portions, rolling each into a small disc shape. Add salt and pepper to taste.  In a large grill pan, heat remaining tbsp olive oil over medium heat.  Once the pan is hot, add the meat and allow to cook for 3 minutes on one side.  Flip and allow to cook for 3 minutes on the other side.  Cook to desired level of doneness (I like burgers cooked to medium).",
      "-Stack a mushroom, burger, cheese, onion, pickles and your choice of condiments.  Top with second mushroom cap and add a basil leaf for garnish.  Use a toothpick to hold.  Serve and enjoy!",
    ],
  },
  "cauliflower-pizza": {
    name: "Cauliflower Pizza",
    url: "https://www.primalkitchen.com/pesto-keto-cauliflower-pizza-with-primal-kitchen/",
    image: "https://i.imgur.com/tNvqlIX.jpg",
    ing: [
      "<p class='org-text'>For the pizza crust</p>",
      "1 head cauliflower",
      "1 egg",
      "1/2 cup coconut flour",
      "1 tsp parsley",
      "1 tsp basil",
      "1 tsp oregano",
      "1 tablespoon Primal Kitchen Avocado Oil",
      "<p class='org-text'>For the avocado oil pesto</p>",
      "2 cups fresh basil",
      "1/3 cup pine nuts, toasted",
      "1/4 cup grated Parmesan cheese",
      "2/3 cup Primal Kitchen Extra Virgin Avocado Oil",
      "1 teaspoon garlic, minced",
      "1 teaspoon lemon juice",
      "Salt and pepper to taste",
      "<p class='org-text'>Toppings</p>",
      "4 plum tomatoes, sliced thinly",
      "1/2 cup broccolini",
      "1/2 cup mozzarella cheese (full fat!)",
      "2 tablespoons Primal Kitchen Vegan Ranch",
      "Optional: Top with red pepper flakes",
    ],
    dir: [
      "<p class='org-text'> For the cauliflower pizza crust</p>",
      "Pulse cauliflower in food processor until it turns into rice.",
      "Squeeze riced cauliflower through a cheese cloth or dish towel to remove moisture.",
      "Place the cauliflower and coconut flour into a large mixing bowl.",
      "In a separate mixing bowl, whisk together the eggs and spices until you’ve created a uniform liquid.",
      "Combine the eggs and spices with the cauliflower and coconut flour, and knead the mixture into a smooth dough.",
      "Line a baking sheet with parchment paper, and roll out the cauliflower dough into an even, circular crust about 1/2 inch thick. Brush the crust with Primal Kitchen Avocado Oil.",
      "Bake the crust at 400ºF for 30 minutes",
      "<p class='org-text'>For the Primal Kitchen Avocado Oil pesto</p>",
      "Add the basil leaves, parmesan cheese, pine nuts, garlic cloves, Primal Kitchen® Extra Virgin Avocado Oil, lemon juice, salt, and pepper into the food processor.",
      "Blend the ingredients until smooth.",
      "<p class='org-text'> Topping the pizza</p>",
      "Slice the tomatoes thinly.",
      "Cut the broccolini into pieces. ",
      "Slice the full-fat mozzarella cheese into even pieces.",
      "Spread the pesto over the pizza crust in a thick, delicious layer.",
      "Artfully layer veggies and cheese on top of the pesto.",
      "Add a few thick lines of Primal Kitchen Vegan Ranch. ",
      "Finish off with red pepper flakes, a sprinkle of salt and pepper, and light drizzle of Primal Kitchen Extra Virgin Avocado Oil, if desired.",
      "Pop the pizza in the oven for another 6-7 minutes at 400ºF, or until the veggies are tender.",
      "Enjoy!",
    ],
  },
  "keto-ice-cream": {
    name: "Vanilla Coconut Collagen Fuel Keto Ice Cream",
    url: "https://www.marksdailyapple.com/primal-keto-ice-cream/",
    image: "https://i.imgur.com/iS2Mc5U.png",
    ing: [
      "1 13.5 ounce can full-fat coconut milk (400 ml)",
      "1 scoop PRIMAL KITCHEN® Vanilla Coconut Collagen Fuel (16.5 g)",
      "¼ cup macadamia nut butter* (60 ml)",
      "2 teaspoons pure vanilla extract (without propylene glycol) (10 ml)",
      "pinch of salt",
    ],
    dir: [
      "To make macadamia butter, blend 1 cup raw, unsalted macadamia nuts in the food processor for 3 to 5 minutes until very smooth.",
      "To make the ice cream, whisk coconut milk, PRIMAL KITCHEN® Collagen Fuel, macadamia butter, vanilla, and salt together until smooth. If making chocolate ice cream, whisk in cocoa powder.",
    ],
  },
  "potato-salad": {
    name: "Keto Potato Salad",
    url: "https://www.healthfulpursuit.com/2015/07/potato-salad-that-isnt/",
    image: "https://i.imgur.com/HHGBaid.png",
    ing: [
      "<p class='org-text'>Salad</p>",
      "1 head of cauliflower, chopped into bite-sized pieces",
      "6 hardboiled eggs, omit if making vegan or egg-free",
      "3 pickles, chopped",
      "½ cup chopped fresh parsley",
      "¼ cup green onion, green part only, chopped",
      "<p class='org-text'>Dressing</p>",
      "½ cup avocado oil mayonnaise or my vegan mayo recipe",
      "2 tablespoons gluten-free dijon mustard",
      "3 tablespoons pickle juice",
      "¼ - ½ teaspoon sea salt",
      "Freshly ground pepper, to taste",
    ],
    dir: [
      "Prepare the cauliflower by cutting into bite-sized pieces. You can do this with a knife or if you want smaller pieces, shred. Steam for 2-3 minutes. Drain and set aside to cool.",
      "Peel eggs and separate yolks, set aside. Cut the whites into small bite size pieces. Mix the egg whites into the cauliflower mixture in a large bowl along with chopped pickle, green onion and parsley.",
      "Add egg yolks, mayo, mustard, pickle juice, salt and pepper into your high-powered blender and blend until smooth. Pour over the cauliflower mixture and stir to coat. Chill overnight and serve.",
    ],
  },
  "shepherds-pie": {
    name: "Shepherd’s Pie",
    url: "https://www.healthfulpursuit.com/recipe/paleo-bacon-shepherds-pie/",
    image: "https://i.imgur.com/d1xAZSW.jpg",
    ing: [
      "<p class='org-text'>Beef Layer</p>",
      "375 grams (approximately 15 strips) smoked ham bacon",
      "0.75kg (1.6lbs) extra-lean ground beef",
      "2 cups diced carrots",
      "1 cup (approximately 2 small) diced onion",
      "1 cup (approximately 3 sticks/ribs) diced celery",
      "1 cup gluten-free chicken broth",
      "2 tablespoons arrowroot starch or tapioca starch",
      "2 teaspoons no-salt seasoning",
      "1 teaspoon smoked paprika",
      "½ teaspoon sea salt",
      "½ teaspoon ground pepper",
      "<p class='org-text'>Mashed Cauliflower Topping</p>",
      "2 heads of cauliflower, florets removed from stem",
      "1 tablespoon coconut oil",
      "1 teaspoon garlic powder",
      "¼ teaspoon ground pepper",
      "¼ teaspoon onion salt",
      "1 egg white",
    ],
    dir: [
      "Preheat oven for 350F and set aside a 9×13 casserole dish.",
      "Add bacon and beef to a large pot and cook on medium-high until beef is no longer pink.",
      "Add carrots, onion and celery. Cook for 10 minutes, stirring every couple of minutes.",
      "Add chicken broth, starch, no-salt seasoning, smoked paprika, salt and pepper. Stir to coat and continue to cook for 3 minutes, until thickened.",
      "Transfer to the prepared casserole dish and flatten out with the back of a spatula.",
      "Meanwhile, add water to a large pot. Cover and bring to a boil.",
      "Add cauliflower florets and boil for 20 minutes, until softened.",
      "Drain the water, transfer the cauliflower back to the pot, and mash with a potato masher. Add coconut oil, garlic powder, pepper and onion salt. Mash until super smooth and amazing.",
      "Top the meat layer with the mashed cauliflower and spread evenly. Top with egg white and, using the prongs of a fork, fluff up the top, incorporating the egg white to each bit of the top of the casserole.",
      "Bake in preheated oven for 45 minutes OR cover and allow to sit in the fridge for up to 24 hours until you’re ready to bake.",
    ],
  },
  "peanut-butter-truffles": {
    name: "Peanut Butter Truffle",
    url: "https://www.savorytooth.com/peanut-butter-truffles/",
    image: "https://i.imgur.com/oqV1oEH.png",
    ing: [
      "<p class='org-text'>Peanut Butter Balls </p>",
      "1/2 cup (128g) creamy peanut butter",
      "1/3 cup (54g) confectioners swerve",
      "1/4 cup (28g) blanched almond flour",
      "<p class='org-text'>Chocolate Coating</p>",
      "3 ounces (85g) unsweetened baking chocolate finely chopped",
      "3 tablespoons (27g) confectioners swerve",
      "1 tablespoon (14g) coconut oil",
    ],
    dir: [
      "In a bowl, combine all peanut butter ball ingredients until well-mixed and a dough is formed. If the peanut butter is too stiff to easily stir, let it soften at room temperature until it becomes more manageable.",
      "Prepare a baking sheet lined with parchment paper. Form twelve 1-inch balls from the peanut butter mixture and arrange them in a single layer on the parchment paper. Place in the freezer for at least 30 minutes to harden. The longer you let them freeze, the easier it will be to dip them into chocolate without becoming too soft and losing their shape.",
      "In a bowl, add all chocolate coating ingredients. Microwave in 30-second intervals, thoroughly stirring in between, until melted and smooth. Make sure you don't overheat the chocolate.",
      "Take the peanut butter balls out of the freezer. Using toothpicks to help transfer them, dip a peanut butter ball in chocolate until coated on all sides, letting the excess drip off. Place the coated ball back on the parchment paper. Repeat until all are coated.",
      "Refrigerate until the chocolate shell is hardened, about an hour or longer. They can be made ahead of time, and stored in the refrigerator until you're ready to serve them.",
    ],
  },
  "chocolate-peanut-butter-shake": {
    name: "Chocolate Peanut Butter Shake",
    url: "https://www.savorytooth.com/keto-shake/",
    image: "https://i.imgur.com/4hwPHNH.png",
    ing: [
      "1 cup unsweetened plain almond milk ",
      "1/2 cup boiling water",
      "1/2 cup crushed ice",
      "3 tablespoons cream cheese ",
      "3 tablespoons confectioners swerve sweetener ",
      "2 tablespoons unsweetened cocoa powder",
      "1 tablespoon peanut butter",
      "1 teaspoon vanilla extract",
      "1/8 teaspoon table salt",
    ],
    dir: [
      "<p class='org-text'>Recommended Blender Method</p>",
      "Add swerve, cocoa powder, vanilla, and salt to blender. Pour boiling water on top, then add cream cheese and peanut butter. Blend until cream cheese and peanut butter are fully dissolved. Add crushed ice, and blend until ice is melted. Stir in almond milk. Serve.",
      "<p class='org-text'>Alternate Shake Method </p>",
      "Add swerve, cocoa powder, vanilla, and salt to 20-ounce bottle. Pour boiling water on top, then add cream cheese and peanut butter. Close with lid, and vigorously shake for 1 minute until cream cheese and peanut butter are fully dissolved. Add 1/4 cup crushed ice and 1/4 cup cold water (instead of 1/2 cup crushed ice), and vigorously shake until ice is melted. Stir in almond milk. Serve.",
    ],
  },
  "iced-tea": {
    name: "Iced Tea",
    url: "https://www.savorytooth.com/iced-tea/",
    image: "https://i.imgur.com/520j42L.png",
    ing: [
      "6 black tea packets or 2 tablespoons loose black tea",
      "2 lemons",
      "1/2 cup confectioners swerve sweetener",
      "5 cups ice cubes",
      "4 cups water",
    ],
    dir: [
      "<p class='org-text'>Make Hot Tea:</p> Add tea bags to a pitcher with 2-quart capacity (8 cups), safe for hot water and rapid temperature changes. Bring 4 cups water to a simmer. Pour hot water into the pitcher over tea bags. Steep tea for 5 minutes or to desired strength, then remove and discard tea bags.",
      "<p class='org-text'>Add Other Ingredients:</p> Stir in sweetener until fully dissolved in the hot water. Cut lemons in half and squeeze them until you have 1/4 cup of juice, discarding any seeds. Any unused lemon halves can be cut into slices or wedges to be used as garnish. Add lemon juice and ice cubes.",
      "<p class='org-text'>Shake & Serve:</p> Securely close the pitcher with the lid. Shake a few times or until mixed. Add any lemon slices or wedges as garnish. Serve iced tea.",
    ],
  },
  crackers: {
    name: "Low Carb Crackers with Almond Flour",
    url: "https://www.savorytooth.com/low-carb-crackers/",
    image: "https://i.imgur.com/qT9yNjV.png",
    ing: [
      "3/4 cup blanched almond flour (3 ounces weight)",
      "1/2 cup finely grated parmesan cheese with sandy texture (2 ounces weight)",
      "1 large egg beaten",
      "1/4 teaspoon coarsely ground black pepper",
      "1/4 teaspoon salt",
    ],
    dir: [
      "Preheat the oven to 350 F.",
      "Combine all dry ingredients (almond flour, parmesan cheese, pepper, salt) in a bowl, stirring together until well-mixed.",
      "Add about two-thirds of the beaten egg and stir together until it forms a cohesive and rollable dough. Use hands to form the dough, if needed. Set aside the remaining egg.",
      "Prepare a baking sheet lined with parchment paper or a baking mat. Divide the dough into 4 equal balls and space them out on the parchment paper.",
      "Working with one piece of dough at a time, cover with plastic wrap and flatten the dough to less than 1/8 inch thick. Get it as thin as you can, and make it uniform across the dough so that the crackers will crisp evenly in the oven. Each dough piece should be flattened to a roughly square shape, about 3x3 inches.",
      "Optionally, use a butter knife to lightly score the dough into 16-20 individual crackers, making it easier to break them up after baking.",
      "Using the remaining beaten egg, brush a very thin layer across the surface of the crackers. Discard the rest of the egg.",
      "Bake at 350 F until golden brown and crispy, about 20 minutes. They will crisp starting from the edges and moving inward; the crackers are done when the centers are crispy. Ovens vary, so frequently monitor the crackers starting at 15 minutes and remove them when done.",
      "Let them fully cool before breaking into individual crackers by snapping them along the perforations.",
    ],
  },
  "chocolate-milk": {
    name: "Keto Chocolate Milk",
    url: "https://www.thelittlepine.com/keto-chocolate-milk/",
    image: "https://i.imgur.com/2srnIS7.jpg",
    ing: [
      "2 Cups Low Carb Milk (coconut or almond)",
      "4 Tablespoons Cocoa Powder (dutch process is best!)",
      "4 Tablespoons Swerve or Lakanto (granulated)",
      "1/2 Teaspoons Vanilla",
      "Pinch Kosher Salt",
    ],
    dir: [
      "Place all ingredients in a blender and blend until everything has combined.",
      "Pour into 2 glasses and enjoy!",
    ],
  },
  "mac-n-cheese": {
    name: "Cauliflower Mac and Cheese",
    url: "https://thatlowcarblife.com/cauliflower-mac-and-cheese/",
    image: "https://i.imgur.com/Sj48eWn.png",
    ing: [
      "16 ounces cauliflower, chopped into macaroni sized pieces",
      "¼ cup heavy cream",
      "2 ounces cream cheese, room temperature",
      "1 cup grated cheddar cheese",
      "1/3 cup grated Monterey jack cheese",
      "½ teaspoon ground mustard",
      "½ teaspoon salt",
      "½ teaspoon cracked pepper",
    ],
    dir: [
      "Bring a pot of water to a boil. Add the cauliflower pieces and boil for 5 minutes.",
      "Drain the water and return the cauliflower to the pot over low heat.",
      "Add the remaining ingredients and stir well until the cheese has melted fully, about 3 minutes.",
      "Serve immediately.",
      "<p class='org-text'>Note</p>",
      "Use whatever blend of cheeses you prefer in your mac and cheese.",
    ],
  },
  "lemon-bars": {
    name: "Keto Lemon Bars",
    url: "https://www.heyketomama.com/keto-lemon-bars/",
    image: "https://i.imgur.com/o28vQaq.png",
    ing: [
      "1/2 cup butter, melted",
      "1 3/4 cups almond flour, divided",
      "1 cup powdered erythritol, divided",
      "3 medium lemons",
      "3 large eggs",
    ],
    dir: [
      "Mix butter, 1 cup almond flour, 1/4 cup erythritol, and a pinch of salt. Press evenly into an 8×8″ parchment paper-lined baking dish. Bake for 20 minutes at 350 degrees F. Then, let cool for 10 minutes.",
      "Into a bowl, zest one of the lemons, then juice all 3 lemons, add the eggs, 3/4 cup erythritol, 3/4 cup almond flour & pinch of salt. Combine to make filling.",
      "Pour the filling onto the crust & bake for 25 minutes.",
      "Serve with lemon slices and a sprinkle of erythritol.",
    ],
  },
  "pound-cake": {
    name: "Keto Vanilla Pound Cake",
    url: "https://www.heyketomama.com/keto-vanilla-pound-cake/",
    image: "https://i.imgur.com/1X5wdrZ.png",
    ing: [
      "2 cups almond flour",
      "1/2 cup butter",
      "1 cup granular erythritol (Swerve)",
      "2 tsp baking powder",
      "1 tsp vanilla extract",
      "1 cup sour cream",
      "2 ounces cream cheese",
      "4 large eggs",
    ],
    dir: [
      "Preheat oven to 350 degrees Fahrenheit",
      "Generously butter a 9 inch bundt pan, set aside",
      "Combine almond flour and baking powder in a large bowl, set aside",
      "Cut butter into several small squares and put in separate bowl, add cream cheese",
      "Microwave butter and cream cheese for 30 seconds. Be careful to not burn cream cheese. Stir these wet ingredients together until well combined.",
      "Add erythritol, vanilla extract, and sour cream to butter and cream cheese mixture. Stir well.",
      "Pour wet ingredients into large bowl of almond flour and baking powder. Stir well.",
      "Add eggs to batter. Stir well.",
      "Pour batter into buttered bundt pan, place in oven and bake for 50 minutes or until a toothpick placed in the cake comes out clean.",
      "For best results, let cake cool completely for at least 2 hours, preferably overnight. If you remove it too soon, it may crumble a bit.",
    ],
  },
  "carrot-cake": {
    name: "Keto Vanilla Pound Cake",
    url: "https://www.brokefoodies.com/keto-carrot-cake-easy-low-carb-dessert/",
    image: "https://i.imgur.com/RwW22sO.png",
    ing: [
      "<p class='org-text'>For the cake</p>",
      "2 tbsp almond flour",
      "1 tbsp psyllium husk",
      "1/2 tsp baking powder",
      "1 tbsp erythritol",
      "1 large egg lightly beaten",
      "1/2 tsp vanilla extract",
      "1/2 small carrot finely grated",
      "pinch of salt",
      "1 tsp cinnamon",
      "1/4 tsp ground ginger",
      "1/4 tsp ground cloves (optional)",
      "1 tbsp melted butter",
      "<p class='org-text'>For the frosting</p>",
      "1/4 cup cream cheese at room temperature",
      "1 tbsp whipping cream",
      "1/2 tbsp erythritol",
      "1/2 tsp vanilla extract",
    ],
    dir: [
      "In a mug, combine all your cake ingredients and mix thoroughly until everything is well incorporated. You can do this in a blender or food processor too. Microwave on high heat for 90 seconds. Take your cake out of the mug and let it completely cool down. Slice your cake to make 2 layers and place them somewhere cool.",
      "In a bowl, add cream cheese, erythritol and vanilla extract. Using an electric hand mixer whip all the ingredients together until you get a soft creamy mixture. Add your whipping cream and mix again for 5 minutes. Set aside.",
      "Take one layer of the cake and scoop on top of it one heaped tbsp of your cream cheese frosting. Gently place the top layer on it and scoop on top of it another heaped tbsp of cream cheese frosting. Using the back for the spoon, spread the remaining frosting in any way you prefer. ",
      "Serve right away or chill before serving. The colder the cake gets, the firmer the cream will be and vice versa.",
    ],
  },
  "pumpkin-cheesecake": {
    name: "Keto Pumpkin Cheesecake with Almond Pecan Crust",
    url: "https://www.allrecipes.com/recipe/272693/keto-pumpkin-cheesecake-with-almond-pecan-crust/",
    image: "https://i.imgur.com/pUNHy8j.png",
    ing: [
      "<p class='org-text'>Crust<p/>",
      "1 cup almonds",
      "1 cup pecans",
      "2 (1 gram) packets granular sucralose sweetener (such as Splenda®)",
      "3 tablespoons butter, melted",
      "<p class='org-text'>Filling<p>",
      "3 (8 ounce) packages low-fat cream cheese, at room temperature ",
      "⅔ cup granular sucralose sweetener (such as Splenda®)",
      "1 (15 ounce) can pumpkin puree",
      "1 teaspoon vanilla extract",
      "1 teaspoon ground cinnamon",
      "½ teaspoon ground ginger",
      "¼ teaspoon ground cloves",
      "¼ teaspoon salt",
      "3 eggs",
    ],
    dir: [
      "Preheat the oven to 350 degrees F (175 degrees C).",
      "Pulse almonds and pecans together in a food processor until ground, but not paste-like. Add sweetener and butter; pulse to combine. Press mixture into the bottom of a 9-inch springform pan.",
      "Bake in the preheated oven until crust is golden brown, about 10 minutes. Let cool 10 minutes.",
      "Blend cream cheese and 2/3 cup sweetener in food processor or with an electric mixer until smooth, 2 to 3 minutes. Mix in pumpkin, vanilla extract, cinnamon, ginger, cloves, and salt until smooth, about 2 minutes more. Add in eggs one at a time, mixing thoroughly after each addition. Pour batter into the prepared crust.",
      "Bake in the preheated oven until just set in the center, or when the filling jiggles but does not run, 45 to 50 minutes. Let cool completely, about 30 minutes. Run a knife around the edge of the cheesecake, cover, and refrigerate at least 4 hours, until ready to serve.",
    ],
  },
  "bang-bang-cauliflower": {
    name: "Bang Bang Cauliflower",
    url: "https://kirbiecravings.com/keto-low-carb-bang-bang-cauliflower/",
    image: "https://i.imgur.com/9TbUH5S.jpg",
    ing: [
      "12 oz cauliflower cut into bite sized pieces (about 1/2 a large head of cauliflower)",
      "cooking oil for frying",
      "1 large egg whisked",
      "1 tbsp heavy cream",
      "1/2 tbsp parsley finely chopped",
      "<p class='org-text'>BREADING</p>",
      "1 cup superfine almond flour",
      "1 cup finely grated parmesan cheese use fresh and not shelf-stable kind",
      "<p class='org-text'>BANG BANG SAUCE</p>",
      "1/4 cup mayonnaise",
      "1 tbsp chili paste I used sambal",
      "1 tbsp erythritol granular",
      "1 tsp sriracha",
      "1 tsp lime juice",
    ],
    dir: [
      "In a small bowl, whisk egg with heavy cream. Set aside.",
      "In a medium bowl, whisk together almond flour and cheese. Set aside.",
      "Line a medium baking sheet with parchment paper. Spoon a small amount of breading onto your sheet pan (just enough to cover the bottom of a cauliflower bite).",
      "Dip a piece of cauliflower in the egg wash. After it is fully coated, shake it a few times, making sure to shake off any excess egg drippings back into the egg bowl before adding it to the breading. The reason for doing this is that you don't want the egg drippings going into the breading. The moisture will cause the breading to clump and they will no longer stick to the cauliflower.",
      "Place the cauliflower piece onto the small mound of bread crumbs, applying a little pressure so those breading sticks to the bottom of the cauliflower.",
      "Spoon a small amount of breading over the cauliflower and then use your fingers to press the breading onto the cauliflower until it is fully coated. Make sure the coating is not too thick. You want the cauliflower to be completely covered but you don't want the coating to be too thick because it will fall off when fried. It is important to keep your hands dry and breading in a separate bowl so that the breading does not get too damp.",
      "Carefully set the cauliflower aside onto a clean part of your baking sheet. Repeat with remaining cauliflower.",
      "To deep fry the cauliflower, pour 1 1/2 inches of cooking oil into a pot. When the oil reaches 350F, add a few pieces of breaded cauliflower. You may need to stir the cauliflower a few times to prevent it from sticking to the bottom of the pan. Cook a few minutes until a deep golden brown. Remove cauliflower with a slotted spoon and place onto a paper towel-lined plate. Repeat with remaining cauliflower.",
      "To make the bang bang sauce, add all sauce ingredients into a small bowl and whisk until smooth. Taste and adjust as needed. If you prefer less spicy, use less sriracha. If you leave out the sriracha completely you may want to add a little vinegar to the sauce.",
      "Drizzle bang bang sauce over cauliflower. It's better to drizzle the sauce over the cauliflower to prevent the breading from getting soft from the sauce. Garnish with parsley. Serve immediately.",

      ,
    ],
  },
  "peanut-butter-fudge": {
    name: "Keto Peanut Butter Fudge Fat Bomb",
    url: "https://www.allrecipes.com/recipe/264650/keto-peanut-butter-fudge-fat-bomb/",
    image: "https://i.imgur.com/IXBtxTL.png",
    ing: [
      "1 cup unsweetened peanut butter, softened",
      "1 cup coconut oil",
      "¼ cup unsweetened vanilla-flavored almond milk",
      "2 teaspoons vanilla liquid stevia, or as needed",
    ],
    dir: [
      "Line a loaf pan with parchment paper.",
      "Combine peanut butter and coconut oil in a microwave-safe dish. Microwave 30 seconds until slightly melted. Add to blender with almond milk and stevia; blend until well combined. Pour into loaf pan and refrigerate until set, about 2 hours.",
    ],
  },
  "coconut-cookies": {
    name: "Keto Coconut Cookies",
    url: "https://www.allrecipes.com/recipe/268690/keto-coconut-cookies/",
    image: "https://i.imgur.com/HztxEje.png",
    ing: [
      "¾ cup granular sucralose sweetener",
      "½ cup butter",
      "3 eggs",
      "½ tablespoon heavy cream",
      "1 teaspoon almond milk",
      "½ cup unsweetened coconut flakes",
      "6 tablespoons coconut flour",
      "¼ cup almond flour",
      "1 teaspoon baking powder",
      "1 teaspoon baking soda",
      "½ teaspoon salt",
    ],
    dir: [
      "Preheat the oven to 350 degrees F (175 degrees C). Line a baking sheet with parchment paper.",
      "Beat sweetener and butter together in a bowl until creamy. Add eggs, heavy cream, and almond milk; beat until smooth. Scrape down sides with a spatula.Mix coconut flakes, coconut flour, almond flour, baking powder, baking soda, and salt together in a separate bowl. Beat into the butter mixture until dough comes together.",
      "Drop teaspoonfuls of cookie dough onto the baking sheets.",
      "Bake in the preheated oven until golden brown, about 17 minutes. Cool on the baking sheet for 3 minutes before transferring to a wire rack.",
    ],
  },
  "keto-chaffle": {
    name: "Basic keto chaffle",
    url: "https://www.dietdoctor.com/recipes/keto-chaffles",
    image: "https://i.imgur.com/ChufqmZ.jpg",
    ing: [
      "1 oz. butter, melted",
      "4 eggs",
      "8 oz. (1 cup equals 4 oz) mozzarella cheese, shredded",
      "4 tbsp almond flour",
      "1 pinch salt (optional)",
    ],
    dir: [
      "Pre-heat your waffle maker.",
      "Place all of your ingredients (save some of the butter to grease the waffle maker) into a mixing bowl and beat to combine.",
      "Lightly grease your waffle iron with butter and then evenly spoon the mixture over the bottom plate, spreading it out slightly to get an even result. Close the waffle iron and cook for approx 6 minutes, depending on your waffle maker.",
      "Gently lift the lid when you think they’re done. If they are cooked, they will release easily.",
      "Serve with your favourite toppings.",
    ],
  },
  "almond-butter": {
    name: "Homemade Almond Butter",
    url: "https://www.dietdoctor.com/recipes/homemade-almond-butter",
    image: "https://i.imgur.com/NQxsc9f.jpg",
    ing: ["½ lb almonds", "1 tbsp coconut oil", "1 pinch sea salt"],
    dir: [
      "Preheat the oven to 300°F (150°C).",
      "Distribute the almonds on a baking tray and roast in the oven until golden. It will take about 15-20 minutes. Stir or shake occasionally. Allow to cool completely.",
      "Mix the roasted almonds in a blender or food processor with the coconut oil and salt. Be patient, it will take some time to get the nut butter real creamy and smooth. The speed depends on the kitchen equipment you use.",
    ],
  },
  buttercream: {
    name: "Keto Buttercream",
    url: "https://www.dietdoctor.com/recipes/keto-buttercream",
    image: "https://i.imgur.com/AF7QDnG.jpeg",
    ing: [
      "8 oz. unsalted butter, at room temperature, divided",
      "2 tsp vanilla extract",
      "1½ tsp ground cinnamon",
      "1 tsp erythritol (optional)",
    ],
    dir: [
      "Brown 1/4 of the butter in a small sauce pan until it turns amber in color, but without burning it.",
      "Pour the browned butter in a beaker and whisk in the rest of the butter bit by bit with a hand mixer until fluffy.",
      "Add cinnamon, vanilla and optional sweetener towards the end.",
    ],
  },
  pizza: {
    name: "Keto Pizza",
    url: "https://www.dietdoctor.com/recipes/keto-pizza",
    image: "https://i.imgur.com/mVbNlej.jpg",
    ing: [
      "<p class='org-text'>Crust</p>",
      "4 eggs",
      "6 oz. shredded cheese, preferably mozzarella or provolone",
      "<p class='org-text'>Topping</p>",
      "3 tbsp unsweetened tomato sauce",
      "1 tsp dried oregano",
      "5 oz. shredded cheese",
      "1½ oz. pepperoni",
      "olives (optional)",
      "<p class='org-text'>For serving</p>",
      "2 oz. leafy greens",
      "4 tbsp olive oil",
      "sea salt and ground black pepper",
    ],
    dir: [
      "Preheat the oven to 400°F (200°C).",
      "Start by making the crust. Crack eggs into a medium-sized bowl and add shredded cheese. Give it a good stir to combine.",
      "Use a spatula to spread the cheese and egg batter on a baking sheet lined with parchment paper. You can form two round circles or just make one large rectangular pizza. Bake in the oven for 15 minutes until the pizza crust turns golden. Remove and let cool for a minute or two.",
      "Increase the oven temperature to 450°F (225°C).",
      "Spread tomato sauce on the crust and sprinkle oregano on top. Top with cheese and place the pepperoni and olives on top.",
      "Bake for another 5-10 minutes or until the pizza has turned a golden brown color.",
      "Serve with a fresh salad on the side.",
    ],
  },
  blt: {
    name: "Keto BLT",
    url: "https://www.dietdoctor.com/recipes/keto-blt-with-cloud-bread",
    image: "https://i.imgur.com/QV2CueQ.jpeg",
    ing: [
      "<p class='org-text'>Cloud bread</p>",
      "3 eggs",
      "4 oz. cream cheese",
      "1 pinch salt",
      "½ tbsp ground psyllium husk powder",
      "½ tsp baking powder",
      "¼ tsp cream of tartar (optional)",
      "<p class='org-text'>Filling</p>",
      "4 tbsp mayonnaise",
      "5 oz. bacon",
      "2 oz. lettuce",
      "1 tomato, thinly sliced",
    ],
    dir: [
      "<p class='org-text'>Cloud bread<p>",
      "Preheat oven to 300°F (150°C).",
      "Separate the eggs, with egg whites in one bowl and egg yolks in another. Note, egg whites whip better in a metal or ceramic bowl as opposed to plastic.",
      "Whip egg whites together with salt (and cream of tartar, if you are using any) until very stiff, preferably using a hand held electric mixer. You should be able to turn the bowl over without the egg whites moving.",
      "Add cream cheese, psyllium husk, egg yolks, and baking powder and mix well.",
      "Gently fold the egg whites into the egg yolk mixture — try to keep the air in the egg whites.",
      "Place two dollops of the mixture per serving on a paper-lined baking tray. Spread out the circles with a spatula to about ½ inch (1 cm) thick pieces.",
      "Bake in the middle of the oven for about 25 minutes, until they turn golden.",
      "<p class='org-text'>Building the BLT</p>",
      "Fry the bacon in a skillet on medium high heat until crispy.",
      "Place the cloud bread pieces top-side down.",
      "Spread mayonnaise on each bread.",
      "Place lettuce, tomato and fried bacon in layers between the bread halves.",
    ],
  },
  "meat-pie": {
    name: "Keto Meat Pie",
    url: "https://www.dietdoctor.com/recipes/keto-meat-pie",
    image: "https://i.imgur.com/pv93SKw.jpeg",
    ing: [
      "<p class='org-text'>Pie crust</p>",
      "¾ cup almond flour",
      "4 tbsp sesame seeds",
      "4 tbsp coconut flour",
      "1 tbsp ground psyllium husk powder",
      "1 tsp baking powder",
      "1 pinch salt",
      "3 tbsp olive oil or coconut oil, melted",
      "1 egg",
      "4 tbsp water",
      "<p class='org-text'>Topping</p>",
      "8 oz. cottage cheese",
      "7 oz. shredded cheese",
      "<p class='org-text'>Filling</p>",
      "½ yellow onion, finely chopped",
      "1 garlic clove, finely chopped",
      "2 tbsp butter or olive oil",
      "1¼ lbs ground beef or ground lamb",
      "1 tbsp dried oregano or dried basil",
      "salt and pepper",
      "4 tbsp tomato paste or ajvar relish",
      "½ cup water",
    ],
    dir: [
      "Preheat the oven to 350°F (175°C).",
      "Fry onion and garlic in butter or olive oil over medium heat for a few minutes, until onion is soft. Add ground beef and keep frying. Add oregano or basil. Salt and pepper to taste.",
      "Add tomato paste or ajvar relish. Add water. Lower the heat and let simmer for at least 20 minutes. While the meat simmers, make the dough for the crust.",
      "Mix all the crust ingredients in a food processor for a few minutes until the dough turns into a ball. If you don't have a food processor, you can mix by hand with a fork.",
      "Place a round piece of parchment paper in a well-greased springform pan or deep-dish pie pan — 9-10 inches (23-25 cm) in diameter — to make it easier to remove the pie when it's done. Spread the dough in the pan and up along the sides. Use a spatula or well-greased fingers. Once the crust is shaped to the pan, prick the bottom of the crust with a fork.",
      "Pre-bake the crust for 10-15 minutes. Remove from the oven and place the meat in the crust. Mix cottage cheese and shredded cheese together, and layer on top of the pie.",
      "Bake on lower rack for 30-40 minutes or until the pie has turned a golden color.",
    ],
  },
  "hamburger-patties": {
    name: "Keto hamburger patties with creamy tomato sauce and fried cabbage",
    url: "https://www.dietdoctor.com/recipes/keto-hamburger-patties-tomato-sauce-cabbage",
    image: "https://i.imgur.com/MkQpbsS.png",
    ing: [
      "<p class='org-text'>Hamburger patties</p>",
      "1½ lbs ground beef",
      "1 egg",
      "3 oz. crumbled feta cheese",
      "1 tsp salt",
      "¼ tsp ground black pepper",
      "2 oz. fresh parsley, finely chopped",
      "1 tbsp olive oil, for frying",
      "2 tbsp butter, for frying",
      "<p class='org-text'>Gravy</p>",
      "¾ cup heavy whipping cream",
      "1 oz. fresh parsley, coarsely chopped",
      "2 tbsp tomato paste or ajvar relish",
      "salt and pepper",
      "<p class='org-text'>Fried green cabbage</p>",
      "1½ lbs shredded green cabbage",
      "4½ oz. butter",
      "salt and pepper",
    ],
    dir: [
      "<p class='org-text'>Hamburger patties and gravy</p>",
      "Add all ingredients for the hamburgers to a large bowl. Blend it using a wooden spoon or your clean hands. Don't over mix since that can make your patties tough. Use wet hands to form eight oblong patties.",
      "Add butter and olive oil to a large frying pan. Fry over medium-high heat for at least 10 minutes or until the patties have turned a nice color. Flip them a few times for even cooking.",
      "In a small bowl, whisk together the tomato paste and cream. Add this mixture to the pan when the patties are almost done. Stir and let simmer for a few minutes. Salt and pepper to taste.",
      "Sprinkle chopped parsley on top before serving.",
      "<p class='org-text'>Butter-fried green cabbage</p>",
      "Shred the cabbage finely using a food processor or sharp knife.",
      "Add butter to a large frying pan.",
      "Place the pan over medium high heat and sauté the shredded cabbage for at least 15 minutes or until the cabbage is wilted and golden brown around the edges.",
      "Stir regularly and lower the heat a little towards the end. Add salt and pepper to taste.",
    ],
  },

  "coming-soon": {
    name: "Coming Soon",
    image: "../img/unknown.png",
  },
};
try {
  let ranreci = Object.keys(reci);
  var item = ranreci[Math.floor(Math.random() * ranreci.length - 1)];
  if (item == undefined) {
    item = ranreci[Math.floor(Math.random() * ranreci.length - 1)];
  }
  // $(".randdrop").append(
  //   `<a class="center card-content-popout" href="pages/recipe.html?r_id=${item}"><i class="tiny material-icons">directions_bike</i>I'm Feeling Lucky</a>`
  // );
  $(".rando").attr("href", `pages/recipe.html?r_id=${item}`);
  $(".preload-imfl").fadeOut("fast");
  // document.getElementByClass("preload-imfl").style.display = "none";
} catch (error) {
  console.log(error);
}

if (c) {
  console.log(c);
  try {
    $(".circular--portrait").append(
      `<img class="Rinresponsive-img" src="${reci[c]["image"]}">`
    );
    $(".headerr").append(
      `<h2 class="center white-text">${reci[c]["name"]}</h2>`
    );
    for (ingf in reci[c]["ing"]) {
      if (reci[c]["ing"][ingf].includes("<p class=")) {
        $(".ing").append(
          `<span class="white-text"> ${reci[c]["ing"][ingf]}</span>`
        );
      } else {
        $(".ing").append(
          `<li class="white-text" ><p><label><input type="checkbox" id="ringoCheck"/><span class="white-text">${reci[c]["ing"][ingf]}</span></label></p></li>`
        );
      }
    }

    for (dif in reci[c]["dir"]) {
      if (reci[c]["dir"][dif].includes("<p class=")) {
        $(".dir").append(`<ul class="white-text">${reci[c]["dir"][dif]}</ul>`);
      } else {
        $(".dir").append(`<li class="white-text">${reci[c]["dir"][dif]}</li>`);
      }
    }

    $(".soruce").append(`<a class="org" href="${reci[c]["url"]}">source</a>`);
  } catch (error) {
    console.log(error);
    $(".header-img").append(
      `<img class="img-header" style="background-image: url(../img/unknown.png); background-size: 320px; background-position: center; height: 200px; width: 100%;">`
    );
    $(".recipeT").append(`<h1 class="center org">Not Found</h1>`);
  }
} else {
  console.log("Nothing found!");
}

window.onload = function () {
  var i,
    checkboxes = document.querySelectorAll("input[type=checkbox]");
  function save() {
    for (i = 0; i < checkboxes.length; i++) {
      localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
    }
  }

  function load_() {
    for (i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked =
        localStorage.getItem(checkboxes[i].value) === "true" ? true : false;
    }
  }
  load_();
  $(document).ready(function () {
    $("input[type=checkbox]").change(function () {
      console.log("chnages");
      checkers = document.querySelectorAll("input[type=checkbox]");
      for (i = 0; i < checkers.length; i++) {
        localStorage.setItem(checkers[i].value, checkers[i].checked);
      }
    });
  });
};
