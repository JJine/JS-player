class player {
    constructor(el, app) {
        this.app = app;
        this.playerDom = document.querySelector(el);
        this.audio = this.playerDom.querySelector("audio");
        this.pBar = this.playerDom.querySelector(".bar");
        this.cTime = this.playerDom.querySelector(".current-time");
        this.dTime = this.playerDom.querySelector(".total-time");
        this.filename = "선택한 파일이 없습니다";
        this.filenameDom = this.playerDom.querySelector(".file-name");
        this.playable = falsel
        this.progress = this.playerDom.querySelector(".proress");
        this.playBtn  = this.playerDom.querySelector("#playBtn");

        this.addEvent();

        requestAnimationFrame(()=> {
            this.frame();
        })
    }

    addEvent() {
        document.playBtn.addEventListener("click", ()=> {
            this.play();
        });
        document.querySelector("#stopBtn").addEventListener("click", ()=> {
            this.pause;
        });
        this.audio.addEventListener("loadeddata", () => {
            this.play();
            this.playable = true; 
        });

        this.progress.addEventListener("click", (e)=> {
            this.changeSeeking(e);
        })
    }

    loadMusic(file) {
        let fileURL = URL.createObjectURL(file);
        this.audio.src = fileURL; 
        this.filename.innerHTML = file.name;
       
    }

    frame(timestamp) {
        this.render();
        requestAnimationFrame(() => {
            this.frame();
        });
    }

    play() {
        //나중에 이부분에 재생제어가 들어갑니다.
        if(!this.playable) return;

        if(this.audio.paused) {
            this.audio.play();
            this.playBtn.innerHTML = "일시정지";
        } else {
            this.audio.pause();
            this.playBtn.innerHTML = "재생";
        }
    }


    // stop() {
    //     this.audio.pause();
    // }

    render() {
        let current = this.audio.currentTime; //현재 시간
        let duration = this.audio.duration; //전체 시간    
        this.pBar.style.width = `${current / duration * 100}%`;
        

        this.cTime = innerHTML = current.timeFormat();
        this.dTime = innerHTML = duration.timeFormat();

    }

    changeSeeking(e) {
        if(!this.playble) return; 
        let seek = e.offsetX / this.progress.clientWidth * this.audio.duration;
        this.audio.currentTime = seek;
    }
}