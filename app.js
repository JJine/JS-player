Number.prototype.timeFormat = function() {
    let h = "0"+ Math.floor(this/3600);
    h = h.substring(h.length- 2, h.length);
    let m = "0"+ Math.floor(this%3600/60);
    m = m.substring(m.length- 2, m.length);
    let s = "0"+ Math.floor(this % 60);
    s = s.substring(s.length- 2, s.length);
    return `${h}:${m}:${s}`;
}


class app {
    constructor(playerEl, listEl) {
        this.player = new player(playerEl, this);
        //이후 여기에 리스트 추가하는 부분이 들어갑니다.
        this.list = new playList(listEl, this);
    }
}

window.addEventListener("load", ()=> {
    let player = new app("#player", "#playList");
})