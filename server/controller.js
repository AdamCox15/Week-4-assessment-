let weapons = ["Lightsaber", "The One Ring", "The elder Wand"];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Put your mind into planning today. Look into the future!", "Financial success is inevitable in your future!", "Savor your freedom - it's precious!", "Self-knowledge is a life long process!", "Well done is better than well said!", "With age comes wisdom"];
     
        let randomInd = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomInd];
      
        res.status(200).send(randomFortune);
    
    }, 
    showTeam: (req, res) => {
        const teams = ["Edmonton Oilers", "Washington Capitals", "Minnesota Wild", "Colorado Avalanche", "Detroit Redwings", "Boston Bruins", "Calgary Flames", "Dallas Stars"];
        let teamInd = Math.floor(Math.random() * teams.length);
        let randTeam = teams[teamInd];
        res.status(200).send(randTeam);
    },
    getDog: (req, res) => {
        const dogs = ["Doberman", "Rottweiler", "Belgian Malinois", "Golden Retriever", "Poodle", "Lab", "Great Dane", "Cocker Spaniel", "Weiner Dog", "Boarder Collie", "German Shepard", "Pitbull"];
        let dogInd = Math.floor(Math.random() * dogs.length);
        let randDog = dogs[dogInd];
        res.status(200).send(randDog);
    },
    getTeams: (req, res) => {
        const team = option.value;
        res.status(200).send(team);
    },
    getWeapons: (req, res) => {
        res.status(200).send(weapons);
    },
    addWeapon: (req, res) => {
        let {item} = req.body;
        weapons.push(item);

        res.status(200).send(weapons);
    }

}