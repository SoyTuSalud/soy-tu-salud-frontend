
import Head from 'next/head'
import Image from 'next/image'
import Promo1 from '../../assets/images/promo_5.jpg';
import FotoHistoria1 from '../../assets/images/historias/1.jpg';
import FotoHistoria2 from '../../assets/images/historias/2.jpg';


const Historia = () => {
  return (
    <>

<main className="main">

				<section className="promo-primary">
					<picture>
					<Image src={Promo1} alt="img" layout="fill" objectFit='cover' objectPosition="50% 40%"/>
					</picture>
					<div className="promo-primary__description"> <span>Te Escuchamos</span></div>
					<div className="container">
						<div className="row">
							<div className="col-auto">
								<div className="align-container">
									<div className="align-container__item"><span className="promo-primary__pre-title">Soy Tú</span>
										<h1 className="promo-primary__title"><span>Tu </span> <span>Historia</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section causes-inner">
					<div className="container">
						<div className="row offset-margin">
						    <div className='col-md-8 offset-md-2 col-lg-12 offset-lg-0'>
								<div className='causes-item causes-item--style-3'>
									<div className='causes-item__body'>
										<div className='row align-items-center'>
											<div className='col-lg-5 col-xl-4'>
												<div className='causes-item__img'>
													<div className='img--bg' >
														<Image src={FotoHistoria1} alt="img" layout="responsive"/>
													</div>
												</div>
											</div>
											<div className='col-lg-7 col-xl-8'>
												<div className='causes-item__action'>
													<div className='causes-item__badge' ></div><a className='causes-item__link' >Te Acompaño</a>
												</div>
												<div className='causes-item__top'>
													<h6 className='causes-item__title'> <a href='#'>Paciente de prueba numero 1</a></h6>
													<p>esta es una historia de prueba </p>
												</div>
												<div className='causes-item__lower'>
												 	
                                                     <div className='especialidad causes-item__badge'>Consulta Otorrinonaringologia</div>
													<div className='causes-item__details-holder'>
														<div className='causes-item__details-item'><span>Valor: </span><span>$200.000</span></div>
													
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


				<section className="section causes-inner">
					<div className="container">
						<div className="row offset-margin">
						    <div className='col-md-8 offset-md-2 col-lg-12 offset-lg-0'>
								<div className='causes-item causes-item--style-3'>
									<div className='causes-item__body'>
										<div className='row align-items-center'>
											<div className='col-lg-5 col-xl-4'>
												<div className='causes-item__img'>
													<div className='img--bg' >
														<Image src={FotoHistoria2} alt="img" layout="responsive"/>
													</div>
												</div>
											</div>
											<div className='col-lg-7 col-xl-8'>
												<div className='causes-item__action'>
													<div className='causes-item__badge' ></div><a className='causes-item__link' >Te Acompaño</a>
												</div>
												<div className='causes-item__top'>
													<h6 className='causes-item__title'> <a href='#'>Paciente de prueba numero 2</a></h6>
													<p>esta es una historia de prueba </p>
												</div>
												<div className='causes-item__lower'>
												 	
                                                     <div className='especialidad causes-item__badge'>Consulta Ginecologia</div>
													<div className='causes-item__details-holder'>
														<div className='causes-item__details-item'><span>Valor: </span><span>$160.000</span></div>
													
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
			</main>

    </>

  )
}

export default Historia