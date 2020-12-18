import styled from "styled-components";

const Styled = styled.div`
color: ${(props) => (props.Color ? props.theme.colors.text : "")};
color: ${(props) => (props.ColorInvert ? props.theme.colors.background : "")};
background-color: ${(props) => props.BackgroundColor ? props.theme.colors.background : ""};
border-color:${(props) => (props.BorderColor ? props.theme.colors.text : "")};

margin: ${(props) => (props.Margin ? props.Margin : "")};
margin-right: ${(props) => (props.MarginRight ? props.Margin : "")};
margin-left: ${(props) => (props.MarginLeft ? props.Margin : "")};
margin-top: ${(props) => (props.MarginTop ? props.Margin : "")};
margin-bottom: ${(props) => (props.MarginBottom ? props.Margin : "")};

padding: ${(props) => (props.Padding ? props.Padding : "")};
padding-right: ${(props) => (props.PaddingRight ? props.PaddingRight : "")};
padding-left: ${(props) => (props.PaddingLeft ? props.PaddingLeft : "")};
padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
padding-bottom: ${(props) => (props.PaddingBottom ? props.PaddingBottom : "")};

display:${(props) => (props.Flex ? "flex" : "")};
display:${(props) => (props.Absolute ? "absolute" : "")};
display:${(props) => (props.Relative ? "relative" : "")};

font-size: ${(props) => (props.FontSize ? props.FontSize : "")};
font-weight: ${(props) => (props.FontWeight ? props.FontWeight : "")};
letter-spacing: ${(props) => (props.LetterSpacing ? props.LetterSpacing : "")};

&:hover {
  color:  ${(props) => (props.HoverColor ? props.theme.colors.background : "")};
  color: ${(props) => (props.ColorInvert ? props.theme.colors.text : "")};
  background-color:  ${(props) =>props.HoverBackgroundColor ? props.theme.colors.text : ""};
  border-color:${(props) => props.HoverBorderColor ? props.theme.colors.background : ""};

  margin: ${(props) => (props.HoverMargin ? props.HoverMargin : "")};
  margin-right: ${(props) => (props.HoverMarginRight ? props.HoverMarginRight : "")};
  margin-left: ${(props) => (props.HoverMarginLeft ? props.HoverMarginLeft : "")};
  margin-top: ${(props) => (props.HoverMarginTop ? props.HoverMarginTop : "")};
  margin-bottom: ${(props) => (props.HoverMarginBottom ? props.HoverMarginBottom : "")};

  padding: ${(props) => (props.HoverPadding ? props.HoverPadding : "")};
  padding-right: ${(props) => (props.HoverPaddingRight ? props.HoverPaddingRight : "")};
  padding-left: ${(props) => (props.HoverPaddingLeft ? props.HoverPaddingLeft : "")};
  padding-top: ${(props) => (props.HoverPaddingTop ? props.HoverPaddingTop : "")};
  padding-bottom: ${(props) => (props.HoverPaddingBottom ? props.HoverPaddingBottom : "")};

  display:${(props) => (props.HoverFlex ? "flex" : "")};
  display:${(props) => (props.HoverAbsolute ? "absolute" : "")};
  display:${(props) => (props.HoverRelative ? "relative" : "")};

  font-size: ${(props) => (props.HoverFontSize ? props.HoverFontSize : "")};
  font-weight: ${(props) => (props.HoverFontWeight ? props.HoverFontWeight : "")};
  letter-spacing: ${(props) => (props.HoverLetterSpacing ? props.HoverLetterSpacing : "")};
}
transition:color 1s,background-color 1s,border-color 1s;
`;

export default Styled;







