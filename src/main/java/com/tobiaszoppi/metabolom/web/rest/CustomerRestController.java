package com.tobiaszoppi.metabolom.web.rest;

import com.tobiaszoppi.metabolom.services.CustomerService;
import com.tobiaszoppi.metabolom.web.errors.BadRequestException;
import com.tobiaszoppi.metabolom.web.models.Customer;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerRestController {

    private final CustomerService customerService;

    public CustomerRestController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> getAll(@RequestParam(name = "EMAIL", required = false) String email) {
        return customerService.getAllCustomer(email);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createOrUpdate(customer);
    }

    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable("id") Long id) {
        return this.customerService.getCustomer(id);
    }

    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable("id") Long id, @RequestBody Customer customer) {
        if (id != null && id.equals(customer.getCustomerId())){
            throw new BadRequestException("Customer id does not match");
        }
        return this.customerService.createOrUpdate(customer);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.RESET_CONTENT)
    public void deleteCustomer(@PathVariable("id") Long id) {
        this.customerService.deleteCustomer(id);
    }
}
