/* 
Problem:

Bob has a playlist of N songs, each song has a singer associated with it (denoted by an integer)

Favourite singer of Bob is the one whose songs are the most on the playlist

Count the number of Favourite Singers of Bob

Input Format :-

The first line contains an integer N, denoting the number of songs in Bob's playlist.

The following input contains N integers, ith integer denoting the singer of the ith song.

Output Format:-

Output a single integer, the number of favourite singers of Bob

Note: Use 64 bit data type

Sample Input:
5
1 1 2 2 4

Sample Output:
2

*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = "";
process.stdin.on("data", chunks => {
    input += chunks;
})
process.stdin.on("end", () => {
    const lines = input.trim().split('\n');
    let singers = lines[1].trim().split(' ').map(Number);
    let frequency = new Map();

    for (let singer of singers) {
        if (frequency.has(singer)) {
            frequency.set(singer, frequency.get(singer) + 1);
        }
        else {
            frequency.set(singer, 1);
        }
    }

    let maxFrequency = 0;
    let numberOfFavSingers = 0;
    
    for (let value of frequency.values()) {
        if (value > maxFrequency) {
            maxFrequency = value;
        }
    }

    for (let value of frequency.values()) {
        if (value === maxFrequency) {
            numberOfFavSingers++;
        }
    }

    console.log(numberOfFavSingers);
})