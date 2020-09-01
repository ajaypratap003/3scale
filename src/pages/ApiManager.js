import React from "react";
import { Card, CardTitle, CardBody, CardFooter, Gallery, Title, TitleSizes, PageSection } from '@patternfly/react-core';


const ApiManagerPage = () => (
  <PageSection>
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
  </PageSection>
);

export default ApiManagerPage;
