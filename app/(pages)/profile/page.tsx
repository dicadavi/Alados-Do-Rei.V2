import * as React from "react";

import Profile from "@/components/avatar/display";

export default async function ProfilePage() {
  return (
    <Profile
      width={300}
      height={300}
      skin={{ rootcolor: "#6f3f3c" }}
      body={{ id: "6", rootcolor: "#abcdef" }}
      affection={{ id: "23", rootcolor: "#123456" }}
      moustache={{ id: "6", rootcolor: "#3d3d3d" }}
      hair={{ id: "72", rootcolor: "#249472" }}
      nose={{ id: "1" }}
      adornment={{ id: "1", rootcolor: "#A48460" }}
      hat={{ id: "3", rootcolor: "#249472" }}
      showSkin={true}
      showBody={true}
      showAffection={true}
      showMoustache={false}
      showHair={true}
      showNose={true}
      showAdornment={true}
      showHat={true}
    />
  );
}
