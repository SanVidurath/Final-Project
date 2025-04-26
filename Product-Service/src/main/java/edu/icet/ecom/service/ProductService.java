package edu.icet.ecom.service;

import edu.icet.ecom.dto.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final RestTemplate restTemplate;

    public List<Product> getProducts() {
        Product[] response = restTemplate.getForObject("https://fakestoreapi.com/products/", Product[].class);

        assert response != null;
        return Arrays.stream(response).toList();
    }
}
