package app.aevents.Exceptions;

public class AEventNotFoundException extends RuntimeException {
    public AEventNotFoundException(String message) {
        super(message);
    }
}
