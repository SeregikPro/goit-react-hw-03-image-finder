import { Box } from 'components/Box';
import { Grid } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" mt="100px">
      <Grid color="#3f51b5" height={80} width={80} />
    </Box>
  );
};

export default Loader;
