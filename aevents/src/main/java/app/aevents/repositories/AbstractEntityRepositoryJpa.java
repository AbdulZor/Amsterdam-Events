package app.aevents.repositories;

import app.aevents.models.Identifiable;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
public abstract class AbstractEntityRepositoryJpa<E extends Identifiable> implements EntityRepository<E> {

    @PersistenceContext
    protected EntityManager em;

    private Class<E> entityClass;

    public AbstractEntityRepositoryJpa(Class<E> entityClass) {
        this.entityClass = entityClass;
        System.out.println("Created " + this.getClass().getName() +
                "<" + this.entityClass.getSimpleName() + ">");
    }
}
