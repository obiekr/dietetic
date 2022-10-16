import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";
import qs from "qs";
import {shuffle} from "./generator";

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
	const reqURL = `https://api.edamam.com/api${path}${queryStr ? `?${queryStr}` : ""}`;
	console.log("CLICK ME: ", reqURL);

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
// function shuffleArray(array) {
//     // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array
// }

export async function getRandomRecipe(queryInput) {
	const NUMBER_MEAL = 7;

	//since there is a limitation in fetching limit, we'll be selecting query randomly
	const arrQuery = queryInput.splice(Math.floor(Math.random() * (queryInput.length+1)), 1)
	console.log("query query : ", arrQuery)

	var arrBreakfast = [];
	var arrBigMeal = []
	var arrSnack = [];
	var plan = [];


	async function asyncmap() {
		return Promise.all(
			arrQuery.map(async (query, index) => {
				let [breakfast, bigMeal, snack] = await Promise.all([
					fetchRecipe(query, "Breakfast"),
					fetchRecipe(query, ["Lunch", "Dinner"]),
					fetchRecipe(query, "Snack"),
				]);
				
				arrBreakfast = arrBreakfast.concat(breakfast.hits);
				arrBigMeal = arrBigMeal.concat(bigMeal.hits);
				arrSnack = arrSnack.concat(snack.hits);
				console.log("bigmeal", bigMeal)
			})
		);
	}

	return asyncmap().then(() => {
		console.log(arrBreakfast)
		console.log("big meal", arrBigMeal)

		var randBreakfast = shuffle(arrBreakfast)
		var randBigMeal = shuffle(arrBigMeal)
		var randSnack = shuffle(arrSnack)

		for (let i = 0; i < NUMBER_MEAL; i++) {
			let meal = {};

			meal.breakfast = randBreakfast.next().value
			meal.lunch = randBigMeal.next().value
			meal.dinner = randBigMeal.next().value
			meal.snack = randSnack.next().value

			console.log(`meal-${i} : `, meal);
			plan.push(meal);
		}

		console.log("weekly plan: ", plan);
		// localStorage.setItem("plan", JSON.stringify(plan))
		return plan
	});

	// return plan
}
