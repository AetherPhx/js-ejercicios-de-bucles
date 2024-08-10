// * Ejercicio 1: Promedio de un arreglo de números

const e1 = () => {
	console.group("Ejercicio 1: Promedio de un arreglo de números");
	const averageOfNumbersArray = (listOfNumbers) => {
		console.group(
			"Fn averageOfNumbersArray: Calcular el promedio de un arreglo de números"
		);
		console.log(`Entrada recibida por la fn: ${listOfNumbers}`);
		let average = 0; // Inicializamos el promedio

		listOfNumbers.forEach((number) => (average += number)); // Suma la lista de números

		// Using typical for
		// for (let index = 0; index < listOfNumbers.length; index++)
		// 	average += listOfNumbers[index]; // Suma la lista de números

		console.log(`Sumatoria Obtenida: ${average}`);
		average /= listOfNumbers.length; // Divide la sumatoria obtenida por la longitud de la lista

		console.log(`Promedio Obtenido: ${average}`);
		console.groupEnd();
		return average;
	};

	// Define the array
	const listOfNumbers = [2, 6, 1, 8];

	console.log(`
        Lista de números: ${listOfNumbers}
        Promedio: ${averageOfNumbersArray(listOfNumbers)}`);
	console.groupEnd();
};

const e2 = () => {
	console.group("Ejercicio 2: Último valor de un arreglo de números");

	const getLastNumber = (numberArray) => numberArray[numberArray.length - 1];

	const listOfNumbers = [4, 8, 5, 3];

	console.log(`
        Lista de Números: ${listOfNumbers}
        El último valor de la lista es: ${getLastNumber(listOfNumbers)}`);

	console.groupEnd();
};

const e3 = () => {
	console.group("Ejercicio 3: Suma de un arreglo de números");

	const isEven = (number) => number % 2 === 0;

	const addEvenNumbers = (numbersArray) => {
		let sum = 0;
		numbersArray.forEach((number) => {
			if (isEven(number)) sum += number;
		});
		// Using typical for
		// for (let index = 0; index < numbersArray.length; index++) {
		// 	const number = numbersArray[index];
		// 	if (number % 2 === 0) sum += number;
		// }

		return sum;
	};

	const listOfNumbers = [1, 2, 5, 8, 9, 12, 2, 3];

	console.log(`
        Lista de números: ${listOfNumbers}
        Números Pares: ${listOfNumbers.filter((number) => isEven(number))}
        Suma de Pares: ${addEvenNumbers(listOfNumbers)}`);

	console.groupEnd();
};

const e4 = () => {
	console.group("Ejercicio 4: Factorial de un número");

	const factorialOf = (num) => {
		if (num === 0) return 1;
		return num * factorialOf(num - 1);
	};

	let num = 6;
	console.log(`Factorial de ${num}: ${factorialOf(num)}`);

	console.groupEnd();
};

const e5 = () => {
	console.group(
		"Ejercicio 5: Iterar del 1 al 15 verificando si es par o impar"
	);

	for (let index = 1; index <= 15; index++) {
		if (index % 2 !== 0) console.log(`El número ${index} es impar`);
		else console.log(`El número ${index} es par`);
	}

	console.groupEnd();
};

const e6 = () => {
	console.group(
		"Ejercicio 6: Listar del 1 al 50 con un mensaje de lotería en los números escogidos por el usuario"
	);

	const chosen = [4, 33];
	const min = 1,
		max = 50;

	for (let index = min; index <= max; index++) {
		if (chosen.includes(index)) console.log(`Lotería!`);
		else console.log(index);
	}

	console.groupEnd();
};

const e7 = () => {
	console.group(
		"Ejercicio 7: Itera del 1 al 100 imprimiendo `Fizz` en los múltiplos de 3, `Buzz` en los múltiplos de 5 y `FizzBuzz` en los números que aplican ambos"
	);

	console.group("Iteran del 1 al 100");
	for (let index = 1; index <= 100; index++) {
		console.groupCollapsed(`Iterando ${index}`);
		console.log(`
        Multiplo de 3: ${index % 3 === 0}
        Multiplo de 5: ${index % 5 === 0}
        Multiplo de 3 y 5: ${index % 3 === 0 && index % 5 === 0}`);

		if (index % 3 === 0 && index % 5 === 0) console.log("FizzBuzz");
		else if (index % 3 === 0) console.log("Fizz");
		else if (index % 5 === 0) console.log("Buzz");
		else console.log(index);

		// * Using switch instead of if-else
		// switch (
		// 	true // Evaluación Booleana en vez de un valor
		// ) {
		// 	case index % 3 === 0 && index % 5 !== 0:
		// 		console.log("Fizz");
		// 		break;

		// 	case index % 3 !== 0 && index % 5 === 0:
		// 		console.log("Buzz");
		// 		break;

		// 	case index % 3 === 0 && index % 5 === 0:
		// 		console.log("FizzBuzz");
		// 		break;

		// 	default:
		// 		console.log(index);
		// 		break;
		// }

		console.groupEnd();
	}
	console.groupEnd();
};

const e8 = () => {
	console.group("Ejercicio 8: Costos de helado según toppings");

	let icecreamPrice = 50,
		total = icecreamPrice;
	let chosenTopping = "oreo";
	if (chosenTopping === "") chosenTopping = "none";

	switch (chosenTopping) {
		case "none":
			console.log(`El precio del helado sin toppings es: $${total} MXN.`);
			break;

		case "oreo":
			total += 10;
			console.log(
				`El precio del helado más el topping ${chosenTopping} es: $${total} MXN.`
			);
			break;

		case "kitKat":
			total += 15;
			console.log(
				`El precio del helado más el topping ${chosenTopping} es: $${total} MXN.`
			);
			break;

		case "brownie":
			total += 20;
			console.log(
				`El precio del helado más el topping ${chosenTopping} es: $${total} MXN.`
			);
			break;

		default:
			console.log(`No tenemos ese topping, lo sentimos.
                Puede comprar su helado sin topping por $${total} MXN.`);
			break;
	}

	console.groupEnd();
};

const e9 = () => {
	console.group(
		"Ejercicio 9:Consultas sobre programas para aprender a desarrollar apps"
	);

	const calcTotal = (monthCost, months, discount) =>
		discount ? monthCost * discount * months : monthCost * months;

	const impr = (program, monthCost, months, beca, discount) => {
		if (!beca) beca = "Sin Beca";
		console.log(` || Recibo del programa ||
	    Programa: ${program}
	    Cant. Meses: ${months}
	    Costo Mensual: $${monthCost} MXN
	    Beca: ${beca}
	    Descuento: ${discount * 100}%
	    Total: $${calcTotal(monthCost, months, discount)} MXN`);
	};

	let program = "Course",
		beca = "none",
		discount = 0;

	switch (program.toLowerCase()) {
		case "course":
			monthCost = 4999;
			months = 2;
			break;
		case "career":
			monthCost = 3999;
			months = 6;
			break;
		case "master":
			monthCost = 2999;
			months = 12;
			break;
		default:
			console.error("Programa no encontrado");
			program = null;
			break;
	}

	switch (beca) {
		case "none":
			beca = null;
			break;

		case "becaFacebook":
			discountPercentage = 0.2;
			break;
		case "becaGoogle":
			discount = 0.15;
			break;
		case "becaJesua":
			discount = 0.5;
			break;

		default:
			console.error("Descuento no encontrado");
			beca = null;
			break;
	}

	if (program) impr(program, monthCost, months, beca, discount);

	console.groupEnd();
};

const e10 = () => {
	console.group("Ejercicio 10: Calc total x distancia recorrida");

	const calcTotal = (kmPrice, kmTraveled, litersConsumed) => {
		let total = kmPrice * kmTraveled,
			extra = 5;
		if (litersConsumed <= 100) extra += 5;

		total += extra;
		console.log(`Cálculo del total:
            Precio por km: $${kmPrice} MXN.
            Km recorridos: ${kmTraveled}.
            Se consumieron ${litersConsumed} litros, por lo que se carga un extra de $${extra} MXN.
            ($${kmPrice} MXN * ${kmTraveled} + $${extra}) = $${total}.
            Total: $${total} MXN.`);
	};

	let vehicle = "moto",
		kmPrice,
		kmTraveled = 5,
		litersConsumed = 100;

	console.log(`Registro de viaje:
        Vehículo: ${vehicle}
        Km recorridos: ${kmTraveled}
        Litros consumidos: ${litersConsumed}`);

	switch (vehicle) {
		case "coche":
			kmPrice = 0.2;
			calcTotal(kmPrice, kmTraveled, litersConsumed);
			break;
		case "moto":
			kmPrice = 0.1;
			calcTotal(kmPrice, kmTraveled, litersConsumed);
			break;
		case "autobús":
			kmPrice = 0.5;
			calcTotal(kmPrice, kmTraveled, litersConsumed);
			break;
		default:
			console.error("Se ingresó incorrectamente el vehículo.");
	}

	console.groupEnd();
};

const test = () => {
	console.log("La Aplicación se ha inciado con exito");
	e9();
};

const startApp = () => {
	test();
};

startApp();
