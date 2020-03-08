import { decorate, observable, action, computed } from "mobx";

//add dev branch

class AppStore {
  @observable initialized;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.accessToken = null;
    this.initialized = false;
  }

  @action init() {
    this.accessToken = localStorage.getItem("accessToken") || null;
    this.initialized = true;
  }

  @action reset() {
    this.initialized = false;
    this.accessToken = null;
    localStorage.removeItem("accessToken");
  }

  @action setAccessToken(accessToken) {
    this.accessToken = accessToken;
    localStorage.setItem("accessToken", accessToken);
  }

  get authenticated() {
    return !!this.accessToken;
  }
}

decorate(AppStore, {
  accessToken: observable,
  setAccessToken: action.bound,
  authenticated: computed
});

export default AppStore;
