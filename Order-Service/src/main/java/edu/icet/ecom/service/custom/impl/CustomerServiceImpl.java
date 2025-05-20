package edu.icet.ecom.service.custom.impl;

import edu.icet.ecom.dtos.Customer;
import edu.icet.ecom.entities.CustomerEntity;
import edu.icet.ecom.repository.custom.CustomerRepository;
import edu.icet.ecom.service.custom.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final ModelMapper modelMapper;

    @Override
    public void add(Customer customer) {
        CustomerEntity customerEntity = modelMapper.map(customer, CustomerEntity.class);
        customerRepository.save(customerEntity);
    }

    @Override
    public List<Customer> getAll() {
        return List.of();
    }
}
