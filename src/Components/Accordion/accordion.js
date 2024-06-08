import Accordion from 'react-bootstrap/Accordion';
import ListComponent from '../List/List';
import HeadingComponent from '../Heading/Heading';

const AccordionComponent=()=>{
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
  return (
    <Accordion defaultActiveKey="0">
      {
        iplTeams.map((eachiplTeams, index)=>{
            const {teamName, playersName}= eachiplTeams
            return(
                <>
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>
                      <HeadingComponent title={teamName}></HeadingComponent>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListComponent list={playersName}></ListComponent>
                    </Accordion.Body>
                </Accordion.Item>
                </>
            )
        }
        )
      }
    </Accordion>
  );
}

export default AccordionComponent;