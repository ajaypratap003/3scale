import React from "react";
import { Card, CardTitle, CardBody, Gallery, Title, TitleSizes, PageSection } from '@patternfly/react-core';

export const ApiManagerPage = ({ setApiName }) => (
  <PageSection>
    <button onClick={() => setApiName('PetStore API')}>set to petstore api</button>
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