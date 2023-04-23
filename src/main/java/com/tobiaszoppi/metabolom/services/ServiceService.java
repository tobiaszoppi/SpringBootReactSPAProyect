package com.tobiaszoppi.metabolom.services;


import com.tobiaszoppi.metabolom.data.entities.ServiceEntity;
import com.tobiaszoppi.metabolom.data.repositories.ServiceRepository;
import com.tobiaszoppi.metabolom.web.errors.NotFoundException;
import com.tobiaszoppi.metabolom.web.models.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class ServiceService {

  private final ServiceRepository serviceRepository;

  public ServiceService(ServiceRepository serviceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public List<Service> getAllServices(){
    Iterable<ServiceEntity> entities = this.serviceRepository.findAll();
    List<Service> services = new ArrayList<>();
    entities.forEach(entity -> services.add(this.translateDbToWeb(entity)));
    return services;
  }

  public Service getService(long id){
    Optional<ServiceEntity> optional = this.serviceRepository.findById(id);
    if(optional.isEmpty()){
      throw new NotFoundException("service entity not found with id: " + id);
    }
    return this.translateDbToWeb(optional.get());
  }

  public Service createOrUpdateService(Service service){
    ServiceEntity entity = this.translateWebToDb(service);
    entity = this.serviceRepository.save(entity);
    return this.translateDbToWeb(entity);
  }

  public void deleteService(long id){
    this.serviceRepository.deleteById(id);
  }

  private Service translateDbToWeb(ServiceEntity entity) {
    return new Service(entity.getId(), entity.getPrice(), entity.getName());
  }

  private ServiceEntity translateWebToDb(Service model){
    ServiceEntity entity = new ServiceEntity();
    entity.setId(model.getServiceId()==null?0:model.getServiceId());
    entity.setPrice(model.getPrice());
    entity.setName(model.getName());
    return entity;
  }
}
