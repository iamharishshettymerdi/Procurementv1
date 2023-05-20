import '../styles/globals.css'
import Container from '@mui/material/Container';
function MyApp({ Component, pageProps }) {
  return (
    // <Container maxWidth="xl">
    <Component {...pageProps} />
    // </Container>
  )
  
}

export default MyApp
