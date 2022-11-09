import NewPrivateLayout from '../../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { client } from '../../../../../graphql-front/initClientSide'
import { servicioDetalle } from '../../../../../graphql-front/servicios/queries'
import Head from 'next/head'
import { Box, Container, Grid } from '@mui/material'
import { ServicioDetails } from '../../../../../components/servicios/ServiceDetails'

const DetalleServicio = ({ Servicio }) => {
  return (
    <NewPrivateLayout>
      <Head>
        <title>Servicio {Servicio.body.nombreCompleto}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item width={'100%'}>
              <ServicioDetails servicio={Servicio.body} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </NewPrivateLayout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { identificacion } = params
  const { data } = await client.query({
    query: servicioDetalle,
    variables: { _id: identificacion },
  })
  const { Representante } = data
  return {
    props: {
      Servicio : Representante,
    },
  }
}

export default DetalleServicio
