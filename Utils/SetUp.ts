export class SetUp {
  
     static appUrl: string = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    static username: string = "Admin";
    static password: string = "admin123";

       
    static setAppUrl(url: string) {
        this.appUrl = url;
    }
    static getAppUrl() {
        return this.appUrl;
    }
     

    static setuserCredentials(name: string, pass: string) {
        this.username = name;
        this.password = pass;
    }

    static getUserCredentials() {
        return { username: this.username, password: this.password };
    }
  }