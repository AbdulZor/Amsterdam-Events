package app.aevents.repositories;

import app.aevents.models.AEvent;

import java.util.List;

public interface AEventsRepository {
    List<AEvent> findAll();
    AEvent findById(Long id);
    AEvent save(AEvent aEvent);
    boolean deleteById(Long id);
}
