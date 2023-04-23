package com.tobiaszoppi.metabolom.web.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Customer {

    private Long customerId;
    private String firstName;
    private String lastName;
    private String emailAdress;
    private String phoneNumber;
    private String adress;

}
