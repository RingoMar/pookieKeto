let recipes = {
  "Keto Bread": {
    name: "Keto Bread",
    description:
      "This keto bread recipe definitely has you covered. It’s actually an coconut and almond flour bread, and like other almond flour recipes, you get all of those almond benefits in each slice.",
    link: "keto-bread",
    image: "https://i.imgur.com/5kb76hR.png",
    id: 1,
    tags: ["moring", "night"],
  },
  "kohlrabi fries": {
    name: "Kohlrabi Fries",
    description:
      "Kohlrabi fries from the oven are quick to make and a great alternative to normal fries. They are a tasty and healthy alternative, are low-carb and low in fat.",
    link: "kohlrabi-fries",
    image: "https://i.imgur.com/aWsHsEv.jpg",
    id: 2,
    tags: ["noon", "night"],
  },

  "Cauliflower Sandwiches": {
    name: "Cauliflower Sandwiches",
    description:
      "Get a load of veggies and cheese with this ingenious keto recipe. You’ll dry out the cauliflower, then bake it into “bread” slices that get stacked with cheese; use a high-quality, organic cheddar here. It’s worth it!",
    link: "cauliflower-sandwiches",
    image: "https://i.imgur.com/v6FaB07.png",
    id: 3,
    tags: ["moring", "night"],
  },
  "Cauliflower Mash": {
    name: "Cauliflower Mash",
    description:
      "Potatoes and gravy are total comfort food — and luckily, there’s a keto version. These are made with cauliflower, which is quite low-carb, particularly when compared to potatoes. Made with cream, butter, rosemary and parmesan, this mash is creamy, full of flavor and smooth. You’ll finish it all off with a stock-based gravy, that would be perfect on a roast, too.",
    link: "cauliflower-mash",
    image: "https://i.imgur.com/Nwto9hu.png",
    id: 4,
    tags: ["noon", "night"],
  },
  "Keto Bagels": {
    name: "Keto Bagels",
    description:
      "These keto everything bagels are another great breakfast staple. With their help, you don’t have to cut out your favorite breakfast sandwiches.",
    link: "keto-bagels",
    image: "https://i.imgur.com/byQnAkr.png",
    id: 5,
    tags: ["moring"],
  },
  "Fathead Nachos": {
    name: "Fathead Nachos",
    description:
      "Keto recipes that include nachos?! Oh yes. You’ll begin by making the fat head tortilla chips first. Did I mention you’ll use two types of cheese for this step? Delicious. Next, you’ll load them up with a meaty sauce and finish them off with your favorite toppings, like guac, salsa or sour cream. While these make a delicious keto snack, they’re frankly filling enough to share as a meal.",
    link: "fathead-nachos",
    image: "https://i.imgur.com/KHCDWUX.png",
    id: 6,
    tags: ["crinkle"],
  },
  "Keto Lime Creamsicles": {
    name: "Keto Lime Creamsicles",
    description:
      "Most popsicles and ice creams have too much sugar to fall under the category of ketogenic, but these popsicles, sweetened with stevia, can help curb your sweet tooth while giving you a little bit of fat from mashed avocado.",
    link: "lime-creamsicles",
    image: "https://i.imgur.com/R2FlHuv.png",
    id: 7,
    tags: ["crinkle"],
  },
  "Baba Ganoush": {
    name: "Baba Ganoush",
    description:
      "Eat this eggplant dip with celery for the perfect in-between meal nibble. Thanks to a cup of tahini, this dip will add fat and flavor to an otherwise simple snack.",
    link: "baba-ganoush",
    image: "https://i.imgur.com/8wmfLRS.png",
    id: 8,
    tags: ["crinkle"],
  },
  "Portabella Sliders": {
    name: "Portabella Sliders",
    description:
      "I love the low-carb take on traditional burgers: smaller patties nestled into portabella mushroom buns. These are simple to make and are made using a grill pan on the stove, so you can enjoy them year-round.",
    link: "portabella-sliders",
    image: "https://i.imgur.com/MuUSAME.png",
    id: 9,
    tags: ["crinkle", "noon"],
  },
  taco: {
    name: "Taco",
    description:
      "Anything tastes good when it’s stuffed between these cheesy shells! These are so simple to make: it’s just baked cheese! Stuff these with your favorite meats, veggies (bell peppers and onions are great here), taco fixings and, of course, more cheese!",
    link: "taco",
    image: "https://i.imgur.com/LvOwaDa.png",
    id: 10,
    tags: ["crinkle", "noon"],
  },
  "Cauliflower Pizza": {
    name: "Cauliflower Pizza",
    description:
      "The next time you’re having a pizza party, make it a keto one. Combine cauliflower, egg, coconut flour, and herbs to make a crust that tastes like the real thing. Top it off with a homemade avocado oil pesto, veggies, and cheese (yes, cheese!), and your friends will be asking where you ordered it. It’s THAT good.",
    link: "cauliflower-pizza",
    image: "https://i.imgur.com/tNvqlIX.jpg",
    id: 11,
    tags: ["noon", "night"],
  },
  "Keto Ice Cream": {
    name: "Keto Ice Cream",
    description:
      "According to Sisson, this is the keto ice cream you’ve been waiting for. It’s creamy, rich, luscious, and made with just five ingredients.",
    link: "keto-ice-cream",
    image: "https://i.imgur.com/iS2Mc5U.png",
    id: 12,
    tags: ["crinkle"],
  },
  "Keto Potato Salad": {
    name: "Keto Potato Salad",
    description:
      "Here’s the kicker: This salad has no actual potatoes. Instead, the low carb, keto, Paleo salad has a secret ingredient we know you’ve used before: cauliflower.",
    link: "potato-salad",
    image: "https://i.imgur.com/HHGBaid.png",
    id: 13,
    tags: ["noon", "night"],
  },
  "BANG BANG CAULIFLOWER": {
    name: "BANG BANG CAULIFLOWER",
    description:
      "A low carb version of bang bang sauce drizzled over crispy cauliflower that is coated in a low carb breading. This low carb version is just as tasty as the original!",
    link: "bang-bang-cauliflower",
    image: "https://i.imgur.com/9TbUH5S.jpg",
    id: 14,
    tags: ["noon"],
  },
  "Shepherd’s Pie": {
    name: "Shepherd’s Pie",
    description:
      "Shepherd’s pie (also known as cottage pie) layered with sauteed beef, bacon and veggies in a smoked sauce, topped with garlic mashed cauliflower and baked until crisp.",
    link: "shepherds-pie",
    image: "https://i.imgur.com/d1xAZSW.jpg",
    id: 15,
    tags: ["night", "noon"],
  },
  "Peanut Butter Truffles": {
    name: "Peanut Butter Truffles",
    description:
      "These keto chocolate peanut butter balls are no-bake low carb treats that only require a handful of ingredients to make. Sweetened peanut butter is formed into balls and dipped in melted chocolate.",
    link: "peanut-butter-truffles",
    image: "https://i.imgur.com/oqV1oEH.png",
    id: 16,
    tags: ["crinkle"],
  },
  "Choco Peanut Butter Shake": {
    name: "Choco Peanut Butter Shake",
    description:
      "This is a low carb recipe for making a cold, smooth, and creamy shake, with a rich dark chocolate taste. It's not too sweet; almost like drinking chocolate milk flavored with peanut butter. Two different preparation methods are provided: either blend or shake.",
    link: "chocolate-peanut-butter-shake",
    image: "https://i.imgur.com/4hwPHNH.png",
    id: 17,
    tags: ["crinkle"],
  },
  "Iced Tea": {
    name: "Iced Tea",
    description:
      "This low carb, keto friendly iced tea is slightly sweet with a pleasant lemon flavor. Brewed tea is flash chilled with ice cubes so that it can be promptly served.",
    link: "iced-tea",
    image: "https://i.imgur.com/520j42L.png",
    id: 18,
    tags: ["crinkle"],
  },
  Crackers: {
    name: "Crackers",
    description:
      "An easy 5-ingredient recipe for low carb crackers using almond flour, parmesan cheese, and egg. Reminiscent of homemade cheese chips, these crackers are great for dipping or as a standalone gluten free and keto friendly snack.",
    link: "crackers",
    image: "https://i.imgur.com/qT9yNjV.png",
    id: 19,
    tags: ["crinkle"],
  },
  "Chocolate Milk": {
    name: "Chocolate Milk",
    description:
      "Homemade keto chocolate milk is SO easy to make and is ridiculously delicious.",
    link: "chocolate-milk",
    image: "https://i.imgur.com/y8mdqqp.png",
    id: 20,
    tags: ["crinkle"],
  },
  "Mac and Cheese": {
    name: "Mac and Cheese",
    description:
      "Cauliflower mac and cheese is extra cheesy and melty! This tastes so much like the real deal that I bet you won’t even miss the carbs.",
    link: "mac-n-cheese",
    image: "https://i.imgur.com/Sj48eWn.png",
    id: 21,
    tags: ["noon", "night"],
  },
  "Lemon Bars": {
    name: "Lemon Bars",
    description:
      "If you’re missing higher carb fruits on the keto diet, this bright and tangy recipe will hit the spot without blowing your carb budget.",
    link: "lemon-bars",
    image: "https://i.imgur.com/o28vQaq.png",
    id: 22,
    tags: ["crinkle"],
  },
  "Pound Cake": {
    name: "Pound Cake",
    description:
      "Rich and buttery, pound cake isn’t usually associated with healthy eating, but all the eggs and sour cream in here fit comfortably within a keto diet plan.",
    link: "pound-cake",
    image: "https://i.imgur.com/1X5wdrZ.png",
    id: 23,
    tags: ["crinkle"],
  },
  "Carrot Cake": {
    name: "Carrot Cake",
    description:
      "Aside from the almond flour base, not a whole lot about this recipe is that different from a regular carrot cake.",
    link: "carrot-cake",
    image: "https://i.imgur.com/RwW22sO.png",
    id: 24,
    tags: ["crinkle"],
  },
  "Pumpkin Cheesecake": {
    name: "Pumpkin Cheesecake",
    description:
      "This recipe is a yummy and rich-tasting cross between my decades-old cheesecake recipe and pumpkin pie, converted to be low-carb.",
    link: "pumpkin-cheesecake",
    image: "https://i.imgur.com/pUNHy8j.png",
    id: 25,
    tags: ["crinkle"],
  },
  "Peanut Butter Fudge": {
    name: "Peanut Butter Fudge",
    description:
      "This is a great keto dessert with only 3 ingredients. If you want you can sweeten it with stevia or other sweeteners, but the peanut butter is sweet enough.",
    link: "peanut-butter-fudge",
    image: "https://i.imgur.com/IXBtxTL.png",
    id: 26,
    tags: ["crinkle"],
  },
  "Coconut Cookies": {
    name: "Coconut Cookies",
    description:
      "This is a great keto dessert with only 3 ingredients. If you want you can sweeten it with stevia or other sweeteners, but the peanut butter is sweet enough.",
    link: "coconut-cookies",
    image: "https://i.imgur.com/HztxEje.png",
    id: 27,
    tags: ["crinkle"],
  },
  "Keto Chaffle": {
    name: "Keto Chaffle",
    description:
      "This quick and easy recipe can be used for both savoury and sweet chaffles. Just add a topping of your choice to create a delicious and nutritions meal or healthy dessert. Below you find the recipe team’s favorite topping suggestions.",
    link: "keto-chaffle",
    image: "https://i.imgur.com/ChufqmZ.jpg",
    id: 28,
    tags: ["moring"],
  },
  "Almond Butter": {
    name: "Almond Butter",
    description:
      "Easy to make, healthy, affordable, tasty... and the list could go on! The perfect spread for breakfast rolls, waffles and pancakes. You can even use it in sauces and stews for some extra flavor!",
    link: "almond-butter",
    image: "https://i.imgur.com/NQxsc9f.jpg",
    id: 29,
    tags: ["crinkle"],
  },
  Buttercream: {
    name: "Buttercream",
    description:
      "Pure vanilla love. Amazing buttercream flavor. Fabulous creaminess. This keto buttercream will make you reach for your favorite dessert, and guild the lily of flavortown!",
    link: "buttercream",
    image: "https://i.imgur.com/AF7QDnG.jpeg",
    id: 30,
    tags: ["crinkle"],
  },
  Pizza: {
    name: "Pizza",
    description:
      "Pizza, meet keto. It's a simple take on how to get your pizza fix without the carbs. It’s everything you want — whether it is a simple pepperoni, cheese and tomato-sauce version, or a loaded extravaganza.",
    link: "pizza",
    image: "https://i.imgur.com/mVbNlej.jpg",
    id: 31,
    tags: ["noon"],
  },
  "Keto BLT": {
    name: "Keto BLT",
    description:
      "We paired this mouthwatering, keto version with fluffy cloud bread, also known as oopsie bread. Oops, it's bread! Gluten-free and grain-free, it's a heavenly low-carb take on a classic sandwich. Indulge.",
    link: "blt",
    image: "https://i.imgur.com/QV2CueQ.jpeg",
    id: 32,
    tags: ["noon"],
  },
  "Meat Pie": {
    name: "Meat Pie",
    description:
      "Keep everyone happy with this satisfying, cheese-topped keto masterpiece. Meat pie may be a little old-school, but it’s time to rediscover its deliciousness.",
    link: "meat-pie",
    image: "https://i.imgur.com/pv93SKw.jpeg",
    id: 33,
    tags: ["noon"],
  },
  "Hamburger Patties": {
    name: "Hamburger Patties",
    description:
      "A delicious burger needs no bun! Enjoy this satisfying patty bare, topped with creamy tomato gravy and a side of sautéed cabbage. Keto satisfaction guaranteed!",
    link: "hamburger-patties",
    image: "https://i.imgur.com/MkQpbsS.png",
    id: 34,
    tags: ["noon"],
  },
};

function showPage() {
  document.getElementById("RinLoad").style.display = "none";
  $(".all-rec").fadeIn(2000);
}

const dekeys = Object.keys(recipes);
const revlist = dekeys.reverse();

for (x in revlist) {
  var name = recipes[revlist[x]]["name"];
  var description = recipes[revlist[x]]["description"];
  var link = recipes[revlist[x]]["link"];
  var image = recipes[revlist[x]]["image"];
  var id = recipes[revlist[x]]["id"];
  let tags = recipes[revlist[x]]["tags"];
  let tagss;
  for (i = 0; i < tags.length; i++) {
    if (recipes[revlist[x]]["tags"][i] != "undefined") {
      tagss += ` ${recipes[revlist[x]]["tags"][i]}`;
    }
  }
  var final = `
        <div class="cards-rec col s12 m6 ${tagss}">
            <div class="brown  darken-2 card large">
                <div class="card-image">
                    <img class="img-item" src="${image}">
                    <span class="card-title org-text card-info-back z-depth-3">${name}</span>
                </div>
                <div class="brown  darken-2 white-text card-content">
                    <p>${description}</p>
                </div>
                <div class="brown  darken-2 card-action">
                    <a href="../pages/recipe.html?r_id=${link}"><i class="material-icons left">view_day</i>view</a>
                </div>
            </div>
        </div>`;

  $(".all-rec").append(final);
}
showPage();

let active = false;
let current = "";

$(".night-btn").click(function () {
  var filtername = "night";
  if (active && filtername != current) {
    current = filtername;
    active = true;
    $(".cards-rec").css("display", "block");
    $(".done-check").remove();
    $(".cards-rec").not(".night").css("display", "none");
    $(".night-btn").append(
      "<i class='material-icons right done-check'>done</i>"
    );
  } else if (active) {
    active = false;
    $(".cards-rec").css("display", "block");
    $(".done-check").remove();
  } else {
    current = filtername;
    active = true;
    $(".cards-rec").not(".night").css("display", "none");
    $(".night-btn").append(
      "<i class='material-icons right done-check'>done</i>"
    );
  }
});

$(".snacks-btn").click(function () {
  var filtername = "snacks";
  if (active && filtername != current) {
    current = filtername;
    active = true;
    $(".cards-rec").css("display", "block");
    $(".done-check").remove();
    $(".cards-rec").not(".crinkle").css("display", "none");
    $(".snacks-btn").append(
      "<i class='material-icons right done-check'>done</i>"
    );
  } else if (active) {
    active = false;
    $(".cards-rec").css("display", "block");
    $(".done-check").remove();
  } else {
    current = filtername;
    active = true;
    $(".cards-rec").not(".crinkle").css("display", "none");
    $(".snacks-btn").append(
      "<i class='material-icons right done-check'>done</i>"
    );
  }
});

$(".breakfast-btn").click(function () {
  var filtername = "mornin";
  if (active && filtername != current) {
    current = filtername;
    active = true;
    $(".cards-rec").css("display", "block");
    $(".done-check").remove();
    $(".cards-rec").not(".moring").css("display", "none");
    $(".breakfast-btn").append(
      "<i class='material-icons right done-check'>done</i>"
    );
  } else if (active) {
    active = false;
    $(".cards-rec").css("display", "block");
    $(".done-check").remove();
  } else {
    current = filtername;
    active = true;
    $(".cards-rec").not(".moring").css("display", "none");
    $(".breakfast-btn").append(
      "<i class='material-icons right done-check'>done</i>"
    );
  }
});

$(".lunch-btn").click(function () {
  var filtername = "noon";
  if (active && filtername != current) {
    current = filtername;
    active = true;
    $(".cards-rec").css("display", "block");
    $(".done-check").remove();
    $(".cards-rec").not(".noon").css("display", "none");
    $(".lunch-btn").append(
      "<i class='material-icons right done-check'>done</i>"
    );
  } else if (active) {
    active = false;
    $(".cards-rec").css("display", "block");
    $(".done-check").remove();
  } else {
    current = filtername;
    active = true;
    $(".cards-rec").not(".noon").css("display", "none");
    $(".lunch-btn").append(
      "<i class='material-icons right done-check'>done</i>"
    );
  }
});
