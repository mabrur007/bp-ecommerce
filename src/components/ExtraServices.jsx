import { extraServices } from "../static/data"

const ExtraServices = () => {
  return (
    <section className="py-10 lg:px-2">
        <h4 className="text-2xl font-bold pb-5">Our Extra Services</h4>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {extraServices.map((service) => (
                <div key={service}>
                    <img src={service.imgURL} alt={service.name} className="rounded-t-lg"/>
                    <div className="bg-white h-36 pt-10 pl-6 rounded-b-lg relative">
                        <p className="text-xl">{service.title}</p>
                        <div className="w-16 h-16 bg-[#d1e7ff] absolute bottom-28 right-6 rounded-full border-4  border-white p-4">
                            <img src={service.icon}  />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ExtraServices
