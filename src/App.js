import React from "react"
import "./style.css"
import ArrayMethod from "./Components/ArrayMethods/ArrayMap"
import FilterMethod from "./Components/ArrayMethods/ArrayFilter";
import FilterMethodinTable from "./Components/ArrayMethods/ArrayFilterinTable";




function Hello(){
  // const iplTeams=[{
  //   teamName:"Royal Challengers Bengaluru",
  //   playersName:["ViratKohli", " FafduPlessis(c)", " WillJacks", " RajatPatidar", " CameronGreen", " DineshKarthik(wk)", " MahipalLomror", " KarnSharma", " LockieFerguson", " YashDayal", " MdSiraj"]
  // },{
  //   teamName:"Chennai Super Kings",
  //   playersName:["RuturajGaikwad(c)", " RachinRavindra", " AjinkyaRahane"," DarylMitchell", " RavindraJadeja", " SameerRizvi", " MSDhoni(wk)", " DeepakChahar", " TusharDeshpande", " MaheeshaPathirana", " MustafizarRahman"]
  // },{
  //   teamName:"Mumbai Indians",
  //   playersName:["RohitSharma", " IshanKishan(wk)", " SuryakumarYadav", " TilakVarma", " HardikPandya(c)", " TimDavid", " MDNabi", " RomarioShepherd", " PiyushChawla", " GeraldCoetzee", " JaspritBumrah"]
  // },{
  //   teamName:"Sunrisers Hyderabad",
  //   playersName:["TravisHead", " AbhishekSharma", " RahulTripathi", " AidenMarkram", " NitishReddy", " HeinrichKlaasen(wk)", " ShahbazAhmed", " PatCummins(c)", " BhuvneshwarKumar", " JaydevUnadkat", " TNatarajan"]
  // },{
  //   teamName:"Kolkata Knight Riders",
  //   playersName:["PhilpSalt(wk)", " SunilNarine", " VenkateshIyer", " SheryasIyer(c)", " RinkuSingh", " AndreRussell", " RamandeepSingh", " MitchellStarc", " VaibhavArora", " HarshitRana", " VarunChakaravarthy"]
  // }]
  return(
    <>
    <ArrayMethod></ArrayMethod>
    <FilterMethod></FilterMethod>
    <FilterMethodinTable></FilterMethodinTable>
    </>
  )
}

export default Hello;