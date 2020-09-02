import React from "react";
import { Card, CardTitle, CardBody, CardFooter, Gallery, Title, TitleSizes } from '@patternfly/react-core';
import { Page, PageSection } from '@patternfly/react-core';
import TopNav from "sso/TopNav";
import { Sidebar } from '../components/Sidebar';

export const AboutPage = () => (
  <Page header={<TopNav />} sidebar={<Sidebar />} isManagedSidebar>
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
  </Page>
);
