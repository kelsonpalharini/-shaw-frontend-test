import React, { Component } from 'react';
import { connect } from "react-redux";

import Button from 'react-bootstrap/Button';
import DataTable from 'react-data-table-component';
import CircularProgress from "@material-ui/core/CircularProgress";

import history from '../../services/history';

import {
  getUsers,
} from "../../redux/actions";

class Main extends Component {
  state = {
    users: []
  };

  columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
      width: "20%",
    },
    {
      name: 'Login',
      selector: 'login',
      sortable: true,
      width: "40%",
    },
    {
      name: 'Details',
      width: "40%",
      cell: row => {
         return (
            <Button variant="link" size="sm" onClick={() =>  history.push('/detail', row.login)}>Click here for details</Button>
         )
      },
    }
  ];

  nextPage = () => {
    const { users } = this.props.githubUsers;
    if(users && users.data.length > 1) {
      this.props.getUsers(users.data[users.data.length-1].id);
    }
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users, loading } = this.props.githubUsers;

    window.scrollTo(0, 0);

    return (
      <>
        <form>

          {loading && (
              <div className="d-flex justify-content-center loader-overlay">
                  <CircularProgress />
              </div>
          )}

          <DataTable
            title="Github Users"
            data={users ? users.data : []}
            columns={this.columns}
            responsive={true}
            striped={true}
          />

          <div>
            <Button
              variant="success"
              className="button-next"
              onClick={this.nextPage}
            >
              Next
            </Button>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ githubUsers }) => {
  return { githubUsers };
};

export default connect(
  mapStateToProps,
  {
    getUsers,
  }
)(Main);
