use zoo;
db.dropDatabase();

db.animals.insertMany([
    {
    name: "White-Faced Saki",
    latin_name: "Pithecia pithecia",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: 1,
    length_max: 1.2,
    weight_min: 4,
    weight_max: 4.5,
    lifespan: 11,
    habitat: "Tropical rainforest",
    diet: "Fruit, seeds, honey, leaves, flowers, small mammals and birds",
    geo_range: "Northern South America",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/b/b3/White-faced_Saki_2008-07.jpg",
    id: 189
    },
    {
    name: "African Painted Dog",
    latin_name: "Lycaon pictus",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: 2.5,
    length_max: 4,
    weight_min: 44,
    weight_max: 71,
    lifespan: 10,
    habitat: "Savannah, woodland and semi-desert",
    diet: "Primarily antelope; some warthogs, hares and small animals",
    geo_range: "Central and Southern Africa",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/b/ba/African_wild_dog_%28Lycaon_pictus_pictus%29.jpg",
    id: 4
    },
    {
    name: "Howler Monkey",
    latin_name: "Alouatta caraya",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: 1.5,
    length_max: 2,
    weight_min: 9,
    weight_max: 22,
    lifespan: 18,
    habitat: "Tropical forest",
    diet: "Leaves, flowers and fruit",
    geo_range: "South America",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Alouatta_guariba.jpg",
    id: 89
    },
    {
    name: "Siamang",
    latin_name: "Hylobates syndactylus",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: 1.9,
    length_max: 2,
    weight_min: 20,
    weight_max: 23,
    lifespan: 23,
    habitat: "Tropical rainforest",
    diet: "Primarily fruit and leaves, some invertebrates",
    geo_range: "Malaysia and Sumatra",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/a/a4/DPPP_5348.jpg",
    id: 162
    }
    ])