/*
Problem: 

    Read different types of data from standard input, process them as shown in output format and print the answer to standard output.

    Input format:
    First line contains integer N.
    Second line contains string S.

    Output format:
    First line should contain N x 2.
    Second line should contain the same string S.

    Sample Input:-
    5
    helloworld

    Sample Output:-
    10
    helloworld

*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = "";

process.stdin.on("data", chunk => {
    input += chunk;
})

process.stdin.on("end", () => {
    const lines = input.trim().split('\n');
    console.log(parseInt(lines[0]) * 2);
    console.log(lines[1]);
})