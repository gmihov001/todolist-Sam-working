import React from "react";
import { Link } from "react-router-dom";
import "../../styles/testview.scss";
import Navbar from "../component/navbar";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class MoreCard extends React.Component {
	render() {
		return (
			<>
				<Navbar />
				<div className="card">
					<div className="card-body">
						<h1 className="card-title text-center">(D/W/M/Y) (index+1)</h1>
						<p className="card-text">
							this text will say whatever the value of the specified todo that was clicked on is
						</p>
						<div className="d-flex justify-content-around">
							<a href="#" className="card-link" onClick={() => this.props.history.goBack()}>
								<i className="fas fa-chevron-left" />
							</a>
							<a href="#" className="card-link">
								<i className="fab fa-xing" />
							</a>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(MoreCard);

MoreCard.propTypes = {
	history: PropTypes.func
};
