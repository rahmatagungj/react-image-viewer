import React from "react";
import styled from "styled-components";

const Author = () => {
  return (
    <P class="author__meta">
      Made with &nbsp;
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="#fd4d4d"
      >
        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
      </svg>
      &nbsp;Rahmat Agung Julians
    </P>
  );
};

const P = styled.p`
  color: white;
  font-weight: 600;
  text-align: center;
  margin-top: -40px;
`;

export default Author;
