import React from "react"
import "./style.css"
import HeadingComponent from "./Components/Heading/Heading"
import ListComponent from "./Components/List/List"
import AccordionComponent from "./Components/Accordion/accordion"

function Hello(){
  const iplTeams=[{
    teamName:"Royal Challengers Bengaluru",
    playersName:["ViratKohli", " FafduPlessis(c)", " WillJacks", " RajatPatidar", " CameronGreen", " DineshKarthik(wk)", " MahipalLomror", " KarnSharma", " LockieFerguson", " YashDayal", " MdSiraj"]
  },{
    teamName:"Chennai Super Kings",
    playersName:["RuturajGaikwad(c)", " RachinRavindra", " AjinkyaRahane"," DarylMitchell", " RavindraJadeja", " SameerRizvi", " MSDhoni(wk)", " DeepakChahar", " TusharDeshpande", " MaheeshaPathirana", " MustafizarRahman"]
  },{
    teamName:"Mumbai Indians",
    playersName:["RohitSharma", " IshanKishan(wk)", " SuryakumarYadav", " TilakVarma", " HardikPandya(c)", " TimDavid", " MDNabi", " RomarioShepherd", " PiyushChawla", " GeraldCoetzee", " JaspritBumrah"]
  },{
    teamName:"Sunrisers Hyderabad",
    playersName:["TravisHead", " AbhishekSharma", " RahulTripathi", " AidenMarkram", " NitishReddy", " HeinrichKlaasen(wk)", " ShahbazAhmed", " PatCummins(c)", " BhuvneshwarKumar", " JaydevUnadkat", " TNatarajan"]
  },{
    teamName:"Kolkata Knight Riders",
    playersName:["PhilpSalt(wk)", " SunilNarine", " VenkateshIyer", " SheryasIyer(c)", " RinkuSingh", " AndreRussell", " RamandeepSingh", " MitchellStarc", " VaibhavArora", " HarshitRana", " VarunChakaravarthy"]
  }]
  return(
    <>
      {
        iplTeams.map((eachTeam)=>{
          return(
            <>
              <AccordionComponent eachTeam={eachTeam}></AccordionComponent>
              <br></br>
              <br></br>
              <br></br>
              <EachTeam eachTeam={eachTeam}></EachTeam>
            </>
          )
        })
      }
    </>
  )
}

export default Hello;


const EachTeam=(prop)=>{
  const {eachTeam}=prop
  return <>
    <HeadingComponent title={eachTeam.teamName}></HeadingComponent>
    <ListComponent list={eachTeam.playersName}></ListComponent>
  </>
}

