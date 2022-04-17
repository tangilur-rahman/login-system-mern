/* eslint-disable jsx-a11y/anchor-is-valid */
import profilePic from "./../images/tangil.jpg";
import "./Profile.css";

const Profile = (props) => {

	const { _id, name, email, phone, profession } = props.user;
  
	return (
		<div className="container emp-profile shadow p-3 mb-5 bg-body rounded">
			<form method="post">
				<div className="row " id="profile-row-container">
					<div className="col-md-4">
						<div className="profile-img">
							<img src={profilePic} alt="profilePic" />
							<div className="file btn btn-lg btn-primary">
								Change Photo
								<input type="file" name="file" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="profile-head">
							<h5> {name} </h5>
							<h6>Web Developer and Designer</h6>
							<p className="profile-rating">
								RANKINGS : <span>8/10</span>
							</p>
							<ul className="nav nav-tabs" id="myTab" role="tablist">
								<li className="nav-item">
									<a
										className="nav-link active"
										id="home-tab"
										data-toggle="tab"
										href="#home"
										role="tab"
										aria-controls="home"
										aria-selected="true"
									>
										About Me
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-2">
						<input
							type="submit"
							className="profile-edit-btn"
							name="btnAddMore"
							value="Edit Profile"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="profile-work">
							<p>Contract LINK</p>
							<a href="https://www.facebook.com/tangilruna/">Facebook</a>
							<br />
							<a href="#">Linkedin</a>
							<br />
							<a href="#">Website</a>
							<p>SKILLS</p>
							<a href="#">{profession}</a>
							<br />
						</div>
					</div>
					<div className="col-md-8">
						<div className="tab-content profile-tab" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab"
							>
								<div className="row">
									<div className="col-md-6">
										<label>User Id</label>
									</div>
									<div className="col-md-6">
										<p>{_id}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Name</label>
									</div>
									<div className="col-md-6">
										<p>{name}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Email</label>
									</div>
									<div className="col-md-6">
										<p>{email}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Phone</label>
									</div>
									<div className="col-md-6">
										<p>{phone}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Profession</label>
									</div>
									<div className="col-md-6">
										<p>{profession}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Profile;
