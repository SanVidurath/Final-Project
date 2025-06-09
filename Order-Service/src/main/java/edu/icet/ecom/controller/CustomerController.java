package edu.icet.ecom.controller;

import edu.icet.ecom.dtos.Customer;
import edu.icet.ecom.service.custom.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/cart")
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping(value = "/customer", produces = "application/json")
    public ResponseEntity<Map<String, String>> addCustomer(@Valid @RequestBody Customer customer){
        customerService.add(customer);
        Map<String, String> response = new HashMap<>();
        response.put("message", "customer registered successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers(){
        return ResponseEntity.ok(customerService.getAll());
    }

}
