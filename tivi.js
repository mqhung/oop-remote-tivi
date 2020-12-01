class Tivi{
    constructor(channel, volume) {
        this._status = false;
        this._channel = channel;
        this._volume = volume;
    }

    get channel() {
        return this._channel;
    }

    set channel(value) {
        this._channel = value;
    }

    get volume() {
        return this._volume;
    }

    set volume(value) {
        this._volume = value;
    }
    status(){
        if (this._status) {
            return "Tivi is on"
        } else {
            return "Tivi if off"
        }
    }
}
