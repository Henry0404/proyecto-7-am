let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

for (let i = 0; i < pronoun.length; i++) {
    const pronombre = pronoun[i];
    for (let index = 0; index < adj.length; index++) {
        const adjetivo = adj[index];
        for (let index2 = 0; index2 < noun.length; index2++) {
            const sustantivo = noun[index2];
            console.log(pronombre + adjetivo + sustantivo + ".com");
        }
        
    }
    
}