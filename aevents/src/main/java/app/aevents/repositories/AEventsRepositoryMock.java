package app.aevents.repositories;

import app.aevents.models.AEvent;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class AEventsRepositoryMock implements AEventsRepository {
    private List<AEvent> AEvents;

    public AEventsRepositoryMock() {
        this.AEvents = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            this.AEvents.add(new AEvent(i, "Aevent " + i, "PUBLISHED", new Date(), new Date(),
                    AEvent.getRandomIsTicketed(), Math.random() * 100, "Best event",
                    (int) (Math.random() * 10)));
        }
    }

    @Override
    public List<AEvent> findAll() {
        return this.AEvents;
    }
}
