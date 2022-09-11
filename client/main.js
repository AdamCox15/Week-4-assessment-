const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const randomTeamBtn = document.getElementById("yourHockeyTeam");
const hockeyForm = document.getElementsByClassName("hockey")


const baseURL = 'http://localhost:4000/api'

const getCompliment = () => {
    axios.get(baseURL + "/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get(baseURL + "/fortune")
        .then(res => {
        const fData = res.data;
        alert(fData);
    });
};
const showTeam = () => {
    axios.get(baseURL + "/randomTeam")
    .then(res => {
        const tData = res.data;
        alert(tData);
    })
};
const getDog = () => {
    axios.get(baseURL + "/dog")
    .then(res => {
        const dData = res.data;
        alert(dData);
        })
}
const getTeams = () => {
    axios.get(baseURL + "/teams")
    .then(res => {
        alert("Thats a good answer!")
    })
}





complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
randomTeamBtn.addEventListener('click', showTeam);
hockeyForm.addEventListener('click', getTeams);
