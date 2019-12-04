package app.aevents;

import app.aevents.exceptions.StatusException;
import app.aevents.models.AEvent;
import app.aevents.models.Registration;
import app.aevents.models.helper.AEventsStatus;
import app.aevents.repositories.AEventsRepository;
import app.aevents.repositories.EntityRepository;
import app.aevents.repositories.RegistrationsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootApplication
public class AeventsApplication implements CommandLineRunner {

    @Autowired
    private EntityRepository<AEvent> aEventsRepository;

    @Autowired
    private EntityRepository<Registration> registrationsRepository;

    private static final Logger logger = LoggerFactory.getLogger(AeventsApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(AeventsApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        this.createInitialAEvents();
    }

    @Transactional
    protected void createInitialAEvents() {
        // check wether the repo is empty
        List<AEvent> aEventList = this.aEventsRepository.findAll();
        List<Registration> registrationList = this.registrationsRepository.findAll();
        if (aEventList.size() > 0 && registrationList.size() > 0) return;
        System.out.println("Configuring some initial aEvent data");

        for (int i = 0; i < 9; i++) {
            // create and add a new aEvent with random data
            AEvent aEvent = AEvent.createRandomAEvent();
            Registration registration = Registration.getRandomRegistration();
            if (aEvent.getStatus().equals(AEventsStatus.PUBLISHED)) {
                aEvent.addRegistration(registration);
            }
            aEvent = this.aEventsRepository.save(aEvent);
            registration = this.registrationsRepository.save(registration);
        }
    }
}
