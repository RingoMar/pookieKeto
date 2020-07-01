var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("r_id");

var reci = {
    "keto-bread": {
        "name": "Keto Bread",
        "url": "https://draxe.com/recipes/keto-bread-recipe/",
        "image": "https://i.imgur.com/5kb76hR.png",
        "ing": ["1½ cups almond flour", "6 egg whites (NOTE: this recipe does not call for the yolks)", "¼ teaspoon cream of tartar", "3–4 tablespoons butter, melted", "¾ teaspoon baking soda", "3 teaspoons apple cider vinegar", "2 tablespoons coconut flour"],
        "dir": ["Preheat the oven to 375 F.", "Add the cream of tartar to the egg white mixture and, using a hand mixer, whip the eggs until soft peaks are formed.", "Add the almond flour, butter, baking soda, apple cider vinegar and coconut flour to a food processor, blending until well-incorporated.", "Place the mix into a bowl and gently fold in the egg white mixture.", "Grease an 8x4 loaf pan and pour in the bread mixture.", "Bake for 30 minutes."]
    },
    "kohlrabi-fries": {
        "name": "Kohlrabi Fries",
        "url": "https://www.kochtrotz.de/rezepte/leckere-kohlrabi-pommes-aus-dem-backofen-low-carb-und-fettarm/",
        "image": "https://i.imgur.com/aWsHsEv.jpg",
        "ing": ["2 big Kohlrabi", "1 Tsp mild paprika spice", "1.5 Tsp Oil", "Pinch of salt"],
        "dir": ["Preheat the oven to 250 ° C.", "Peel kohlrabi and cut into french fries or take them with a french fry cutter.", "Put the kohlrabi fries in portions in the dish towel / wrap and rub dry.", "Now add the kohlrabi fries with the spices (without salt!) To the bowl. Close the lid and shake well until the spice has spread.", "Add oil to the fries, close the lid and shake and shake well again", "Line the baking sheet with baking paper. Spread kohlrabi fries so that they are not on top of each other.", "Slide the tray into the oven, middle rail. Turn after 5-6 minutes so that they turn brown on both sides. After another 5-6 minutes they are done.", "Take out the fries and sprinkle them with salt."]
    },

    "cauliflower-sandwiches": {
        "name": "Cauliflower Sandwiches",
        "url": "https://kirbiecravings.com/cauliflower-crusted-grilled-cheese-sandwiches/",
        "image": "https://i.imgur.com/v6FaB07.png",
        "ing": ["1 medium head cauliflower raw, cut into small florets and stem removed",
            "1 large egg",
            "1/2 cup shredded Parmesan cheese",
            "1 tsp Italian herb seasoning",
            "2 thick slices of white cheddar cheese you can also use shredded cheddar cheese"
        ],
        "dir": ["Preheat oven to 450°F. Place cauliflower into food processor and pulse until crumbs about half the size of a grain of rice.",
            "Place cauliflower into large microwave-safe bowl and microwave for 2 minutes. Your cauliflower should be soft and tender (and hot!). (If you don't want to use the microwave to dry out the cauliflower and prefer to steam and wring with a cloth to dry, check out my wringing instructions here.)",
            "Stir cauliflower to mix up the bottom and top cauliflower. Place back into the microwave and cook for another 3 minutes. Remove and stir again so that all the cauliflower cooks evenly. Place back into microwave and cook for 5 minutes. At this point, you should see the cauliflower is starting to become more dry. Microwave for another 5 minutes. Cauliflower should still be slightly moist to the touch, but should look dry and clumped up (like photo above; similar to as if someone had chewed it up and spit it back out.) If you've made cauliflower pizza or breadsticks with the cloth wringing dry method, it should look the same.",
            "Allow cauliflower to cool for a few minutes. Then add in egg and cheese. Stir to combine until smooth paste forms. Stir in seasoning. Divide dough into 4 equal parts. Place onto large baking sheet lined with parchment paper. Using your knuckles and fingers, shape into square bread slices about 1/3 inch thick. Bake cauliflower bread for about 15-18 minutes or until golden brown. Remove from oven and let cool a few minutes.",
            "Using a good spatula, carefully slide cauliflower bread off of parchment paper. Now you are ready to assemble your sandwiches. You can do this a few different ways. You can either cook on the stove top as you would normally cook a grilled cheese. You can also place sandwiches into toaster oven and broil for several minutes (5-10) until cheese is completely melted and bread is toasty. If you don't own a toaster oven, you can also do this in the oven."
        ]
    },
    "cauliflower-mash": {
        "name": "Cauliflower Mash",
        "url": "https://www.ketoconnect.net/creamy-cauliflower-mash/",
        "image": "https://i.imgur.com/Nwto9hu.png",
        "ing": ["5 cups cauliflower chopped",
            "1/4 cup Heavy Whipping Cream",
            "3 tbsp Butter",
            "5 cloves garlic minced",
            "2 tsp Dried Rosemary",
            "3 tbsp parmesan",
            "1/2 tsp pepper",
            "Pink Himalayan Salt (to taste)"
        ],
        "dir": ["Chop up 5 cups of raw cauliflower.",
            "Bring pot of water to a boil (enough to cover all the cauliflower), add the cauliflower and boil for 15 minutes or until tender.",
            "Drain cauliflower and place in processor.",
            "Cook butter, garlic and rosemary in a saucepan over medium heat until fragrant.",
            "Add melted butter, garlic and rosemary to processor and pulse several times until well combined.",
            "Add cream, parmesan, salt and pepper to processor and process until smooth and creamy.",
            "Taste for salt level. Serve warm and enjoy!"
        ]
    },
    "keto-bagels": {
        "name": "Keto Bagels",
        "url": "https://peaceloveandlowcarb.com/low-carb-keto-everything-bagels/",
        "image": "https://i.imgur.com/byQnAkr.png",
        "ing": ["2 cups almond flour",
        "1 tablespoon baking powder",
        "1 teaspoon garlic powder",
        "1 teaspoon onion powder",
        "1 teaspoon dried Italian seasoning",
        "3 large eggs, divided",
        "3 cups shredded low moisture mozzarella cheese",
        "5 tablespoons cream cheese",
        "3 tablespoons Everything Bagel Seasoning",],
        "dir": ["Preheat oven to 425Â°. Line a rimmed baking sheet with parchment paper or a Silpat.",
        "In a medium mixing bowl, combine the almond flour, baking powder, garlic powder, onion powder, and dried Italian seasoning. Mix until well combined. I like to put the mixture through a flour sifter to ensure that all the baking powder gets mixed in with the rest of the ingredients.",
        "Crack one of the eggs into a small bowl and fork whisk. This will be the egg wash for the top of the bagels. The other two eggs will go in the dough.",
        "In a large microwave safe mixing bowl, combine the mozzarella cheese and cream cheese. Microwave for 1 minute and 30 seconds. Remove from microwave and stir to combine. Return to microwave for 1 additional minute. Mix until well combined.",
        "To the mixing bowl, add the remaining 2 eggs and the almond flour mixture. Mix until all ingredients are well incorporated. If the dough gets too stringy and unworkable, simply put it back in the microwave for 30 seconds to soften and continue mixing.",
        "Divide the dough into 6 equal portions. Roll each portion into a ball.",
        "Gently press your finger into the center of each dough ball to form a ring. Stretch the ring to make a small hole in the center and form it into a bagel shape.",
        "Brush the top of each bagel with the egg wash.",
        "Top each bagel with Everything Bagel Seasoning.",
        "Bake on the middle rack for 12-14 minutes or until golden brown."]
    },
    "fathead-nachos": {
        "name": "Fathead Nachos",
        "url": "https://www.ditchthecarbs.com/fat-head-nachos/",
        "image": "https://i.imgur.com/KHCDWUX.png",
        "ing": ["170 g pre-shredded/grated mozzarella",
        "85 g almond meal/flour",
        "2 tbsp cream cheese",
        "1 egg",
        "salt to taste",
        "1 tsp cumin powder",
        "1 tsp coriander/cilantro powder",
        "pinch chilli powder"],
        "dir": ["1 red onion diced",
        "500 g ground/mince beef",
        "400 g tinned/canned tomatoes diced",
        "1/2 tsp chilli powder, or to taste",
        "1 tbsp tomato paste"]
    },
    "lime-creamsicles": {
        "name": "Keto Lime Creamsicles",
        "url": "https://elanaspantry.com/keto-lime-popsicles/",
        "image": "https://i.imgur.com/R2FlHuv.png",
        "ing": ["1 can full fat coconut milk",
        "½ cup mashed avocado",
        "½ cup lime juice, freshly squeezed",
        "¼ teaspoon vanilla stevia",
        "⅛ teaspoon vanilla powder"],
        "dir": ["In a vitamix combine coconut milk, avocado, lime juice, stevia, and vanilla",
        "Blend until smooth",
        "Transfer mixture to a popsicle mold",
        "Insert popsicle sticks",
        "Freeze 4 hours"]
    },
    "baba-ganoush": {
        "name": "Baba Ganoush",
        "url": "https://draxe.com/recipes/baba-ganoush/",
        "image": "https://i.imgur.com/8wmfLRS.png",
        "ing": ["1 medium eggplant, sliced",
        "¼ cup tahini",
        "3–4 garlic cloves, smashed",
        "1–2 tablespoons avocado oil",
        "1 cup parsley, chopped",
        "Sea salt and pepper to taste"],
        "dir": ["On a baking sheet lined with parchment paper, lay out the eggplant slices.",
        "Salt the eggplant and allow eggplant to sit for 15–20 minutes to remove moisture.",
        "Use a paper towel to dab eggplant, removing excess water.",
        "Broil eggplant on top oven rack for 5–8 minutes.",
        "Remove skin (optional*).",
        "Place eggplant in a food processor and pulse until broken down.",
        "Place all other ingredients in the food processor and blend on high until well-combined.",
        "Serve with chopped vegetables.",]
    },
    "taco": {
        "name": "Taco",
        "url": "https://www.homemadeinterest.com/low-carb-taco/",
        "image": "https://i.imgur.com/LvOwaDa.png",
        "ing": ["1 pound Ground beef",
        "2 tablespoon Homemade Taco Seasoning",
        "1/4 cup Water",
        "Toppings for taco: Sour cream, avocado, cheese, lettuce, etc., optional"],
        "dir": ["Preheat oven to 350F.",
        "On a baking sheet lined with parchment paper or a silicone mat place 1/4 cup piles of cheese 2 inches apart. Press the cheese down lightly so it makes one layer.",
        "Place baking sheet in the oven and bake for 5-7 minutes or until the edges of the cheese are brown.",
        "Let the cheese cool for 1-2 minutes until it is firm enough to lift but still bendable. Lift the cheese up and place it over the handle of a spoon or other utensil that is balanced on two cups.",
        "Let cheese cool completely then remove.",
        "While you continue to bake your cheese taco shells place the ground beef in a skillet over medium high heat cooking until it is completely cooked through.",
        "Drain the grease from the meat and then add the homemade taco seasoning. Pour water into skillet and stir everything around mixing it together.",
        "Simmer for 5 minutes or until liquid has cooked away. ",
        "Add meat to taco shells and top with your favorite taco toppings."]
    },
    "portabella-sliders": {
        "name": "Portabella Sliders",
        "url": "http://www.modernlowcarb.com/recipes/2015/5/31/low-carb-portabella-sliders-keto-gluten-free",
        "image": "https://i.imgur.com/MuUSAME.png",
        "ing": ["1 pound grass fed beef (I like 80/20 for burgers)",
        "24 baby portabella mushrooms",
        "4 slices sharp cheddar, sliced into quarters",
        "4 tbsp chopped yellow onion",
        "2 dill pickles, sliced",
        "2 tbsp extra virgin olive oil",
        "12 basil leaves",
        "yellow mustard, mayo, sriracha or low carb ketchup (optional)",
        "salt and pepper to taste",],
        "dir": ["-Remove stems from portabella mushroom caps and wipe with a damp paper towel to remove any dirt or debris.  In a small saucepan, heat 1 tbsp olive oil over medium heat.  Add mushroom caps and cook for 2 minutes on each side, allowing mushrooms to cook through but retain firmness.",
        "-Remove mushrooms from pan and place on paper towels to allow liquid to drain off.",
        "-Divide the ground beef into 12 portions, rolling each into a small disc shape. Add salt and pepper to taste.  In a large grill pan, heat remaining tbsp olive oil over medium heat.  Once the pan is hot, add the meat and allow to cook for 3 minutes on one side.  Flip and allow to cook for 3 minutes on the other side.  Cook to desired level of doneness (I like burgers cooked to medium).",
        "-Stack a mushroom, burger, cheese, onion, pickles and your choice of condiments.  Top with second mushroom cap and add a basil leaf for garnish.  Use a toothpick to hold.  Serve and enjoy!",]
    },
    "cauliflower-pizza": {
        "name": "Cauliflower Pizza",
        "url": "https://www.primalkitchen.com/pesto-keto-cauliflower-pizza-with-primal-kitchen/",
        "image": "https://i.imgur.com/tNvqlIX.jpg",
        "ing": ["1 head cauliflower",
        "1 egg",
        "1/2 cup coconut flour",
        "1 tsp parsley",
        "1 tsp basil",
        "1 tsp oregano",
        "1 tablespoon",
        ],
        "dir": ["2 cups fresh basil",
        "1/3 cup pine nuts, toasted",
        "1/4 cup grated Parmesan cheese",
        "2/3 cup Primal Kitchen Extra Virgin Avocado Oil",
        "1 teaspoon garlic, minced",
        "1 teaspoon lemon juice",
        "Salt and pepper to taste",
        ]
    },
    "keto-ice-cream": {
        "name": "Vanilla Coconut Collagen Fuel Keto Ice Cream",
        "url": "https://www.marksdailyapple.com/primal-keto-ice-cream/",
        "image": "https://i.imgur.com/iS2Mc5U.png",
        "ing": ["1 13.5 ounce can full-fat coconut milk (400 ml)",
        "1 scoop PRIMAL KITCHEN® Vanilla Coconut Collagen Fuel (16.5 g)",
        "¼ cup macadamia nut butter* (60 ml)",
        "2 teaspoons pure vanilla extract (without propylene glycol) (10 ml)",
        "pinch of salt"        
        ],
        "dir": ["To make macadamia butter, blend 1 cup raw, unsalted macadamia nuts in the food processor for 3 to 5 minutes until very smooth.",
        "To make the ice cream, whisk coconut milk, PRIMAL KITCHEN® Collagen Fuel, macadamia butter, vanilla, and salt together until smooth. If making chocolate ice cream, whisk in cocoa powder.",
        
        ]
    },
    "potato-salad": {
        "name": "Keto Potato Salad",
        "url": "https://www.healthfulpursuit.com/2015/07/potato-salad-that-isnt/",
        "image": "https://i.imgur.com/HHGBaid.png",
        "ing": ["1 head of cauliflower, chopped into bite-sized pieces",
        "6 hardboiled eggs, omit if making vegan or egg-free",
        "3 pickles, chopped",
        "½ cup chopped fresh parsley",
        "¼ cup green onion, green part only, chopped"                
        ],
        "dir": ["Prepare the cauliflower by cutting into bite-sized pieces. You can do this with a knife or if you want smaller pieces, shred. Steam for 2-3 minutes. Drain and set aside to cool.",
        "Peel eggs and separate yolks, set aside. Cut the whites into small bite size pieces. Mix the egg whites into the cauliflower mixture in a large bowl along with chopped pickle, green onion and parsley.",
        "Add egg yolks, mayo, mustard, pickle juice, salt and pepper into your high-powered blender and blend until smooth. Pour over the cauliflower mixture and stir to coat. Chill overnight and serve.",      
        
        ]
    },

    "coming-soon": {
        "name": "Coming Soon",
        "image": "../img/unknown.png",
    }
};


if (c) {
    console.log(c);
    try {
        $(".header-img").append(`<img class="img-header" style="background-image: url(${reci[c]["image"]}); background-size: 320px; background-position: center; height: 200px; width: 100%;">`);
        $(".recipeT").append(`<h1 class="center org">${reci[c]["name"]}</h1>`);
        for (ingf in reci[c]["ing"]) {
            $(".ing").append(`<li>${reci[c]["ing"][ingf]}</li>`);

        }

        for (dif in reci[c]["dir"]) {
            $(".dir").append(`<li>${reci[c]["dir"][dif]}</li>`);

        }

        $(".soruce").append(`<a class="org" href="${reci[c]["url"]}">source</a>`);

    } catch (error) {
        console.log(error);
        $(".header-img").append(`<img class="img-header" style="background-image: url(../img/unknown.png); background-size: 320px; background-position: center; height: 200px; width: 100%;">`);
        $(".recipeT").append(`<h1 class="center org">Not Found</h1>`);

    }
} else {
    console.log("Nothing found!")
}