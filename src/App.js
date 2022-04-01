import { Col, Row, Container } from "react-grid-system";
import CommandEditor from "./components/CommandEditor";

function App() {
	return (
		<div className="App">
			<Container>
				<Row>
					<Col sm={0} md={2} />
					<Col sm={12} md={8}>
						<h1>Discord Command Editor</h1>
						<div className="error-line">
							<b>This tool is not working yet, but we are working on it.</b>
						</div>
						<CommandEditor />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
