import React, { useState } from "react";
import {
  Alert,
  AlertActionLink,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Grid,
  GridItem,
  Select,
  SelectOption,
  SelectVariant,
  Divider,
  PageSection,
  PageSectionVariants,
  Radio,
  TextInput,
  Text,
  TextContent,
  TextVariants,
  Title,
  TitleSizes
} from '@patternfly/react-core';
import './../Integration.css';
import { Link } from 'react-router-dom';
const ClientSelect = React.lazy(() => import('sso/ClientSelect'));

export const SecurePage = () => {
  const [authMethod, setAuthMethod] = useState('openid');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [issuerType, setIssuerType] = useState(null);
  const [valueOpenIDConnectIssuer, setValueOpenIDConnectIssuer] = useState('');


  const options1 = [
    { value: 'Choose...', disabled: false, isPlaceholder: true },
    { value: 'REST API', disabled: false },
    { value: 'Red Hat Single Sign-On', disabled: false }
  ];

  const onToggle1 = isOpen1 => {
    setIsSelectOpen(isOpen1);
  };

  const onSelect1 = (event, selection, isPlaceholder) => {
    if (!isPlaceholder) {
      setIsSelectOpen(!isSelectOpen);
      setIssuerType(selection);
    }
  };

  return (
    <div>
      <PageSection variant={PageSectionVariants.light}>
        <Breadcrumb className="breadcrumb">
          <BreadcrumbItem to="/">
            Dashboard
          </BreadcrumbItem>
          <BreadcrumbItem isActive>
            PetStore API
          </BreadcrumbItem>
        </Breadcrumb>
        <Title headingLevel="h1" size={TitleSizes['2xl']}>
          PetStore API: Authentication
        </Title>
        <div>
          Restrict access to your API by defining an authentication method.
        </div>
      </PageSection>
      <Divider />
      <PageSection variant={PageSectionVariants.light}>
        <Title headingLevel="h2" size={TitleSizes['md']} className="subtitle-1">
          Select an authentication method.
        </Title>
        <Radio
          isChecked={authMethod === 'openid'}
          onChange={() => setAuthMethod('openid')}
          label="OpenID Connect"
          id="radio-uncontrolled-3"
          name="radio-3"
          description="Use OpenID Connect for any OAuth 2.0 flow."
        />
        <Radio
          isChecked={authMethod === 'apikey'}
          onChange={() => setAuthMethod('apikey')}
          label="API Key (user_key)"
          id="radio-uncontrolled-1"
          name="radio-1"
          description="The application is identified & authenticated via a single string."
        />
        <Radio
          isChecked={authMethod === 'appidkey'}
          onChange={() => setAuthMethod('appidkey')}
          label="App_ID and App_Key Pair"
          id="radio-uncontrolled-2"
          name="radio-2"
          description="The application is identified via the App_ID and authenticated via the App_Key."
        />
        <Grid>
          <GridItem span={8}>
            <Title headingLevel="h2" size={TitleSizes['md']} className="subtitle">
              Authentication settings
            </Title>
            <p className="form-title">OpenID Connect Issuer Type</p>
            <Select
              variant={SelectVariant.single}
              onSelect={onSelect1}
              selections={issuerType}
              onToggle={onToggle1}
              isOpen={isSelectOpen}
              className="select-width"
            >
              {options1.map((option, index) => (
                <SelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                  isPlaceholder={option.isPlaceholder}
                />
              ))}
            </Select>
          </GridItem>
        </Grid>
        {issuerType === 'Red Hat Single Sign-On' &&
          <ClientSelect />
        }
        {issuerType === 'Red Hat Single Sign-On' &&
          <Alert
            variant="info"
            isInline
            title="Click to fill the endpoint with your OpenID credentials."
            className="alert"
            actionLinks={
              <AlertActionLink
                onClick={() => setValueOpenIDConnectIssuer('https://3scale-admin:6ab18253-be8b-42f8-a12a-d4a5758be11a@localhost:8080/auth/realms/singlespa')}
              >Generate endpoint</AlertActionLink>}
          />
        }
        <p className="form-title">OpenID Connect Issuer</p>
        <Grid hasGutter>
          <GridItem span={10}>
            <TextInput
              id="text-3"
              type="text"
              value={valueOpenIDConnectIssuer}
              placeholder="https://<CLIENT_ID>:<CLIENT_SECRET>@<HOST>:<PORT>/auth/realms/<REALM_NAME>"
            />
          </GridItem>
        </Grid>
        <TextContent>
          <Text component={TextVariants.small}>
            Location of your OpenID Provider. The format of this endpoint is determined on your OpenID Provider setup.
          </Text>
        </TextContent>
        <div className="button-group">
          <Link to={{ pathname: "/", data: { isAuthenticated: true } }}>
            <Button variant="primary">
              Save
            </Button>
          </Link>
          <Button variant="link">
            Cancel
          </Button>
        </div>
      </PageSection>
    </div>
  )
};
