package app.aevents.repositories;

import app.aevents.models.AEvent;
import app.aevents.models.Registration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Primary
@Transactional
public class RegistrationsRepositoryJpa implements RegistrationsRepository {

    @Autowired
    EntityManager em;

    @Override
    public List<Registration> findAll() {
        TypedQuery<Registration> registrationNamedQuery = em.createNamedQuery("find_all_registrations", Registration.class);
        return registrationNamedQuery.getResultList();
    }

    @Override
    public Registration findById(Long id) {
        return em.find(Registration.class, id);
    }

    @Override
    public Registration save(Registration registration) {
        if (registration.getId() == null) {
            em.persist(registration);
        } else {
            em.merge(registration);
        }
        return registration;
    }

    @Override
    public void deleteById(Long id) {
        Registration registration = findById(id);
        em.remove(registration);
    }
}
