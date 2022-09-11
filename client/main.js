const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const randomTeamBtn = document.getElementById("yourHockeyTeam");
const randomDogBtn = document.getElementById("yourDog");
const hockeyForm = document.getElementsByClassName("hockey");
const getWeaponsBtn = document.getElementById('getWeapons');

const weaponRack = document.getElementById("displayWeapons");


const baseURL = 'http://localhost:4000/api'

const getCompliment = (e) => {
    e.preventDefault();
    axios.get(baseURL + "/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = (e) => {
    e.preventDefault();
    axios.get(baseURL + "/fortune")
        .then(res => {
        const fData = res.data;
        alert(fData);
    });
};
const showTeam = (e) => {
    e.preventDefault();
    axios.get(baseURL + "/randomTeam")
    .then(res => {
        const tData = res.data;
        alert(tData);
    })
};
const getDog = (e) => {
    e.preventDefault();
    axios.get(baseURL + "/dog")
    .then(res => {
        const dData = res.data;
        alert(dData);
        })
}
const getTeams = (e) => {
    e.preventDefault();
    axios.get(baseURL + "/teams")
    .then(res => {
        alert("Thats a good answer!")
    })
};
const getWeapons = (e) => {
    e.preventDefault();
    axios.get(baseURL + '/getWeapons')
        .then((res) => {
            console.log(res.data)
            const weapons = res.data;
            weaponRack.innerHTML = '';
            for(let i = 0; i < weapons.length; i++){
                let newWeapon = document.createElement('li')
                newWeapon.textContent = weapons[i];
                weaponRack.appendChild(newWeapon);
            }
        })
        .catch((err) => {
            console.log(err)
        })
}





complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
randomTeamBtn.addEventListener('click', showTeam);
randomDogBtn.addEventListener('click', getDog);
//hockeyForm.addEventListener('click', getTeams);
getWeaponsBtn.addEventListener('click', getWeapons);