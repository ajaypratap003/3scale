import React from "react";
import { Page, PageSection } from '@patternfly/react-core';
import TopNav from "sso/TopNav";
import { Sidebar } from '../components/Sidebar';

const style = {
  height: 400,
  backgroundColor: "#3f51b5",
  color: "white",
  padding: 12,
};

const AboutPage = () => (
  <Page header={<TopNav />} sidebar={<Sidebar />} isManagedSidebar>
    <PageSection>
      <h1>About Page</h1>
      <h2>Welcome to the future!</h2>
      <p>
        <em>a page being provided by 3scale</em>
      </p>
    </PageSection>
  </Page>
);

export default AboutPage;
