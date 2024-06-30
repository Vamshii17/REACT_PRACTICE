import React from "react"
import UncontrolledForms from "./Components/Forms/uncontrolledForms";
import UncontrolledRegistrationForm from "./Components/Forms/uncontrolledRegistrationForm";
import UseRefCounter from "./Components/Hooks/useRef/useRef";

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
    <UseRefCounter />
    <UncontrolledForms />
    <UncontrolledRegistrationForm />
    </>
  )
}

export default Hello;