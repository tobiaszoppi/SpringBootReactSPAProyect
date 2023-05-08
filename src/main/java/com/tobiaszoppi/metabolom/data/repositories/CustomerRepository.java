package com.tobiaszoppi.metabolom.data.repositories;

import com.tobiaszoppi.metabolom.data.entities.CustomerEntity;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<CustomerEntity, Long> {

    CustomerEntity findByEmail(String email);
}
