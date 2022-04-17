import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContractComponent = (props) => {

	return (
		<div className="col-md-3 shadow p-1 mb-5 rounded con-col-container">
			<div className="con-icon">
				<FontAwesomeIcon icon={props.icon} />
			</div>
			<div className="con-details">
				<h5>{props.item}</h5>
				<>{props.element}</>
			</div>
		</div>
	);
};

export default ContractComponent;
