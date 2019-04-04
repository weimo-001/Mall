/**
 * Create a random string
 * @param {Number} length 
 */
function randomString(length = 10) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array(length).fill(0).map(i => possible.charAt(Math.floor(possible.length * Math.random()))).join('');
}

export default randomString