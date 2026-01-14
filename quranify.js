
let idx = 0;
const surahNames = [
    "Al-Fatihah",
    "Al-Baqarah",
    "Aal-E-Imran",
    "An-Nisa",
    "Al-Ma'idah",
    "Al-An'am",
    "Al-A'raf",
    "Al-Anfal",
    "At-Tawbah",
    "Yunus",   "Hud",
    "Yusuf",
    "Ar-Ra'd",
    "Ibrahim",
    "Al-Hijr",
    "An-Nahl",
    "Al-Isra",
    "Al-Kahf",
    "Maryam",
    "Ta-Ha",
    "Al-Anbiya",
    "Al-Hajj",
    "Al-Mu’minun",
    "An-Nur",
    "Al-Furqan",
    "Ash-Shu'ara",
    "An-Naml",
    "Al-Qasas",
    "Al-Ankabut",
    "Ar-Rum",
    "Luqman",
    "As-Sajdah",
    "Al-Ahzab",
    "Saba",
    "Fatir",
    "Ya-Sin",
    "As-Saffat",
    "Sad",
    "Az-Zumar",
    "Ghafir",
    "Fussilat",
    "Ash-Shura",
    "Az-Zukhruf",
    "Ad-Dukhan",
    "Al-Jathiyah",
    "Al-Ahqaf",
    "Muhammad",
    "Al-Fath",
    "Al-Hujurat",
    "Qaf",
    "Adh-Dhariyat",
    "At-Tur",
    "An-Najm",
    "Al-Qamar",
    "Ar-Rahman",
    "Al-Waqi'ah",
    "Al-Hadid",
    "Al-Mujadila",
    "Al-Hashr",
    "Al-Mumtahanah",
    "As-Saff",
    "Al-Jumu'ah",
    "Al-Munafiqun",
    "At-Taghabun",
    "At-Talaq",
    "At-Tahrim",
    "Al-Mulk",
    "Al-Qalam",
    "Al-Haqqah",
    "Al-Ma'arij",
    "Nuh",
    "Al-Jinn",
    "Al-Muzzammil",
    "Al-Muddaththir",
    "Al-Qiyamah",
    "Al-Insan",
    "Al-Mursalat",
    "An-Naba",
    "An-Nazi'at",
    "Abasa",
    "At-Takwir",
    "Al-Infitar",
    "Al-Mutaffifin",
    "Al-Inshiqaq",
    "Al-Buruj",
    "At-Tariq",
    "Al-A'la",
    "Al-Ghashiyah",
    "Al-Fajr",
    "Al-Balad",
    "Ash-Shams",
    "Al-Layl",
    "Ad-Duha",
    "Ash-Sharh",
    "At-Tin",
    "Al-Alaq",
    "Al-Qadr",
    "Al-Bayyinah",
    "Az-Zalzalah",
    "Al-Adiyat",
    "Al-Qari'ah",
    "At-Takathur",
    "Al-Asr",
    "Al-Humazah",
    "Al-Fil",
    "Quraysh",
    "Al-Ma'un",
    "Al-Kawthar",
    "Al-Kafirun",
    "An-Nasr",
    "Al-Masad",
    "Al-Ikhlas",
    "Al-Falaq",
    "An-Nas"
  ];
  let audio=null;
  const bottomPlayer = document.getElementById("musicPlayer");
  for (let i = 0; i < 114; i++) {

    // create NEW elements each loop
    let div = document.createElement("div");
    div.classList.add("img");
    idx++;
     div.innerHTML=`<img src="quran-verse${idx}.jpg"> <p>Surah ${i+1}-${surahNames[i]}</p> <p class="playbutton">Play<i class="fa-solid fa-play"></i></p>`;
    
    if(idx===10){
        idx=0;
    }
    let z=Math.floor(i/10+1);
    let trending = document.querySelector(`.trending${z}`);
    
    trending.appendChild(div);
}
  let play=document.querySelector(".play");
  let back=document.querySelector(".back");
  let next=document.querySelector(".next");
  let popup=document.querySelector(".pop-up");
  let muted=document.querySelector(".mute");
  let times=document.querySelector(".time");
  let progressBar=document.querySelector(".progress input");

  const playsurah=(playy,idx)=>
    {
       playy.addEventListener("click",()=>{
        bottomPlayer.classList.remove("hidden");
           namee.innerHTML=`<h4>Surah ${surahNames[idx]} by Shiekh Mishary Rashid Alafasy</h4>`;
           namee.setAttribute("id",idx);
           if(audio)
           {
               audio.pause();
   
           }
           play.innerHTML="<i class='fa-solid fa-pause'></i>";
           audio = new Audio(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${idx+1}.mp3`);
           times.innerText="00:00";
           upadateAudioProgress();
           audio.play();
       });
    }
    console.log(progressBar);
    const upadateAudioProgress=()=>{

    const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
    if (audio) audio.pause();  
    bottomPlayer.classList.add("hidden");  
});

  audio.addEventListener('timeupdate', ()=>{
    if (!isNaN(audio.duration)) 
    {
        let percentTime=(audio.currentTime/audio.duration)*100;
         
        progressBar.value=percentTime;
    }
        times.innerText=formatTime(audio.currentTime);

  });
  progressBar.addEventListener("change",()=>{
    audio.currentTime=(progressBar.value*audio.duration)/100;
    times.innerText=formatTime(audio.currentTime);
  })
}
  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
}
next.addEventListener("click",()=>{
        let idx=namee.id;
        if(idx<113)
        {idx++;
        namee.innerHTML=`<h4>Surah ${surahNames[idx]} by Shiekh Mishary Rashid Alafasy</h4>`;
        namee.setAttribute("id",idx);
        if(audio)
        {
            audio.pause();

        }
        play.innerHTML="<i class='fa-solid fa-pause'></i>";
        audio = new Audio(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${idx+1}.mp3`);
        audio.play();
        times.innerText="00:00";
           upadateAudioProgress();
    }
    else{    popup.innerHTML="<h6>you have reached the end of playlist!</h6>";
        popup.classList.remove("hidden");
        setTimeout(()=>{
            popup.classList.add("hidden");
        },2000);
    
    
       
    
    
    }
})
 

   

back.addEventListener("click",()=>{
    let idx=namee.id;
    if(idx>0){idx--;
    namee.innerHTML=`<h4>Surah ${surahNames[idx]} by Shiekh Mishary Rashid Alafasy</h4>`;
    namee.setAttribute("id",idx);
    if(audio)
    {
        audio.pause();

    }
    play.innerHTML="<i class='fa-solid fa-pause'></i>";
    audio = new Audio(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${idx+1}.mp3`);
    audio.play();
    times.innerText="00:00";
    upadateAudioProgress();
}
else{
    popup.innerHTML="<h6>you have reached the beginning of playlist!</h6>";
    popup.classList.remove("hidden");
    setTimeout(()=>{
        popup.classList.add("hidden");
    },2000);


   


}
})


muted.addEventListener("click",()=>{
    if(audio.muted)
        {
            muted.innerHTML="<i class='fa-solid fa-microphone-lines'></i>";
            
        }
        else{
            muted.innerHTML=" <i class='fa-solid fa-microphone-lines-slash'></i>";
    
    
        }
        audio.muted=!audio.muted;
});


let playbutton=document.querySelectorAll(".playbutton");
let namee=document.querySelector(".name");
 playbutton.forEach((playy,idx)=>{
   
   playsurah(playy,idx);

 });
 let playing=true;

 
 play.addEventListener("click",()=>{
    if(playing)
    {
    play.innerHTML="<i class='fa-solid fa-play'></i>";
    audio.pause();
    
    }
    else
    {
        play.innerHTML="<i class='fa-solid fa-pause'></i>";
        audio.play();
    }
    playing=!playing;
 })

 
 
