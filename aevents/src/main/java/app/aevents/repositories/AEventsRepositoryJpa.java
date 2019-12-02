package app.aevents.repositories;

import app.aevents.models.AEvent;
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
public class AEventsRepositoryJpa implements AEventsRepository {

    @Autowired
    EntityManager em;

    @Override
    public List<AEvent> findAll() {
        TypedQuery<AEvent> aEventNamedQuery = em.createNamedQuery("find_all_aevents", AEvent.class);
        return aEventNamedQuery.getResultList();
    }

    @Override
    public AEvent findById(Long id) {
        return em.find(AEvent.class, id);
    }

    @Override
    public AEvent save(AEvent aEvent) {
        if (aEvent.getId() == null) {
            em.persist(aEvent);
        } else {
            em.merge(aEvent);
        }
        return aEvent;
    }

    @Override
    public void deleteById(Long id) {
        AEvent aEvent = findById(id);
        em.remove(aEvent);
    }
}
