import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default () => (
  <Container maxWidth="md">
    <Box my={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        Next.js template
      </Typography>
    </Box>
  </Container>
);
