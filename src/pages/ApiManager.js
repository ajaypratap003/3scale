import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownSeparator,
  DropdownPosition,
  DropdownToggle,
  Gallery,
  Level,
  LevelItem,
  SelectOption,
  SelectVariant,
  Title,
  TitleSizes,
  ToolbarItem,
  ToolbarFilter,
  KebabToggle,
  OverflowMenu,
  OverflowMenuDropdownItem,
  OverflowMenuControl,
  PageSection,
  PageSectionVariants 
} from '@patternfly/react-core';


const ApiManagerPage = () => {


  return (
  <React.Fragment>
    <PageSection variant={PageSectionVariants.light}>
      <Level>
        <LevelItem>
          <Title headingLevel="h1" size={TitleSizes['2xl']}>
            API explorer
          </Title>
          <div>
            Find or create API products in this page.
          </div>
        </LevelItem>
        <LevelItem>
          <Button variant="primary">
            Create API
          </Button>
        </LevelItem>
      </Level>
    </PageSection>
    <PageSection>
      Toolbar goes here
    </PageSection>
    <PageSection>
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
  </React.Fragment>
  );
};

export default ApiManagerPage;
