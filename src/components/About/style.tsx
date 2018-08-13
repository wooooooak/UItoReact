import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @import url('https://fonts.googleapis.com/css?family=Sunflower:300');
  font-family: 'Sunflower', sans-serif;
  color: black;
  font-size: 2em;
`;

const Text = styled.text`margin: 0 15px;`;

export const TextBlue = Text.extend`color: #30a9de;`;
export const TextGreen = Text.extend`color: #519d9e;`;
export const TextPink = Text.extend`color: #f100e5;`;
