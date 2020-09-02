import React from 'react';
import { PageHeader, Title } from '@patternfly/react-core';


const APIPageHeader = () => {
  const Logo = <Title headingLevel="h1" size="xl" style={{ color: 'white' }}>API Lifecycle Manager</Title>;

  return <PageHeader logo={Logo} showNavToggle />
}

export default APIPageHeader;