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
  render() {
    return (
      <>
        <Navbar bg='light' expand='lg'>
          <Container>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto' activeKey={this.props.location.pathname}>
                <Nav.Link href={ROUTES.LANDING_PAGE}> Add Items</Nav.Link>
                <Nav.Link href={ROUTES.REMOVE_ITEM}>Delete Items</Nav.Link>
                <Nav.Link href={ROUTES.LIST_ITEMS}>List Items</Nav.Link>
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
