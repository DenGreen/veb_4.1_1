import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
  static load() {
    console.log(Promise.resolve().then(read).then(json))
    return Promise.resolve().then(read).then(json)
  }
}