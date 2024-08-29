import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="md:mt-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
}

export default Services;
