package edu.icet.ecom.service;

import edu.icet.ecom.annotation.LogExecutionTime;
import edu.icet.ecom.dto.Product;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {

    private final RestTemplate restTemplate;

    @LogExecutionTime
    public List<Product> getProducts() {
        Product[] response = restTemplate.getForObject("https://fakestoreapi.com/products/", Product[].class);

        assert response != null;
        return Arrays.stream(response).toList();
    }

    @Scheduled(cron = "*/10 * * * * *")
    @LogExecutionTime
    public void sendGreetings(){
        log.info("Happy Seasonal Greetings");
    }
}
