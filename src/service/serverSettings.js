class ServerSettings {
  constructor() {
    this.api = 'http://127.0.0.1:8000/';
    // this.api = 'http://mod0.albert9t.beget.tech/';
  }

  getApi = () => {
    return this.api;
  }
}

export default ServerSettings;