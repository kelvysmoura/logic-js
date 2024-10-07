import { getHash } from "./app.js";
import { STORAGE_KEYS } from "./consts.js";

export default {
  get(key, returnedValueCaseNull = null) {
    return window.localStorage.getItem(key) ?? returnedValueCaseNull;
  },

  getJson(key) {
    return JSON.parse(this.get(key));
  },

  setJson(key, value) {
    return this.set(key, JSON.stringify(value));
  },

  set(key, value) {
    return window.localStorage.setItem(key, value);
  },

  has(key) {
    return this.get(key) ?? false;
  },

  remove(key) {
    return window.localStorage.removeItem(key);
  },

  rawCode(code) {
    let key = `${getHash()}-${STORAGE_KEYS.RAWCODE}`;
    if(typeof code !== 'string') {
      return this.get(key, '');
    }
    return this.set(key, code);
  }
}