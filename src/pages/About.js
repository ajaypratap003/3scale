import React from "react";
import { Card, CardTitle, CardBody, CardFooter, Gallery, Title, TitleSizes } from '@patternfly/react-core';

const style = {
  height: 400,
  padding: 12,
};

const AboutPage = () => (
  <div style={style}>
    <Title headingLevel="h3" size={TitleSizes['2xl']}>
      Your APIs
    </Title>
    <Gallery hasGutter>
      <Card>
        <CardTitle>
          API Product name
        </CardTitle>
        <CardBody>
          API product system name
          Configure
        </CardBody>
      </Card>
      <Card>
        <CardTitle>
          API
        </CardTitle>
        <CardBody>
          API Endpoint
          Access Token
        </CardBody>
      </Card>
    </Gallery>

  </div>
);

export default AboutPage;
