class Remote{
    constructor(tivi) {
        this.tivi = tivi;
    }
    turnOnTivi(tivi){
        tivi._status = true;
    }
    turnOffTivi(tivi){
        tivi._status = false;
    }
    changeChannel(channel){
        this.tivi._channel = channel;
    }
    volumeUp(tivi){
        this.tivi._volume += 1;
    }
    volumeDown(tivi){
        this.tivi._volume -= 1;
    }
}
