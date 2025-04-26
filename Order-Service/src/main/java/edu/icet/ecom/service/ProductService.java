package edu.icet.ecom.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ProductService {
    @Scheduled(cron = "*/10 * * * * *")
    public void sendGreetings() {
        log.info("Happy Seasonal Greetings");
    }
}
