package app.aevents.rest;

import app.aevents.Exceptions.AEventNotFoundException;
import app.aevents.models.AEvent;
import app.aevents.repositories.AEventsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping(value = "/aevents")
public class AEventsController {

    private AEventsRepository aEventsRepository;

    public AEventsController(AEventsRepository aEventsRepository) {
        this.aEventsRepository = aEventsRepository;
    }

    @GetMapping("")
    public List<AEvent> getAllAEvents() {
        return aEventsRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public AEvent getAEvent(@PathVariable("id") long id) {
        AEvent foundAEvent = aEventsRepository.findById(id);
        if (foundAEvent == null)
            throw new AEventNotFoundException("AEvent not found with id: " + id);
        return foundAEvent;
    }

    @PostMapping(path = "")
    public ResponseEntity saveAEvent(@RequestBody AEvent aEvent) {
        AEvent savedAEvent = aEventsRepository.save(aEvent);

        // Return a server response
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{userId}")
                .buildAndExpand(savedAEvent.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity updateAEvent(@RequestBody AEvent aEvent, @PathVariable("id") long id) {
        for (int i = 0; i < getAllAEvents().size(); i++) {
            if (getAllAEvents().get(i).getId() == id) {
                aEventsRepository.save(aEvent);
                return ResponseEntity.created(
                        ServletUriComponentsBuilder.fromCurrentRequest().path("").build().toUri()
                ).build();
            }
        }
        throw new AEventNotFoundException("AEvent not found with id: " + id);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity deleteAEvent(@PathVariable("id") long id) {
        for (int i = 0; i < getAllAEvents().size(); i++) {
            if (getAllAEvents().get(i).getId() == id) {
                aEventsRepository.deleteById(id);
                return ResponseEntity.ok(
                        ServletUriComponentsBuilder.fromCurrentRequest().path("").build().toUri()
                );
            }
        }
        throw new AEventNotFoundException("AEvent not found with id: " + id);
    }

}

