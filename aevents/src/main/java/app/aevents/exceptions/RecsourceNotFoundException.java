package app.aevents.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RecsourceNotFoundException extends RuntimeException {
    public RecsourceNotFoundException(String message) {
        super(message);
    }
}
