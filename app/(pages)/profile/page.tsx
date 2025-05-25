import * as React from "react";

import Profile from "@/components/avatar/display";

export default async function ProfilePage() {
  return (
    <Profile
      skin={{ rootcolor: "#6f3f3c" }}
      body={{ id: "6", rootcolor: "#abcdef" }}
      affection={{ id: "56", rootcolor: "#123456" }}
      moustache={{ id: "6", rootcolor: "#3d3d3d" }}
      hair={{ id: "72", rootcolor: "#249472" }}
      nose={{ id: "1" }}
      adornment={{ id: "1", rootcolor: "#A48460" }}
      hat={{ id: "1", rootcolor: "#249472" }}
      showSkin={true}
      showBody={true}
      showAffection={true}
      showMoustache={false}
      showHair={true}
      showNose={true}
      showAdornment={false}
      showHat={true}
    />
  );
}
