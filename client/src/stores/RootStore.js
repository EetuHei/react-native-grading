import AppStore from "./AppStore";
import AuthStore from "./AuthStore";
import AlertStore from "./AlertStore";

class RootStore {
  constructor() {
    this.appStore = new AppStore(this);
    this.authStore = new AuthStore(this);
    this.alertStore = new AlertStore(this);
  }
}

export default RootStore;
