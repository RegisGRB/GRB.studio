
import React from "react";
import {LangContext} from "../context";
import {ThemeContext} from "../context";
import StyledTheme from "../components/StyledComponents/Styled";
const Home = ({ children, ...props }) => {
const LangContextx = React.useContext(LangContext);
const ThemeContextx = React.useContext(ThemeContext);
React.useEffect(()=>{
  console.log(LangContextx);
})
  return (
    <>
    <div className="container testSelector">
       <StyledTheme Color className="BIG" onClick={()=>ThemeContextx.updateTheme("Black")} >{LangContextx.Black}</StyledTheme>
       <StyledTheme Color className="BIG" onClick={()=>ThemeContextx.updateTheme("White")} >{LangContextx.White}</StyledTheme>
       <StyledTheme Color className="BIG" onClick={()=>LangContextx.updateTranslation("en")} >EN</StyledTheme>
       <StyledTheme Color className="BIG" onClick={()=>LangContextx.updateTranslation("fr")} >FR</StyledTheme>
       </div>
    </>
  );
};

export default Home;
