import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";
import qs from "qs";
import shuffle from "./generator";

export async function fetchAPI(path, paramsObj = {}, options = {}) {
	const { headers, ...option } = options;
	const mergedOption = {
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		...option,
	};

	const params = {
		app_id: "7f5b331d",
		app_key: "b7873d60e63c1ad615fa777f35f6372a",
		...paramsObj,
	};

	const queryStr = qs.stringify(params);
	const reqURL = `https://api.edamam.com/api${path}${
		queryStr ? `?${queryStr}` : ""
	}`;
	// console.log("CLICK ME: ", reqURL);

	const res = await fetch(reqURL, mergedOption);

	if (res.status == 200) {
		const resJSON = await res.json();
		return resJSON;
	}

	console.log(`${res.status} :Fetching Error`);
	return;
}

export async function fetchRecipe(
	query,
	mealType = ["Snack", "Lunch", "Breakfast", "Dinner"]
) {
	// console.log("query: ", query);
	const params = {
		q: query,
		type: "public",
		diet: ["high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"],
		health: ["gluten-free", "low-sugar", "sugar-conscious", "alcohol-free"],
		mealType: mealType,
	};

	return fetchAPI("/recipes/v2", params, { mode: "cors" });
}
function shuffleArray(array) {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export async function getRandomRecipe(arrQuery) {
	const NUMBER_MEAL = 14;
	const RECIPE_PER_INGREDIENT =
		Math.floor(NUMBER_MEAL / arrQuery.length) / 4 || 1;

	var arrBreakfast = [];
	var arrLunch = [];
	var arrDinner = [];
	var arrSnack = [];

	// let breakfast = await fetchRecipe(query, "Breakfast");
	async function asyncmap() {
		return Promise.all(
			arrQuery.map(async (query, index) => {
				let [breakfast, lunch, dinner, snack] = await Promise.all([
					fetchRecipe(query, "Breakfast"),
					fetchRecipe(query, "Lunch"),
					fetchRecipe(query, "Dinner"),
					fetchRecipe(query, "Snack"),
				]);
				console.log("length:", query, breakfast);
				arrBreakfast.push(breakfast);
				arrLunch.push(lunch);
				arrDinner.push(dinner);
				arrSnack.push(snack);
			})
		);
	}

	asyncmap().then(() => {
		console.log("end");
		console.log("arrBreakfast b4", arrBreakfast);
        // randomize array langsung (NOT WORKING)
		for (let i = 0; i < arrBreakfast.length; i++) {
            arrBreakfast[i]["hits"] = shuffleArray(arrBreakfast[i]["hits"])
            arrLunch[i]["hits"] = shuffleArray(arrLunch[i]["hits"])
            arrDinner[i]["hits"] = shuffleArray(arrDinner[i]["hits"])
            arrSnack[i]["hits"] = shuffleArray(arrSnack[i]["hits"])
        }
		console.log("arrBreakfast after", arrBreakfast);
		// var randBreakfast = shuffle(arrBreakfast);
		// var randLunch = shuffle(arrLunch);
		// var randDinner = shuffle(arrDinner);
		// var randSnack = shuffle(arrSnack);

		const plan = [];
		for (let i = 0; i < NUMBER_MEAL; i++) {
			let meal = {};
			// meal.breakfast = randBreakfast.next().value;
			// meal.lunch = randLunch.next().value;
			// meal.dinner = randDinner.next().value;
			// meal.snack = randSnack.next().value;
			meal.breakfast = arrBreakfast[Math.floor(Math.random() * (arrBreakfast.length))]["hits"][i]
			meal.lunch = arrLunch[Math.floor(Math.random() * (arrBreakfast.length))]["hits"][i]
			meal.dinner = arrDinner[Math.floor(Math.random() * (arrBreakfast.length))]["hits"][i]
			meal.snack = arrSnack[Math.floor(Math.random() * (arrBreakfast.length))]["hits"][i]

			plan.push(meal);
		}

		console.log(plan);
	});

	// return plan;
}
