import services from '../../public/services.js';
const Services = () => {
    return (
        <div className="md:px-10 px-7 md:mt-4" id="services">
              <h1 className="text-headline font-semibold text-3xl mt-14">The services I offer:</h1>
              <div className='grid md:grid-cols-3 my-8 gap-5'>
              {
                services.map(service => <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center bg-white'>
                    <img src={service.image} alt="" className='mb-3 bg-gray-900 rounded-lg' />
                    <h6 className='text-2xl text-gray-900 mb-4'>{service.name}</h6>
                    <p className='text-base text-gray-700'>{service.description}</p>
                </div>)
              }
              </div>
        </div>
    );
};

export default Services;