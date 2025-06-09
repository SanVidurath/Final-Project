package edu.icet.ecom.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@ControllerAdvice
public class GlobalExceptionHandler {

    private static final String ERROR = "error";

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationException(MethodArgumentNotValidException ex){

        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach(error->{
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .header("Content-Type", "application/json")
                .body(errors);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Map<String, String>> handleDataIntegrityViolationException(DataIntegrityViolationException ex){
        Map<String, String> errors = new HashMap<>();
        Throwable rootCause = ex.getRootCause();
        String message = Objects.requireNonNullElse(rootCause, ex).getMessage();


        if(message.contains("Duplicate entry")){
            if(message.contains("email")){
                errors.put(ERROR, "email already exists");
            }else if(message.contains("password")){
                errors.put(ERROR, "password already exists");
            }else{
                errors.put(ERROR, "duplicate entry detected");
            }
        }else{
            errors.put(ERROR, "Data integrity violation");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .header("Content-Type", "application/json")
                .body(errors);
    }

    @ExceptionHandler(NoCustomersFoundException.class)
    public ResponseEntity<Map<String, String>> handleNoCustomersFound(NoCustomersFoundException ex){
        HashMap<String, String> response = new HashMap<>();
        response.put(ERROR, ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }
}
