package app.aevents.models;

import app.aevents.views.AEventsView;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.Date;

public class AEvent {
    @JsonView(AEventsView.AEventOnlyIdTitleStat.class)
    private long id;

    @JsonView(AEventsView.AEventOnlyIdTitleStat.class)
    private String title;

    @JsonView(AEventsView.AEventOnlyIdTitleStat.class)
    private String status;

    private Date startDate;

    private Date endDate;
    private boolean isTicketed;
    private double participationFee;
    private String description;
    private int maxParticipants;

    protected AEvent(){}

    public AEvent(long id, String title, String status, Date startDate, Date endDate, boolean isTicketed, double participationFee, String description, int maxParticipants) {
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

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getStatus() {
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

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setStatus(String status) {
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
}
