document.querySelector('.hamburger').addEventListener('click', ()=>{
    document.querySelector('nav').classList.toggle('responsive')
})


function welcomeNoteAppear(){
    var welcomeNote = document.querySelector('.welcomeNote');
    var welcomeNotePos = welcomeNote.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (welcomeNotePos < winHeight){
        welcomeNote.classList.add('welcomeNoteAppear')
    }

    else{
        welcomeNote.classList.remove('welcomeNoteAppear')
    }
}

window.addEventListener('scroll', welcomeNoteAppear)


function missionAppear(){
    var mission = document.querySelector('.mission');
    var missionPos = mission.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (missionPos < winHeight){
        mission.classList.add('missionAppear')
    }

    else{
        mission.classList.remove('missionAppear')
    }
}

window.addEventListener('scroll', missionAppear)

function missionImgAppear(){
    var missionImg = document.querySelector('.missionImg');
    var missionImgPos = missionImg.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (missionImgPos < winHeight){
        missionImg.classList.add('missionImgAppear')
    }

    else{
        missionImg.classList.remove('missionImgAppear')
    }
}

window.addEventListener('scroll', missionImgAppear)


function visionAppear(){
    var vision = document.querySelector('.vision');
    var visionPos = vision.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (visionPos < winHeight){
        vision.classList.add('visionAppear')
    }

    else{
        vision.classList.remove('visionAppear')
    }
}

window.addEventListener('scroll', visionAppear)



function visionImgAppear(){
    var visionImg = document.querySelector('.visionImg');
    var visionImgPos = visionImg.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (visionImgPos < winHeight){
        visionImg.classList.add('visionImgAppear')
    }

    else{
        visionImg.classList.remove('visionImgAppear')
    }
}

window.addEventListener('scroll', visionImgAppear)
