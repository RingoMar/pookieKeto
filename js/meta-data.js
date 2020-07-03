let recipes = {
    "Keto Bread": {
        "name": "Keto Bread",
        "description": "This keto bread recipe definitely has you covered. It’s actually an coconut and almond flour bread, and like other almond flour recipes, you get all of those almond benefits in each slice.",
        "link": "keto-bread",
        "image": "https://i.imgur.com/5kb76hR.png",
        "id": 1,
        "tags": ["moring", "night"]
    },
    "kohlrabi fries": {
        "name": "Kohlrabi Fries",
        "description": "Kohlrabi fries from the oven are quick to make and a great alternative to normal fries. They are a tasty and healthy alternative, are low-carb and low in fat.",
        "link": "kohlrabi-fries",
        "image": "https://i.imgur.com/aWsHsEv.jpg",
        "id": 2,
        "tags": ["noon", "night"]
    },

    "Cauliflower Sandwiches": {
        "name": "Cauliflower Sandwiches",
        "description": "Get a load of veggies and cheese with this ingenious keto recipe. You’ll dry out the cauliflower, then bake it into “bread” slices that get stacked with cheese; use a high-quality, organic cheddar here. It’s worth it!",
        "link": "cauliflower-sandwiches",
        "image": "https://i.imgur.com/v6FaB07.png",
        "id": 3,
        "tags": ["moring", "night"]
    },
    "Cauliflower Mash": {
        "name": "Cauliflower Mash",
        "description": "Potatoes and gravy are total comfort food — and luckily, there’s a keto version. These are made with cauliflower, which is quite low-carb, particularly when compared to potatoes. Made with cream, butter, rosemary and parmesan, this mash is creamy, full of flavor and smooth. You’ll finish it all off with a stock-based gravy, that would be perfect on a roast, too.",
        "link": "cauliflower-mash",
        "image": "https://i.imgur.com/Nwto9hu.png",
        "id": 4,
        "tags": ["noon", "night"]
    },
    "Keto Bagels": {
        "name": "Keto Bagels",
        "description": "These keto everything bagels are another great breakfast staple. With their help, you don’t have to cut out your favorite breakfast sandwiches.",
        "link": "keto-bagels",
        "image": "https://i.imgur.com/byQnAkr.png",
        "id": 5,
        "tags": ["moring"]
    },
    "Fathead Nachos": {
        "name": "Fathead Nachos",
        "description": "Keto recipes that include nachos?! Oh yes. You’ll begin by making the fat head tortilla chips first. Did I mention you’ll use two types of cheese for this step? Delicious. Next, you’ll load them up with a meaty sauce and finish them off with your favorite toppings, like guac, salsa or sour cream. While these make a delicious keto snack, they’re frankly filling enough to share as a meal.",
        "link": "fathead-nachos",
        "image": "https://i.imgur.com/KHCDWUX.png",
        "id": 6,
        "tags": ["crinkle"]
    },
    "Keto Lime Creamsicles": {
        "name": "Keto Lime Creamsicles",
        "description": "Most popsicles and ice creams have too much sugar to fall under the category of ketogenic, but these popsicles, sweetened with stevia, can help curb your sweet tooth while giving you a little bit of fat from mashed avocado.",
        "link": "lime-creamsicles",
        "image": "https://i.imgur.com/R2FlHuv.png",
        "id": 7,
        "tags": ["crinkle"]
    },
    "Baba Ganoush": {
        "name": "Baba Ganoush",
        "description": "Eat this eggplant dip with celery for the perfect in-between meal nibble. Thanks to a cup of tahini, this dip will add fat and flavor to an otherwise simple snack.",
        "link": "baba-ganoush",
        "image": "https://i.imgur.com/8wmfLRS.png",
        "id": 8,
        "tags": ["crinkle"]
    },
    "Portabella Sliders": {
        "name": "Portabella Sliders",
        "description": "I love the low-carb take on traditional burgers: smaller patties nestled into portabella mushroom buns. These are simple to make and are made using a grill pan on the stove, so you can enjoy them year-round.",
        "link": "portabella-sliders",
        "image": "https://i.imgur.com/MuUSAME.png",
        "id": 9,
        "tags": ["crinkle", "noon"]
    },
    "taco": {
        "name": "Taco",
        "description": "Anything tastes good when it’s stuffed between these cheesy shells! These are so simple to make: it’s just baked cheese! Stuff these with your favorite meats, veggies (bell peppers and onions are great here), taco fixings and, of course, more cheese!",
        "link": "taco",
        "image": "https://i.imgur.com/LvOwaDa.png",
        "id": 10,
        "tags": ["crinkle", "noon"]
    },
    "Cauliflower Pizza": {
        "name": "Cauliflower Pizza",
        "description": "The next time you’re having a pizza party, make it a keto one. Combine cauliflower, egg, coconut flour, and herbs to make a crust that tastes like the real thing. Top it off with a homemade avocado oil pesto, veggies, and cheese (yes, cheese!), and your friends will be asking where you ordered it. It’s THAT good.",
        "link": "cauliflower-pizza",
        "image": "https://i.imgur.com/tNvqlIX.jpg",
        "id": 11,
        "tags": ["noon", "night"]
    },
    "Keto Ice Cream": {
        "name": "Keto Ice Cream",
        "description": "According to Sisson, this is the keto ice cream you’ve been waiting for. It’s creamy, rich, luscious, and made with just five ingredients.",
        "link": "keto-ice-cream",
        "image": "https://i.imgur.com/iS2Mc5U.png",
        "id": 12,
        "tags": ["crinkle"]
    },
    "Keto Potato Salad": {
        "name": "Keto Potato Salad",
        "description": "Here’s the kicker: This salad has no actual potatoes. Instead, the low carb, keto, Paleo salad has a secret ingredient we know you’ve used before: cauliflower.",
        "link": "potato-salad",
        "image": "https://i.imgur.com/HHGBaid.png",
        "id": 13,
        "tags": ["noon", "night"]
    },
    "BANG BANG CAULIFLOWER": {
        "name": "BANG BANG CAULIFLOWER",
        "description": "A low carb version of bang bang sauce drizzled over crispy cauliflower that is coated in a low carb breading. This low carb version is just as tasty as the original!",
        "link": "bang-bang-cauliflower",
        "image": "https://i.imgur.com/9TbUH5S.jpg",
        "id": 14,
        "tags": ["noon"]
    },
    "Shepherd’s Pie": {
        "name": "Shepherd’s Pie",
        "description": "Shepherd’s pie (also known as cottage pie) layered with sauteed beef, bacon and veggies in a smoked sauce, topped with garlic mashed cauliflower and baked until crisp.",
        "link": "shepherds-pie",
        "image": "https://i.imgur.com/d1xAZSW.jpg",
        "id": 15,
        "tags": ["night", "noon"]
    },

    "Coming Soon": {
        "name": "Coming Soon",
        "description": "Coming Soon",
        "link": "coming-soon",
        "image": "../img/unknown.png",
        "id": 123,
        "tags": ["unknown"]


    }
}

function showPage() {
    document.getElementById("RinLoad").style.display = "none";

    $(".all-rec").fadeIn(10000);
    // document.getElementById("Rinformulaire").style.display = "block";
}



for (x in recipes) {
    var name = recipes[x]["name"]
    var description = recipes[x]["description"]
    var link = recipes[x]["link"]
    var image = recipes[x]["image"]
    var id = recipes[x]["id"]
    let tags = recipes[x]["tags"]
    let tagss
    for (i = 0; i < tags.length; i++) {
        tagss += ` ${recipes[x]["tags"][i]}`;
    }
    var final = `
        <div class="cards-rec col s12 m6 ${tagss}">
            <div class="card large">
                <div class="card-image">
                    <img class="img-item" src="${image}">
                    <span class="card-title org-text card-info-back z-depth-3">${name}</span>
                </div>
                <div class="card-content">
                    <p>${description}</p>
                </div>
                <div class="card-action">
                    <a href="../pages/recipe.html?r_id=${link}">view</a>
                    <a class="btn tooltipped right" data-position="Top" id=${id} data-tooltip="Star - Coming Soon"><i
                    class="material-icons">star_border</i></a>
                </div>
            </div>
        </div>`

    $(".all-rec").append(final);

}
// $(".all-rec").delay(1050).animate({
//     opacity: 1
// }, 800);
showPage()

let active = false
let current = ""

$(".night-btn").click(function () {
    var filtername = "night"
    if (active && filtername != current) {
        current = filtername
        active = true
        $(".cards-rec").css("display", "block");
        $(".done-check").remove();
        $(".cards-rec").not(".night").css("display", "none");
        $(".night-btn").append("<i class='material-icons right done-check'>done</i>");

    } else if (active) {
        active = false
        $(".cards-rec").css("display", "block");
        $(".done-check").remove();
    } else {
        current = filtername
        active = true
        $(".cards-rec").not(".night").css("display", "none");
        $(".night-btn").append("<i class='material-icons right done-check'>done</i>");
    }
});

$(".snacks-btn").click(function () {
    var filtername = "snacks"
    if (active && filtername != current) {
        current = filtername
        active = true
        $(".cards-rec").css("display", "block");
        $(".done-check").remove();
        $(".cards-rec").not(".crinkle").css("display", "none");
        $(".snacks-btn").append("<i class='material-icons right done-check'>done</i>");

    } else if (active) {
        active = false
        $(".cards-rec").css("display", "block");
        $(".done-check").remove();
    } else {
        current = filtername
        active = true
        $(".cards-rec").not(".crinkle").css("display", "none");
        $(".snacks-btn").append("<i class='material-icons right done-check'>done</i>");
    }
});

$(".breakfast-btn").click(function () {
    var filtername = "mornin"
    if (active && filtername != current) {
        current = filtername
        active = true
        $(".cards-rec").css("display", "block");
        $(".done-check").remove();
        $(".cards-rec").not(".moring").css("display", "none");
        $(".breakfast-btn").append("<i class='material-icons right done-check'>done</i>");

    } else if (active) {
        active = false
        $(".cards-rec").css("display", "block");
        $(".done-check").remove();
    } else {
        current = filtername
        active = true
        $(".cards-rec").not(".moring").css("display", "none");
        $(".breakfast-btn").append("<i class='material-icons right done-check'>done</i>");
    }
});

$(".lunch-btn").click(function () {
    var filtername = "noon"
    if (active && filtername != current) {
        current = filtername
        active = true
        $(".cards-rec").css("display", "block");
        $(".done-check").remove();
        $(".cards-rec").not(".noon").css("display", "none");
        $(".lunch-btn").append("<i class='material-icons right done-check'>done</i>");

    } else if (active) {
        active = false
        $(".cards-rec").css("display", "block");
        $(".done-check").remove();
    } else {
        current = filtername
        active = true
        $(".cards-rec").not(".noon").css("display", "none");
        $(".lunch-btn").append("<i class='material-icons right done-check'>done</i>");
    }
});