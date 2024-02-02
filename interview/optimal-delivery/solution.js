function distributeShirtsPerBag(totalShirts, totalBags) {
	if (!totalBags || !totalShirts) return;
	if (totalBags > totalShirts) return;

	const avgShirtsPerBag = Math.trunc(totalShirts / totalBags);

	if (totalShirts % totalBags === 0)
		return {
			optimalShirtsPerBag: avgShirtsPerBag,
			differentNumberOfShirts: 0,
		};

	const optimalShirtsPerBag = calculateOptimalShirtsPerBag(avgShirtsPerBag, totalShirts);
	const differentNumberOfShirts = totalShirts - (totalBags - 1) * optimalShirtsPerBag;

	return {
		optimalShirtsPerBag,
		differentNumberOfShirts,
	};
}

function calculateOptimalShirtsPerBag(avgShirtsPerBag, totalShirts) {
	const nextAvg = avgShirtsPerBag + 1;

	const deviation1 = Math.abs(
		avgShirtsPerBag - ((totalShirts % avgShirtsPerBag) + avgShirtsPerBag)
	);
	const deviation2 = Math.abs(nextAvg - (totalShirts % nextAvg));

	if (deviation1 < deviation2) return avgShirtsPerBag;

	return nextAvg;
}

console.log(distributeShirtsPerBag(11, 3));



/*

Total Shirts    - Total Bags    - Expected Combination {Optimal, Diffrence}

100             - 10            -  { 10, 0}
100             - 99            -  { 1, 2 }
20              - 3             -  { 7, 6 }
10              - 3             -  { 3, 4 }
11              - 3             -  { 4, 3 }

*/