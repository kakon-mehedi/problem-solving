function distributeShirtsPerBagOptimized(totalShirts, totalBags) {
	const avgShirtsPerBag = Math.trunc(totalShirts / totalBags);

	if (totalShirts % totalBags === 0) {
        return {
			optimalShirtsPerBag: avgShirtsPerBag,
			differentNumberOfShirts: 0,
		};
    }

    return calculateOptimalShirtsPerBagOptimized(avgShirtsPerBag, totalShirts, totalBags)

}

function calculateOptimalShirtsPerBagOptimized(
	avgShirtsPerBag,
	totalShirts,
	totalBags
) {
	const nextOptimalNumber = avgShirtsPerBag + 1;

	const avgNumberIsTheOptimalCombination =
		avgShirtsPerBag * totalBags + nextOptimalNumber ===
		totalShirts;

	if (avgNumberIsTheOptimalCombination) {
		return {
			optimalShirtsPerBag: avgShirtsPerBag,
			differentNumberOfShirts: nextOptimalNumber,
		};
	}

	return {
		optimalShirtsPerBag: nextOptimalNumber,
		differentNumberOfShirts: avgShirtsPerBag,
	};
}


console.log(distributeShirtsPerBagOptimized(10, 3));