class RequestDeveloper {

    constructor() {
        this.dbFirebase = firebase.database();
    }

    save(developer) {
        this.dbFirebase.ref("registerDeveloper").set(developer);
    }


}