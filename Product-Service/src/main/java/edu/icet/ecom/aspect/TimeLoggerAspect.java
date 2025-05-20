package edu.icet.ecom.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class TimeLoggerAspect {

    @Around("@annotation(edu.icet.ecom.annotation.LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();

        Object proceed = joinPoint.proceed();
        String name = joinPoint.getSignature().getName();

        long endTime = System.currentTimeMillis();
        log.info("Execution time of the {} method is {} ms",name, endTime-startTime);

        return proceed;
    }
}
