ingredien = ["orange", "apple", "kiwi", "cherry", "grape"];

plan = [
	{ Breakfast: "1b", Lunch: "1l", Dinner: "1d", Snack: "1s" },
	{ Breakfast: "2b", Lunch: "2l", Dinner: "2d", Snack: "2s" },
	{ Breakfast: "3b", Lunch: "3l", Dinner: "3d", Snack: "3s" },
];

const params = {
	app_id: "189e6750",
	app_key: "b52dae2d0dc1b7db57b13dfd7e1b5ae2",
	diet: ["high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"],
	health: ["gluten-free", "low-sugar", "sugar-conscious", "alcohol-free"],
	mealType: ["Breakfast", "Dinner", "Lunch", "Snack"],
};
const req = await fetchAPI("/recipes/v2", params)



async function random(userIngredients) {
	var selected = [];
	for (let i = 0; i < 4; i++) {
		selected.push(userIngredients[Math.floor(Math.random()) * 4]);
	}
    // 4
    let ingred1 = await fetchAPI("/recipes/v2", params);
}

// 1. user pilih list ingredient yang dipilih, (minimal 4?)
// 2. ingredients yang dipilih bakal dimasukin ke array
// 3. dari array ini, pilih 4 ingredient secara random, spek nya bakal kyk gini:
//      1 breakfast makanan ringan
//      1 snack makanan ringan
//      1 lunch makanan berat
//      1 dinner makanan berat
// 4. fetch api, simpen uri atau nama makanan nya aja, bakal dapet segini:
//      20 breakfast makanan ringan -> masukin ke array ringan
//      20 snack makanan ringan -> masukin ke array ringan
//      20 lunch makanan berat -> masukin ke array berat
//      20 dinner makanan berat -> masukin ke array berat
//      jadi 40 item di array makanan ringan, 40 item di array makanan berat
// 5. pake for loop, generate untuk 7 hari kedepan
//      pilih 2 random dari ringan, pilih 2 random dari berat, masing2 14x
// 6. kalo ada duplicate, pilih yang lain, sampe ada 7 hari keisi
//      28 di array ringan, 28 di array berat
// 7. masukin yg ringan secara acak ke objek breakfast & snack
// 8. masukin yg berat secara acak ke objek lunch & dinner
// klo kyk gini gmn bang?
