import * as React from "react";

import Profile from "@/components/avatar/display";

export default async function ProfilePage() {
  return (
    <Profile
      skin={{ rootColor: "#6f3f3c" }}
      body={{ id: "6", rootColor: "#abcdef" }}
      affection={{ id: "1", rootColor: "#123456" }}
      moustache={{ id: "6", rootColor: "#3d3d3d" }}
      hair={{ id: "72", rootColor: "#249472" }}
      nose={{ id: "1" }}
      adornment={{ id: "1", rootColor: "#A48460" }}
      hat={{ id: "8", rootColor: "#abcdef" }}
      showSkin={true}
      showBody={true}
      showAffection={true}
      showMoustache={true}
      showHair={true}
      showNose={true}
      showAdornment={true}
      showHat={false}
    />
  );
}
