package edu.icet.ecom.service.custom;

import edu.icet.ecom.dtos.Customer;

import java.util.List;

public interface CustomerService {
    void add(Customer customer);
    List<Customer> getAll();
}
