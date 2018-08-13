import * as React from 'react';

import { Page, TextBlue, TextGreen, TextPink } from './style';

class About extends React.Component<{}, {}> {
  render () {
    return (
      <Page>
        <TextBlue> react </TextBlue> + <TextGreen> typescript </TextGreen>+{' '}
        <TextPink> styled-componet </TextPink> 로 이쁜 UI를 만들어 보자!
      </Page>
    );
  }
}

export default About;
