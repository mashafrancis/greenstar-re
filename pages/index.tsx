import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { JobListing } from '../src/views';

const IndexPage = (): JSX.Element => {
	return <WithLayout component={JobListing} layout={Main} />;
};

export default IndexPage;
