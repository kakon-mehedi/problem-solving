export async function printDelay() {
	for (let i = 1; i <= 5; i++) {
		await delay(i);
		print(i);
	}
}

function delay(duration) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, duration * 1000);
	});
}

function print(text) {
	console.log(text);
}

printDelay();
