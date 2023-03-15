let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let dom = ['.com', ".net", ".us", ".io"]
// Should generate something like:

//     thegreatjogger.com
//     thegreatracoon.com
//     ourgreatjogger.com
//     ourgreatracoon.com
//     thebigjogger.com
//     thebigracoon.com
//     ourbigjogger.com
//     ourbigracoon.com

let str = ""

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < dom.length; l++) {
                str += pronoun[i].concat(adj[j]).concat(noun[k]).concat(dom[l])+ "\n"
            }
        }
    }
}


console.log(str)