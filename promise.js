const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (sentimen) => {
	const ixxMovies = await promiseTheaterIXX();
	const vgcMovies = await promiseTheaterVGC();
	const movies = [...vgcMovies, ...ixxMovies];
	return new Promise((resolve, reject) => {
		if (movies.length >= 1) {
			// Jika movie tersedia
			resolve(movies.filter((movie) => movie.hasil === sentimen).length);
		} else {
			// Jika movie kosong
			reject('Movie tidak tersedia');
		}
	});
};

module.exports = {
	promiseOutput,
};
