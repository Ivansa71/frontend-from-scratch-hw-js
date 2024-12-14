/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

//const game = {
//resources: {
//gold: 250,
//lumber: 100,
//},
//addResource(resource, amount) {
//if (resource !== game.resources) {
//console.log('Invalid resource');
//}
//if (resource === game.resources) {
//this.resource = resource + amount;
//}
//},
//};
//game.addResource(tree, 4)
//console.log(game.resources);

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (!game.resources.hasOwnProperty(resource)) { // содержит ли объект значение? если folse то консоль иначе ...
      console.log('Invalid resource');
    } else {
      game.resources[resource] += amount;
    }
  },
};
game.addResource('gold', 4);
console.log(game.resources);