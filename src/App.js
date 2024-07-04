import React from "react"
import ProductListingUsingUseEffect from "./Components/Hooks/useEffect/productListingUsingUseEffect";
import UseEffectUsingVariables from "./Components/Hooks/useEffect/useEffectUsingVariables";
import ProductListingUsingButtons from "./Components/Hooks/useEffect/ProductListingUsingButtons";
import ProductListingUsingCategories from "./Components/Hooks/useEffect/productListingUsingCategories";

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
    <ProductListingUsingUseEffect />
    <br></br>
    <UseEffectUsingVariables />
    <br></br>
    <br></br>
    <ProductListingUsingButtons />
    <br></br>
    <ProductListingUsingCategories />
    </>
  )
}

export default Hello;