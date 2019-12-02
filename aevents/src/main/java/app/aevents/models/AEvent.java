package app.aevents.models;

import app.aevents.models.helper.AEventsStatus;
import app.aevents.views.AEventsView;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.Date;

@Entity
@NamedQuery(name = "find_all_aevents", query = "select ae from AEvent ae")
public class AEvent {
    @JsonView(AEventsView.AEventOnlyIdTitleStat.class)
    @Id
    @GeneratedValue
    private Long id;

    @JsonView(AEventsView.AEventOnlyIdTitleStat.class)
    private String title;

    @JsonView(AEventsView.AEventOnlyIdTitleStat.class)
    @Enumerated(EnumType.ORDINAL)
    private AEventsStatus status;

    private Date startDate;

    private Date endDate;
    private boolean isTicketed;
    private double participationFee;
    private String description;
    private int maxParticipants;

    // helper
    private static int userCount = 1;

    protected AEvent() {
    }

    public AEvent(long id, String title, AEventsStatus status, Date startDate, Date endDate, boolean isTicketed, double participationFee, String description, int maxParticipants) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isTicketed = isTicketed;
        this.participationFee = participationFee;
        this.description = description;
        this.maxParticipants = maxParticipants;
    }

    public AEvent(String title, AEventsStatus status, Date startDate, Date endDate, boolean isTicketed, double participationFee, String description, int maxParticipants) {
        this.title = title;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isTicketed = isTicketed;
        this.participationFee = participationFee;
        this.description = description;
        this.maxParticipants = maxParticipants;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public AEventsStatus getStatus() {
        return status;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public boolean isTicketed() {
        return isTicketed;
    }

    public double getParticipationFee() {
        return participationFee;
    }

    public String getDescription() {
        return description;
    }

    public int getMaxParticipants() {
        return maxParticipants;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setStatus(AEventsStatus status) {
        this.status = status;
    }

    public void setStartDate(Date start) {
        this.startDate = start;
    }

    public void setEndDate(Date end) {
        this.endDate = end;
    }

    public void setTicketed(boolean ticketed) {
        isTicketed = ticketed;
    }

    public void setParticipationFee(double participationFee) {
        this.participationFee = participationFee;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setMaxParticipants(int maxParticipants) {
        this.maxParticipants = maxParticipants;
    }

    public static boolean getRandomIsTicketed() {
        return Math.random() < 0.5;
    }

    public static AEventsStatus getRandomAEventsStatus() {
        double statusCode = 0;
        statusCode = Math.random();
        if (statusCode > 0.6) {
            return AEventsStatus.DRAFT;
        } else if (statusCode <= 0.6 && statusCode >= 0.2) {
            return AEventsStatus.PUBLISHED;
        }
        return AEventsStatus.CANCELED;
    }

    public static AEvent createRandomAEvent() {
        return new AEvent("Aevent " + userCount++, AEvent.getRandomAEventsStatus(), new Date(), new Date(),
                AEvent.getRandomIsTicketed(), Math.random() * 100, "Best event",
                (int) (Math.random() * 10) + 1); // do +1 because there can be minimal 1 participants
    }
}
