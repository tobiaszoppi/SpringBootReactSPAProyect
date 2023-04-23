package com.tobiaszoppi.metabolom.data.repositories;


import com.tobiaszoppi.metabolom.data.entities.ProductEntity;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<ProductEntity, Long> {

}
