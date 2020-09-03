import React, {useState} from "react";
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  ClipboardCopy,
  ClipboardCopyVariant,
  Divider,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListCheck,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  Dropdown,
  DropdownSeparator,
  DropdownPosition,
  DropdownToggle,
  Gallery,
  Label,
  Level,
  LevelItem,
  SelectOption,
  SelectVariant,
  Title,
  Text,
  TextContent,
  TextList,
  TextListItem,
  TextListVariants,
  TextListItemVariants,
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
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import LockIcon from '@patternfly/react-icons/dist/js/icons/lock-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-square-alt-icon';
import { Link } from 'react-router-dom';

export const ApiManagerPage = ({ setApiName, authenticated }) => {

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

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
    <Divider/>
    <PageSection variant={PageSectionVariants.light}>
      Toolbar goes here
    </PageSection>
    <Divider/>
    <PageSection className="pf-m-no-padding">
      <DataList>
        <DataListItem aria-labelledby="ex-item1" isExpanded={isExpanded1}>
          <DataListItemRow>
            <DataListToggle
              onClick={() => setIsExpanded1(!isExpanded1)}
              isExpanded={isExpanded1}
              id="ex-toggle1"
              aria-controls="ex-expand1"
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <div id="ex-item1"><b>Pet Store API</b></div>
                  <div>This is the API for an e-commerce pet store solution.</div>
                  
                  { authenticated  ? (
                    <Label variant="outline" color="orange" icon={<LockIcon />}>
                      Authenticated
                    </Label>
                  ) : (
                  <Link to="/produce/secure">
                    <Button isInline variant="link" icon={<ArrowRightIcon />} iconPosition="right" onClick={() => setApiName('PetStore API')}>
                      Authenticate API
                    </Button>
                  </Link>
                  )}
                </DataListCell>
              ]}
            />
            <DataListAction aria-labelledby="ex-item1 ex-action1" id="ex-action1" aria-label="Actions" isPlainButtonAction>
              <Button variant="secondary">
                Explore API
              </Button>
            </DataListAction>
          </DataListItemRow>
          <DataListContent
            aria-label="Primary Content Details"
            id="ex-expand1"
            isHidden={!isExpanded1}
          >
            <TextContent>
              <TextList component={TextListVariants.dl}>
                <TextListItem component={TextListItemVariants.dt}>
                  System name
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd}>
                  secured-api
                </TextListItem>
                <TextListItem component={TextListItemVariants.dt}>
                  URL Endpoint
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd}>
                  https://api-2445583285442.production.gw.apicast.io:443
                </TextListItem>
                <TextListItem component={TextListItemVariants.dt}>
                  Access Code
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd}>
                  <ClipboardCopy isReadOnly>
                    No access code available. Authenticate this API first.  
                  </ClipboardCopy>
                </TextListItem>
                <TextListItem component={TextListItemVariants.dt}>
                  Example curl for testing
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd}>
                  <ClipboardCopy isReadOnly>
                    curl "https://api-2445583285442.staging.gw.apicast.io:443"
                  </ClipboardCopy>
                  <Button variant="link" icon={<ExternalLinkSquareAltIcon />} iconPosition="right" isInline>
                    Test example curl
                  </Button>
                </TextListItem>
              </TextList>
            </TextContent>
          </DataListContent>
        </DataListItem>
        <DataListItem aria-labelledby="ex-item1" isExpanded={isExpanded2}>
          <DataListItemRow>
            <DataListToggle
              onClick={() => setIsExpanded2(!isExpanded2)}
              isExpanded={isExpanded2}
              id="ex-toggle1"
              aria-controls="ex-expand1"
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <div id="ex-item1"><b>Weather API</b></div>
                  <div>This is the API for an e-commerce pet store solution.</div>
                  <Label variant="outline" color="orange" icon={<LockIcon />}>
                    Authenticated
                  </Label>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
          <DataListContent
            aria-label="Primary Content Details"
            id="ex-expand1"
            isHidden={!isExpanded2}
          >
            <TextContent>
              <TextList component={TextListVariants.dl}>
                <TextListItem component={TextListItemVariants.dt}>
                  System name
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd}>
                  secured-api
                </TextListItem>
                <TextListItem component={TextListItemVariants.dt}>
                  URL Endpoint
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd}>
                  https://api-2445583285442.production.gw.apicast.io:443
                </TextListItem>
                <TextListItem component={TextListItemVariants.dt}>
                  Access Code
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd}>
                  <ClipboardCopy isReadOnly>
                    djfno3i2438vbdhj387fdb
                  </ClipboardCopy>
                </TextListItem>
                <TextListItem component={TextListItemVariants.dt}>
                  Example curl for testing
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd}>
                  <ClipboardCopy isReadOnly>
                    curl "https://api-2445583285442.staging.gw.apicast.io:443"
                  </ClipboardCopy>
                  <Button variant="link" icon={<ExternalLinkSquareAltIcon />} iconPosition="right" isInline>
                    Test example curl
                  </Button>
                </TextListItem>
              </TextList>
            </TextContent>
          </DataListContent>
        </DataListItem>
      </DataList>
    </PageSection>
  </React.Fragment>
  );
};
