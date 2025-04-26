package edu.icet.ecom.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDateTime;

@Controller
@CrossOrigin
@RequiredArgsConstructor
public class GreetingController {

    private final SimpMessagingTemplate messagingTemplate;

    @Scheduled(fixedRate = 10000)
    public void sendGreeting() {
        messagingTemplate.convertAndSend("/topic/greetings", "Happy Seasonal Greetings");
    }

}
