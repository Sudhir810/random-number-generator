export class RandomGenerator {
    static randomNumbers(rolls, sides) {
        let result = [];
        for(let i = 0;i< rolls;i++){
            result.push(Math.floor((Math.random() * sides) +1));
        }
        return result;
    }
}