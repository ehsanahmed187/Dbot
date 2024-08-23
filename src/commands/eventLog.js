const {ApplicationCommandType} = require("discord.js");
const fs = require("fs");
module.exports = {
    data: {
        name: 'eventLog',
        type: ApplicationCommandType.Message,
    },
    run: ({ interaction, client, handler }) => {
        fs.readFile("../Discord Bot/src/data/factionTable.json", (error, data) => {

            if (error) {
              console.error(error);
              throw err;
            }
            const factionTable = JSON.parse(data);
            
            //console.log(factionTable.Factions[1].factionName);
            var eventDataArray = interaction.targetMessage.content.split('\n');
            //console.log(eventDataArray);
            
            for (let i = 0; i < eventDataArray.length; i++) {
                if (eventDataArray[i].includes("combatants")){
                    var combatantsChange = parseInt(eventDataArray[i].replace(/[^\d.-]/g, '' ));
                    //console.log(change);

                }
            }
            for (let i = 0; i < factionTable.Factions.length; i++){
                if(factionTable.Factions[i].factionName === "Innkeepers"){
                    factionTable.Factions[i].combatants = factionTable.Factions[i].combatants + combatantsChange;
                    console.log(factionTable.Factions[i].combatants);
                }
        }
        const updatedData = JSON.stringify(factionTable);
        fs.writeFile("../Discord Bot/src/data/factionTable.json", updatedData, (error)=> {
            if (error) {
              console.error(error);
              throw error;
            }});     
    });
        
    
        interaction.reply('event logged');
    },
    
 
    options: {
        devOnly: true,
        userPermissions: ['Administrator', 'AddReactions'],
        botPermissions: ['Administrator', 'AddReactions'],
        deleted: false,
    },
}