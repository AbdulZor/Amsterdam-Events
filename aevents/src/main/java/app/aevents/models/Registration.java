package app.aevents.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@NamedQueries(value = {
        @NamedQuery(name = "find_all_registrations", query = "select r from Registration r")
})
public class Registration {
    @Id
    @GeneratedValue
    private Long id;

    private String ticketCode;
    private boolean paid;

    private LocalDateTime submissionDate;

    @JsonIgnore
    @ManyToOne
    private AEvent aEvent;

    // helper
    private static int userCount = 100001;

    public Registration() {
    }

    public Registration(Long id, String ticketCode, boolean paid, LocalDateTime submissionDate) {
        this.id = id;
        this.ticketCode = ticketCode;
        this.paid = paid;
        this.submissionDate = submissionDate;
    }

    public Registration(String ticketCode, boolean paid, LocalDateTime submissionDate) {
        this.ticketCode = ticketCode;
        this.paid = paid;
        this.submissionDate = submissionDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTicketCode() {
        return ticketCode;
    }

    public void setTicketCode(String ticketCode) {
        this.ticketCode = ticketCode;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public LocalDateTime getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(LocalDateTime submissionDate) {
        this.submissionDate = submissionDate;
    }

    public AEvent getaEvent() {
        return aEvent;
    }

    public void setaEvent(AEvent aEvent) {
        this.aEvent = aEvent;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Registration that = (Registration) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Registration{" +
                "id=" + id +
                ", ticketCode='" + ticketCode + '\'' +
                ", paid=" + paid +
                ", submissionDate=" + submissionDate +
                ", aEvent=" + aEvent +
                '}';
    }

    public static Registration getRandomRegistration() {
        return new Registration(String.valueOf(userCount++), Registration.getRandomIsPaid(), LocalDateTime.now());
    }

    public static boolean getRandomIsPaid() {
        return Math.random() < 0.5;
    }
}
