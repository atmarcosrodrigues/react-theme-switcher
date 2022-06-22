import React from "react";

import { ContentTitle, Description } from "./styles";

const Content: React.FC = () => {
    return (
      <div>
        <ContentTitle> Siwtcher Theme </ContentTitle>
        <Description> Description to switcher theme page. Clique <a href="#"> here </a> to more.
        </Description>
      </div>
    );    
};

export default Content;