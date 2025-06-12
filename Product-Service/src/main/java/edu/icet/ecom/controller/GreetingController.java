package edu.icet.ecom.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class GreetingController {

    private final SimpMessagingTemplate messagingTemplate;

    @Scheduled(fixedRate = 20000)
    public void sendGreeting() {
        messagingTemplate.convertAndSend("/topic/greetings", "Happy Seasonal Greetings");
    }
}
