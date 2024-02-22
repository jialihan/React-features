import * as React from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/AuthContext";

const SelectorWrapper = styled.div`
  padding: 8px;
`;

export default function BasicSelect() {
  const [currentRole, setCurrentRole] = React.useState("USER");
  const { setRole } = useAuthContext();

  const handleChange = (event) => {
    setRole(event.target.value);
    setCurrentRole(event.target.value);
  };

  return (
    <SelectorWrapper>
      <label for="demo-simple-select">switch roles:</label>
      <select
        id="demo-simple-select"
        value={currentRole}
        onChange={handleChange}
      >
        <option value={"USER"}>User</option>
        <option value={"Admin"}>Admin</option>
        <option value={"Manage"}>Manage</option>
      </select>
    </SelectorWrapper>
  );
}
