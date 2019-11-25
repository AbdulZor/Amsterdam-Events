package app.aevents.rest;

import app.aevents.exceptions.ForregistrationdenException;
import app.aevents.exceptions.RecsourceNotFoundException;
import app.aevents.models.AEvent;
import app.aevents.repositories.AEventsRepository;
import app.aevents.views.AEventsView;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/aevents")
public class AEventsController {

    private AEventsRepository aEventsRepository;

    public AEventsController(AEventsRepository aEventsRepository) {
        this.aEventsRepository = aEventsRepository;
    }

    @GetMapping("")
    public MappingJacksonValue getAllAEvents() {
        List<AEvent> aEvents = aEventsRepository.findAll();

        MappingJacksonValue mappingJacksonValue = new MappingJacksonValue(aEvents);
        mappingJacksonValue.setSerializationView(AEventsView.AEventOnlyIdTitleStat.class);
        return mappingJacksonValue;
    }

    @GetMapping(path = "/{id}")
    public AEvent getAEvent(@PathVariable("id") long id) {
        AEvent foundAEvent = aEventsRepository.findById(id);
        if (foundAEvent == null)
            throw new RecsourceNotFoundException("AEvent not found with id: " + id);
        return foundAEvent;
    }

    @PostMapping(path = "")
    public ResponseEntity saveAEvent(@RequestBody AEvent aEvent) {
        AEvent savedAEvent = aEventsRepository.save(aEvent);

        // Return a server response
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{userId}")
                .buildAndExpand(savedAEvent.getId()).toUri();
        return ResponseEntity.created(location).body(aEvent);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity updateAEvent(@RequestBody AEvent aEvent, @PathVariable("id") long id) {

        AEvent aEvent1 = aEventsRepository.save(aEvent);
        if (aEvent == null){
            throw new ForregistrationdenException("AEvent not found with id: " + id);
        }
        return ResponseEntity.created(
                ServletUriComponentsBuilder.fromCurrentRequest().path("").build().toUri()
        ).body(aEvent);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity deleteAEvent(@PathVariable("id") long id) {

        AEvent aEvent = aEventsRepository.deleteById(id);
        if (aEvent == null) {
            throw new RecsourceNotFoundException("AEvent not found with id: " + id);
        }
        return ResponseEntity.ok(
                ServletUriComponentsBuilder.fromCurrentRequest().path("").build().toUri()
        );
    }

}

