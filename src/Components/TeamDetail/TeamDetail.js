import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './TeamDetail.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
// import {
//   faAirFreshener,
//   faAnchor,
//   faAnkh,
//   faArrowsAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { faArtstation } from "@fortawesome/free-brands-svg-icons";

const TeamDetail = () => {
  const backgroundStyle = {
    backgroundImage: `url("data:image/jpeg;base64,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")`,
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };
  const logoStyle = {
    fontSize: "2rem",
    paddingRight: "5px",
  };
  const { teamId } = useParams();
  const [teams, setTeams] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams[0]));
  }, [teamId]);
  const {
    strAlternate,
    strFacebook,
    intFormedYear,
    strStadium,
    intStadiumCapacity,
    strGender,
    strYoutube,
    strTwitter,
    strTeamJersey,
    strDescriptionEN,
  } = teams;
  const maleTeamPic = "https://images.psg.media/media/185172/1268061171.jpg?anchor=center&mode=crop&width=1600&height=900&quality=80";
  const femaleTeamPic = "https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/big_2/public/news/images/bangladesh_girls_football_team.jpg?itok=_sowjNPi&c=dcec952e22dcaa1816e3f02582687679";
  let teamPic ="";
  if (strGender==="female") {
    teamPic =femaleTeamPic;
  }
  else{
    teamPic = maleTeamPic;
  }

  return (
    <div>
      <div>
        <div style={backgroundStyle}>
          <h1
            className="d-flex justify-content-center w-800 pt-5"
            style={{ color: "Black" }}
          >
            <img style={{ width: "8rem" }} src={teams.strTeamBadge} alt="" />
          </h1>
        </div>
      </div>

      <div className=" bg-dark">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 text-light">
            <h1> {teams.strTeam}</h1>
            <p>Full Name :  {strAlternate}</p>
            <p>Founded :  {intFormedYear}</p>
            <p>Stadium :  {strStadium}</p>
            <p>Capacity :  {intStadiumCapacity}</p>
            <p>Gender :  {strGender}</p>
          </div>
          <div className="col-md-6">
            {/* <img style={{ width: "15rem" }} src={strTeamJersey} alt="" /> */}
            <img style={{ width: "30rem" }} src={teamPic} alt="" />
          </div>
          <div>
            <p className="text-light p-4"> {strDescriptionEN} </p>
          </div>
          <footer style={logoStyle} className="mx-auto">
            <a href={strFacebook}><FontAwesomeIcon icon={faFacebook} /></a>

            <a href={strTwitter}><FontAwesomeIcon icon={faTwitter} /></a>

            <a href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
          </footer>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TeamDetail;
