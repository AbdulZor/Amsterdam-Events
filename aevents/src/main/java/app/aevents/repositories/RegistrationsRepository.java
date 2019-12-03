package app.aevents.repositories;

import app.aevents.models.AEvent;
import app.aevents.models.Registration;

import java.util.List;

public interface RegistrationsRepository {
    List<Registration> findAll();

    Registration findById(Long id);

    Registration save(Registration aEvent);

    void deleteById(Long id);
}
