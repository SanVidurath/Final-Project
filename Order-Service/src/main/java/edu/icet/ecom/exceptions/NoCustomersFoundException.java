package edu.icet.ecom.exceptions;

public class NoCustomersFoundException extends RuntimeException{
    public NoCustomersFoundException(String message){
        super(message);
    }
}
