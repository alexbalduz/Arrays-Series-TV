let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

seriesPending.push('Peaky coders')

for (let i = 0; i < seriesPending.length; i++) {

    console.log(`Serie #${i}: ${seriesPending[i]}`);
    if (seriesPending[i] === 'Boolean 99') {
        console.log('Found it!');
    }
}

let seriesWatching = [];
let firstSerieRemoved = seriesPending.shift();
seriesWatching.push(firstSerieRemoved);

console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);

for (let i = 0; i < 4; i++) {
    seriesWatching.push(seriesPending.shift());
}
console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);

seriesWatching.splice(0, seriesWatching.length);

console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);


