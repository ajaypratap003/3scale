import React, {useState} from "react";
import {
  Button,
  ClipboardCopy,
  Divider,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  Label,
  Level,
  LevelItem,
  Title,
  TextContent,
  TextList,
  TextListItem,
  TextListVariants,
  TextListItemVariants,
  TitleSizes,
  PageSection,
  PageSectionVariants 
} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import LockIcon from '@patternfly/react-icons/dist/js/icons/lock-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-square-alt-icon';
import { Link } from 'react-router-dom';

export const ApiManagerPage = ({ location }) => {

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const { data } = location;
  const isAuthenticated = data ? data.isAuthenticated : false;
  console.log('isAuthenticated', isAuthenticated, location);

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
    <PageSection variant={PageSectionVariants.light} className="pf-m-no-padding">
    <div className="pf-c-toolbar" id="toolbar-attribute-value-search-filter-desktop-example">
  <div className="pf-c-toolbar__content">
    <div className="pf-c-toolbar__content-section">
      <div className="pf-c-toolbar__group pf-m-toggle-group pf-m-show">
        <div className="pf-c-toolbar__toggle">
          <button className="pf-c-button pf-m-plain" type="button" aria-label="Show filters" aria-expanded="false" aria-controls="toolbar-attribute-value-search-filter-desktop-example-expandable-content">
            <i className="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div className="pf-c-toolbar__group pf-m-filter-group">
          <div className="pf-c-toolbar__item pf-m-search-filter">
            <div className="pf-c-input-group">
              <div className="pf-c-select" style={{ width: "150px" }}>
                <span id="toolbar-attribute-value-search-filter-desktop-example-select-name-label" hidden>Choose one</span>
                <button className="pf-c-select__toggle" type="button" id="toolbar-attribute-value-search-filter-desktop-example-select-name-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-attribute-value-search-filter-desktop-example-select-name-label toolbar-attribute-value-search-filter-desktop-example-select-name-toggle">
                  <div className="pf-c-select__toggle-wrapper">
                    <span className="pf-c-select__toggle-icon">
                      <i className="fas fa-filter" aria-hidden="true"></i>
                    </span>
                    <span className="pf-c-select__toggle-text">Name</span>
                  </div>
                  <span className="pf-c-select__toggle-arrow">
                    <i className="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <ul className="pf-c-select__menu" aria-labelledby="toolbar-attribute-value-search-filter-desktop-example-select-name-label" hidden style={{ width: "150px"}}>
                  <li>
                    <button type="button" className="pf-c-select__menu-item" aria-selected="false">Running</button>
                  </li>
                  <li>
                    <button type="button" className="pf-c-select__menu-item" aria-selected="false">Stopped</button>
                  </li>
                  <li>
                    <button type="button" className="pf-c-select__menu-item" aria-selected="false">Down</button>
                  </li>
                  <li>
                    <button type="button" className="pf-c-select__menu-item" aria-selected="false">Degraded</button>
                  </li>
                  <li>
                    <button type="button" className="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
                  </li>
                </ul>
              </div>
              <input className="pf-c-form-control" id="toolbar-attribute-value-search-filter-desktop-example-textInput11" name="textInput11" type="search" placeholder="Filter by name..." aria-label="Search input example" />
              <button className="pf-c-button pf-m-control" type="button" aria-label="Search button for search input">
                <i className="fas fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pf-c-toolbar__item pf-m-overflow-menu ">
        <div className="pf-c-overflow-menu" id="toolbar-attribute-value-search-filter-desktop-example-overflow-menu">
          <div className="pf-c-overflow-menu__content">
            <div className="pf-c-overflow-menu__group pf-m-button-group">
              <div className="pf-c-overflow-menu__item">
                <button className="pf-c-button pf-m-primary" type="button">Primary</button>
              </div>
              <div className="pf-c-overflow-menu__item">
                <button className="pf-c-button pf-m-secondary" type="button">Secondary</button>
              </div>
            </div>
          </div>
          <div className="pf-c-overflow-menu__control">
            <div className="pf-c-dropdown">
              <button className="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="toolbar-attribute-value-search-filter-desktop-example-overflow-menu-dropdown-toggle" aria-label="Overflow menu">
                <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul className="pf-c-dropdown__menu" aria-labelledby="toolbar-attribute-value-search-filter-desktop-example-overflow-menu-dropdown-toggle" hidden>
                <li>
                  <button className="pf-c-dropdown__menu-item">Tertiary</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pf-c-toolbar__item pf-m-pagination ">
        <div className="pf-c-pagination pf-m-compact pf-m-hidden pf-m-visible-on-md">
          <div className="pf-c-pagination pf-m-compact pf-m-compact pf-m-hidden pf-m-visible-on-md">
            <div className="pf-c-options-menu">
              <div className="pf-c-options-menu__toggle pf-m-text pf-m-plain">
                <span className="pf-c-options-menu__toggle-text">
                  <b>1 - 10</b>&nbsp;of&nbsp;
                  <b>37</b>
                </span>
                <button className="pf-c-options-menu__toggle-button" id="pagination-options-menu-bottom-example-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Items per page">
                  <span className="pf-c-options-menu__toggle-button-icon">
                    <i className="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <ul className="pf-c-options-menu__menu" aria-labelledby="pagination-options-menu-bottom-example-toggle" hidden>
                <li>
                  <button className="pf-c-options-menu__menu-item" type="button">5 per page</button>
                </li>
                <li>
                  <button className="pf-c-options-menu__menu-item" type="button">10 per page
                    <div className="pf-c-options-menu__menu-item-icon">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="pf-c-options-menu__menu-item" type="button">20 per page</button>
                </li>
              </ul>
            </div>
            <nav className="pf-c-pagination__nav" aria-label="Pagination">
              <div className="pf-c-pagination__nav-control pf-m-prev">
                <button className="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to previous page">
                  <i className="fas fa-angle-left" aria-hidden="true"></i>
                </button>
              </div>
              <div className="pf-c-pagination__nav-control pf-m-next">
                <button className="pf-c-button pf-m-plain" type="button" aria-label="Go to next page">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="pf-c-toolbar__expandable-content pf-m-hidden" id="toolbar-attribute-value-search-filter-desktop-example-expandable-content" hidden></div>
  </div>
</div>
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
                  {isAuthenticated
                    ? (
                      <Label variant="outline" color="orange" icon={<LockIcon />}>
                        Authenticated
                      </Label>
                    )
                    : (
                      <Link to={{ pathname: "/produce/secure", data: { apiName: "PetStore API" } }}>
                        <Button isInline variant="link" icon={<ArrowRightIcon />} iconPosition="right">
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
                { isAuthenticated &&
                  <React.Fragment>
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
                  </React.Fragment>
                }
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
