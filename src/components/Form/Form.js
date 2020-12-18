import React from "react";
import StyledTheme from "../StyledComponents/Styled";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Form = ({ API,Url, Fields, Action, Redirect, className, props }) => {
  const history = useHistory();
  const [FormState, SetFormState] = React.useState(Fields);
  const submit = (e) => {
    e.preventDefault();
    if (API) {
      APICALL();
    } else {
      Action(FormState);
      history.push(Redirect);
    }
  };

  const APICALL = () => {
    axios({
      method: "Post",
      url: Url,
      data: JSON.stringify(FormState),
    })
      .then((res) => {
        Action(res);
        history.push(Redirect);
      })
      .catch((err) => {console.log(err)});
  };

  const FormGenerator = () => {
    const elements = [];
    for (let field in FormState) {
      elements.push(
        <>
          {FormState[field].label ? (
            <label for={FormState[field].name}>{FormState[field].label}</label>
          ) : (
            ""
          )}
          <StyledInput
            checked={FormState[field].checked}
            key={field}
            name={FormState[field].name}
            as={FormState[field].as ? FormState[field].as : "input"}
            type={FormState[field].type}
            placeholder={FormState[field].placeholder}
            ColorInvert
            Background
            required={FormState[field].required}
            value={FormState[field].value}
            onChange={(e) =>
              SetFormState({
                ...FormState,
                [field]: { ...FormState[field], value: e.target.value },
              })
            }
          ></StyledInput>
        </>
      );
    }
    return elements;
  };
  return (
    <div className={className}>
      <StyledForm onSubmit={submit}>
        {FormGenerator()}
        <StyledInput type="Submit"></StyledInput>
      </StyledForm>
    </div>
  );
};
const StyledForm = styled.form``;
const StyledInput = styled(StyledTheme)``;
// margin:30px;
// display:flex;
// align-items:center;
// justify-content:center;
// height:100vh;
// width:100vw;
// flex-wrap: wrap;
export default Form;
