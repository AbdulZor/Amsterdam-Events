package app.aevents.repositories;

import app.aevents.models.AEvent;
import app.aevents.models.helper.AEventsStatus;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class AEventsRepositoryMock implements AEventsRepository {
    private List<AEvent> AEvents;

//    private static int usersCount = 8;

    public AEventsRepositoryMock() {
        this.AEvents = new ArrayList<>();
        for (int i = 1; i < 8; i++) {
            this.AEvents.add(new AEvent(i, "Aevent " + i, AEvent.getRandomAEventsStatus(), new Date(), new Date(),
                    AEvent.getRandomIsTicketed(), Math.random() * 100, "Best event",
                    (int) (Math.random() * 10)));
        }
    }

    @Override
    public List<AEvent> findAll() {
        return this.AEvents;
    }

    @Override
    public AEvent findById(Long id) {
        return AEvents.stream()
                .filter(user -> user.getId() == id)
                .findFirst().orElse(null);
    }

    @Override
    public AEvent save(AEvent aEvent) {
        for (int i = 0; i < AEvents.size(); i++) {
            if (AEvents.get(i).getId() == aEvent.getId()) {
                AEvents.set(i, aEvent);
                return aEvent;
            }
        }
        AEvents.add(aEvent);
        return aEvent;
    }

    @Override
    public void deleteById(Long id) {
        boolean isValidId = AEvents.stream().anyMatch(aEvent -> aEvent.getId() == id);
        if (isValidId) {
            for (int i = 0; i < AEvents.size(); i++) {
                if (AEvents.get(i).getId().equals(id)) {
                    AEvents.remove(i);
                }
            }
        }
    }


}
