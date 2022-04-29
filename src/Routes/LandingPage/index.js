import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../Routes.constants';
import AddItem from '../AddItem';
import ListItems from '../ListItems';
import RemoveItem from '../RemoveItem';
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  preventDefaultBehaviour = (e, url) => {
    e.preventDefault();
    this.props.history.push(url);
  };

  render() {
    return (
      <>
        <Navbar bg='light' expand='lg'>
          <Container>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav fill variant='tabs' activeKey={this.props.location.pathname}>
                <Nav.Link
                  eventKey={ROUTES.LANDING_PAGE}
                  onClick={(e) => {
                    this.preventDefaultBehaviour(e, ROUTES.LANDING_PAGE);
                  }}
                >
                  Add Items
                </Nav.Link>
                <Nav.Link
                  eventKey={ROUTES.REMOVE_ITEM}
                  onClick={(e) => {
                    this.preventDefaultBehaviour(e, ROUTES.REMOVE_ITEM);
                  }}
                >
                  Delete Items
                </Nav.Link>
                <Nav.Link
                  eventKey={ROUTES.LIST_ITEMS}
                  onClick={(e) => {
                    this.preventDefaultBehaviour(e, ROUTES.LIST_ITEMS);
                  }}
                >
                  List Items
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path={ROUTES.LIST_ITEMS} component={ListItems} />
          <Route path={ROUTES.REMOVE_ITEM} component={RemoveItem} />
          <Route path={ROUTES.LANDING_PAGE} component={AddItem} />
        </Switch>
      </>
    );
  }
}

export default withRouter(LandingPage);
