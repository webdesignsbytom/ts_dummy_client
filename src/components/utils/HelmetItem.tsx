import { Helmet } from 'react-helmet';
// Constants
import { CompanyName } from '../../utils/Constants';

// Define the types for the component props
interface HelmetItemProps {
  PageName: string;
  desc: string;
}

export const HelmetItem: React.FC<HelmetItemProps> = ({ PageName, desc }) => {
  return (
    <Helmet>
      <title>
        {PageName} - {CompanyName}
      </title>
      <meta name='description' content={desc} />
    </Helmet>
  );
};
