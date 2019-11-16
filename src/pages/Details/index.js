import React, { Component } from 'react';
import { connect } from "react-redux";

import moment from "moment";
import DataTable from 'react-data-table-component';
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  getUserDetail,
  getUserRepo
} from "../../redux/actions";

const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    width: "20%",
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    width: "30%",
  },
  {
    name: 'URL',
    width: "50%",
    cell: row => {
       return (
          <a target="_blank" rel="noopener noreferrer" href={row.html_url}> {row.html_url} </a>
       )
    },
  }
];

class Details extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    if (this.props.location && this.props.location.state){
      this.props.getUserDetail(this.props.location.state);
      this.props.getUserRepo(this.props.location.state);
    }
  }

  render() {
    const { repo, loading, userSelected } = this.props.githubUsers;

    window.scrollTo(0, 0);

    return (
      <>
        <form>

          {loading && (
              <div className="d-flex justify-content-center loader-overlay">
                  <CircularProgress />
              </div>
          )}

          <div className="form-group div-header">
            <h5>Details</h5>
          </div>

          <div className="form-group div-details">
            <div className="col-12">
              <span className="col-1" />
              <label htmlFor="input-id" className="col-sm-2 col-form-label font-weight-bold">ID</label>
              <input type="text" id="input-id" className="col-sm-2" value={userSelected ? userSelected.data.id : ""} disabled/>
              <label htmlFor="input-login" className="col-sm-2 col-form-label font-weight-bold">Login</label>
              <input type="text" id="input-login" className="col-sm-5" value={userSelected ? userSelected.data.login: ""} disabled/>
            </div>
            <div className="col-12">
              <span className="col-1" />
              <label htmlFor="input-login-create" className="col-sm-2 col-form-label font-weight-bold">Created At</label>
              <input type="text" id="input-login-create" className="col-sm-2" value={userSelected ? moment(userSelected.data.created_at).format("DD/MM/YYYY") : ""} disabled/>
              <label htmlFor="input-login-url" className="col-sm-2 col-form-label font-weight-bold">URL</label>
              <a href={userSelected ? userSelected.data.html_url: "#"} rel="noopener noreferrer" target="_blank">{userSelected ? userSelected.data.html_url: ""}</a>
            </div>
          </div>

          <DataTable
            title="Repositories"
            data={repo ? repo.data : []}
            columns={columns}
            responsive={true}
          />
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
    getUserDetail,
    getUserRepo
  }
)(Details);
