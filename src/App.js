import React from "react"
import "./style.css"
function Hello(){
  const iplTeams=[{
    teamName:"Royal Challengers Bengaluru",
    playersName:["ViratKohli", " FafduPlessis(c)", " WillJacks", " RajatPatidar", " CameronGreen", " DineshKarthik(wk)", " MahipalLomror", " KarnSharma", " LockieFerguson", " YashDayal", " MdSiraj"]
  },{
    teamName:"Chennai Super Kings",
    playersName:["RuturajGaikwad(c)", " RachinRavindra", " AjinkyaRahane"," DarylMitchell", " RavindraJadeja", " SameerRizvi", " MSDhoni(wk)", " DeepakChahar", " TusharDeshpande", " MaheeshaPathirana", " MustafizarRahman"]
  },{
    teamName:"Mumbai Indians",
    playersName:["RohitSharma", " IshanKishan(wk)", " SuryakumarYadav", " TilakVarma", " HardikPandya", " TimDavid", " MDNabi", " RomarioShepherd", " PiyushChawla", " GeraldCoetzee", " JaspritBumrah"]
  },{
    teamName:"Sunrisers Hyderabad",
    playersName:["TravisHead", " AbhishekSharma", " RahulTripathi", " AidenMarkram", " NitishReddy", " HeinrichKlaasen(wk)", " ShahbazAhmed", " PatCummins(c)", " BhuvneshwarKumar", " JaydevUnadkat", " TNatarajan"]
  },{
    teamName:"Kolkata Knight Riders",
    playersName:["PhilpSalt(wk)", " SunilNarine", " VenkateshIyer", " SheryasIyer", " RinkuSingh", " AndreRussell", " RamandeepSingh", " MitchellStarc", " VaibhavArora", " HarshitRana", " VarunChakaravarthy"]
  }]
  return(
    <>
     {
      iplTeams.map((eachiplTeams)=>{
        const {teamName, playersName}= eachiplTeams
        return(
              <React.Fragment>
                <center>
                  <table>
                    <tr>
                      <td>{teamName}</td>
                      <td>{playersName}</td>
                    </tr>
                  </table>
                </center>
              </React.Fragment>
            )
      })
    }
    </>
  )
}

export default Hello;