

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
    getTeams: (req, res) => {
        const team = option.value;
        res.status(200).send(team);
    }

}