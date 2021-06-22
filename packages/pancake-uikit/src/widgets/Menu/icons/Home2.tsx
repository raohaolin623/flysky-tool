import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path
        d="M14.362.562a2.1,2.1,0,0,0-2.815,0L.158,11.373a1.05,1.05,0,1,0,1.407,1.56l.181-.172V24.045a2.1,2.1,0,0,0,2.1,2.1H9.961V19.824a1.479,1.479,0,0,1,1.48-1.481h2.877a1.48,1.48,0,0,1,1.48,1.481v6.324h6.259a2.1,2.1,0,0,0,2.1-2.1V12.9A1.05,1.05,0,1,0,25.6,11.373Z"
        transform="translate(0.189 -0.019)"
      />
    </Svg>
  );
};

export default Icon;
